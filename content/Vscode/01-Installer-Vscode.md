---
title: Installer Vscode
description: description
date: "2021-02-08"
image: "cover.png"
author: "Maxime"
tags: ["vscode"]
---

# Sommaire

```toc

```

## 1. Télecharger Vscode

[lien ici](https://code.visualstudio.com/Download)

![VSCODE](./img/01-Installer-Vscode/01-install-vscode-01.png)

## 2. installer Vscode

Une fois télécharger on le fichier d'installation.

N'oubliez pas de cocher les cases pour plus de facilité :
![VSCODE](./img/... "install vscode")

## 3. installation des plugins

Nous allons maintenant installer les extensions et configurer VS code pour un meilleur confort d'utilisation.
On ouvre VS code puis on clique sur l'icône des extensions.
[VSCODE](./img/... "extension vscode")

On va installer le pack de langue fr
[language-pack-fr](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-fr)
on entre “fr” dans la barre de recherche puis on installe.
cette extension nécessite un redémarrage de VS code.
[VSCODE](./img/... "vscode")

On va installer un theme pour vscode
[material-theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)
On clique sur “Définir le thème de couleur”
puis on sélectionne “Material Theme Darker High Content”

[VSCODE](./img/... "vscode")

On fait la même chose pour les icones
[material-icon-theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
On clique sur “Définir le thème des icônes de fichier
puis on sélectionne “Material Icon Theme”
[VSCODE](./img/... "vscode")

On peut installer les extension suivantes :
[bracket-pair-colorizer-2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
[StandardJS](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
[es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 4. Configuration des raccourcis

Nous allon vpir la configurtion des raccourcis dans Vscode

Par exemple nous allons installer wrap-console-log
[wrap-console-log](https://marketplace.visualstudio.com/items?itemName=midnightsyntax.vscode-wrap-console-log)

On va maintenant configurer le raccourci
on clique sur fichier → Préférences → Raccourcis clavier
ou la commande
Ctrl+K Ctrl+S
[VSCODE](./img/... "vscode")

On entre log dans la barre de recherche puis on modifie “Wrap down consol log”

[VSCODE](./img/... "vscode")

puis on entre un raccourcis, pour ma part j'utilise Ctrl+Alt+L
Wrap down consol log” fait apparaître le méthode “console.log()” sur l'élément sélectionné en dessous de celui-ci

```js
const text = "bonjour"
console.log(bonjour)
```

On fait de même pour format
puis on entre un raccourcis, pour ma part j'utilise Alt+F
cela permet de formater le code de tout le fichier
img

Un autre moyen de formater le code
on clique sur fichier → Préférences → Paramètres
img

puis on entre format dans la barre de recherche
et on coche “Format On Save”
img
