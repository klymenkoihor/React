-----DICTIONARY-----
bundle - середовище, куди імпортуються компоненти. Робочий scope по суті.

INSTALL MANUAL
-----React app-----
https://github.com/facebook/create-react-app

-----install new npm package-----
npm install
--save
--save-dev
--global
--production - without devDependencies

-----git exist code-----
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/klymenkoihor/React.git
git push -u origin master
-------------------------------------------------------------------------------------------

-----install react app-----
npx create-react-app my-app     //boilerPlate    - установка Реакта
cd my-app
npm start

-----additional packages-----
npm install --save react-router-dom    - рендер реактівських елементів

axios - асинхронна ліба - async await


Установка через package.json dependencies:
    "redux": "^4.0.0",
    "react-final-form": "^3.4.0",
    "react-router": "^4.2.0",
    "react-redux": "^5.0.7",
    "styled-components": "^3.2.6",
    "react-firebase": "^2.2.8"

-------------------------------------------------------------------------------------------
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

-----Простий компонент-----
const Comp = () => {
    return (
        <div>
            <h1>Заголовок</h1>
            <Article /> - якийсь існуючий компонент
        </div>
    );
}
