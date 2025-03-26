DELIMITER //
CREATE PROCEDURE monthly_revenue_value(IN year INT, IN month INT, OUT monthly_income DECIMAL(10,2))
BEGIN
    SELECT SUM(amount)
        INTO monthly_income
    FROM billings
    WHERE YEAR(payment_date) = year
        AND MONTH(payment_date) = month;
END //
DELIMITER ;


----
SET @status = 0;
CALL monthly_revenue_value(2025, 3,  @status);
SELECT @status;