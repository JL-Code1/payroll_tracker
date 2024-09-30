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
        
        const salary = parseFloat(prompt("Enter salary:"));
        if (isNaN(salary)) break;

        const addAnother = confirm("Do you want to add another employee?");
        if (!addAnother) break
        
        employees.push({ firstName, lastName, salary });
    }
    
    return employees;
};

// Display average salary
const displayAverageSalary = function (employeesArray) {
    const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
    const averageSalary = totalSalary / employeesArray.length;
    console.log("Average Salary:", averageSalary.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }));
};

// Get random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  // Updated for Random Winner
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};


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
