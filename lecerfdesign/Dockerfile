FROM node:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Construction de l'application Next.js
RUN npm run build

# Commande pour démarrer l'application
CMD ["npm", "start"]