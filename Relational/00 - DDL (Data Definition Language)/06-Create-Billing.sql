CREATE TABLE billings (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  appointment_id INTEGER NOT NULL UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  payment_status ENUM('Pending', 'Paid', 'Failed', 'Refunded') NOT NULL DEFAULT 'Pending',
  payment_date TIMESTAMP NULL DEFAULT NULL,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE CASCADE
);
