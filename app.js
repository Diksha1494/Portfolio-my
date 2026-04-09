// =============================================
// Social Links
// =============================================
document.getElementById("github-link").href = "https://github.com/Diksha1494";
document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/diksha-rai-a89731293/overlay/contact-info/";
document.getElementById("instagram-link").href = "https://www.instagram.com/rai_diksha0914?igsh=MW5yd3VkaGRtNm0zNA==";
document.getElementById("whatsapp-link").href =
  "https://wa.me/916290738063?text=Hi%20Diksha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!";

// =============================================
// Sidebar Toggle
// =============================================
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

document.querySelectorAll('.sidebar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

// =============================================
// 3D Tilt Effect on Project Cards
// =============================================
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Move the glow to follow cursor
    const glow = card.querySelector('.project-card-glow');
    if (glow) {
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(100, 140, 255, 0.12), transparent 60%)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';

    const glow = card.querySelector('.project-card-glow');
    if (glow) {
      glow.style.background = 'radial-gradient(circle at 30% 30%, rgba(100, 140, 255, 0.08), transparent 60%)';
    }
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.15s ease-out';
  });
});

// =============================================
// Scroll-triggered Card Reveal (Intersection Observer)
// =============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay based on position
      const card = entry.target;
      const cards = Array.from(document.querySelectorAll('.project-card-v2'));
      const cardIndex = cards.indexOf(card);
      
      card.style.animationDelay = `${cardIndex * 0.12}s`;
      card.classList.add('card-visible');
      cardObserver.unobserve(card);
    }
  });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card-v2').forEach(card => {
  cardObserver.observe(card);
});
