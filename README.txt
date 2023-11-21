Daytwo
## Exercice 2 : Mise à l'échelle

Pour la mise à échelle nous allons modifier le Docker-compose.yml qui permet de lancer plusieurs fois la même instance d'un container.
en utilisant la propriété --scale.

Voici la commande pour la lancer :

[ 

    docker-compose up --scale server-ping=3 --scale server-pong=3 -d 

]



