----- Query to Find Doctors with No Appointments on a Given Date

SELECT d.id AS doctor_id, 
       d.first_name, 
       d.last_name
FROM doctors d
WHERE NOT EXISTS (
    SELECT 1 
    FROM appointments a 
    WHERE a.doctor_id = d.id
    AND a.status != 'Cancelled'
    AND (
        -- Check if the new timeslot overlaps with existing appointment
        ('2025-03-20 10:10:00' BETWEEN a.reserved_time AND a.finished_time) 
        OR
        ('2025-03-20 10:40:00' BETWEEN a.reserved_time AND a.finished_time)
    )
);


----- Query doctors by specialization

SELECT 
    s.name AS specialization,
    GROUP_CONCAT(CONCAT(d.first_name, ' ', d.last_name) ORDER BY d.last_name) AS doctors
FROM specializations s
JOIN doctor_specialization ds ON s.id = ds.specialization_id
JOIN doctors d ON d.id = ds.doctor_id
GROUP BY s.name
ORDER BY s.name;

----- Query to Find the Number of Appointments for Each Doctor on a Given Date

SELECT d.first_name, d.last_name, COUNT(a.id) AS total_appointments
FROM doctors d
LEFT JOIN appointments a ON d.id = a.doctor_id
WHERE a.reserved_time >= '2025-03-20 00:00:00'
  AND a.reserved_time < '2025-03-21 00:00:00'
GROUP BY d.id
ORDER BY total_appointments DESC;


----- Query to Find the Number of Appointments for Each Doctor on a Given Date

SELECT d.first_name, d.last_name, COUNT(a.id) AS total_appointments
FROM doctors d
LEFT JOIN appointments a ON d.id = a.doctor_id
WHERE a.reserved_time >= '2025-03-20 00:00:00'
  AND a.reserved_time < '2025-03-21 00:00:00'


---- Query to find the months with more than 500 revenue

SELECT YEAR(payment_date) AS year, 
       MONTH(payment_date) AS month, 
       SUM(amount) AS total_revenue
FROM billings
WHERE payment_date IS NOT NULL
GROUP BY YEAR(payment_date), MONTH(payment_date)
HAVING total_revenue > 500;