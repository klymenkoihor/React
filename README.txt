-----DICTIONARY-----
bundle - середовище, куди імпортуються компоненти. Робочий scope по суті.

INSTALL MANUAL
-----React app-----
https://github.com/facebook/create-react-app

-----install react app-----
npx create-react-app my-app     //boilerPlate
cd my-app
npm start

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
-----additional packages-----
npm install --save react-router-dom

-------------------------------------------------------------------------------------------
<Link to=>

<Router>
    <Route path=>
</Router>

-----JSX-----
1. Два елементи огортаються одним спільним.
2. return jsx береться в дужки

return (
    <div>
        <h1>Заголовок</h1>
        <h2>Підзаголовок</h2>
    </div>
);

