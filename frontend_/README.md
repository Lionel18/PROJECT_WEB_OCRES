# Description du projet 

Ce projet est un projet Dashboard composé de 6 widgets complété par une page administration. 

La page admin contient un formulaire permettant d’injecter de la donnée dans une API, plus précisément dans le widget « Météo ».

La page Dashboard comporte 6 différents widgets qui sont:
	-	Rappel
	-	Météo
	-	Covid
	-	Filmographie
	-	Banque
	-	News

Avant de commencer à coder, nous avons utilisé un outil d’organisation: Trello. Pour s’attribuer les différentes tâches à effectuer dont voici le lien: https://trello.com/b/zD9ivosd/objectifs

Nous avons aussi effectué en amont un mock-up et des wireframes à l’aide de Figma dont toutes les images sont disponibles dans le GitHub. 

# Manière de lancer le projet :

Pour lancer le projet, il faut effectuer les commandes suivantes:

-cd PROJECT_WEB_OCRES
-cd frontend
-npm start

Le projet contient un fichier « components » qui contient tous nos widgets qui se trouve dans le fichier « src ».

# Documentation :

-Rappel: Ajouter une activité depuis la barre de recherche. Cette dernière apparaitra dans la colonne « Rappel ». Puis une fois la checkbox coché, ce rappel se retrouvera sur la colonne « terminé » en étant barré. Enfin, il y aura un bouton « supprimer » qui permettra de supprimer ce rappel. 

-Météo: Ce widget affiche la météo du jour et les prévisions des 6 prochains jours pour la ville de Paris.

-Covid: Les chiffres sont fictifs pour le moment. Plus tard, il permettra d’actualiser en temps réel les statistiques du Covid-19 en France.

-Filmograpahie: Vous pouvez rentrer dans la barre de recherche le film « Taxi 5 » ou « Bad Boys ».

-Banque: Pour l’instant en partant d’un solde de 0, ce widget permet d’ajouter ou de retirer de l’argent (argent aussi fictif) et d’actualiser le solde de son compte. Ce solde est animé par un graphique réalisé grâce à la librairie recharts.

-News: Le widget News permet d’afficher l’actualité de différents thèmes pour le moment prédéfinis à savoir news US, news France et News sportives.

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
