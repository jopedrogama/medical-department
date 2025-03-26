START TRANSACTION;

INSERT INTO doctors (first_name, last_name, document_number, email, specialization_name) VALUES
('Alex', 'Perez', '312341232', 'myemail@gmail.com' );

SELECT specialization_id FROM specializations WHERE name = specialization_name;

INSERT INTO doctor_specialization_mapping (doctor_id, specialization_id) VALUES
(LAST_INSERT_ID(), specialization_id);

COMMIT;
