# ALPINE
FROM alpine:3.16
# MISE A JOUR ET INSTALLATION NODEJS & NPM
RUN apk update \
    && apk add --update nodejs npm \
    && apk --no-cache add curl
# DEPLACEMENT DANS LE DOSSIER HOME
WORKDIR /home/
# EXECUTION DE LA COMMANDE DE CREATION DU DOSSIER REACT
RUN mkdir react
# DEPLACEMENT DANS LE DOSSIER REACT
WORKDIR /react/
# COPIE DU PROJET SYMFONY DANS NOTRE IMAGE (COPY SOURCE DESTINATION)
COPY . . 
# EXECUTION DES PACKAGES DU PROJET
RUN npm install
# DEMARRAGE DU PROJET
CMD ["npm","start"]

HEALTHCHECK --interval=1m --timeout=30s --retries=3 CMD curl --fail http://localhost:3000 || exit 1
