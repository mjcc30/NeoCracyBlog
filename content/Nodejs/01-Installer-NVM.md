---
title: Installer NVM pour Node.js
description: description
date: "2021-02-05"
image: "cover.jpg"
author: "Maxime"
tags: ["nodejs"]
---

# Sommaire

```
toc

```

## 1. Installer NVM


Si vous Ãªtes sur linux vous aurez besoin de `curl`

```
sudo apt install curl
```

Les commandes suivantes vont automatiquement installer nvm avec `curl`

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

```
nvm --version
```

## 2. Pour installer la version LTS de Node.js

On lance la commande suivante

```
nvm install --lts
```
Ensuite nous pouvons activer la version choisie

```
nvm use --lts
```

## 3. Pour installer la derniÃ¨re Node.js

On lance la commande suivante

```
nvm install node
```
Ensuite nous pouvons activer la version choisis

```
nvm use node
```

## 4. Export de nvm dans le shell

Si vous utilisez zsh remplacer `.bashrc par .zshrc`

Les deux premieres lignes ajoutent nvm au fichier `.bashrc`

La troisiÃ¨me ligne permet l'autocompletion avec nvm

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

## 5. Passer de la version LTS Ã  la derniÃ¨re version

Nous avons maintenant la derniÃ¨re version de Node.js ainsi que la version LTS (long term support) d'installer.
€ý,€ý,
Nous pouvons changer de version en uttilisant la commande `nvm use`.
