/*
  typewriter.js — Effet machine à écrire pour la section Hero.
  Alterne entre plusieurs rôles en tapant et effaçant le texte.
*/

(function () {
  'use strict';

  // Les rôles à faire défiler — personnalisés pour Théo
  const roles = [
    'Applicatif R&D',
    'en C# & Python',
    'passionné d\'IA',
    'de solutions .NET',
    'en modernisation',
  ];

  const target = document.getElementById('typewriter-target');
  if (!target) return; // Sécurité : si l'élément n'existe pas, on sort

  let roleIndex = 0;    // Index du rôle en cours
  let charIndex = 0;    // Index du caractère en cours
  let isDeleting = false; // Est-ce qu'on efface ?
  let delay = 120;      // Délai entre chaque caractère (ms)

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // On efface un caractère
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      delay = 60; // Effacement plus rapide
    } else {
      // On tape un caractère
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      delay = 120;
    }

    // On a fini de taper le rôle complet
    if (!isDeleting && charIndex === currentRole.length) {
      delay = 2000; // Pause avant d'effacer
      isDeleting = true;
    }

    // On a fini d'effacer
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // Rôle suivant (boucle)
      delay = 500; // Petite pause avant de retaper
    }

    setTimeout(type, delay);
  }

  // Démarre l'effet après un court délai (laisse le temps à la page de charger)
  setTimeout(type, 1000);
})();