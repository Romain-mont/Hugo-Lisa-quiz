# 🎉 Quiz Hugo & Lisa - Animation de Mariage

Un quiz interactif et amusant créé pour célébrer le mariage d'Hugo et Lisa ! Testez vos connaissances sur leur amitié avec ce quiz moderne et animé.

## ✨ Fonctionnalités

- **Interface moderne** avec Tailwind CSS et animations Framer Motion
- **7 questions personnalisées** sur l'amitié entre Hugo et son témoin
- **Système de score** avec barre de progression
- **Reset automatique** en cas de mauvaise réponse
- **Animation de confetti** pour célébrer la victoire
- **Lecteur vidéo** intégré pour la récompense finale
- **Design responsive** qui s'adapte à tous les écrans

## 🚀 Installation

1. **Cloner le projet** (si ce n'est pas déjà fait)
```bash
cd hugo-lisa-quiz
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer l'application en mode développement**
```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## 🎯 Comment jouer

1. **Lisez chaque question** attentivement
2. **Cliquez sur la réponse** qui vous semble correcte
3. **Si c'est juste** → passez à la question suivante
4. **Si c'est faux** → le quiz se remet à zéro (attention !)
5. **Réussissez toutes les questions** → profitez de l'animation et de la vidéo !

## 🎨 Personnalisation

### Modifier les questions

Éditez le fichier `src/components/Quiz.tsx` et modifiez le tableau `questions` :

```typescript
const questions: Question[] = [
  {
    id: 1,
    text: "Votre question personnalisée ?",
    options: ["Option 1", "Option 2", "Option 3"],
    correctAnswer: "Option 1"
  },
  // ... autres questions
];
```

### Ajouter votre vidéo

1. **Placez votre fichier vidéo** dans le dossier `public/` du projet
2. **Modifiez le composant** `src/components/VideoPlayer.tsx`
3. **Décommentez le code vidéo** et remplacez l'URL :

```typescript
// Remplacez par le chemin vers votre vidéo
const videoUrl = "/votre-video.mp4";

// Décommentez cette section
<video
  className="w-full rounded-xl shadow-2xl"
  controls
  autoPlay={isPlaying}
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
>
  <source src={videoUrl} type="video/mp4" />
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>
```

### Modifier les couleurs et le style

Utilisez les classes Tailwind CSS dans les composants ou modifiez le fichier `tailwind.config.js` pour personnaliser le thème.

## 🛠️ Technologies utilisées

- **React 18** - Framework principal
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Vite** - Build tool moderne

## 📱 Responsive Design

L'application s'adapte automatiquement à tous les écrans :
- **Mobile** : Interface optimisée pour les petits écrans
- **Tablette** : Mise en page adaptée aux écrans moyens
- **Desktop** : Expérience complète avec toutes les animations

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur un serveur web
1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `build/` sur votre serveur
3. Configurez votre serveur pour servir `index.html` pour toutes les routes

### Déploiement sur GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d build
```

## 🎭 Personnalisation avancée

### Modifier les animations
- Éditez les composants Framer Motion dans `src/components/`
- Ajustez les durées et les effets dans les propriétés `transition`

### Ajouter du son
- Placez vos fichiers audio dans `public/`
- Importez et utilisez l'API Web Audio pour des effets sonores

### Modifier le thème
- Personnalisez `tailwind.config.js` pour vos couleurs
- Ajoutez des polices personnalisées
- Créez des composants réutilisables

## 🤝 Contribution

Ce projet est créé spécialement pour le mariage d'Hugo et Lisa. Si vous souhaitez contribuer ou adapter le code pour d'autres occasions, n'hésitez pas !

## 📄 Licence

Projet créé avec ❤️ pour célébrer l'amour et l'amitié.

---

**Bon quiz et félicitations à Hugo et Lisa ! 🎊💍**
