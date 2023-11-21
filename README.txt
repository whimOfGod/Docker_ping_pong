Daytwo
## Exercice 2 : Mise à l'échelle

Pour la mise à échelle nous allons modifier le Docker-compose.yml qui permet de lancer plusieurs fois la même instance d'un container.
en utilisant la propriété --scale.

Voici la commande pour la lancer :

[ 

    docker-compose up --scale server-ping=3 --scale server-pong=3 -d 

]


## Exercice 3 : Gateway

1. 
- Lancement des 3 instances du serveur "ping" mais seulement une instance de "pong".
- Envoie du serveur "pong" au serveur "ping" chacun leurs tours .

2. Création du serveur gateway qui envoie son adresse au serveur 3 et qui doit retransmettre le message aux serveurs "ping" chacun leurs tours.

Executer cela avec la commande suivante : 

[

    docker-compose up --scale server-ping=3 --scale server-pong=1 -d

]

