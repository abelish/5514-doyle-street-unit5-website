// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-content');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const closeBtn = lightbox.querySelector('.lightbox-close');
const prevBtn = lightbox.querySelector('.lightbox-prev');
const nextBtn = lightbox.querySelector('.lightbox-next');

let currentIndex = 0;
let currentGallery = 'unit';
const galleries = {
    unit: [],
    community: [],
    neighborhood: []
};

// Organize images by gallery
galleryItems.forEach(item => {
    const gallery = item.dataset.gallery;
    const img = item.querySelector('img');
    galleries[gallery].push({
        src: img.src,
        alt: img.alt
    });
});

function openLightbox(gallery, index) {
    currentGallery = gallery;
    currentIndex = index;
    lightbox.style.display = 'block';
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateLightboxImage() {
    const images = galleries[currentGallery];
    lightboxImg.src = images[currentIndex].src;
    lightboxCaption.textContent = images[currentIndex].alt;
}

function showNext() {
    const images = galleries[currentGallery];
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
}

function showPrev() {
    const images = galleries[currentGallery];
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const gallery = item.dataset.gallery;
        const index = parseInt(item.dataset.index);
        openLightbox(gallery, index);
    });
});

// Gallery navigation buttons
const galleryNavButtons = document.querySelectorAll('.gallery-nav-btn');
galleryNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const gallery = btn.dataset.gallery;
        openLightbox(gallery, 0);
    });
});

// Highlight card photo clicks
document.querySelectorAll('.highlight-photo[data-gallery]').forEach(photo => {
    photo.style.cursor = 'pointer';
    photo.addEventListener('click', () => {
        openLightbox(photo.dataset.gallery, parseInt(photo.dataset.index));
    });
});

// Hero image clicks
const heroImages = document.querySelectorAll('.hero-image img');
if (heroImages[0]) {
    heroImages[0].addEventListener('click', () => openLightbox('unit', 4));
    heroImages[0].style.cursor = 'pointer';
}
if (heroImages[1]) {
    heroImages[1].addEventListener('click', () => openLightbox('community', 1));
    heroImages[1].style.cursor = 'pointer';
}

// Cohousing hero image click to open community gallery
const cohousingHeroImage = document.querySelector('.cohousing-hero img');
if (cohousingHeroImage) {
    cohousingHeroImage.addEventListener('click', () => {
        openLightbox('community', 1); // Opens at the fountain photo (index 1 in community gallery)
    });
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    }
});

// Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.side-menu a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.side-menu a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// Contact form is now handled by Google Forms

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
