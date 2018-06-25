-----DICTIONARY-----
bundle - середовище, куди імпортуються компоненти. Робочий scope по суті.

INSTALL MANUAL
-----React app-----
https://github.com/facebook/create-react-app

-----install new npm package-----
npm install (i)
--save
--save-dev
--global (-g)
--production - without devDependencies

-----git copy repository to comp-----
git clone https://github.com/klymenkoihor/imgur.git

-----git exist code-----
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/klymenkoihor/React.git
git push -u origin master
-------------------------------------------------------------------------------------------

-----install react app-----
npx create-react-app my-app     //boilerPlate    - установка Реакта  //my-app - назва застосунку
cd my-app
npm start                       //старт сервера React
--automatically installed packages:
react
react-dom                       //ліба, яка рендерить реакт
react-scripts

-----start existing/downloaded app-----
npm i           //установка залежностей
npm start       //старт на localhost:3000

npm run server  //запуск на webpack

-----additional packages-----
npm install --save react-router-dom    - рендер реактівських елементів

npm i bootstrap - підключення в App.js - import 'bootstrap/dist/css/bootstrap.css';

react final form - downshift - множинний селект РОЗІБРАТИСЯ!
axios - асинхронна ліба замість - async await - це в коробцы з ES7
helmet - хедери
chartjs2 - графіки
rechart - графіки
sockette - websocket для react
redux-thunk - middleware for redux
vanilla-tilt.js - 3D анімашки на css

npm install firebase --save-dev     - серверна частина firebase

Установка через package.json dependencies:
    "redux": "^4.0.0",
    "react-final-form": "^3.4.0",
    "react-router": "^4.2.0",
    "react-redux": "^5.0.7",
    "styled-components": "^3.2.6",
    "react-firebase": "^2.2.8"

-------Router--------
<Link to=>

<Router>
    <Route path=>
</Router>

-----JSX-----
1. Два елементи огортаються одним спільним.
2. return jsx береться в дужки
3. js в фігурних дужках в межах jsx
4. style в фігурних дужках як js код + вставка стилів об'єктом, через це: {{}}
5. в усіх компонентах імпорт React! Бо Babel буде конвертувати jsx в React.createElement
6. в компоненті, що рендериться, імпорт ReactDOM. ReactDOM рендерить компоненти React

----- import ----- export -----
import React from 'react'                                      \\import DefaultComponent from "node_modules_folder"
import { BrowserRouter as Router } from "react-router-dom"     \\import NotDefaultComponent from "node_modules_folder"
import "./App.css"                                             \\import css not from "node_modules_folder"
import  App from "./App"                                       \\import Component form "./ProperFolder" //файли js додаються без розширення

import 'bootstrap/dist/css/bootstrap.css';                     \\ставиться просто пакет bootstrap

export default App                          \\export DefaultComponent
export Component                            \\export NotDefaultComponent

-----Простий компонент----- функція -> конструктор -> компонент
--Об'ява компонента:
const Comp = ({// children, ...rest}) => {    \\тут рест збирає всі решту змінних в свій об'єкт
    return (
        <div {...rest}>                     \\тут деструктуризація об'єкту рест
            <h1>{children}</h1>
            <Article /> - якийсь існуючий компонент
        </div>
    );
}

children в props React розуміє, що це вміст компонента, напр текст для діви: <div>text</div>
...rest - решта пропсів. Синтаксис {...rest} відповідає синтаксису id = {rest.id}
{variable} - в реакті відображення змінної через фігурні дужки

--Виклик компонента:
<Comp className="className" id="1">
    text
</Comp>

setState - асинхронна функція. Щоб нормально оновлювати стейт, треба в setState передавати функцію з аргументом prevState
значення з onChange + state можна зробити через ref

-----FIREBASE DEPLOYMENT-----
Створити проект на firebase або можна через консоль в процесі деплоя
Спочатку поставити глобально: npm install -g firebase-tools

Перейти в папку локального проекта
npm run build //створюється білд проекта

firebase login
firebase init
обрати папку build
додаткові питання - ні
firebase deploy - https://crypto-data-c0479.firebaseapp.com


-----GraphDB----- 4034 відео
 фреймворк для graphDB
 можна зробити фронт без бека
 Neo4j-GraphQL Extension