CREATE TABLE doctor_specialization (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  doctor_id INTEGER NOT NULL,
  specialization_id INTEGER NOT NULL,
  FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE,
  FOREIGN KEY (specialization_id) REFERENCES specializations(id) ON DELETE CASCADE
);