// Get reference to Add Employees button
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  
  while (true) {
      const firstName = prompt("Enter first name:");
      if (!firstName) break;
      
      const lastName = prompt("Enter last name:");
      if (!lastName) break;
      
      const salaryInput = prompt("Enter salary:");
      const salary = parseFloat(salaryInput);
      if (isNaN(salary)) break;

      // Push the new employee object to the array
      employees.push({ firstName, lastName, salary });

      // Confirm if the user wants to add another employee
      const addAnother = confirm("Do you want to add another employee?");
      if (!addAnother) break;
  }
  
  return employees;
};


// Display average salary
const displayAverageSalary = function (employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employees to calculate average salary.");
        return;
    }
    
    const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
    const averageSalary = totalSalary / employeesArray.length; 
    const numberOfEmployees = employeesArray.length; 

    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
};


// Get random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available for random selection.");
    return;
    }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  // Updated for Random Winner
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

}

;


// Display employees in table
const displayEmployees = function (employeesArray) {
    const employeeTable = document.querySelector('#employee-table');
    employeeTable.innerHTML = '';

    employeesArray.forEach(currentEmployee => {
        const newTableRow = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement('td');
        salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    });
};

// Track employee data
const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    if (employees.length > 0) {
        displayAverageSalary(employees);
        console.log('==============================');
        getRandomEmployee(employees);
        employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
        displayEmployees(employees);
    } else {
        console.log("No employees to display.");
    }
};

// Add event listener to button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
