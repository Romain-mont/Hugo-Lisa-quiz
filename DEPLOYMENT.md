# 🚀 Déploiement sur GitHub Pages

## Configuration automatique

Ce projet est configuré pour se déployer automatiquement sur GitHub Pages à chaque push sur la branche `main`.

## 📋 Prérequis

1. **Repository GitHub** : Le projet doit être sur GitHub
2. **GitHub Actions** : Activé automatiquement
3. **GitHub Pages** : Doit être activé dans les paramètres du repository

## ⚙️ Activation de GitHub Pages

1. Allez dans votre repository GitHub
2. Cliquez sur **Settings**
3. Dans le menu de gauche, cliquez sur **Pages**
4. Dans **Source**, sélectionnez **Deploy from a branch**
5. Choisissez la branche **gh-pages** (créée automatiquement par l'action)
6. Cliquez sur **Save**

## 🔄 Workflow automatique

Le workflow `.github/workflows/deploy.yml` :
- Se déclenche à chaque push sur `main`
- Installe les dépendances
- Construit l'application (`npm run build`)
- Déploie sur la branche `gh-pages`
- Configure le domaine personnalisé `hugo-lisa.surge.sh`

## 🌐 URL de déploiement

- **GitHub Pages** : `https://romain-mont.github.io/Hugo-Lisa-quiz/`
- **Domaine personnalisé** : `https://hugo-lisa.surge.sh/`

## 📱 Test local

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Construire pour la production
npm run build

# Tester la build
npx serve -s build
```

## 🐛 Dépannage

### L'application ne se déploie pas
- Vérifiez que GitHub Actions est activé
- Consultez les logs dans l'onglet Actions
- Vérifiez que la branche `gh-pages` existe

### Problèmes de routage
- L'application utilise le routage SPA
- Les fichiers `404.html` et le script de routage sont inclus
- Toutes les routes redirigent vers `index.html`

### Problèmes de build
- Vérifiez que `npm run build` fonctionne localement
- Consultez les logs de build dans GitHub Actions
