--Question
--How do we select the country name and region id from the countries
--Table where the region id is less than 3?

--Answers
--SELECT country_name, region_id
--FROM countries 
--WHERE region_id <3;


--SELECT country_name, region_id
--FROM countries 
--HERE region_id = 3 OR region_id = 5;

--OR you can get the same result if written:
--SELECT country_id, region_id
--FROM hr.countries
--WHERE region_id (3,5);


--SELECT employee_id, 
--last_name, 
--salary, 
--commission_pct
--FROM employees
--WHERE commission_pct IS NOT NULL;


SELECT employee_id, 
last_name, 
salary, 
commission_pct
FROM employees
WHERE commission_pct IS NULL;


SELECT employee_id, 
last_name, 
salary, 
commission_pct
FROM employees
WHERE commission_pct IS NOT NULL
OR (salary> 10000
AND hire_date > '31-Dec-98');

SELECT employee_id, 
last_name, 
salary, 
commission_pct,
hire_date
FROM employees
WHERE commission_pct IS NOT NULL
OR (salary> 10000
AND hire_date > '31-Dec-98');



