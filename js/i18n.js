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
    "privacy.s1.title": { en: "1. Information We Collect", es: "1. Informacion que Recopilamos" },
    "privacy.s10.title": { en: "10. International Data Transfers", es: "10. Transferencias Internacionales de Datos" },
    "privacy.s11.title": { en: "11. Changes to This Policy", es: "11. Cambios a Esta Politica" },
    "privacy.s12.title": { en: "12. Contact Us", es: "12. Contactenos" },
    "privacy.s2.title": { en: "2. How We Use Your Information", es: "2. Como Utilizamos Tu Informacion" },
    "privacy.s3.title": { en: "3. Information Sharing & Disclosure", es: "3. Comparticion y Divulgacion de Informacion" },
    "privacy.s4.title": { en: "4. Data Security", es: "4. Seguridad de los Datos" },
    "privacy.s5.title": { en: "5. Your Rights", es: "5. Tus Derechos" },
    "privacy.s6.title": { en: "6. Cookies & Tracking", es: "6. Cookies y Rastreo" },
    "privacy.s7.title": { en: "7. Third-Party Services", es: "7. Servicios de Terceros" },
    "privacy.s8.title": { en: "8. Data Retention", es: "8. Retencion de Datos" },
    "privacy.s9.title": { en: "9. Children's Privacy", es: "9. Privacidad de Menores" },
    "privacy.title": { en: "Privacy Policy", es: "Politica de Privacidad" },
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
    "terms.s1.title": { en: "1. Acceptance of Terms", es: "1. Aceptacion de los Terminos" },
    "terms.s10.title": { en: "10. Dispute Resolution", es: "10. Resolucion de Disputas" },
    "terms.s11.title": { en: "11. Governing Law", es: "11. Ley Aplicable" },
    "terms.s12.title": { en: "12. Changes to Terms", es: "12. Cambios a los Terminos" },
    "terms.s13.title": { en: "13. Contact Information", es: "13. Informacion de Contacto" },
    "terms.s2.title": { en: "2. Description of Service", es: "2. Descripcion del Servicio" },
    "terms.s3.title": { en: "3. User Accounts & Registration", es: "3. Cuentas de Usuario y Registro" },
    "terms.s4.title": { en: "4. Rental Listings & Transactions", es: "4. Listados de Renta y Transacciones" },
    "terms.s5.title": { en: "5. Agent Program Terms", es: "5. Terminos del Programa de Agentes" },
    "terms.s6.title": { en: "6. Payments & Fees", es: "6. Pagos y Tarifas" },
    "terms.s7.title": { en: "7. User Conduct & Prohibited Activities", es: "7. Conducta del Usuario y Actividades Prohibidas" },
    "terms.s8.title": { en: "8. Intellectual Property", es: "8. Propiedad Intelectual" },
    "terms.s9.title": { en: "9. Limitation of Liability", es: "9. Limitacion de Responsabilidad" },
    "terms.title": { en: "Terms of Service", es: "Terminos de Servicio" },
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
