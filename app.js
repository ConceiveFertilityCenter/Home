document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // About Section
    document.getElementById('about-title').textContent = siteContent.about.title;
    document.getElementById('about-subtitle').textContent = siteContent.about.subtitle;
    
    siteContent.about.features.forEach((feature, index) => {
        document.querySelector(`#feature-${index + 1} i`).setAttribute('data-lucide', feature.icon);
        document.querySelector(`#feature-${index + 1} h3`).textContent = feature.title;
        document.querySelector(`#feature-${index + 1} p`).textContent = feature.description;
    });

    document.getElementById('video-description').textContent = siteContent.about.video.description;
    const videoElement = document.getElementById('tour-video');
    videoElement.poster = siteContent.about.video.poster;
    videoElement.src = siteContent.about.video.source; 
    videoElement.load();

    // Services Section
    document.getElementById('services-title').textContent = siteContent.services.title;
    document.getElementById('services-subtitle').textContent = siteContent.services.subtitle;
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = siteContent.services.list.map(service => `
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="${service.image}" alt="${service.alt}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            </div>
        </div>
    `).join('');

    // Team Section
    document.getElementById('team-title').textContent = siteContent.team.title;
    document.getElementById('team-subtitle').textContent = siteContent.team.subtitle;
    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = siteContent.team.members.map(member => `
        <div class="text-center flex-shrink-0 w-48">
            <img src="${member.image}" alt="${member.name}" class="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4">
            <h4 class="font-bold text-lg text-gray-800 mb-1">${member.name}</h4>
            <p class="text-[#c38c91] text-xs">${member.title}</p>
        </div>
    `).join('');

    // Contact Section & Form
    const contactConfig = siteContent.contact;
    document.getElementById('contact-title').textContent = contactConfig.title;
    document.getElementById('contact-subtitle').textContent = contactConfig.subtitle;
    document.getElementById('contact-button').textContent = contactConfig.form.buttonText;

    // Form Placeholders
    document.getElementById('firstNameInput').placeholder = contactConfig.form.placeholders.firstName;
    document.getElementById('lastNameInput').placeholder = contactConfig.form.placeholders.lastName;
    document.getElementById('emailInput').placeholder = contactConfig.form.placeholders.email;
    document.getElementById('phoneInput').placeholder = contactConfig.form.placeholders.phone;
    document.getElementById('messageInput').placeholder = contactConfig.form.placeholders.message;

    document.querySelector('input[name="access_key"]').value = contactConfig.form.accessKey;
    document.querySelector('input[name="redirect"]').value = contactConfig.form.redirectUrl;
    document.getElementById('form-from-name').value = contactConfig.form.fromName;
    
    const firstNameInput = document.getElementById('firstNameInput');
    const lastNameInput = document.getElementById('lastNameInput');
    const subjectInput = document.getElementById('subjectInput');
    
    function updateSubject() {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
    
        subjectInput.value = `${contactConfig.form.subjectPrefix} ${firstName} ${lastName}`;
    }
    firstNameInput.addEventListener('input', updateSubject);
    lastNameInput.addEventListener('input', updateSubject);
    updateSubject(); 


    // Footer Section
    document.getElementById('footer-phones').textContent = siteContent.footer.phoneNumbers;
    const socialLinksContainer = document.getElementById('social-links-container');
    socialLinksContainer.innerHTML = siteContent.footer.socialLinks.map(link => `
        <a href="${link.url}" target="_blank" class="text-gray-400 hover:text-white">
            <img src="${link.icon}" alt="${link.alt}" class="w-6 h-6 rounded-sm">
        </a>
    `).join('');
    
    lucide.createIcons();
});