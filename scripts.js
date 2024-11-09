// scripts.js

// Language Switcher Event Listener
const translations = {
    en: {
        welcomeMessage: "Welcome to Our Accessibility Consulting Firm",
        getInTouch: "Get in Touch",
        ourServices: "Our Services",
        serviceList: [
            "Accessibility Audits",
            "Consulting for WCAG Compliance",
            "Inclusive Design Practices",
            "Training Workshops"
        ],
        aboutUs: "About Us",
        ourMission: "Our mission is to help businesses make their digital content accessible to everyone, regardless of ability.",
        ourTeam: "Meet our diverse and experienced team dedicated to making the web a more inclusive place.",
        resources: "Resources and Blog",
        contactUs: "Contact Us",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        submitButton: "Submit",
        thankYouMessage: "Thank you for reaching out, ",
        fillFieldsMessage: "Please fill in all fields before submitting the form."
    },
};

// Language Switcher Event Listener
document.querySelector('[aria-label="Language switcher"]').addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (translations[selectedLanguage]) {
        applyTranslations(selectedLanguage);
    } else {
        // If translation not available, use Google Translate fallback
        googleTranslateElementInit();
    }
});

// Apply translations to the page
function applyTranslations(language) {
    const translation = translations[language];
    if (translation) {
        document.querySelector('h1').textContent = translation.welcomeMessage;
        document.querySelector('button').textContent = translation.getInTouch;
        document.querySelector('#services h2').textContent = translation.ourServices;
        const serviceItems = document.querySelectorAll('#services ul li');
        serviceItems.forEach((item, index) => {
            item.textContent = translation.serviceList[index];
        });
        document.querySelector('#about h2').textContent = translation.aboutUs;
        document.querySelector('#about p').textContent = translation.ourMission;
        document.querySelector('#about h3').textContent = translation.ourTeam;
        document.querySelector('#resources h2').textContent = translation.resources;
        document.querySelector('#contact h2').textContent = translation.contactUs;
        document.querySelector('label[for="name"]').textContent = translation.nameLabel;
        document.querySelector('label[for="email"]').textContent = translation.emailLabel;
        document.querySelector('label[for="message"]').textContent = translation.messageLabel;
        document.querySelector('#contact-form button').textContent = translation.submitButton;
    }
}

// Google Translate Fallback
function googleTranslateElementInit() {
    const translateScript = document.createElement('script');
    translateScript.type = 'text/javascript';
    translateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateCallback';
    document.body.appendChild(translateScript);
}

function googleTranslateCallback() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,zh,de,it,et,lv,lt,nl',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Contact Form Submission Event Listener
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const selectedLanguage = document.querySelector('[aria-label="Language switcher"]').value;
    const translation = translations[selectedLanguage];

    if (name && email && message) {
        alert(translation.thankYouMessage + name + '!');
        // Placeholder for actual form submission logic
        this.reset();
    } else {
        alert(translation.fillFieldsMessage);
    }
});
