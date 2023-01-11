# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Сопроводительное письмо:

1. Выполнение тестового задания заняло примерно 4-5 часов
2. Price Check - я не добавляла валидации сознательно, так как задание оторвано от контекста и можно делать сколько угодно много проверок.
3. ToDo app - сделано:
   1. создан проект с использованием React, Typescript.
   2. Добавлены 2 рута('/', '/todos')
   3. сделана фейковая авторизация
   4. '/todos' сделан защищенным, доступным только авторизованным пользователям. При попытке зайти без авторизации реализовано перебрасывание на auth page.
   5. Storing the data in local storage (LS) is desirable - как описано в задании.
   6. недоделки:
      1. доработать стили
      2. переименовать todos в tasks
      3. добавить 404 страницу
      4. вынести все конста
