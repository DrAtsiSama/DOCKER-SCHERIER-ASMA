# DOCKER-SCHERIER-ASMA
# Objectifs
- [x] Symfony(Alpine)
- [x] React  (Alpine)
- [x] NodeJS 
- [x] Composer
- [x] Stocker Image Docker Hub
- [x] MYSQL
- [ ] MailDev
- [x] Redis
- [x] phpMyAdmin
- [ ] Traefik
- [ ] https
- [ ] autres services
- [x] Healthcheck
- [ ] Image Production

# Installation
On supposera que [Docker](https://docs.docker.com/installation/) et [Docker Compose](https://docs.docker.com/compose/install/) soient déjà installé sur votre machine. 

Pour commencer, assurez-vous de cloner ce projet sur votre DOCKER HOST. Creer un répertoire sur votre HOST. A noté que les services prendront le nom de leur répertoire. Si vous creez un dossier nommé test. Les services seront nommés test-web, test-redis, test-lb...     
    git clone https://github.com:DrAtsiSama/DOCKER-SCHERIER-ASMA.git .
    

# Build et Lancement
Une fois le projet cloné, commençons notre projet. Dirigez-vous dans votre dossier ou le projet est cloné. 
Exécuté la commande suivante :     

    docker compose up -d

La commande docker compose va extraire l'image du DOCKER HUB et les relieras ensuite entre elles en fonction des informations contenues dans le docker-compose.yml.
Cela créera les ports, liens entre les conteneurs et configurera les applications selon les besoins.
Une fois la commande effectué regardons nos services.

    docker-compose ps

Verifiez que notre service fonctionne en sélectionnant l'IP ou à partir d'un navigateur.

### Curl à partir de la ligne de commande
    
    ```
    curl -H Host:whoami.docker.localhost http://127.0.0.1
    
    Hostname: 2e28ecacc04b
    IP: 127.0.0.1
    IP: 172.26.0.2
    GET / HTTP/1.1
    Host: whoami.docker.localhost
    User-Agent: curl/7.54.0
    Accept: */*
    Accept-Encoding: gzip
    X-Forwarded-For: 172.26.0.1
    X-Forwarded-Host: whoami.docker.localhost
    X-Forwarded-Port: 80
    X-Forwarded-Proto: http
    X-Forwarded-Server: a00d29b3a536
    X-Real-Ip: 172.26.0.1
    ``` 
    
Il est égalemment possible d'ouvrir le navigateur avec l'URL : `http://whoami.docker.localhost/`

### DOCKER HUB

Creation d'un compte / login sur `https://hub.docker.com/`
Creation d'un répertoire `https://hub.docker.com/repositories`
Sur un terminal connectez vous au Docker HUB `docker login`
Creation d'un tag `docker tag reactproject nomUtilisateur/nomRepertoire`
Envoie de l'image en ligne `docker push nomUtilisateur/nomRepertoire`
Vous devrez voir désormais votre image ici `https://hub.docker.com/repository/docker/nomUtilisateur/nomRepertoire`

 docker run -it --rm --name container-symfony -p 8080:80 symfony:1

docker compose UP
docker compose DOWN
docker compose ps