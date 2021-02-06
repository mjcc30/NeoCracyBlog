---
title: Installer NVM pour Node.js
description: description
date: "2021-02-05"
image: "cover.jpg"
author: "Maxime"
tags: ["nodejs"]
---

![Cover](./cover.jpgg)

# Table of Contents

```toc

```

## Etape 1: Télecharger nvm

Si vous êtes sur linux vous aurez besoin de `curl`

```
sudo apt install curl
```

Les commandes suivantes vont automatiquement installer nvm avec `curl`

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

## Etape 2: Vérifier l'installation

```
nvm --version
```

## Pour installer la version LTS de Node.js

On lance la commande suivante

```
nvm install --lts
```

Ensuite nous pouvons activer la version choisie

```
nvm use --lts
```

## Pour installer la dernière Node.js

On lance la commande suivante

```
nvm install node
```

Ensuite nous pouvons activer la version choisis

```
nvm use node
```

## Export de nvm dans le shell

Si vous utilisez zsh remplacer `.bashrc par .zshrc`

Les deux premieres lignes ajoutent nvm au fichier `.bashrc`

La troisième ligne permet l'autocompletion avec nvm

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

## Passer de la version LTS à la dernière version

Nous avons maintenant la dernière version de Node.js ainsi que la version LTS (long term support) d'installer.
��,��,
Nous pouvons changer de version en uttilisant la commande `nvm use`.
