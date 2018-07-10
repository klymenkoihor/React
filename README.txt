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
--automatically installed packages from the box:
react
react-dom                       //ліба, яка рендерить реакт
//скрипти:
react-scripts

-----start existing/downloaded app-----
npm i           //установка залежностей
npm start       //старт на localhost:3000

npm run server  //запуск на webpack

-----additional packages-----
npm install --save react-router-dom    - рендер реактівських елементів

npm i bootstrap - підключення в App.js - import 'bootstrap/dist/css/bootstrap.css';

react final form - ліба по формах - downshift - множинний селект РОЗІБРАТИСЯ!
axios - асинхронна ліба замість - async await - це в коробцы з ES7
helmet - хедери
chartjs2 - графіки
rechart - графіки
sockette - websocket для react
vanilla-tilt.js - 3D анімашки на css
prettier - форматтер коду





npm install firebase --save-dev     - серверна частина firebase

Установка через package.json dependencies:
    "redux": "^4.0.0",
    "react-final-form": "^3.4.0",
    "react-router": "^4.2.0",
    "react-redux": "^5.0.7",
    "styled-components": "^3.2.6",
    "react-firebase": "^2.2.8"

-------Redux-------
redux - пакет для створення стора і вкладання даних у нього     //4091, 4072
react-redux - пакет для отримання даних зі стора, метод connect
redux-thunk - middleware for redux (асинхронні запити на сервер)

По івенту в Компоненті дістаються дані з інпуту і задіспатчується в стору (dispatch - це мотод стори)
об'єк Екшена з типом і пейлоадом/даними:
//аргументом метода dispatch є об'єкт Action
store.dispatch({
    type: "ACT_1",
    payload: data
})

Є редьюсер, що слухає діспатч івента.
Функція в аргументи приймає поточний стейт і отриманий з діспатча Action.
Редьюсер звіряє тип Action, що надійшов зі своїми типами для яких є сценарії.
По успішному співставленню виконує маніпуляції зі стейтом і повертає новий стан стейта.

Стора створюється методом createStore з аргументом редьюсером.
Всі компоненти обгортаються компонентом Provider в який передається store={store} створена на попередньому кроці.

Метод стори subscribe слухає зміни стори і викликається при зміні стори.
Бере зі стейта дані і виводить в інтерфейс.
Element.textContent - внутрянка елемента.

Для кожного компонента в export default дописується метод connect, що братиме дані зі стори і
передаватиме пропсами в компонент.
В connect передаються методи mapStoreToProps та mapDispatchToProps.
mapStoreToProps - кладемо стору або її частину в змінну-props


-------Router--------   https://reacttraining.com/
react-router-dom - роутер                                       //4056

<Link to=>

<Router>
    <Route path=>
</Router>
//Натискаєш на Лінк => він перекидає на сторінку /something.
//Виконується пошук роута з цією сторінкою і рендериться component або функція в render(()=>{}) або children

//У Роутера є вбудовані функції для повернення назад і тд
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

//Імпорт в коді через require. Через import тільки на початку

export default App                          \\export DefaultComponent
export Component as Comp                    \\export NotDefaultComponent with changed name
Для файлів з даними треба робити експорт змінної та її імпорт в потрібний файл
export const name                           \\export of variable

-----Об'ява компонента----- функція -> конструктор -> компонент
--Простий компонент:
const Comp = ({// children, ...rest}) => {    \\тут рест збирає всі решту змінних в свій об'єкт
    return (
        <div {...rest}>                     \\тут деструктуризація об'єкту рест
            <h1>{children}</h1>
            <Article /> - якийсь існуючий компонент
        </div>
    );
}

--Складний компонент:
class Compon extends Component {
//    State оформлюється двома стособами:
//    реактівським:
    state = {
    count: 0
    }
}
//    Кол-бек функції прив'язуються через bind(this) в момент передачі пропсів молодшому компоненту

//    в конструкторі:
    constructor(){
    super();
    this.handleSome = this.handleSome.bind(this);
    }

children в props React розуміє, що це вміст компонента, напр текст для діви: <div>text</div>
...rest - решта пропсів. Синтаксис {...rest} відповідає синтаксису id = {rest.id}
{variable} - в реакті відображення змінної через фігурні дужки

--Виклик компонента:
<Comp className="className" id="1">
    text
</Comp>

setState - асинхронна функція. Щоб нормально оновлювати стейт, треба в setState передавати функцію з аргументом prevState
значення з onChange + state можна зробити через ref - два варіанти
ref = {node => (this.inputNode = node);
}

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