# Théo Moitrier-Cabodi | Portfolio

Portfolio personnel orienté R&D logiciel, modernisation applicative et interface web performante.

[![Live Site](https://img.shields.io/badge/Live-tmoitrier--cabodi.dev-00D4AA?style=for-the-badge)](https://tmoitrier-cabodi.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Vylllixis-161B22?style=for-the-badge&logo=github)](https://github.com/Vylllixis)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Th%C3%A9o%20Moitrier--Cabodi-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/th%C3%A9o-moitrier-cabodi-3277552b1/)

## TL;DR

- Site statique HTML/CSS/JS Vanilla, sans framework.
- Design system CSS clair via variables centralisees.
- Animations progressives: fade-in, typewriter, skill bars, navbar dynamique.
- UX solide: navigation responsive, menu mobile, back-to-top, filtres projets.
- SEO deja travaille: meta tags, Open Graph, Twitter Card, donnees structurees JSON-LD.

## Apercu

Ce site presente:

- Mon profil de developpeur applicatif R&D.
- Mes competences techniques avec niveaux et contexte d'utilisation.
- Mes projets (professionnels et scolaires) avec filtrage par techno.
- Mon parcours en entreprise (Mirion Technologies) et ma formation (Epitech + ESGI).

## Stack Technique

- HTML5 semantique
- CSS3 modulaire (fichiers par section)
- JavaScript Vanilla (IIFE + APIs navigateur modernes)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- SEO: Open Graph, Twitter Card, JSON-LD (Schema.org Person)

## Architecture du Projet

```text
Vylllixis.github.io/
	index.html
	CNAME
	assets/
		css/
			reset.css
			variables.css
			global.css
			nav.css
			hero.css
			about.css
			skills.css
			projects.css
			experience.css
			footer.css
		js/
			main.js
			projects.js
			typewriter.js
		img/
		cv/
```

## Analyse Technique Du Code

### Points forts

1. Structure propre et lisible
- Separation claire HTML/CSS/JS.
- CSS decoupe par sections, simple a maintenir.

2. Design system coherent
- Variables centralisees pour couleurs, typo, espacements, transitions, z-index.
- Cohesion visuelle sur toutes les sections.

3. Interactions utiles (pas gadgets)
- IntersectionObserver pour les animations au scroll (plus propre que scroll listeners globaux).
- Filtres projets simples et efficaces via data attributes.
- Navigation mobile complete (hamburger, lock scroll, fermeture auto).

4. SEO et partage social deja bien avances
- Meta description, canonical, robots.
- Open Graph + Twitter cards.
- JSON-LD Person.

5. Base responsive deja solide
- Breakpoints coherents.
- Layouts qui passent de 2 colonnes a 1 colonne proprement.

### Points a corriger en priorite

1. Bloc hero duplique a supprimer
- Un second bloc de demo est present juste apres la section hero principale dans le HTML.
- Risque: contenu redondant et rendu incoherent.

2. Liens LinkedIn incoherents
- Plusieurs URLs differentes coexistent (dont un placeholder ton-profil-linkedin).
- A unifier avec une seule URL definitive.

3. Fichier CSS vide
- footer.css est vide et non utilise.
- A supprimer ou a remplir, mais pas laisser un fichier mort.

4. Contenu de projets partiellement incomplet
- Des cartes projets Epitech/ESGI restent en commentaires avec placeholders.
- Soit completer, soit retirer pour garder un portfolio net.

5. Chargement CSS footer
- Le footer est style dans nav.css, pas dans footer.css.
- Ce n'est pas bloquant, mais il faut clarifier l'organisation.

## Fonctionnalites Principales

- Hero anime avec effet typewriter
- Navigation sticky avec barre de progression
- Smooth scroll sur ancres
- Liaison automatique section active dans la navbar
- Skills cards avec barres animees au scroll
- Filtrage des projets par technologie
- Timeline experiences + cartes formation
- Bouton retour en haut

## Lancer Le Projet En Local

Comme c'est un site statique, tu peux:

1. Ouvrir directement index.html dans le navigateur.
2. Ou lancer un petit serveur local (recommande):

```bash
# Python
python -m http.server 8000

# Puis ouvrir
http://localhost:8000
```

## Roadmap

- [ ] Completer les cartes projets ecole avec liens GitHub reels
- [ ] Unifier les URLs LinkedIn dans tout le site
- [ ] Supprimer le bloc hero duplique
- [ ] Nettoyer les assets inutilises
- [ ] Ajouter un mode clair/sombre pilotable
- [ ] Ajouter tests visuels simples (Lighthouse + accessibilite)

## A Propos De Moi

Je suis Developpeur Applicatif R&D en alternance chez Mirion Technologies.

Mes axes de travail:

- Modernisation d'applications existantes
- Migration technologique (.NET / MAUI)
- Refactoring et maintenabilite
- UX/UI pragmatique orientee usage reel

## Contact

- GitHub: https://github.com/Vylllixis
- LinkedIn: https://www.linkedin.com/in/th%C3%A9o-moitrier-cabodi-3277552b1/
- Site: https://tmoitrier-cabodi.dev

---

Construit avec HTML, CSS et JavaScript Vanilla.
