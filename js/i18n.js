(function () {
  "use strict";

  var STORAGE_KEY = "lcra-lang";

  var translations = {
    "about.cta.subtitle": { en: "Looking for a home, renting out a place, or managing listings? We'll email you when the app opens.", es: "¿Buscas dónde vivir, rentas una propiedad o manejas propiedades? Te avisamos por correo cuando abra la app." },
    "about.cta.title": { en: "Join the waitlist", es: "Únete a la lista de espera" },
    "about.hero.badge": { en: "About", es: "Nosotros" },
    "about.hero.subtitle": { en: "Finding a long-term place in Los Cabos still runs through Facebook groups and WhatsApp. It can be simpler.", es: "Encontrar renta a largo plazo en Los Cabos todavía depende de grupos de Facebook y WhatsApp. Puede ser más fácil." },
    "about.hero.title": { en: "Why we're building Los Cabos Rental", es: "Por qué estamos construyendo Los Cabos Rental" },
    "about.mission.text": { en: "Most long-term rentals here are posted in Facebook groups. The same unit gets reposted again and again, often without a lease term, and sometimes with prices in dollars and pesos that don't match.", es: "La mayoría de las rentas a largo plazo aquí se publican en grupos de Facebook. La misma propiedad se publica una y otra vez, muchas veces sin plazo de contrato y a veces con precios en dólares y pesos que no coinciden." },
    "about.mission.text2": { en: "We're building one app where renters, landlords and agents can find each other, talk, and sign a lease, in English or Spanish.", es: "Estamos construyendo una sola app donde inquilinos, propietarios y agentes pueden encontrarse, platicar y firmar un contrato, en español o en inglés." },
    "about.mission.title": { en: "The problem", es: "El problema" },
    "about.pilot.label": { en: "From our pilot, Oct 2026", es: "De nuestro piloto, oct 2026" },
    "about.pilot.link": { en: "See what else we found", es: "Mira qué más encontramos" },
    "about.pilot.text": { en: "In one Los Cabos rental group, 120 rental posts came down to 75 distinct listings once repeats were merged.", es: "En un grupo de rentas de Los Cabos, 120 publicaciones se redujeron a 75 propiedades distintas al juntar las repetidas." },
    "about.status.text": { en: "The first version of the app is built but not public yet. It will open in Cabo San Lucas, San José del Cabo, the Corridor and El Tezal, and the waitlist hears first.", es: "La primera versión de la app ya está hecha, pero aún no es pública. Abrirá en Cabo San Lucas, San José del Cabo, el Corredor y El Tezal, y la lista de espera se entera primero." },
    "about.status.title": { en: "Where things stand", es: "Dónde estamos" },
    "about.team.bio": { en: "Mario grew up in Los Angeles and lives in Los Cabos. He started building the app after seeing how much of the local long-term rental market runs through Facebook group posts.", es: "Mario creció en Los Ángeles y vive en Los Cabos. Empezó a construir la app al ver cuánto del mercado local de rentas a largo plazo depende de publicaciones en grupos de Facebook." },
    "about.team.role": { en: "Founder", es: "Fundador" },
    "about.team.title": { en: "The founder", es: "El fundador" },
    "agents.cta.subtitle": { en: "Join the waitlist as an agent. We'll email you when you can start listing.", es: "Únete a la lista como agente. Te avisamos por correo cuando puedas empezar a publicar." },
    "agents.cta.title": { en: "Be ready on day one", es: "Listo desde el primer día" },
    "agents.faq.a1": { en: "Joining the waitlist is free and nobody is charged for signing up. We'll announce pricing before launch.", es: "Unirte a la lista es gratis y a nadie se le cobra por registrarse. Anunciaremos los precios antes del lanzamiento." },
    "agents.faq.a2": { en: "Cabo San Lucas, San José del Cabo, the Corridor and El Tezal at launch.", es: "Cabo San Lucas, San José del Cabo, el Corredor y El Tezal al lanzar." },
    "agents.faq.a3": { en: "Yes. The app and the lease are in both English and Spanish.", es: "Sí. La app y el contrato están en español e inglés." },
    "agents.faq.q1": { en: "What does it cost?", es: "¿Cuánto cuesta?" },
    "agents.faq.q2": { en: "Which areas will it cover?", es: "¿Qué zonas va a cubrir?" },
    "agents.faq.q3": { en: "Is the app in Spanish?", es: "¿La app está en español?" },
    "agents.features.f1.b1": { en: "Photos and details", es: "Fotos y detalles" },
    "agents.features.f1.b2": { en: "Rent in MXN", es: "Renta en MXN" },
    "agents.features.f1.b3": { en: "Pet-friendly and furnished tags", es: "Etiquetas pet-friendly y amueblado" },
    "agents.features.f1.desc": { en: "Post long-term listings with photos, rent in pesos and availability.", es: "Publica rentas a largo plazo con fotos, renta en pesos y disponibilidad." },
    "agents.features.f1.title": { en: "Your listings", es: "Tus propiedades" },
    "agents.features.f2.b1": { en: "In-app chat", es: "Chat en la app" },
    "agents.features.f2.b2": { en: "Five clear stages", es: "Cinco etapas claras" },
    "agents.features.f2.b3": { en: "Notifications", es: "Notificaciones" },
    "agents.features.f2.desc": { en: "Every renter who messages you becomes a lead: Interested, Contacted, Viewing scheduled, Lease sent, Deposit paid.", es: "Cada inquilino que te escribe se vuelve un prospecto: Interesado, Contactado, Visita agendada, Contrato enviado, Depósito pagado." },
    "agents.features.f2.title": { en: "Lead pipeline", es: "Pipeline de prospectos" },
    "agents.features.f3.b1": { en: "Commission per lease", es: "Comisión por contrato" },
    "agents.features.f3.b2": { en: "Bilingual lease to send", es: "Contrato bilingüe para enviar" },
    "agents.features.f3.b3": { en: "App in English and Spanish", es: "App en español e inglés" },
    "agents.features.f3.desc": { en: "Keep a record of the commission on each lease, next to the deal it came from.", es: "Registra la comisión de cada contrato, junto al trato del que salió." },
    "agents.features.f3.title": { en: "Commissions", es: "Comisiones" },
    "agents.features.title": { en: "What you can do in the app", es: "Lo que puedes hacer en la app" },
    "agents.hero.badge": { en: "For agents", es: "Para agentes" },
    "agents.hero.subtitle": { en: "List rentals, chat with renters, move every lead to a signed lease and keep a record of your commissions.", es: "Publica rentas, platica con inquilinos, lleva cada prospecto hasta el contrato firmado y registra tus comisiones." },
    "agents.hero.title": { en: "Your rental leads, out of WhatsApp and into one pipeline.", es: "Tus prospectos de renta, fuera de WhatsApp y en un solo pipeline." },
    "agents.steps.s1.desc": { en: "Sign up as an agent when the app opens.", es: "Regístrate como agente cuando abra la app." },
    "agents.steps.s1.title": { en: "Create your profile", es: "Crea tu perfil" },
    "agents.steps.s2.desc": { en: "Add photos, rent and availability.", es: "Agrega fotos, renta y disponibilidad." },
    "agents.steps.s2.title": { en: "Post your listings", es: "Publica tus propiedades" },
    "agents.steps.s3.desc": { en: "Chat, schedule viewings and send the lease from one pipeline.", es: "Platica, agenda visitas y envía el contrato desde un solo pipeline." },
    "agents.steps.s3.title": { en: "Work your leads", es: "Trabaja tus prospectos" },
    "areas.corridor": { en: "The Corridor", es: "El Corredor" },
    "areas.eyebrow": { en: "Launch areas", es: "Zonas de lanzamiento" },
    "areas.subtitle": { en: "We're launching with long-term rentals in these four areas of Los Cabos.", es: "Lanzamos con rentas a largo plazo en estas cuatro zonas de Los Cabos." },
    "areas.title": { en: "Starting in four areas", es: "Empezamos en cuatro zonas" },
    "contact.form.emailLabel": { en: "Email Address", es: "Correo Electronico" },
    "contact.form.emailPlaceholder": { en: "you@example.com", es: "tu@ejemplo.com" },
    "contact.form.messageLabel": { en: "Message", es: "Mensaje" },
    "contact.form.messagePlaceholder": { en: "Tell us how we can help...", es: "Cuentanos como podemos ayudarte..." },
    "contact.form.nameLabel": { en: "Full Name", es: "Nombre Completo" },
    "contact.form.namePlaceholder": { en: "Your full name", es: "Tu nombre completo" },
    "contact.form.subjectAgent": { en: "Agent Inquiry", es: "Consulta de Agente" },
    "contact.form.subjectDefault": { en: "Select a subject", es: "Selecciona un asunto" },
    "contact.form.subjectGeneral": { en: "General Inquiry", es: "Consulta General" },
    "contact.form.subjectLabel": { en: "Subject", es: "Asunto" },
    "contact.form.subjectLandlord": { en: "Landlord Question", es: "Pregunta de Propietario" },
    "contact.form.subjectPartnership": { en: "Partnership", es: "Alianza Comercial" },
    "contact.form.subjectRenter": { en: "Renter Question", es: "Pregunta de Inquilino" },
    "contact.form.subjectSupport": { en: "Technical Support", es: "Soporte Tecnico" },
    "contact.form.submit": { en: "Send Message", es: "Enviar Mensaje" },
    "contact.form.subtitle": { en: "Send a message and we will get back to you as soon as we can.", es: "Envíanos un mensaje y te respondemos lo antes posible." },
    "contact.form.title": { en: "Send Us a Message", es: "Envianos un Mensaje" },
    "contact.hero.subtitle": { en: "Questions about renting, listing, or partnering? We'd love to hear from you.", es: "Preguntas sobre rentar, publicar o asociarte? Nos encantaria saber de ti." },
    "contact.hero.title": { en: "Get in Touch", es: "Contactanos" },
    "contact.info.emailTitle": { en: "Email", es: "Correo" },
    "contact.info.emailDesc": { en: "Write in English or Spanish.", es: "Escríbenos en español o en inglés." },
    "contact.info.phoneDesc": { en: "Call the founder directly.", es: "Llama directo al fundador." },
    "contact.info.phoneTitle": { en: "Phone", es: "Telefono" },
    "contact.success.text": { en: "Thanks for reaching out. We will get back to you soon.", es: "Gracias por escribirnos. Te respondemos pronto." },
    "contact.success.title": { en: "Message sent", es: "Mensaje enviado" },
    "cta.join": { en: "Join", es: "Unirme" },
    "cta.joinTheWaitlist": { en: "Join the waitlist", es: "Únete a la lista de espera" },
    "cta.joinWaitlist": { en: "Join Waitlist", es: "Unirme a la lista" },
    "cta.joinWaitlistFree": { en: "Join the waitlist, free", es: "Únete gratis a la lista" },
    "cta.learnMore": { en: "Learn more", es: "Ver más" },
    "cta.seeHow": { en: "See how it works", es: "Ver cómo funciona" },
    "faq.a1": { en: "Joining the waitlist is free and nobody is charged for signing up. We'll announce any pricing for landlords and agents before launch.", es: "Unirte a la lista es gratis y a nadie se le cobra por registrarse. Anunciaremos cualquier precio para propietarios y agentes antes del lanzamiento." },
    "faq.a2": { en: "Soon. We don't have a public date yet. The waitlist hears first, by email.", es: "Pronto. Aún no tenemos fecha pública. La lista de espera se entera primero, por correo." },
    "faq.a3": { en: "Cabo San Lucas, San José del Cabo, the Corridor and El Tezal at launch.", es: "Cabo San Lucas, San José del Cabo, el Corredor y El Tezal al lanzar." },
    "faq.a4": { en: "Nothing until launch. Then you get one email with a link to create your account. We don't share your email with anyone.", es: "Nada hasta el lanzamiento. Entonces recibes un correo con un enlace para crear tu cuenta. No compartimos tu correo con nadie." },
    "faq.a5": { en: "No. It's for everyday long-term rentals: studios, apartments and houses, at local prices.", es: "No. Es para rentas a largo plazo del día a día: estudios, departamentos y casas, a precios locales." },
    "faq.a6": { en: "Yes. The app and the lease are in both English and Spanish.", es: "Sí. La app y el contrato están en español e inglés." },
    "faq.q1": { en: "Is it free?", es: "¿Es gratis?" },
    "faq.q2": { en: "When does it launch?", es: "¿Cuándo lanzan?" },
    "faq.q3": { en: "Which areas will it cover?", es: "¿Qué zonas va a cubrir?" },
    "faq.q4": { en: "What happens after I sign up?", es: "¿Qué pasa después de registrarme?" },
    "faq.q5": { en: "Is it only for luxury rentals?", es: "¿Es solo para rentas de lujo?" },
    "faq.q6": { en: "Is the app in Spanish?", es: "¿La app está en español?" },
    "faq.title": { en: "Questions", es: "Preguntas" },
    "footer.company": { en: "Company", es: "Empresa" },
    "footer.copyright": { en: "© 2026 Los Cabos Rental App. All rights reserved.", es: "© 2026 Los Cabos Rental App. Todos los derechos reservados." },
    "footer.desc": { en: "A long-term rental app for Los Cabos, in English and Spanish. Coming soon.", es: "Una app de rentas a largo plazo para Los Cabos, en español e inglés. Muy pronto." },
    "footer.legal": { en: "Legal", es: "Legal" },
    "footer.privacyPolicy": { en: "Privacy Policy", es: "Aviso de privacidad" },
    "footer.quickLinks": { en: "Quick Links", es: "Enlaces" },
    "footer.termsOfService": { en: "Terms of Service", es: "Términos de servicio" },
    "footer.waitlistLabel": { en: "App coming soon. Join the waitlist:", es: "La app llega pronto. Únete a la lista:" },
    "hero.badge": { en: "Long-term rentals in Los Cabos · Coming soon", es: "Rentas a largo plazo en Los Cabos · Muy pronto" },
    "hero.card.chat": { en: "Hi! Yes, it's still available. Want to see it Saturday?", es: "¡Hola! Sí, sigue disponible. ¿Quieres verlo el sábado?" },
    "hero.card.meta": { en: "2 bed · 1 bath · Available Nov 1", es: "2 rec · 1 baño · Disponible 1 de nov" },
    "hero.card.perMonth": { en: "/mo", es: "/mes" },
    "hero.card.photos": { en: "8 photos", es: "8 fotos" },
    "hero.card.tag1": { en: "12-month lease", es: "Contrato de 12 meses" },
    "hero.card.tag2": { en: "Unfurnished", es: "Sin amueblar" },
    "hero.card.title": { en: "2-bed apartment · El Tezal", es: "Depa de 2 recámaras · El Tezal" },
    "hero.ctaSecondary": { en: "See what we found", es: "Mira lo que encontramos" },
    "hero.float.label": { en: "Waitlist open", es: "Lista abierta" },
    "hero.float.value": { en: "Free to join", es: "Gratis" },
    "hero.previewAlt": { en: "Illustration of the app: a 2-bedroom apartment listing in El Tezal with a chat message from the owner", es: "Ilustración de la app: un departamento de 2 recámaras en El Tezal con un mensaje del dueño" },
    "hero.previewLabel": { en: "App preview", es: "Vista previa de la app" },
    "hero.subtitle": { en: "Finding a long-term place here means scrolling Facebook groups full of reposts, missing lease terms and prices that don't add up. We're building one app where you search, message the owner, sign the lease and pay the deposit, in English or Spanish.", es: "Encontrar renta a largo plazo aquí significa revisar grupos de Facebook llenos de publicaciones repetidas, sin plazo de contrato y con precios que no cuadran. Estamos construyendo una sola app para buscar, escribirle al dueño, firmar el contrato y pagar el depósito, en español o en inglés." },
    "hero.title": { en: "Long-term rentals in Cabo,", es: "Rentas a largo plazo en Cabo," },
    "hero.titleEnd": { en: "Facebook chaos.", es: "de Facebook." },
    "hero.titleHighlight": { en: "minus the", es: "sin el caos" },
    "hero.trust1": { en: "In-app chat", es: "Chat en la app" },
    "hero.trust2": { en: "Bilingual digital lease", es: "Contrato digital bilingüe" },
    "hero.trust3": { en: "English & Spanish", es: "Español e inglés" },
    "howItWorks.step1.desc": { en: "Filter long-term listings by price, bedrooms and move-in date. Save the ones you like.", es: "Filtra rentas a largo plazo por precio, recámaras y fecha de mudanza. Guarda las que te gusten." },
    "howItWorks.step1.title": { en: "Search", es: "Busca" },
    "howItWorks.step2.desc": { en: "Chat with the owner or agent in the app and set up a viewing.", es: "Platica con el dueño o el agente en la app y agenda una visita." },
    "howItWorks.step2.title": { en: "Message and visit", es: "Escribe y visita" },
    "howItWorks.step3.desc": { en: "Sign a bilingual lease on your phone and pay the deposit by card in the app.", es: "Firma un contrato bilingüe desde tu celular y paga el depósito con tarjeta en la app." },
    "howItWorks.step3.title": { en: "Sign and pay the deposit", es: "Firma y paga el depósito" },
    "howItWorks.title": { en: "From search to keys, in one app", es: "De la búsqueda a las llaves, en una app" },
    "landlords.cta.subtitle": { en: "Join the waitlist as a landlord. We'll email you when you can start listing.", es: "Únete a la lista como propietario. Te avisamos por correo cuando puedas empezar a publicar." },
    "landlords.cta.title": { en: "Get ready to list", es: "Prepárate para publicar" },
    "landlords.faq.a1": { en: "Joining the waitlist is free and nobody is charged for signing up. We'll announce pricing before launch.", es: "Unirte a la lista es gratis y a nadie se le cobra por registrarse. Anunciaremos los precios antes del lanzamiento." },
    "landlords.faq.a2": { en: "Monthly rent is arranged directly between you and your tenant. We'll explain how the deposit reaches you before launch.", es: "La renta mensual se acuerda directamente entre tú y tu inquilino. Antes del lanzamiento explicaremos cómo te llega el depósito." },
    "landlords.faq.a3": { en: "Cabo San Lucas, San José del Cabo, the Corridor and El Tezal at launch.", es: "Cabo San Lucas, San José del Cabo, el Corredor y El Tezal al lanzar." },
    "landlords.faq.q1": { en: "What does it cost?", es: "¿Cuánto cuesta?" },
    "landlords.faq.q2": { en: "How do I get paid?", es: "¿Cómo recibo mi pago?" },
    "landlords.faq.q3": { en: "Which areas will it cover?", es: "¿Qué zonas va a cubrir?" },
    "landlords.features.f1.b1": { en: "Photos and details in one place", es: "Fotos y detalles en un solo lugar" },
    "landlords.features.f1.b2": { en: "Rent shown in MXN", es: "Renta en MXN" },
    "landlords.features.f1.b3": { en: "Pet-friendly and furnished tags", es: "Etiquetas pet-friendly y amueblado" },
    "landlords.features.f1.desc": { en: "Add photos, the rent in pesos, bedrooms, move-in date and amenities like pet-friendly or furnished.", es: "Agrega fotos, la renta en pesos, recámaras, fecha de disponibilidad y amenidades como pet-friendly o amueblado." },
    "landlords.features.f1.title": { en: "One listing with the details", es: "Una publicación con los detalles" },
    "landlords.features.f2.b1": { en: "In-app chat", es: "Chat en la app" },
    "landlords.features.f2.b2": { en: "Lead pipeline", es: "Pipeline de prospectos" },
    "landlords.features.f2.b3": { en: "Notifications", es: "Notificaciones" },
    "landlords.features.f2.desc": { en: "Renters message you inside the app. Move each one from Interested to Viewing, Lease sent and Deposit paid, so you always know where things stand.", es: "Los inquilinos te escriben dentro de la app. Mueve a cada uno de Interesado a Visita, Contrato enviado y Depósito pagado, y siempre sabrás en qué va." },
    "landlords.features.f2.title": { en: "Every inquiry in one list", es: "Cada solicitud en una lista" },
    "landlords.features.f3.b1": { en: "Bilingual lease", es: "Contrato bilingüe" },
    "landlords.features.f3.b2": { en: "Signed on the phone", es: "Firma desde el celular" },
    "landlords.features.f3.b3": { en: "PDF copy to download", es: "Copia en PDF para descargar" },
    "landlords.features.f3.desc": { en: "Send a lease drafted for Baja California Sur, in Spanish and English. The renter signs on their phone and you can download a PDF copy.", es: "Envía un contrato redactado para Baja California Sur, en español e inglés. El inquilino firma desde su celular y puedes descargar una copia en PDF." },
    "landlords.features.f3.title": { en: "A lease ready to sign", es: "Un contrato listo para firmar" },
    "landlords.features.title": { en: "What you can do in the app", es: "Lo que puedes hacer en la app" },
    "landlords.hero.badge": { en: "For landlords", es: "Para propietarios" },
    "landlords.hero.subtitle": { en: "Post your listing, answer every inquiry in one place, and send a bilingual lease to sign, all from your phone.", es: "Publica tu propiedad, responde cada solicitud en un solo lugar y envía un contrato bilingüe para firmar, todo desde tu celular." },
    "landlords.hero.title": { en: "Rent out your place without the Facebook back-and-forth.", es: "Renta tu propiedad sin el ir y venir de Facebook." },
    "landlords.steps.s1.desc": { en: "Add photos, rent and availability.", es: "Agrega fotos, renta y disponibilidad." },
    "landlords.steps.s1.title": { en: "Post your listing", es: "Publica tu propiedad" },
    "landlords.steps.s2.desc": { en: "Chat with renters and schedule viewings from one list.", es: "Platica con inquilinos y agenda visitas desde una sola lista." },
    "landlords.steps.s2.title": { en: "Answer inquiries", es: "Responde solicitudes" },
    "landlords.steps.s3.desc": { en: "Send the bilingual lease and see when the deposit is paid.", es: "Envía el contrato bilingüe y ve cuándo se pagó el depósito." },
    "landlords.steps.s3.title": { en: "Sign the lease", es: "Firma el contrato" },
    "legal.contactForm": { en: "Contact form", es: "Formulario de contacto" },
    "legal.emailPlaceholder": { en: "[PLACEHOLDER: inbox @caborentalapp.com, to be confirmed]", es: "[PENDIENTE: correo @caborentalapp.com, por confirmar]" },
    "mock.agent.active": { en: "Active", es: "Activa" },
    "mock.agent.l1": { en: "2-bed apartment · El Tezal", es: "Depa de 2 rec · El Tezal" },
    "mock.agent.l1meta": { en: "3 inquiries", es: "3 solicitudes" },
    "mock.agent.l2": { en: "Studio · San José del Cabo", es: "Estudio · San José del Cabo" },
    "mock.agent.l2meta": { en: "Viewing Saturday", es: "Visita el sábado" },
    "mock.agent.l3": { en: "3-bed house · Cabo San Lucas", es: "Casa de 3 rec · Cabo San Lucas" },
    "mock.agent.l3meta": { en: "Lease sent", es: "Contrato enviado" },
    "mock.agent.signing": { en: "Signing", es: "Firmando" },
    "mock.agent.title": { en: "Your listings", es: "Tus propiedades" },
    "mock.landlord.depositVia": { en: "By card, in the app", es: "Con tarjeta, en la app" },
    "mock.landlord.title": { en: "Inquiries · 2-bed in El Tezal", es: "Solicitudes · 2 rec en El Tezal" },
    "mock.renter.meta": { en: "Available now", es: "Disponible ya" },
    "mock.renter.signed": { en: "Lease signed", es: "Contrato firmado" },
    "mock.renter.signedVia": { en: "In the app", es: "En la app" },
    "mock.renter.tag1": { en: "1 bath", es: "1 baño" },
    "mock.renter.tag2": { en: "Furnished", es: "Amueblado" },
    "mock.renter.title": { en: "Studio · San José del Cabo", es: "Estudio · San José del Cabo" },
    "mock.stage.depositPaid": { en: "Deposit paid", es: "Depósito pagado" },
    "mock.stage.interested": { en: "Interested", es: "Interesados" },
    "mock.stage.leaseSent": { en: "Lease sent", es: "Contrato enviado" },
    "mock.stage.viewing": { en: "Viewing scheduled", es: "Visita agendada" },
    "mock.stage.viewingShort": { en: "Viewing", es: "Visita" },
    "nav.about": { en: "About", es: "Nosotros" },
    "nav.agents": { en: "Agents", es: "Agentes" },
    "nav.areas": { en: "Areas", es: "Zonas" },
    "nav.contact": { en: "Contact", es: "Contacto" },
    "nav.faq": { en: "FAQ", es: "Preguntas" },
    "nav.home": { en: "Home", es: "Inicio" },
    "nav.howItWorks": { en: "How it Works", es: "Cómo funciona" },
    "nav.landlords": { en: "Landlords", es: "Propietarios" },
    "nav.renters": { en: "Renters", es: "Inquilinos" },
    "nav.why": { en: "Why", es: "Por qué" },
    "placeholder.email": { en: "Your email", es: "Tu correo" },
    "placeholder.enterEmail": { en: "Enter your email", es: "Ingresa tu correo" },
    "privacy.prelaunch": { en: "Los Cabos Rental App is not live yet. This notice covers only this website: the waitlist, the contact form and basic site analytics. Before the app opens, and before we collect any other data, we will publish an updated notice.", es: "Los Cabos Rental App todavía no está disponible. Este aviso cubre solo este sitio web: la lista de espera, el formulario de contacto y la analítica básica del sitio. Antes de que abra la app, y antes de recabar cualquier otro dato, publicaremos un aviso actualizado." },
    "privacy.s1.p1": { en: "<mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PLACEHOLDER: legal name of the data controller]</mark>, operating as \"Los Cabos Rental App\", with address at <mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PLACEHOLDER: address]</mark>, Los Cabos, Baja California Sur, Mexico, is responsible for your personal data under Mexico's Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).", es: "<mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PENDIENTE: nombre legal del responsable]</mark>, que opera como \"Los Cabos Rental App\", con domicilio en <mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PENDIENTE: domicilio]</mark>, Los Cabos, Baja California Sur, México, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)." },
    "privacy.s1.title": { en: "1. Who is responsible for your data", es: "1. Responsable de tus datos" },
    "privacy.s10.p1": { en: "If you believe your data protection rights have been violated, you can file a complaint with the Mexican authority in charge of personal data protection. Since 2025, that is the Secretaría Anticorrupción y Buen Gobierno, which took over this role from INAI.", es: "Si consideras que se han vulnerado tus derechos de protección de datos, puedes presentar una queja ante la autoridad mexicana encargada de la protección de datos personales. Desde 2025, es la Secretaría Anticorrupción y Buen Gobierno, que asumió esta función del INAI." },
    "privacy.s10.title": { en: "10. Contact and complaints", es: "10. Contacto y quejas" },
    "privacy.s2.analytics": { en: "<strong>Site analytics:</strong> Vercel Web Analytics records anonymous visit data such as the page viewed, the referring site, browser, operating system, device type and country. It does not use cookies, and we cannot identify you from it.", es: "<strong>Analítica del sitio:</strong> Vercel Web Analytics registra datos anónimos de visitas, como la página vista, el sitio de procedencia, el navegador, el sistema operativo, el tipo de dispositivo y el país. No usa cookies y no podemos identificarte con esos datos." },
    "privacy.s2.contact": { en: "<strong>Contact form:</strong> your name, email address, the subject you choose and your message.", es: "<strong>Formulario de contacto:</strong> tu nombre, correo electrónico, el asunto que elijas y tu mensaje." },
    "privacy.s2.p1": { en: "We do not collect sensitive personal data, financial data or identity documents through this website.", es: "No recabamos datos personales sensibles, datos financieros ni documentos de identidad a través de este sitio." },
    "privacy.s2.title": { en: "2. What we collect", es: "2. Qué datos recabamos" },
    "privacy.s2.waitlist": { en: "<strong>Waitlist:</strong> your email address, the role you choose (renter, landlord or agent) and the date you signed up.", es: "<strong>Lista de espera:</strong> tu correo electrónico, el rol que elijas (inquilino, propietario o agente) y la fecha en que te registraste." },
    "privacy.s3.analytics": { en: "<strong>Analytics:</strong> to see how many people visit the site and which pages are useful.", es: "<strong>Analítica:</strong> para saber cuántas personas visitan el sitio y qué páginas les son útiles." },
    "privacy.s3.contact": { en: "<strong>Contact form:</strong> to reply to your message.", es: "<strong>Formulario de contacto:</strong> para responder a tu mensaje." },
    "privacy.s3.p1": { en: "We do not use your data for any other purpose. We do not sell it, and we do not send marketing emails.", es: "No usamos tus datos para ninguna otra finalidad. No los vendemos y no enviamos correos de publicidad." },
    "privacy.s3.title": { en: "3. Why we use it", es: "3. Para qué los usamos" },
    "privacy.s3.waitlist": { en: "<strong>Waitlist:</strong> to email you when the app opens.", es: "<strong>Lista de espera:</strong> para avisarte por correo cuando abra la app." },
    "privacy.s4.p1": { en: "We use these service providers to run the site. They handle data only on our behalf:", es: "Usamos estos proveedores para operar el sitio. Tratan los datos únicamente por cuenta nuestra:" },
    "privacy.s4.p2": { en: "These providers may store data on servers outside Mexico, including in the United States. Like most websites, this site also loads fonts and code from Google Fonts, jsDelivr and the Tailwind CSS CDN, which receive your IP address as part of the normal web request.", es: "Estos proveedores pueden almacenar datos en servidores fuera de México, incluido Estados Unidos. Como la mayoría de los sitios web, este sitio también carga fuentes y código desde Google Fonts, jsDelivr y el CDN de Tailwind CSS, que reciben tu dirección IP como parte normal de la solicitud." },
    "privacy.s4.p3": { en: "We do not transfer your personal data to anyone else, unless the law requires it.", es: "No transferimos tus datos personales a nadie más, salvo que la ley lo exija." },
    "privacy.s4.supabase": { en: "<strong>Supabase:</strong> the database that stores the waitlist.", es: "<strong>Supabase:</strong> la base de datos donde se guarda la lista de espera." },
    "privacy.s4.title": { en: "4. Who we share it with", es: "4. Con quién los compartimos" },
    "privacy.s4.vercel": { en: "<strong>Vercel:</strong> hosts the website and provides the analytics described above.", es: "<strong>Vercel:</strong> aloja el sitio web y ofrece la analítica descrita arriba." },
    "privacy.s4.web3forms": { en: "<strong>Web3Forms:</strong> delivers contact form messages to our email inbox.", es: "<strong>Web3Forms:</strong> entrega los mensajes del formulario de contacto a nuestro correo." },
    "privacy.s5.p1": { en: "You can ask to access, rectify or cancel (delete) your personal data, or oppose its use. You can also withdraw your consent or ask to be taken off the waitlist at any time.", es: "Puedes solicitar el acceso, la rectificación o la cancelación (eliminación) de tus datos personales, u oponerte a su uso. También puedes revocar tu consentimiento o pedir que te saquemos de la lista de espera en cualquier momento." },
    "privacy.s5.p2": { en: "To make a request, use our <a class=\"text-primary hover:underline\" href=\"contact.html\">contact form</a>, email <mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PLACEHOLDER: inbox @caborentalapp.com, to be confirmed]</mark>, or call <a class=\"text-primary hover:underline\" href=\"tel:+526245030036\">+52 624 503 0036</a>. Please include your name, the email address you used with us, and what you are asking for. If you want something corrected, tell us the correct information.", es: "Para hacer una solicitud, usa nuestro <a class=\"text-primary hover:underline\" href=\"contact.html\">formulario de contacto</a>, escribe a <mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PENDIENTE: correo @caborentalapp.com, por confirmar]</mark> o llama al <a class=\"text-primary hover:underline\" href=\"tel:+526245030036\">+52 624 503 0036</a>. Incluye tu nombre, el correo que usaste con nosotros y lo que solicitas. Si quieres corregir algo, indícanos la información correcta." },
    "privacy.s5.p3": { en: "We may ask you to confirm that you control the email address. We will reply within 20 business days. If your request is valid, we will carry it out within 15 business days after replying.", es: "Podemos pedirte que confirmes que el correo es tuyo. Te responderemos en un plazo máximo de 20 días hábiles. Si tu solicitud procede, la haremos efectiva dentro de los 15 días hábiles siguientes a nuestra respuesta." },
    "privacy.s5.title": { en: "5. Your rights (ARCO)", es: "5. Tus derechos ARCO" },
    "privacy.s6.p1": { en: "We do not use cookies for tracking or advertising. The site saves your language choice (English or Spanish) in your browser's local storage so it remembers it next time. You can clear it in your browser settings.", es: "No usamos cookies de rastreo ni de publicidad. El sitio guarda tu preferencia de idioma (español o inglés) en el almacenamiento local de tu navegador para recordarla en tu próxima visita. Puedes borrarla desde la configuración de tu navegador." },
    "privacy.s6.title": { en: "6. Cookies and local storage", es: "6. Cookies y almacenamiento local" },
    "privacy.s7.p1": { en: "We keep waitlist entries until the app opens and we have let you know, or until you ask us to remove you, whichever comes first. We keep contact messages for as long as we need them to answer you and follow up. After that, we delete the data.", es: "Conservamos los registros de la lista de espera hasta que abra la app y te hayamos avisado, o hasta que nos pidas que te saquemos, lo que ocurra primero. Conservamos los mensajes de contacto el tiempo necesario para responderte y darte seguimiento. Después, eliminamos los datos." },
    "privacy.s7.title": { en: "7. How long we keep it", es: "7. Cuánto tiempo los conservamos" },
    "privacy.s8.p1": { en: "This website is not meant for people under 18, and we do not knowingly collect their data. If you think a minor has given us their information, contact us and we will delete it.", es: "Este sitio no está dirigido a menores de 18 años y no recabamos sus datos de forma intencional. Si crees que un menor nos dio su información, contáctanos y la eliminaremos." },
    "privacy.s8.title": { en: "8. Minors", es: "8. Menores de edad" },
    "privacy.s9.p1": { en: "If this notice changes, we will post the new version on this page and update the date at the top. If we ever want to use your data for a new purpose, we will ask for your consent first.", es: "Si este aviso cambia, publicaremos la nueva versión en esta página y actualizaremos la fecha de arriba. Si en algún momento queremos usar tus datos para una finalidad nueva, primero te pediremos tu consentimiento." },
    "privacy.s9.title": { en: "9. Changes to this notice", es: "9. Cambios a este aviso" },
    "privacy.title": { en: "Privacy Notice", es: "Aviso de Privacidad" },
    "privacy.updated": { en: "Last updated: October 11, 2026", es: "Última actualización: 11 de octubre de 2026" },
    "problem.eyebrow": { en: "Why we're building this", es: "Por qué lo estamos construyendo" },
    "problem.goalText": { en: "We're designing the app so each address is listed once, with the rent in pesos and the details in one place. When you're interested, you message the owner or agent directly in the app instead of chasing the same unit through five reposts.", es: "Estamos diseñando la app para que cada dirección se publique una sola vez, con la renta en pesos y los detalles en un solo lugar. Si te interesa, le escribes al dueño o al agente directo en la app, en vez de perseguir la misma propiedad entre cinco publicaciones repetidas." },
    "problem.goalTitle": { en: "The rule we're building toward: one address, one listing.", es: "La regla hacia la que vamos: una dirección, una publicación." },
    "problem.of75": { en: "of 75", es: "de 75" },
    "problem.source": { en: "Pilot data from a one-week sample of two Los Cabos rental Facebook groups, October 2–10, 2026. One pull, read by hand.", es: "Datos piloto de una muestra de una semana de dos grupos de Facebook de rentas en Los Cabos, 2 al 10 de octubre de 2026. Una sola revisión, hecha a mano." },
    "problem.stat1": { en: "posts read across the two groups (148 in the larger one over about a week, 51 in the other over about a day).", es: "publicaciones leídas en los dos grupos (148 en el más grande en una semana aprox., 51 en el otro en un día aprox.)." },
    "problem.stat2": { en: "In the larger group, 120 rental posts came down to 75 distinct listings once repeats were merged.", es: "En el grupo más grande, 120 publicaciones de renta se redujeron a 75 propiedades distintas al juntar las repetidas." },
    "problem.stat3": { en: "One 4-bedroom was posted four times in two days.", es: "Una casa de 4 recámaras se publicó cuatro veces en dos días." },
    "problem.stat4": { en: "of those 75 listings didn't state a lease term. Only 33 clearly said long-term.", es: "de esas 75 propiedades no indicaban plazo de contrato. Solo 33 decían claramente largo plazo." },
    "problem.stat5": { en: "posters accounted for 56 of the 120 rental posts.", es: "personas publicaron 56 de las 120 publicaciones de renta." },
    "problem.stat6": { en: "Some posts gave the rent in USD and MXN with figures that didn't match.", es: "Algunas publicaciones daban la renta en USD y en MXN con cifras que no coincidían." },
    "problem.subtitle": { en: "Most long-term rentals in Los Cabos are posted in Facebook groups. In October 2026 we read through two of them, one for about a week and the other for about a day. Here's what we found.", es: "La mayoría de las rentas a largo plazo en Los Cabos se publican en grupos de Facebook. En octubre de 2026 revisamos dos de ellos, uno durante una semana aprox. y el otro durante un día aprox. Esto encontramos." },
    "problem.title": { en: "We read the rental groups so you don't have to.", es: "Leímos los grupos de rentas para que tú no tengas que hacerlo." },
    "renters.cta.subtitle": { en: "Join the waitlist and we'll email you when the app opens.", es: "Únete a la lista y te avisamos por correo cuando abra la app." },
    "renters.cta.title": { en: "Get early access", es: "Obtén acceso anticipado" },
    "renters.faq.a1": { en: "Joining the waitlist is free and nobody is charged for signing up. We'll publish any pricing before launch.", es: "Unirte a la lista es gratis y a nadie se le cobra por registrarse. Publicaremos cualquier precio antes del lanzamiento." },
    "renters.faq.a2": { en: "Cabo San Lucas, San José del Cabo, the Corridor and El Tezal at launch.", es: "Cabo San Lucas, San José del Cabo, el Corredor y El Tezal al lanzar." },
    "renters.faq.a3": { en: "Yes. Message the owner or agent in the app to set up a viewing before you sign anything.", es: "Sí. Escribe al dueño o al agente en la app para agendar una visita antes de firmar cualquier cosa." },
    "renters.faq.a4": { en: "A standard lease drafted for Baja California Sur, in Spanish and English. It covers rent, deposit, term, maintenance and early termination, and you can download it as a PDF.", es: "Un contrato estándar redactado para Baja California Sur, en español e inglés. Cubre renta, depósito, plazo, mantenimiento y terminación anticipada, y lo puedes descargar en PDF." },
    "renters.faq.a5": { en: "You pay the deposit by card in the app when you sign. Monthly rent is arranged directly with your landlord.", es: "Pagas el depósito con tarjeta en la app al firmar. La renta mensual la acuerdas directamente con tu propietario." },
    "renters.faq.q1": { en: "Is it free for renters?", es: "¿Es gratis para inquilinos?" },
    "renters.faq.q2": { en: "Which areas will it cover?", es: "¿Qué zonas va a cubrir?" },
    "renters.faq.q3": { en: "Can I see the place before I sign?", es: "¿Puedo ver el lugar antes de firmar?" },
    "renters.faq.q4": { en: "What lease will I sign?", es: "¿Qué contrato voy a firmar?" },
    "renters.faq.q5": { en: "How does the deposit work?", es: "¿Cómo funciona el depósito?" },
    "renters.features.f1.b1": { en: "Prices in MXN", es: "Precios en MXN" },
    "renters.features.f1.b2": { en: "Filter by bedrooms and move-in date", es: "Filtra por recámaras y fecha de mudanza" },
    "renters.features.f1.b3": { en: "Save the places you like", es: "Guarda los lugares que te gustan" },
    "renters.features.f1.desc": { en: "Search by city or address. Filter by price in pesos, bedrooms and move-in date, and sort by newest or price.", es: "Busca por ciudad o dirección. Filtra por precio en pesos, recámaras y fecha de mudanza, y ordena por lo más nuevo o por precio." },
    "renters.features.f1.title": { en: "Search built for long-term", es: "Búsqueda pensada para largo plazo" },
    "renters.features.f2.b1": { en: "Real-time chat", es: "Chat en tiempo real" },
    "renters.features.f2.b2": { en: "One conversation per listing", es: "Una conversación por propiedad" },
    "renters.features.f2.b3": { en: "Notifications when they reply", es: "Avisos cuando te responden" },
    "renters.features.f2.desc": { en: "Message the landlord or agent in the app. The conversation stays with the listing, so nothing gets lost in Messenger.", es: "Escribe al propietario o al agente en la app. La conversación queda ligada a la propiedad, así nada se pierde en Messenger." },
    "renters.features.f2.title": { en: "Talk to the owner directly", es: "Habla directo con el dueño" },
    "renters.features.f3.b1": { en: "Bilingual lease", es: "Contrato bilingüe" },
    "renters.features.f3.b2": { en: "Sign on your phone", es: "Firma desde tu celular" },
    "renters.features.f3.b3": { en: "Deposit paid by card", es: "Depósito pagado con tarjeta" },
    "renters.features.f3.desc": { en: "Sign a lease drafted for Baja California Sur, in Spanish and English, and download it as a PDF. Pay the deposit by card in the app.", es: "Firma un contrato redactado para Baja California Sur, en español e inglés, y descárgalo en PDF. Paga el depósito con tarjeta en la app." },
    "renters.features.f3.title": { en: "Sign and pay in the app", es: "Firma y paga en la app" },
    "renters.features.title": { en: "What you can do in the app", es: "Lo que puedes hacer en la app" },
    "renters.hero.badge": { en: "For renters", es: "Para inquilinos" },
    "renters.hero.subtitle": { en: "Search long-term listings, message the owner or agent, sign the lease and pay the deposit, all in one app, in English or Spanish.", es: "Busca rentas a largo plazo, escribe al dueño o al agente, firma el contrato y paga el depósito, todo en una app, en español o en inglés." },
    "renters.hero.title": { en: "Find a long-term place in Cabo without the repost hunt.", es: "Encuentra tu renta a largo plazo en Cabo sin buscar entre publicaciones repetidas." },
    "renters.steps.s1.desc": { en: "Filter long-term listings and save the ones you like.", es: "Filtra rentas a largo plazo y guarda las que te gusten." },
    "renters.steps.s1.title": { en: "Search and save", es: "Busca y guarda" },
    "renters.steps.s2.desc": { en: "Chat with the owner or agent and set up a viewing.", es: "Platica con el dueño o el agente y agenda una visita." },
    "renters.steps.s2.title": { en: "Message and visit", es: "Escribe y visita" },
    "renters.steps.s3.desc": { en: "Sign the lease on your phone and pay the deposit by card.", es: "Firma el contrato desde tu celular y paga el depósito con tarjeta." },
    "renters.steps.s3.title": { en: "Sign and pay the deposit", es: "Firma y paga el depósito" },
    "roles.faqTitle": { en: "Questions", es: "Preguntas" },
    "roles.howTitle": { en: "How it works", es: "Cómo funciona" },
    "stats.areas": { en: "Launch areas", es: "Zonas al lanzar" },
    "stats.cost": { en: "Waitlist", es: "Lista de espera" },
    "stats.costValue": { en: "Free", es: "Gratis" },
    "stats.launch": { en: "Launch", es: "Lanzamiento" },
    "stats.launchValue": { en: "Coming soon", es: "Muy pronto" },
    "stats.type": { en: "Rental type", es: "Tipo de renta" },
    "stats.typeValue": { en: "Long-term", es: "Largo plazo" },
    "terms.prelaunch": { en: "Los Cabos Rental App is not live yet. These terms cover only this website. The app will have its own terms when it opens.", es: "Los Cabos Rental App todavía no está disponible. Estos términos cubren solo este sitio web. La app tendrá sus propios términos cuando abra." },
    "terms.s1.p1": { en: "This website is run by <mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PLACEHOLDER: legal name of the operator]</mark> (\"we\"), operating as \"Los Cabos Rental App\". It shares information about a long-term rental app we are building for Los Cabos, and offers a waitlist and a contact form.", es: "Este sitio web es operado por <mark class=\"rounded bg-yellow-200 px-1 text-slate-900\">[PENDIENTE: nombre legal del operador]</mark> (\"nosotros\"), que opera como \"Los Cabos Rental App\". Comparte información sobre una app de rentas a largo plazo que estamos construyendo para Los Cabos, y ofrece una lista de espera y un formulario de contacto." },
    "terms.s1.p2": { en: "No listings, rental applications, payments or leases happen on this website. By using it, you agree to these terms.", es: "En este sitio no se publican propiedades ni se hacen solicitudes de renta, pagos o contratos. Al usarlo, aceptas estos términos." },
    "terms.s1.title": { en: "1. About this website", es: "1. Sobre este sitio web" },
    "terms.s10.p1": { en: "If these terms change, we will post the new version on this page and update the date at the top.", es: "Si estos términos cambian, publicaremos la nueva versión en esta página y actualizaremos la fecha de arriba." },
    "terms.s10.title": { en: "10. Changes", es: "10. Cambios" },
    "terms.s11.title": { en: "11. Contact", es: "11. Contacto" },
    "terms.s2.p1": { en: "Joining the waitlist is free. It does not create an account, a contract or any obligation for you or for us. It does not reserve a property, and it does not guarantee access, a price or a launch date. You can ask to be removed at any time.", es: "Unirte a la lista de espera es gratis. No crea una cuenta, un contrato ni ninguna obligación para ti ni para nosotros. No aparta ninguna propiedad y no garantiza acceso, precio ni fecha de lanzamiento. Puedes pedir que te saquemos de la lista en cualquier momento." },
    "terms.s2.title": { en: "2. The waitlist", es: "2. La lista de espera" },
    "terms.s3.p1": { en: "What we describe about the app, including its features, launch areas and timing, reflects our current plans and may change. We try to keep the site accurate, but it is provided as is. Nothing on it is legal, financial or real estate advice.", es: "Lo que describimos sobre la app, incluidas sus funciones, zonas y fechas de lanzamiento, refleja nuestros planes actuales y puede cambiar. Procuramos que el sitio sea preciso, pero se ofrece tal cual. Nada de su contenido es asesoría legal, financiera o inmobiliaria." },
    "terms.s3.title": { en: "3. Information on this website", es: "3. Información en este sitio" },
    "terms.s4.p1": { en: "Please do not submit false information or someone else's email address, send spam through the forms, or try to disrupt or break the website.", es: "Por favor no envíes información falsa ni el correo de otra persona, no mandes spam a través de los formularios y no intentes interrumpir o dañar el sitio." },
    "terms.s4.title": { en: "4. Using the website", es: "4. Uso del sitio" },
    "terms.s5.p1": { en: "The Los Cabos Rental App name, logo, text and design belong to us or to those who licensed them to us. Please do not copy them for commercial use without our permission.", es: "El nombre, el logotipo, los textos y el diseño de Los Cabos Rental App son nuestros o de quienes nos dieron licencia para usarlos. Por favor no los copies para uso comercial sin nuestro permiso." },
    "terms.s5.title": { en: "5. Content and brand", es: "5. Contenido y marca" },
    "terms.s6.p1": { en: "This website may link to other sites or services. We are not responsible for their content or how they handle your data.", es: "Este sitio puede enlazar a otros sitios o servicios. No somos responsables de su contenido ni de cómo tratan tus datos." },
    "terms.s6.title": { en: "6. Links to other sites", es: "6. Enlaces a otros sitios" },
    "terms.s7.p1": { en: "To the extent the law allows, we are not responsible for losses that result from using this website or relying on its content. Nothing in these terms limits rights you have under Mexican consumer protection law.", es: "En la medida en que la ley lo permita, no somos responsables de pérdidas derivadas del uso de este sitio o de confiar en su contenido. Nada en estos términos limita los derechos que te otorga la legislación mexicana de protección al consumidor." },
    "terms.s7.title": { en: "7. Liability", es: "7. Responsabilidad" },
    "terms.s8.p1": { en: "Our <a href=\"privacy.html\" class=\"text-primary hover:underline\">Privacy Notice</a> explains what data this website collects and how we use it.", es: "Nuestro <a href=\"privacy.html\" class=\"text-primary hover:underline\">Aviso de Privacidad</a> explica qué datos recaba este sitio y cómo los usamos." },
    "terms.s8.title": { en: "8. Privacy", es: "8. Privacidad" },
    "terms.s9.p1": { en: "These terms are governed by the laws of Mexico. Any dispute will be handled by the competent courts of Los Cabos, Baja California Sur. If the English and Spanish versions differ, the Spanish version prevails.", es: "Estos términos se rigen por las leyes de México. Cualquier controversia se resolverá ante los tribunales competentes de Los Cabos, Baja California Sur. Si las versiones en español e inglés difieren, prevalece la versión en español." },
    "terms.s9.title": { en: "9. Governing law", es: "9. Ley aplicable" },
    "terms.title": { en: "Terms of Use", es: "Términos de Uso" },
    "terms.updated": { en: "Last updated: October 11, 2026", es: "Última actualización: 11 de octubre de 2026" },
    "value.agents.desc": { en: "Keep your listings, leads and commissions in one place. Chat with renters, move each lead through the pipeline, and send the lease for signature from your phone.", es: "Ten tus propiedades, prospectos y comisiones en un solo lugar. Platica con inquilinos, mueve cada prospecto en el pipeline y envía el contrato a firma desde tu celular." },
    "value.agents.feature1": { en: "Lead pipeline for every listing", es: "Pipeline de prospectos por propiedad" },
    "value.agents.feature2": { en: "Commission tracking", es: "Registro de comisiones" },
    "value.agents.title": { en: "For agents", es: "Para agentes" },
    "value.eyebrow": { en: "Who it's for", es: "Para quién es" },
    "value.landlords.desc": { en: "Post your place once with photos and the rent in pesos. Every inquiry lands in one list, from first message to signed lease, instead of scattered across Messenger and WhatsApp.", es: "Publica tu propiedad con fotos y la renta en pesos. Cada solicitud llega a una sola lista, del primer mensaje al contrato firmado, en vez de quedar regada entre Messenger y WhatsApp." },
    "value.landlords.feature1": { en: "Track every inquiry to a signed lease", es: "Sigue cada solicitud hasta el contrato firmado" },
    "value.landlords.feature2": { en: "Bilingual lease drafted for Baja California Sur", es: "Contrato bilingüe redactado para Baja California Sur" },
    "value.landlords.title": { en: "For landlords", es: "Para propietarios" },
    "value.renters.desc": { en: "Search by city or address and filter by price, bedrooms and move-in date. Save the places you like, message the owner or agent, and sign the lease in the app.", es: "Busca por ciudad o dirección y filtra por precio, recámaras y fecha de mudanza. Guarda los lugares que te gusten, escribe al dueño o al agente y firma el contrato en la app." },
    "value.renters.feature1": { en: "Prices in pesos, filters that matter", es: "Precios en pesos y filtros útiles" },
    "value.renters.feature2": { en: "Lease in English and Spanish, deposit paid in the app", es: "Contrato en español e inglés, depósito pagado en la app" },
    "value.renters.title": { en: "For renters", es: "Para inquilinos" },
    "value.subtitle": { en: "Everyday long-term rentals: studios, apartments and houses. Each role gets its own view of the same listing.", es: "Rentas a largo plazo del día a día: estudios, departamentos y casas. Cada rol tiene su propia vista de la misma propiedad." },
    "value.title": { en: "Built for renters, landlords and agents", es: "Hecha para inquilinos, propietarios y agentes" },
    "waitlist.badge": { en: "Coming soon", es: "Muy pronto" },
    "waitlist.fineprint": { en: "Free. No spam. Unsubscribe anytime.", es: "Gratis. Sin spam. Date de baja cuando quieras." },
    "waitlist.role.agent": { en: "Agent", es: "Agente" },
    "waitlist.role.agent.desc": { en: "Managing listings", es: "Manejo propiedades" },
    "waitlist.role.landlord": { en: "Landlord", es: "Propietario" },
    "waitlist.role.landlord.desc": { en: "Renting out a property", es: "Rento una propiedad" },
    "waitlist.role.renter": { en: "Renter", es: "Inquilino" },
    "waitlist.role.renter.desc": { en: "Looking for a home", es: "Busco dónde vivir" },
    "waitlist.roleLegend": { en: "I am a", es: "Soy" },
    "waitlist.subtitle": { en: "Free to join. We'll email you once, when the app opens. Tell us which describes you:", es: "Es gratis. Te escribimos una vez, cuando abra la app. Dinos qué te describe mejor:" },
    "waitlist.title": { en: "Be the first to know", es: "Entérate primero" }
  };
;
;

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyTranslations(lang) {
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        el.textContent = entry[lang];
      }
    }

    var htmlElements = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlElements.length; j++) {
      var el2 = htmlElements[j];
      var key2 = el2.getAttribute("data-i18n-html");
      var entry2 = translations[key2];
      if (entry2 && entry2[lang] !== undefined) {
        el2.innerHTML = entry2[lang];
      }
    }

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var k = 0; k < placeholders.length; k++) {
      var el3 = placeholders[k];
      var key3 = el3.getAttribute("data-i18n-placeholder");
      var entry3 = translations[key3];
      if (entry3 && entry3[lang] !== undefined) {
        el3.setAttribute("placeholder", entry3[lang]);
      }
    }

    var ariaElements = document.querySelectorAll("[data-i18n-aria]");
    for (var m = 0; m < ariaElements.length; m++) {
      var entry4 = translations[ariaElements[m].getAttribute("data-i18n-aria")];
      if (entry4 && entry4[lang] !== undefined) {
        ariaElements[m].setAttribute("aria-label", entry4[lang]);
      }
    }

    var toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
      var label = toggleBtn.querySelector(".lang-label");
      if (label) {
        label.textContent = lang.toUpperCase();
      }
    }

    document.documentElement.lang = lang;
  }

  function toggleLanguage() {
    var current = getLang();
    var next = current === "en" ? "es" : "en";
    setLang(next);
    applyTranslations(next);
  }

  window.toggleLanguage = toggleLanguage;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyTranslations(getLang());
    });
  } else {
    applyTranslations(getLang());
  }
})();
