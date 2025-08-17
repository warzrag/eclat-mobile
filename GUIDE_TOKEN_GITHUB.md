# 🔑 Guide Complet : Créer un Token GitHub

## Étape 1 : Accéder aux paramètres

1. **Connectez-vous** sur [github.com](https://github.com) avec votre compte **florentivo**

2. **Cliquez sur votre photo de profil** en haut à droite

3. **Cliquez sur "Settings"** (Paramètres) dans le menu

## Étape 2 : Accéder aux Developer Settings

1. Dans le menu de gauche, **descendez tout en bas**

2. **Cliquez sur "Developer settings"** (tout en bas du menu)

## Étape 3 : Créer un Personal Access Token

1. Dans le menu de gauche, cliquez sur **"Personal access tokens"**

2. Cliquez sur **"Tokens (classic)"**

3. Cliquez sur le bouton vert **"Generate new token"**

4. Choisissez **"Generate new token (classic)"**

## Étape 4 : Configurer le token

1. **Note** : Donnez un nom à votre token
   - Exemple : `eclat-mobile-deploy`

2. **Expiration** : Choisissez la durée
   - 30 days (recommandé pour ce projet)
   - Ou "No expiration" si vous préférez

3. **Select scopes** : Cochez les permissions
   - ✅ Cochez **"repo"** (cela cochera automatiquement toutes les sous-options)
   - C'est tout ce dont vous avez besoin !

4. **Descendez** et cliquez sur le bouton vert **"Generate token"**

## Étape 5 : IMPORTANT - Copier le token

⚠️ **TRÈS IMPORTANT** : 
- Le token n'apparaît **QU'UNE SEULE FOIS** !
- **COPIEZ-LE IMMÉDIATEMENT** !
- Il ressemble à : `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Que faire avec le token :

1. **Copiez le token** (cliquez sur l'icône de copie 📋)

2. **Gardez-le en sécurité** temporairement dans un notepad

3. **Utilisez-le** quand Git demande le password :
   ```
   Username: florentivo
   Password: [COLLEZ VOTRE TOKEN ICI]
   ```

## 📍 Lien direct

Cliquez ici pour aller directement à la page de création de token :
👉 **https://github.com/settings/tokens/new**

## 🔐 Sécurité

- **Ne partagez JAMAIS** votre token
- **Ne le commitez pas** dans votre code
- Si vous le perdez, créez-en un nouveau

## ❓ Problème ?

Si vous avez déjà créé un token et l'avez perdu :
1. Retournez sur [github.com/settings/tokens](https://github.com/settings/tokens)
2. Supprimez l'ancien token
3. Créez-en un nouveau

---

## Résumé rapide :

1. 👤 Photo profil → Settings
2. ⚙️ Developer settings (tout en bas)
3. 🔑 Personal access tokens → Tokens (classic)
4. ➕ Generate new token (classic)
5. 📝 Nom : eclat-mobile-deploy
6. ✅ Cochez : repo
7. 🟢 Generate token
8. 📋 COPIEZ LE TOKEN !

Le token ressemble à : `ghp_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`