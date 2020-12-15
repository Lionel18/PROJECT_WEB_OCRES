# Description du projet 

Le Dashboard est composé de 3 widgets utilisant une API externe et de 3 widgets utilisant la base de donnéee MangoDB.

Les trois widgets utilisant les API externes sont :
  - Stat: https://coronavirusapi-france.now.sh/FranceLiveGlobalData   
    L'API renvoie des informations sur le covid en France et sont actualisés tous les soirs chaque jour à minuit. Nous avons choisis de renvoyer le nombre de cas, le nombre de décès et le nombre de personnes guéries au total.
    Il faudra appuyez sur le bouton "Actualiser" dans le widget pour récupérer les données du jour suivant. Vous pouvez retrouver dans le dossier "Widget Stats Screen Actualiser" des screens de l'actualisation de l'API covid 
    
  - Filmographie: http://www.omdbapi.com/
    L'API possède une base de données de films régulièrement mise à jour qui permet de ressortir la jaquette du film ainsi que de nombreuses informations tels que
    la durée, le nom du film, une description, la date de sortie et le genre. Il faut rentrer le nom du film dans la barre de recherche puis cliquer sur "Explorer"
    BONUS: La barre de recherche est sécurisé, un pop up "alert" apparaitra si le film n'existe pas.
    
  - Météo: https://api.openweathermap.org/data/2.5/
    Nous renvoyons les informations essentiel tel que la température, un icone de la météo, le lieu séléctionné de la météo en recherchant un pays ou une ville. 
    Le fond du widget possède une transition à partir d'une température supérieur à 16°.
    
  
Les trois widgets utilisant la bdd sont:
  - News :
    Ce widget permet de créer une news. Il est lié à la page admin qui permet d'injecter de la donnée dans le widget (créer un nouvel article à partir d'un titre, une photo et une description).
  - Rappel :
    Ce widget permet d'ajouter, changer l'état, et de supprimer un rappel rentré. 
  - Banque :
    Banque affiche sur un chart, calcule et conserve le solde de ses dépenses dans la bdd. Chaque action est datée et marquée avec l'heure sur le graphe. Le lien est le suivant : https://momentjs.com/
    Le solde affiché est le solde qu'il y avait à la dernière manipulation. 

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

-Nom d'utilisateur: delphin.lionel@gmail.com
-mot de passe: Projet2020

# API :

COVID:https://coronavirusapi-france.now.sh/FranceLiveGlobalData   

FILM:http://www.omdbapi.com/

METEO:https://api.openweathermap.org/data/2.5/



# Contributeurs :

Lionel DELPHIN et Hubert PAGE.

