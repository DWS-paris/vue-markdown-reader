# Vue Markdown Reader

Créer une application capable de stocker et d'afficher des fichiers markdown et de les convertir en HTML pour les afficher dans une vue.

L'application est décomposée en 3 parties :

- une vue HomeView qui affiche le liste des fichiers markdown
- une vue SingleView qui affiche le contenu d'un fichier markdown
- une vue CreateView qui permet d'ajouter un nouveau fichier markdown

L'application doit être structurée avec une navigation et un footer, tout le contenu de l'application doit s'afficher dans une balise main.

## Etapes à suivre

- Mise en place d'un router pour HomeView, SingleView et CreateView
- Créer les composants HomeView, SingleView et CreateView
- Configurer et importer le router
- Créer des composant pour le header et le footer
- Créer un store pour gérer les information de l'application
- Définir la navigation dans le header et le plan du site dans le footer
- Afficher la liste des markdowns dans HomeView
- Gérer les liens vers SingleView
- Depuis SingleView charger le contenu d'un markdown