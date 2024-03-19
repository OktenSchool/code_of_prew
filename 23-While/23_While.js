let userss = [
    {name: 'vasya', age: 31, status: false}, // Первый объект в массиве
    {name: 'petya', age: 30, status: true},  // Второй объект в массиве
    {name: 'kolya', age: 29, status: true},  // и так далее...
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let index = 0; // Инициализация счетчика

// Начало цикла while
while (index < userss.length) {
    const user = userss[index]; // Получаем текущий объект пользователя по индексу
    if (user.status === true) { // Проверяем, имеет ли пользователь статус true
        console.log(user); // Если статус равен true, выводим информацию о пользователе в консоль
    }
    index++; // Увеличиваем счетчик для перехода к следующему пользователю
}
