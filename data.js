const siteContent = {
    // About Us Section
    about: {
        title: "A Compassionate Approach to Fertility",
        subtitle: "We combine state-of-the-art technology with a warm, supportive environment to guide you through every step of your fertility journey.",
        features: [
            {
                icon: "flask-conical",
                title: "Advanced Technology",
                description: "Our state-of-the-art lab and facilities ensure you receive the most effective and modern treatments available."
            },
            {
                icon: "users",
                title: "Our Expert Team",
                description: "Our dedicated team of specialists, nurses, and counselors are leaders in the field of reproductive medicine."
            },
            {
                icon: "heart-handshake",
                title: "Personalized Patient Care",
                description: "We believe in a personalized approach, creating a unique treatment plan that is tailored to your specific needs and goals."
            }
        ],
        video: {
            poster: "SOURCES/v1.png",
            source: "SOURCES/v1.mp4",
            description: "Discover our center, meet our dedicated team, and see the compassionate environment we've created for your journey."
        }
    },

    // Services Section
    services: {
        title: "Our Services",
        subtitle: "Offering a comprehensive range of fertility treatments to help you build your family.",
        list: [
            {
                image: "https://placehold.co/600x400/a2d2ff/333333?text=IVF+Treatment",
                alt: "IVF Treatment",
                title: "In Vitro Fertilization (IVF)",
                description: "A comprehensive IVF program with high success rates, guided by our experienced embryologists."
            },
            {
                image: "https://placehold.co/600x400/bde0fe/333333?text=IUI+Procedure",
                alt: "IUI Procedure",
                title: "Intrauterine Insemination (IUI)",
                description: "A less invasive option to help healthy sperm get closer to the egg, timed with ovulation."
            },
            {
                image: "https://placehold.co/600x400/ffafcc/333333?text=Egg+Freezing",
                alt: "Egg Freezing",
                title: "Egg Freezing",
                description: "Preserve your fertility for the future with our advanced vitrification technology."
            }
        ]
    },

    // Team Section
    team: {
        title: "Meet Our Caring Team",
        subtitle: "A group of dedicated professionals committed to your success.",
        members: [
            {
                image: "TEAM/Adel_Abo_Elhassan.png",
                name: "Dr. Adel Abo Elhassan",
                title: "Technical Director & Consultant of OB/GYN, ICSI, IVF, and Laparoscopic Surgery"
            },
            {
                image: "TEAM/Sherif_Anis.png",
                name: "Prof. Dr. Sherif Anis",
                title: "Head of Lab & Professor of ICSI & Laparoscopy"
            },
            {
                image: "TEAM/Ahmed_Al-Attar.png",
                name: "Prof. Dr. Ahmed Al-Attar",
                title: "Professor of Anesthesia and Surgical Intensive Care"
            },
            {
                image: "TEAM/Fady_Shawky.png",
                name: "Prof. Dr. Fady Shawky",
                title: "Professor of OB/GYN & Laparoscopic Surgery"
            },
            {
                image: "TEAM/Mohamed_Wael_Ragab.png",
                name: "Prof. Dr. Mohamed Wael Ragab",
                title: "Consultant of Andrology & Infertility"
            },
            {
                image: "TEAM/Dalia_Moustafa.png",
                name: "Dr. Dalia Mostafa",
                title: "ICSI Consultant"
            },
            {
                image: "TEAM/Mohamed_Naguib.png",
                name: "Dr. Mohamed Naguib",
                title: "Consultant of Gynecological Endoscopy and Obstetrics"
            },
            {
                image: "TEAM/Youssef_mohamed_youssef.png",
                name: "Dr. Youssef Mohamed Youssef",
                title: "Consultant of OB/GYN & Assisted Fertilization"
            },
            {
                image: "TEAM/Ahmed_Elnozahy.png",
                name: "Dr. Ahmed Elnozahy",
                title: "Consultant of Anesthesia and Surgical Intensive Care"
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Take the First Step",
        subtitle: "Reach out to schedule a consultation. Our team is ready to answer your questions and support you.",
        form: {
            accessKey: "YOUR_ACCESS_KEY_HERE",
            
            redirectUrl: "http://127.0.0.1:5500/thank-you.html",
            
            fromName: "Conceive Fertility Center",
            subjectPrefix: "New Consultation Request from",

            placeholders: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Your Email Address",
                phone: "Your Phone Number",
                message: "Your Message (Optional)"
            },
            
            buttonText: "Request a Consultation"
        }
    },
    
    // Footer
    footer: {
        phoneNumbers: "03 54 2700 4  -  03 54 5700 4",
        socialLinks: [
            {
                url: "https://www.facebook.com/ConceiveIVFCenter",
                icon: "ICONS/facebook.png",
                alt: "Facebook Icon"
            },
            {
                url: "https://www.instagram.com/conceive.ivf/",
                icon: "ICONS/instagram.png",
                alt: "Instagram Icon"
            },
            {
                url: "https://wa.me/+201044058881",
                icon: "ICONS/whatsapp.png",
                alt: "WhatsApp Icon"
            },
            {
                url: "https://www.tiktok.com/@conceive.ivf",
                icon: "ICONS/tiktok.png",
                alt: "TikTok Icon"
            }
        ]
    }
};