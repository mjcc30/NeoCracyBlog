---
title: Configuration Raspberry pi
description: description
date: "2021-02-08"
image: "cover.png"
author: "Maxime"
tags: ["devops", "raspberry"]
---

# Sommaire

```toc

```

## 1. Création d'une clé ssh

on va creer un clé ssh
dans C:\Users\maxime on cree le dossier .ssh
on cree ensuite notre clé ssh avec la commande :

```
ssh-keygen -t rsa -b 4096 -f .ssh/pub_rsa
```

on ouvre le contenu notre clé publique "pub_rsa.pub"
on selectionne le contenu puis clique droit pour copier

## 2. Sécuriser le raspberry pi

on ouvre un autre terminal et on se connecte en ssh pi@raspberrypi sur le port 22 (par default) avec vscode :

```
ssh pi@raspberrypi
```

login par defaut : pi
mdp par defaut : raspberryode
on va changer le mot de passe de connexion, pour cela on lance la commande :

```
sudo raspi-config
```

ensuite dans le raspberry on va creer aussi un dossier .ssh
mkdir .ssh
nano .ssh/authorized_keys

Puis on colle le contenu de notre clé publique :

(Optionel) on télécharge l'extenseion remote de vscode
[vscode-remote](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

## 4. installation du hat (Optionnel)

Le raspberry peut etre installer avec different outils suplementaire que l'on appel des hat

Il existe un hat qui permet de transformer son raspberry pi en nas :
[quad-sata-hat](https://shop.allnetchina.cn/products/quad-sata-hat-case-for-raspberry-pi-4)
pour l'installer il suffit de lancer la commande :

```
curl -sL https://rock.sh/get-rockpi-sata | sudo -E bash -
```
