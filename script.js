// ----------------------
// 1. MENU MOBILE
// ----------------------

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // correspond au CSS
  toggle.classList.toggle('active');   // animation burger
});
// ----------------------
// 2. Effet de scroll reveal
// ----------------------
const sections = document.querySelectorAll('.section-box');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// ----------------------
// 3. Carrousel d’images (Studio)
// ----------------------
let index = 0;
const images = document.querySelectorAll('.studio-img');

function showImage() {
  images.forEach((img, i) => {
    img.style.display = (i === index) ? 'block' : 'none';
  });
  index = (index + 1) % images.length;
}
if (images.length > 0) {
  showImage(); // afficher la première image
  setInterval(showImage, 3000); // changer toutes les 3s
}

// ----------------------
// 4. Animation des barres de progression : pleine au départ, puis diminue
// ----------------------

document.querySelectorAll('.session-card').forEach(card => {
  const status = card.querySelector('.status').textContent;
  const barFill = card.querySelector('.progress-fill');

  // Capacité maximale par type de session (exemple : 10 places)
  let maxPlaces = 10;
  let placesRestantes = maxPlaces;

  if (status.includes("places restantes")) {
    const match = status.match(/(\d+)/);
    if (match) {
      placesRestantes = parseInt(match[1]);
    }
  } else if (status.includes("Inscriptions ouvertes")) {
    placesRestantes = maxPlaces; // toutes disponibles
  }

  // Calcul du pourcentage restant (barre diminue quand places baissent)
  const filled = (placesRestantes / maxPlaces) * 100;

  // Couleur dynamique
  let color = "green";
  if (placesRestantes > 5) {
    color = "green"; // beaucoup de places
  } else if (placesRestantes > 2) {
    color = "orange"; // places limitées
  } else {
    color = "red"; // presque complet
  }

  // Animation
  barFill.style.width = "0";
  barFill.style.backgroundColor = color;
  setTimeout(() => {
    barFill.style.width = filled + "%";
  }, 500);
});

// ----------------------
// 5. Validation formulaire de contact (si tu ajoutes un form)
// ----------------------
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value;
    if (!email.includes('@')) {
      alert('Veuillez entrer un email valide.');
      e.preventDefault();
    }
  });
}


// Appliquer l’animation
document.querySelectorAll('.session-card').forEach(card => {
  const status = card.querySelector('.status').textContent;
  const barFill = card.querySelector('.progress-fill');

  let maxPlaces = 10; // capacité par défaut
  let placesRestantes = maxPlaces;

  if (status.includes("places restantes")) {
    const match = status.match(/(\d+)/);
    if (match) {
      placesRestantes = parseInt(match[1]);
    }
  } else if (status.includes("Inscriptions ouvertes")) {
    placesRestantes = maxPlaces;
  }

  const filled = ((maxPlaces - placesRestantes) / maxPlaces) * 100;

  // Couleur dynamique
  let color = "green";
  if (placesRestantes > 5) {
    color = "green";
  } else if (placesRestantes > 2) {
    color = "orange";
  } else {
    color = "red";
  }

  // Animation
  barFill.style.width = "0";
  barFill.style.backgroundColor = color;
  setTimeout(() => {
    barFill.style.width = filled + "%";
  }, 500);
});


