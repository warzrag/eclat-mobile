# 🚀 Guide Déploiement Vercel

## Configuration Vercel (Une seule fois)

1. **Connectez-vous** : [vercel.com](https://vercel.com)
   - Utilisez "Continue with GitHub"
   - Connectez votre compte florentivo

2. **Importez le projet** :
   - Cliquez sur "New Project"
   - Sélectionnez "eclat-mobile"
   - Cliquez sur "Import"

3. **Laissez les paramètres par défaut** :
   - Framework: Next.js (auto-détecté)
   - Cliquez sur "Deploy"

4. **Votre site est en ligne !**
   - URL : `eclat-mobile.vercel.app` (ou similaire)

## Workflow de développement

### Dans VS Code :

1. **Ouvrez le projet** :
   ```
   code D:\claude\bar_mobile
   ```

2. **Modifiez vos fichiers**

3. **Sauvegardez et committez** :
   ```bash
   git add .
   git commit -m "Description des changements"
   git push
   ```

4. **Vercel redéploie automatiquement !**
   - Allez sur vercel.com/dashboard
   - Voyez le déploiement en cours
   - 1-2 minutes et c'est en ligne !

## Commandes utiles

```bash
# Voir les changements
git status

# Ajouter tous les fichiers
git add .

# Commit avec message
git commit -m "Ajout nouvelle section"

# Pousser sur GitHub (et déclencher Vercel)
git push

# Lancer en local pour tester
npm run dev
```

## URLs de votre projet

- **GitHub** : https://github.com/florentivo/eclat-mobile
- **Vercel** : https://eclat-mobile.vercel.app
- **Dashboard Vercel** : https://vercel.com/florentivo/eclat-mobile

## Avantages Vercel vs GitHub Pages

✅ **Vercel** :
- Déploiement automatique instantané
- Support Next.js complet
- Preview pour chaque commit
- Analytics gratuits
- Domaine personnalisé gratuit
- Performance optimale (CDN global)

❌ **GitHub Pages** :
- Sites statiques uniquement
- Pas de support Next.js
- Déploiement plus lent

## Domaine personnalisé (Optionnel)

Dans Vercel Dashboard > Settings > Domains :
- Ajoutez votre domaine : `eclat-mobile.fr`
- Suivez les instructions DNS
- HTTPS automatique et gratuit !

## Support

- Documentation Vercel : https://vercel.com/docs
- Status : https://www.vercel-status.com