---
title: Installer un OS sur un Raspberry pi
description: description
date: "2021-02-08"
image: "cover.png"
author: "Maxime"
tags: ["devops", "raspberry"]
---

# Sommaire

```toc

```

## 1. Télecharger et installer Raspberry pi Imager

[lien ici](https://www.raspberrypi.org/software/)

## 2. Télécherger le systeme d'exploitation

Nous allons maintenant télécharger l'image iso à installer sur le raspberrypi

Nous téléchargerrons la version arm 64 Bit de raspios_lite :
[lien ici](https://downloads.raspberrypi.org/raspios_lite_arm64/images/raspios_lite_arm64-2020-08-24/)

## 3. Création de la carte sd bootable

On lance raspberrypi imager :
Ensuite on va choisir quel OS à installer en séléctionnant choisir l'os :
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-01.png)

Puis utiliser une image personnalisée :
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-02.png)

On va chercher notre image télécharger précedement :
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-03.png)

On va ensuite séléctionner notre carte sd :
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-01.png)
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-04.png)

Puis on lance l'ecriture de l'image sur la carte sd en cliquant sur écrire
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-05.png)

A la fin de l'écriture un message s'affiche, on clique sur continuer :
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-06.png)

Maintenant que notre image à bien était écrit carte sd,on peut fermer raspberry pi Imager.
on eject puis on réinsere la carte sd pour afficher le contenu de la partition boot :
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-07.png)

On créer un fichier ssh (! pas ssh.txt !!!) pour avoir acces au raspberry en ssh
![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-08.png)

ensuite il nous reste plus qu'a relier votre raspberry pi a votre box, inserer la carte sd dans le raspberry pi et se connecter en ssh avec :

```
ssh pi@raspberrypi
```

ou avec si vous connaissait l'addresse ip

```
ssh pi@192.168.0.29
```

par defaut :
login : pi
mot de passe : raspberry

![RaspberryPiImager](./img/01-Installer-un-OS-raspberry/01-Installer-un-OS-raspberry-09.png)
