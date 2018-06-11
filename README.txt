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
react-dom
react-scripts

-----start existing/downloaded app-----
npm i           //установка залежностей
npm start       //старт на localhost:3000
npm run server  //запуск на webpack


-----additional packages-----
npm install --save react-router-dom    - рендер реактівських елементів


npm i bootstrap - підключення в App.js - import 'bootstrap/dist/css/bootstrap.css';

axios - асинхронна ліба замість - async await
helmet - хедери
chartjs2 - графіки
rechart - графіки
sockette - websocket для react
redux-thunk - middleware for redux

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
6. в компоненті, що рендериться, імпорт ReactDOM


----- import ----- export -----
import React from 'react'                                      \\import DefaultComponent from "node_modules_folder"
import { BrowserRouter as Router } from "react-router-dom"     \\import NotDefaultComponent from "node_modules_folder"
import "./App.css"                                             \\import css not from "node_modules_folder"
import  App from "./App"                                       \\import Component form "./ProperFolder" //файли js додаються без розширення

import 'bootstrap/dist/css/bootstrap.css';                     \\ставиться просто пакет bootstrap

export default App                          \\export DefaultComponent
export Component                            \\export NotDefaultComponent

-----Простий компонент-----
const Comp = () => {
    return (
        <div>
            <h1>Заголовок</h1>
            <Article /> - якийсь існуючий компонент
        </div>
    );
}


-----FIREBASE DEPLOYMENT-----
Спочатку поставити глобально: npm install -g firebase-tools

Перейти в папку проекта
npm run build //створюється білд

firebase login
firebase init
обрати папку build
додаткові питання - ні
firebase deploy - https://crypto-data-c0479.firebaseapp.com

