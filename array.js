const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 3000, projects: ["ProjectA", "ProjectB"] },
    { id: 2, name: "Bob", department: "IT", salary: 4000, projects: ["ProjectC"] },
    { id: 3, name: "Charlie", department: "IT", salary: 3500, projects: ["ProjectC", "ProjectD"] },
    { id: 4, name: "Diana", department: "Marketing", salary: 2800, projects: [] },
    { id: 5, name: "Eve", department: "IT", salary: 5000, projects: ["ProjectE"] },
    { id: 6, name: "Frank", department: "HR", salary: 3200, projects: ["ProjectA"] }
];

/*
Задачи:
 
1. Фильтрация:
   С помощью метода filter создайте новый массив сотрудников из отдела "IT", 
   у которых зарплата выше 3500.
 
2. Поиск:
   Используя метод find, найдите первого сотрудника, который участвует в проекте "ProjectD".
 
3. Преобразование:
   С помощью метода map создайте новый массив, где для каждого сотрудника добавлены два новых свойства:
   - annualSalary: годовая зарплата (месячная зарплата * 12)
   - projectCount: количество проектов сотрудника.
 
4. Группировка:
   Используя метод reduce, сгруппируйте сотрудников по отделам.
   Результат должен быть объектом, где ключи — названия отделов, а значения — массивы сотрудников, работающих в этих отделах.
 
5. Проверка условия:
   С помощью метода массива проверьте, есть ли среди сотрудников хотя бы один, у кого нет назначенных проектов (пустой массив projects).
 
6. Сортировка и преобразование:
   Отсортируйте массив сотрудников по количеству проектов в порядке убывания, а затем получите массив их имен.
*/


//==== 1 ====\\

const filteredEmployees = employees.filter((item) => item.department === 'IT' && item.salary > 3500)

console.log(filteredEmployees);

//==== 2 ====\\

const findEmployees = employees.find((item) => item.projects.find((elem) => elem === 'ProjectD'))

console.log(findEmployees);

//==== 3 ====\\

const conversionEmployees = employees.map((elem) => {
    let annualSalary = elem.salary * 12
    let projectCount = elem.projects.length

    return {...employees, annualSalary, projectCount}
})

console.log(conversionEmployees);

//==== 4 ====\\

// я не знаю reduce :_(

//==== 5 ====\\


const checkEmployees = employees.find((elem) => elem.projects.length === 0)

console.log(checkEmployees);

//==== 6 ====\\

const sortedEmployees = employees.sort((a, b) => b.projects.length - a.projects.length).map(employees => employees.name)

console.log(sortedEmployees);
