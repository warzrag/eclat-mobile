# 📦 Installation de Git pour Windows

## Étape 1 : Télécharger Git

1. Ouvrez votre navigateur
2. Allez sur : **https://git-scm.com/download/win**
3. Le téléchargement devrait démarrer automatiquement
4. Sinon, cliquez sur "64-bit Git for Windows Setup"

## Étape 2 : Installer Git

1. Lancez le fichier téléchargé `Git-2.xx.x-64-bit.exe`
2. Cliquez sur **Next** pour les options par défaut
3. **IMPORTANT** : À l'écran "Adjusting your PATH environment", choisissez :
   - ✅ **Git from the command line and also from 3rd-party software**
4. Continuez avec **Next** pour toutes les autres options
5. Cliquez sur **Install**
6. Cliquez sur **Finish**

## Étape 3 : Vérifier l'installation

1. **Fermez PowerShell** si ouvert
2. **Ouvrez un nouveau PowerShell**
3. Tapez : `git --version`
4. Vous devriez voir : `git version 2.xx.x`

## Étape 4 : Configurer Git

Dans PowerShell, tapez ces commandes (remplacez par vos infos) :

```powershell
git config --global user.name "florentivo"
git config --global user.email "votre-email@example.com"
```

## Étape 5 : Retourner dans le dossier du projet

```powershell
cd D:\claude\bar_mobile
```

## Étape 6 : Pusher sur GitHub

```powershell
git push -u origin main
```

Si demandé :
- Username : florentivo
- Password : Votre token GitHub (pas votre mot de passe!)

## 📝 Note sur l'authentification GitHub

GitHub ne permet plus l'authentification par mot de passe. Vous devez :
1. Créer un Personal Access Token sur GitHub
2. Aller sur : https://github.com/settings/tokens
3. Generate new token (classic)
4. Cochez "repo"
5. Utilisez ce token comme mot de passe

---

Une fois Git installé, revenez ici et on pourra pusher votre code en une commande !