# Description du projet 

Le Dashboard est composé de 3 gidgets utilisant une API externe et de 3 widgets utilisant la base de donnéee MangoDB.

Les trois widgets utilisant les API externes sont :
  - Stat: https://coronavirusapi-france.now.sh/FranceLiveGlobalData   
    L'API renvoie des informations sur le covid en France et sont actualisé tous les soirs à minuit. Nous avons choisis de renvoyer le nombre de cas, le nombre de décès et le nombre de personnes guéries.
    Il faudra appuyez sur le bouton "acutaliser" dans le widget pour récupérer les données du jour suivant.
    
  - Filmographie: http://www.omdbapi.com/
    L'API possède une base de données de films régulièrement mise à jour qui permet de ressortir la jaqette du film ainsi que de nombreuses informations tel que
    la durée, le nom du film, une description, la date de sortie, le genre. IL faut rentrer le nom du film dans la barre de recherche puis cliquer sur "explorer"
    BONUS: la barre de recherche est sécurisé, un pop up "alert" apparaitra si le film n'existe pas.
    
  - Météo: https://api.openweathermap.org/data/2.5/
    Nous renvoyons les informations essentiel tel que la température, un icone de la météo, le lieu séléctionné de la météo en recherchant un pays ou une ville. 
    Le fond du widget possède une transition à partir d'une température supérieur à 16°.
    
  
Lees trois widgets utilisant la bdd sont:
  - News
    Ce widget permet de créer une news. Il est lié à la page admin qui permet d'injecter de la donnée dans le widget (créer un nouveau article à partir d'un titre, une photo et une description).
  - Rappel
    Ce widget permet d'ajouter, changer l'état, et de supprimer un rappel rentré. 
  - Banque
    Banque affiche sur un chart, calcule et conserve le solde de ses dépenses dans la bdd. Chaque action est daté et marqué avec l'heure sur le graphe. Le solde affiché 
    est le solde qu'il y avait à la dernière manipulation. 

# Manière de lancer le projet :

Pour lancer le projet, il faut effectuer les commandes suivantes:

Il faut installer dans le dossier backend mongoose avec la commande: 
  ### `npm install --save mongoose`
  ### `cd PROJECT_WEB_OCRES`
  ### `cd backend`
  ### `npm start`

répéter sur le frontend_ pour lancer le projet:
  ### `npm install --save mongoose`
  ### `cd PROJECT_WEB_OCRES`
  ### `cd frontend_`
  ### `npm start`

Le projet contient un fichier « components » qui contient tous nos widgets qui se trouve dans le fichier « src ».

il contient dans /backend un dossier routes qui contient toutes les requettes pour la base de données.

Il possède un dossier pages qui contient les routes entre la page admin et la page dashboard.

# Base de donnée :

-Nom d'utilisateur: lionel.delphin@gmail.com
-mot de passe: Projet2020

# API :

COVID:https://coronavirusapi-france.now.sh/FranceLiveGlobalData   

FILM:http://www.omdbapi.com/

METEO:https://api.openweathermap.org/data/2.5/



# Contributeurs :

Lionel DELPHIN et Hubert PAGE.

# P.S :

On voulait aussi vous prévenir que nous avions eu beaucoup de mal à installer et utiliser Storybook et avec le manque de temps nous n'avions pas eu le temps malheureusement de nous pencher sur les erreurs et bugs liés à Storybook mais il sera fait pour le 14 Décembre !

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
