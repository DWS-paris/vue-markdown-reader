# Vue Markdown Reader

*Développer une application VueJS : The Progressive JavaScript Framework*

![](https://i.imgur.com/apd0OYs.png)

> &copy; [Julien Noyer](https://www.linkedin.com/in/julien-n-21219b28/) - All rights reserved for educational purposes only

## Présentation du projet

Créer une application capable de stocker et d'afficher des fichiers markdown et de les convertir en HTML pour les afficher dans une vue.

L'application est décomposée en 3 parties :

- une vue HomeView qui affiche le liste des fichiers markdown
- une vue SingleView qui affiche le contenu d'un fichier markdown
- une vue CreateView qui permet d'ajouter un nouveau fichier markdown

L'application doit être structurée avec une navigation et un footer, tout le contenu de l'application doit s'afficher dans une balise main.

## Définition du repo

Ce projet a été créé dans le cadre d'une session de cours pour des étudiants d'une école parisienne, l'objectif de cette session était de reprendre les notions de base de création d'une application Web avec un frameworks, en l'occurence Vue.js. Cette application présente déjà des fonctionnalités qui peuvent être testées et améliorées, pour constituer un code de départ pour développer une application avec Vue.js. Les fonctionnalités développées sont les suivantes :

- Mise en place d'un router pour HomeView, SingleView et CreateView
- Créer les composants HomeView, SingleView et CreateView
- Configurer et importer le router
- Créer des composant pour le header et le footer
- Créer un store pour gérer les information de l'application
- Définir la navigation dans le header et le plan du site dans le footer
- Afficher la liste des markdowns dans HomeView
- Gérer les liens vers SingleView
- Depuis SingleView charger le contenu d'un markdown

### Aller plus loin avec ce répertoire

Une bonne session de cours doit être dynamique pour être constructive à la fois pour les étudiants mais également pour le formateur. C'est pourquoi, à partir de ce répertoire il faut imaginer des améliorations qui permettent à des novice en Vue.js d'approfondir leurs connaissances. Voici donc une liste non-exhaustive des amélioration que vous pouvez apporter à cette application : 

- Ajouter des animation de transition (https://fr.vuejs.org/v2/guide/transitions.html)
- Ajouter la possibilité de modifier les informations d'un markdown (https://madewithvuejs.com/vux)
- Ajouter la possibilité de supprimer un markdown (https://madewithvuejs.com/vux)
- Configurer l'application comme une PWA (https://cli.vuejs.org/core-plugins/pwa.html)
- Développer une API pour gérer les markdonw (https://dwsapp.io/tuto/HkLpPSPVd)

<br><br>

## Utilisation de ce répertoire

![](https://i.imgur.com/eAySYs0.png)

Avant toutes choses, comme pour tous les projets Vue.js, vous devez avoir installer sur votre machine [Vue CLI](https://cli.vuejs.org) avec la commande suivante : 

```bash
npm install -g @vue/cli
# Ou
yarn global add @vue/cli
```

> Vérifiez ensuite votre installation avec la commande `vue --version`.

Une fois que votre machine est configurée avec [Vue CLI](https://cli.vuejs.org), vous devez installer les dépendances avec la commande `npm i` qui se charge de construire le dossier `node_modules` contenant les modules de l'application.

Cette application utilise la plateforme [hackmd.io](https://hackmd.io) pour stocker les fichiers markdown dont l'URL est inscrite dans un fichier de configuration. Le fichier `.env.dist` présente le modèle à utiliser pour créer votre fichier d'environnement, vous devez donc le dupliquer pour créer un fichier `.env` dont le contenu sera : 

```bash
VUE_APP_MK_ORIGIN=<URL-HACKMD>
```

> Vous pouvez utiliser un autre système mais vous devrez adapter votre variable d'environnement.

Votre dossier local ainsi configuré, vous pouvez lancer l'application avec la commande :

```bash
npm run serve
```

<br>

### Support de cours 

- **Application native, hybride, ça sera tout ?** https://dwsapp.io/tuto/r1pYVSv4_
- **Développer une application Vue.js** https://dwsapp.io/tuto/r1gvB-xAd