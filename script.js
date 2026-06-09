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

// Hero image click to open unit gallery
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    heroImage.addEventListener('click', () => {
        openLightbox('unit', 4); // Opens at the hero photo (index 4 in unit gallery)
    });
    heroImage.style.cursor = 'pointer'; // Make it clear the image is clickable
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

// Contact Form
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // For GitHub Pages, you'll need to configure this with a service like:
    // - Formspree (https://formspree.io)
    // - Google Forms
    // - Netlify Forms (if you switch to Netlify)

    // Example with Formspree (you'll need to add your endpoint):
    // const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
        // Simulated form submission for now
        formStatus.textContent = 'Thank you for your interest! We will contact you soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();

        // To actually send emails, uncomment and configure this:
        /*
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            formStatus.textContent = 'Thank you for your interest! We will contact you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
        */

    } catch (error) {
        formStatus.textContent = 'Sorry, there was an error. Please try again or contact us directly.';
        formStatus.className = 'form-status error';
    }

    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
});

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
