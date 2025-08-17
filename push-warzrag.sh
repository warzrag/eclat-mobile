#!/bin/bash

echo "📤 Push vers GitHub (compte warzrag)"
echo "===================================="
echo ""
echo "⚠️  Assurez-vous d'avoir votre token GitHub prêt !"
echo ""
echo "Si vous n'avez pas de token :"
echo "1. Allez sur : https://github.com/settings/tokens/new"
echo "2. Nom : eclat-mobile-token"
echo "3. Cochez : repo"
echo "4. Generate token et copiez-le"
echo ""
echo "Le push va commencer..."
echo "Username : warzrag"
echo "Password : [Collez votre token]"
echo ""

git push -u origin main

echo ""
echo "✅ Si le push a réussi, votre code est maintenant sur :"
echo "   https://github.com/warzrag/eclat-mobile"