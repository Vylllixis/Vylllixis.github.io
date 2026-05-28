/*
  projects.js — Filtre des projets par technologie.
*/

(function () {
  'use strict';

  const filterButtons = document.querySelectorAll('.projects__filter-btn');
  const projectCards  = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Mise à jour du bouton actif
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      // Afficher/masquer les cards
      projectCards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          const tags = card.getAttribute('data-tags') || '';
          // data-tags contient une liste de mots séparés par des espaces
          if (tags.split(' ').includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    });
  });

})();