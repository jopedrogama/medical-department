CREATE INDEX idx_billings_appointment_id ON billings (appointment_id);
SHOW INDEXES FROM billings;
SELECT * FROM billings WHERE appointment_id = 2;