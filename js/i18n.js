(function () {
  "use strict";

  var STORAGE_KEY = "lcra-lang";

  var translations = {
    // ===== SHARED (nav, footer, buttons used across pages) =====

    // Index page nav
    "nav.renters": { en: "Renters", es: "Inquilinos" },
    "nav.landlords": { en: "Landlords", es: "Propietarios" },
    "nav.agents": { en: "Agents", es: "Agentes" },
    "nav.howItWorks": { en: "How it Works", es: "Como Funciona" },
    "nav.areas": { en: "Areas", es: "Zonas" },

    // Blog page nav
    "nav.findRental": { en: "Find a Rental", es: "Buscar Renta" },
    "nav.listProperty": { en: "List a Property", es: "Publicar Propiedad" },
    "nav.blog": { en: "Blog", es: "Blog" },
    "nav.contact": { en: "Contact", es: "Contacto" },

    // Location page nav
    "nav.rentals": { en: "Rentals", es: "Rentas" },
    "nav.neighborhoods": { en: "Neighborhoods", es: "Vecindarios" },
    "nav.stats": { en: "Stats", es: "Estadisticas" },
    "nav.faq": { en: "FAQ", es: "Preguntas" },

    // Common buttons
    "cta.getStarted": { en: "Get Started", es: "Comenzar" },
    "cta.login": { en: "Log in", es: "Iniciar Sesion" },
    "cta.signUp": { en: "Sign Up", es: "Registrarse" },
    "cta.joinWaitlist": { en: "Join Waitlist", es: "Unirse a la Lista" },
    "cta.joinTheWaitlist": { en: "Join the Waitlist", es: "Unirse a la Lista" },

    // Placeholders
    "placeholder.email": { en: "Your email", es: "Tu correo" },
    "placeholder.enterEmail": { en: "Enter your email", es: "Ingresa tu correo" },
    "placeholder.searchArticles": { en: "Search articles...", es: "Buscar articulos..." },
    "placeholder.searchAreas": { en: "Search areas...", es: "Buscar zonas..." },
    "placeholder.emailShort": { en: "Email", es: "Correo" },

    // ===== INDEX PAGE =====

    // Hero
    "hero.badge": { en: "Luxury Long-Term Living", es: "Vida de Lujo a Largo Plazo" },
    "hero.title": { en: "Your Long-Term Home in", es: "Tu Hogar a Largo Plazo en" },
    "hero.titleHighlight": { en: "Paradise", es: "Paraiso" },
    "hero.titleEnd": { en: "Awaits", es: "Te Espera" },
    "hero.subtitle": {
      en: "Premium rental platform for curated long-term stays across the Los Cabos region, from San Jose del Cabo to Cabo San Lucas.",
      es: "Plataforma premium de rentas curadas a largo plazo en la region de Los Cabos, desde San Jose del Cabo hasta Cabo San Lucas."
    },
    "cta.browseRentals": { en: "Browse Rentals", es: "Ver Rentas" },
    "cta.listYourProperty": { en: "List Your Property", es: "Publicar Tu Propiedad" },

    // Value Proposition
    "value.title": { en: "Tailored for the Baja Lifestyle", es: "Hecho a Medida para el Estilo de Vida Baja" },
    "value.subtitle": {
      en: "Exclusive solutions for renters, property owners, and agents in the most desirable Mexican peninsula.",
      es: "Soluciones exclusivas para inquilinos, propietarios y agentes en la peninsula mexicana mas deseada."
    },
    "value.renters.title": { en: "For Renters", es: "Para Inquilinos" },
    "value.renters.desc": {
      en: "Find vetted, high-end long-term stays. Our platform ensures verified listings, digital lease agreements, and transparent communication with property owners.",
      es: "Encuentra estancias a largo plazo de alta gama verificadas. Nuestra plataforma asegura listados verificados, contratos digitales y comunicacion transparente con propietarios."
    },
    "value.renters.feature1": { en: "Verified Luxury Listings", es: "Listados de Lujo Verificados" },
    "value.renters.feature2": { en: "Secure Digital Contracts", es: "Contratos Digitales Seguros" },
    "value.landlords.title": { en: "For Landlords", es: "Para Propietarios" },
    "value.landlords.desc": {
      en: "Maximize your investment with high-quality, long-term tenants. Collect rent online, sign digital leases, and communicate with tenants effortlessly.",
      es: "Maximiza tu inversion con inquilinos de alta calidad a largo plazo. Cobra renta en linea, firma contratos digitales y comunicate con tus inquilinos facilmente."
    },
    "value.landlords.feature1": { en: "Online Rent Collection", es: "Cobro de Renta en Linea" },
    "value.landlords.feature2": { en: "Digital Lease Agreements", es: "Contratos de Arrendamiento Digitales" },
    "value.agents.title": { en: "For Agents", es: "Para Agentes" },
    "value.agents.desc": {
      en: "Grow your rental business by connecting landlords with qualified tenants. Manage listings on behalf of property owners and build your client base.",
      es: "Haz crecer tu negocio de rentas conectando propietarios con inquilinos calificados. Administra listados en nombre de propietarios y construye tu cartera de clientes."
    },
    "value.agents.feature1": { en: "Manage Listings for Owners", es: "Administra Listados para Propietarios" },
    "value.agents.feature2": { en: "Connect Landlords with Tenants", es: "Conecta Propietarios con Inquilinos" },

    // How it Works
    "howItWorks.title": { en: "How Los Cabos Rental App Works", es: "Como Funciona Los Cabos Rental App" },
    "howItWorks.step1.title": { en: "Discover & Apply", es: "Descubre y Aplica" },
    "howItWorks.step1.desc": {
      en: "Browse exclusive long-term listings across the Los Cabos region. Submit your digital application in minutes.",
      es: "Explora listados exclusivos a largo plazo en toda la region de Los Cabos. Envia tu solicitud digital en minutos."
    },
    "howItWorks.step2.title": { en: "Review & Sign", es: "Revisa y Firma" },
    "howItWorks.step2.desc": {
      en: "Review your lease details and sign your legally binding Mexican rental contract digitally from anywhere.",
      es: "Revisa los detalles de tu contrato y firma tu contrato de renta mexicano legalmente vinculante digitalmente desde cualquier lugar."
    },
    "howItWorks.step3.title": { en: "Move-in & Enjoy", es: "Mudanza y Disfruta" },
    "howItWorks.step3.desc": {
      en: "Get your keys and start your life in paradise. Manage payments and maintenance through our seamless mobile app.",
      es: "Recibe tus llaves y comienza tu vida en el paraiso. Administra pagos y mantenimiento a traves de nuestra app movil."
    },

    // Map / Areas
    "areas.title": { en: "Explore Top Locations", es: "Explora Las Mejores Ubicaciones" },
    "areas.subtitle": {
      en: "From the beaches of Cabo San Lucas to the art district of San Jose del Cabo, discover the neighborhood that fits your lifestyle across the Los Cabos region.",
      es: "Desde las playas de Cabo San Lucas hasta el distrito de arte de San Jose del Cabo, descubre el vecindario que se adapte a tu estilo de vida en toda la region de Los Cabos."
    },

    // Footer (index)
    "footer.desc": {
      en: "The premier platform for long-term rentals in Baja California Sur. We bridge the gap between premium tenants and property owners.",
      es: "La plataforma premier para rentas a largo plazo en Baja California Sur. Conectamos inquilinos premium con propietarios."
    },
    "footer.waitlistLabel": { en: "App coming soon. Join the waitlist:", es: "App disponible pronto. Unete a la lista:" },

    // Waitlist section
    "waitlist.title": { en: "Be the first to know", es: "Se el primero en saber" },
    "waitlist.subtitle": { en: "Join the waitlist and get early access to the premier long-term rental platform in Los Cabos. Select your role below.", es: "Unete a la lista y obtén acceso anticipado a la plataforma de rentas a largo plazo en Los Cabos. Selecciona tu rol." },
    "waitlist.role.renter": { en: "Renter", es: "Inquilino" },
    "waitlist.role.renter.desc": { en: "Looking for a home", es: "Buscando un hogar" },
    "waitlist.role.landlord": { en: "Landlord", es: "Propietario" },
    "waitlist.role.landlord.desc": { en: "Listing a property", es: "Publicando una propiedad" },
    "waitlist.role.agent": { en: "Agent", es: "Agente" },
    "waitlist.role.agent.desc": { en: "Managing listings", es: "Administrando listados" },
    "footer.quickLinks": { en: "Quick Links", es: "Enlaces Rapidos" },
    "footer.searchRentals": { en: "Search Rentals", es: "Buscar Rentas" },
    "footer.listPropertyLink": { en: "List Property", es: "Publicar Propiedad" },
    "footer.resources": { en: "Resources", es: "Recursos" },
    "footer.termsOfService": { en: "Terms of Service", es: "Terminos de Servicio" },
    "footer.destinations": { en: "Destinations", es: "Destinos" },
    "footer.copyright": {
      en: "\u00a9 2025 Los Cabos Rental App. All rights reserved. Made for the Baja sun.",
      es: "\u00a9 2025 Los Cabos Rental App. Todos los derechos reservados. Hecho para el sol de Baja."
    },

    // ===== BLOG PAGE =====

    // Breadcrumbs
    "blog.breadcrumb.home": { en: "Home", es: "Inicio" },
    "blog.breadcrumb.blog": { en: "Blog", es: "Blog" },
    "blog.breadcrumb.current": { en: "Relocation Guide", es: "Guia de Reubicacion" },

    // Sidebar CTA
    "blog.sidebar.ctaTitle": { en: "Find Your Home Faster", es: "Encuentra Tu Hogar Mas Rapido" },
    "blog.sidebar.ctaDesc": {
      en: "Our app is launching soon. Join the waitlist to get early access to exclusive long-term listings.",
      es: "Nuestra app se lanza pronto. Unete a la lista de espera para acceso anticipado a listados exclusivos a largo plazo."
    },
    "blog.sidebar.trendingTitle": { en: "Trending Now", es: "Tendencias" },

    // Related Articles
    "blog.related.title": { en: "Related Articles", es: "Articulos Relacionados" },
    "blog.related.category1": { en: "Community", es: "Comunidad" },
    "blog.related.category2": { en: "Lifestyle", es: "Estilo de Vida" },
    "blog.related.category3": { en: "Legal", es: "Legal" },

    // Blog footer
    "blog.footer.desc": {
      en: "The ultimate platform for long-term luxury stays in Baja California Sur. Connecting verified owners with premium tenants.",
      es: "La plataforma definitiva para estancias de lujo a largo plazo en Baja California Sur. Conectando propietarios verificados con inquilinos premium."
    },
    "blog.footer.explore": { en: "Explore", es: "Explorar" },
    "blog.footer.sanJose": { en: "San Jose del Cabo", es: "San Jose del Cabo" },
    "blog.footer.caboSanLucas": { en: "Cabo San Lucas", es: "Cabo San Lucas" },
    "blog.footer.theCorridor": { en: "The Corridor", es: "El Corredor" },
    "blog.footer.luxuryVillas": { en: "Luxury Villas", es: "Villas de Lujo" },
    "blog.footer.company": { en: "Company", es: "Empresa" },
    "blog.footer.aboutUs": { en: "About Us", es: "Sobre Nosotros" },
    "blog.footer.careers": { en: "Careers", es: "Carreras" },
    "blog.footer.partnerWithUs": { en: "Partner With Us", es: "Asociate Con Nosotros" },
    "blog.footer.contact": { en: "Contact", es: "Contacto" },
    "blog.footer.support": { en: "Support", es: "Soporte" },
    "blog.footer.helpCenter": { en: "Help Center", es: "Centro de Ayuda" },
    "blog.footer.privacyPolicy": { en: "Privacy Policy", es: "Politica de Privacidad" },
    "blog.footer.termsOfService": { en: "Terms of Service", es: "Terminos de Servicio" },
    "blog.footer.rentalSafety": { en: "Rental Safety", es: "Seguridad de Rentas" },
    "blog.footer.copyright": {
      en: "\u00a9 2025 Los Cabos Rental App. All rights reserved.",
      es: "\u00a9 2025 Los Cabos Rental App. Todos los derechos reservados."
    },
    "blog.footer.tagline": { en: "Designed for the modern expat.", es: "Disenado para el expatriado moderno." },
    "blog.footer.langButton": { en: "English (US)", es: "Espanol (MX)" },

    // ===== LOCATION PAGE =====

    // Hero
    "location.hero.badge": { en: "Premium Living in Baja", es: "Vida Premium en Baja" },
    "location.hero.titleStart": { en: "Find Your Long-Term Sanctuary in", es: "Encuentra Tu Santuario a Largo Plazo en" },
    "location.hero.subtitle": {
      en: "Experience the perfect blend of coastal luxury and vibrant desert living in Mexico's most prestigious destination.",
      es: "Experimenta la mezcla perfecta de lujo costero y vibrante vida desertica en el destino mas prestigioso de Mexico."
    },
    "cta.exploreRentals": { en: "Explore Rentals", es: "Explorar Rentas" },
    "cta.learnAboutAreas": { en: "Learn About Areas", es: "Conocer las Zonas" },

    // Stats Bar
    "stats.averageRent": { en: "Average Rent", es: "Renta Promedio" },
    "stats.popularity": { en: "Popularity", es: "Popularidad" },
    "stats.highDemand": { en: "High Demand Area", es: "Zona de Alta Demanda" },
    "stats.safetyRating": { en: "Safety Rating", es: "Calificacion de Seguridad" },
    "stats.excellentSecurity": { en: "Excellent Security", es: "Seguridad Excelente" },

    // Neighborhood Explorer
    "neighborhood.title": { en: "Neighborhood Explorer", es: "Explorador de Vecindarios" },
    "neighborhood.subtitle": {
      en: "Discover the distinct vibes of Cabo's most desirable communities.",
      es: "Descubre las vibras unicas de las comunidades mas deseadas de Cabo."
    },
    "neighborhood.viewMap": { en: "View Map", es: "Ver Mapa" },

    // Cards
    "neighborhood.pedregal.badge": { en: "Exclusive", es: "Exclusivo" },
    "neighborhood.pedregal.desc": {
      en: "The original luxury community. Experience ultra-luxury cliffside villas with private Pacific views and gated mountain security.",
      es: "La comunidad de lujo original. Experimenta villas ultra-lujosas en acantilados con vistas privadas al Pacifico y seguridad con acceso controlado."
    },
    "neighborhood.pedregal.feat1": { en: "Private Beach", es: "Playa Privada" },
    "neighborhood.pedregal.feat2": { en: "24/7 Gated", es: "Acceso Controlado 24/7" },
    "neighborhood.elTezal.badge": { en: "Popular", es: "Popular" },
    "neighborhood.elTezal.desc": {
      en: "Modern developments with San Lucas Bay vistas. Family-friendly vibes close to international schools and essential shopping.",
      es: "Desarrollos modernos con vistas a la Bahia de San Lucas. Ambiente familiar cerca de escuelas internacionales y comercios esenciales."
    },
    "neighborhood.elTezal.feat1": { en: "Near Schools", es: "Cerca de Escuelas" },
    "neighborhood.elTezal.feat2": { en: "Commercial Hub", es: "Centro Comercial" },
    "neighborhood.elTezal.status": { en: "Developing", es: "En Desarrollo" },
    "neighborhood.corridor.status": { en: "Resort Life", es: "Vida de Resort" },
    "neighborhood.corridor.desc": {
      en: "The prestigious 20-mile strip connecting San Lucas and San Jose. Home to the most famous golf courses and luxury beachfront estates.",
      es: "La prestigiosa franja de 32 km que conecta San Lucas y San Jose. Hogar de los campos de golf mas famosos y propiedades de lujo frente al mar."
    },
    "neighborhood.corridor.feat1": { en: "World-Class Golf", es: "Golf de Clase Mundial" },
    "neighborhood.corridor.feat2": { en: "Oceanfront", es: "Frente al Mar" },

    // FAQ
    "faq.title": { en: "Common Questions", es: "Preguntas Frecuentes" },
    "faq.subtitle": {
      en: "Everything you need to know about long-term rentals in Cabo.",
      es: "Todo lo que necesitas saber sobre rentas a largo plazo en Cabo."
    },
    "faq.q1": { en: "What is the typical lease duration?", es: "Cual es la duracion tipica del contrato?" },
    "faq.a1": {
      en: "Most long-term rentals in Cabo San Lucas require a minimum commitment of 6 to 12 months. Short-term \"snowbird\" rentals are available but usually come at a premium during the winter season.",
      es: "La mayoria de las rentas a largo plazo en Cabo San Lucas requieren un compromiso minimo de 6 a 12 meses. Las rentas de corto plazo estan disponibles pero generalmente tienen un costo premium durante la temporada de invierno."
    },
    "faq.q2": { en: "Are utilities typically included in the rent?", es: "Los servicios estan tipicamente incluidos en la renta?" },
    "faq.q3": { en: "Do I need a Mexican bank account for rent payments?", es: "Necesito una cuenta bancaria mexicana para pagar la renta?" },

    // CTA Section
    "location.cta.title": { en: "Ready to find your Cabo home?", es: "Listo para encontrar tu hogar en Cabo?" },
    "location.cta.subtitle": {
      en: "Join the waitlist for the Los Cabos Rental App and get exclusive early access to premium listings and local insights.",
      es: "Unete a la lista de espera de Los Cabos Rental App y obtiene acceso anticipado exclusivo a listados premium e informacion local."
    },

    // Location Footer
    "location.footer.desc": {
      en: "The #1 source for long-term luxury rentals in Cabo San Lucas and San Jose del Cabo. Dedicated to finding your perfect Baja sanctuary.",
      es: "La fuente #1 para rentas de lujo a largo plazo en Cabo San Lucas y San Jose del Cabo. Dedicados a encontrar tu santuario perfecto en Baja."
    },
    "location.footer.explore": { en: "Explore", es: "Explorar" },
    "location.footer.allRentals": { en: "All Rentals", es: "Todas las Rentas" },
    "location.footer.featuredVillas": { en: "Featured Villas", es: "Villas Destacadas" },
    "location.footer.newCondos": { en: "New Condos", es: "Condos Nuevos" },
    "location.footer.petFriendly": { en: "Pet Friendly", es: "Acepta Mascotas" },
    "location.footer.resources": { en: "Resources", es: "Recursos" },
    "location.footer.rentalGuide": { en: "Rental Guide", es: "Guia de Rentas" },
    "location.footer.relocationServices": { en: "Relocation Services", es: "Servicios de Reubicacion" },
    "location.footer.legalRequirements": { en: "Legal Requirements", es: "Requisitos Legales" },
    "location.footer.neighborhoodStats": { en: "Neighborhood Stats", es: "Estadisticas de Vecindarios" },
    "location.footer.newsletter": { en: "Newsletter", es: "Boletin" },
    "location.footer.newsletterDesc": {
      en: "Get local market updates and new listing alerts.",
      es: "Recibe actualizaciones del mercado local y alertas de nuevos listados."
    },
    "location.footer.copyright": {
      en: "\u00a9 2025 Los Cabos Rental App. All rights reserved.",
      es: "\u00a9 2025 Los Cabos Rental App. Todos los derechos reservados."
    },
    "location.footer.privacyPolicy": { en: "Privacy Policy", es: "Politica de Privacidad" },
    "location.footer.termsOfService": { en: "Terms of Service", es: "Terminos de Servicio" },

    // ===== RENTALS PAGE =====

    // Search hero
    "rentals.hero.title": { en: "Find Your Long-Term Home in Los Cabos", es: "Encuentra Tu Hogar a Largo Plazo en Los Cabos" },
    "rentals.hero.subtitle": {
      en: "Browse verified luxury rentals across Cabo San Lucas, San Jose del Cabo, and the Corridor",
      es: "Explora rentas de lujo verificadas en Cabo San Lucas, San Jose del Cabo y el Corredor"
    },

    // Filter labels
    "rentals.filter.location": { en: "Location", es: "Ubicacion" },
    "rentals.filter.propertyType": { en: "Property Type", es: "Tipo de Propiedad" },
    "rentals.filter.bedrooms": { en: "Bedrooms", es: "Recamaras" },
    "rentals.filter.priceRange": { en: "Price Range", es: "Rango de Precio" },
    "rentals.filter.allAreas": { en: "All Areas", es: "Todas las Zonas" },
    "rentals.filter.allTypes": { en: "All Types", es: "Todos los Tipos" },
    "rentals.filter.any": { en: "Any", es: "Cualquiera" },
    "rentals.search.button": { en: "Search", es: "Buscar" },

    // Results header
    "rentals.results.count": {
      en: "<span class=\"font-bold text-ocean-deep dark:text-white\">24 properties</span> found",
      es: "<span class=\"font-bold text-ocean-deep dark:text-white\">24 propiedades</span> encontradas"
    },
    "rentals.results.sortBy": { en: "Sort by:", es: "Ordenar por:" },
    "rentals.sort.featured": { en: "Featured", es: "Destacados" },
    "rentals.sort.priceLow": { en: "Price: Low to High", es: "Precio: Menor a Mayor" },
    "rentals.sort.priceHigh": { en: "Price: High to Low", es: "Precio: Mayor a Menor" },
    "rentals.sort.newest": { en: "Newest", es: "Mas Recientes" },

    // Property card labels
    "rentals.card.verified": { en: "Verified", es: "Verificado" },
    "rentals.card.viewDetails": { en: "View Details", es: "Ver Detalles" },
    "rentals.card.perMonth": { en: "/month", es: "/mes" },
    "rentals.card.bd": { en: "bd", es: "rec" },
    "rentals.card.ba": { en: "ba", es: "ba" },
    "rentals.card.sqft": { en: "sqft", es: "m\u00b2" },

    // Pagination
    "rentals.pagination.previous": { en: "Previous", es: "Anterior" },
    "rentals.pagination.next": { en: "Next", es: "Siguiente" },

    // CTA section
    "rentals.cta.title": { en: "Can't find what you're looking for?", es: "No encuentras lo que buscas?" },
    "rentals.cta.subtitle": {
      en: "Our local agents specialize in off-market properties. Tell us what you need.",
      es: "Nuestros agentes locales se especializan en propiedades fuera del mercado. Dinos lo que necesitas."
    },
    "rentals.cta.getMatched": { en: "Get Matched", es: "Conectarme" },

    // ===== RENTERS PAGE =====

    "renters.hero.badge": { en: "For Renters", es: "Para Inquilinos" },
    "renters.hero.title": { en: "Find Your Long-Term Home in <span class=\"text-accent-sunset\">Los Cabos</span>", es: "Encuentra Tu Hogar a Largo Plazo en <span class=\"text-accent-sunset\">Los Cabos</span>" },
    "renters.hero.subtitle": { en: "Browse verified luxury rentals with digital leases, secure payments, and bilingual support. The smarter way to rent in paradise.", es: "Explora rentas de lujo verificadas con contratos digitales, pagos seguros y soporte bilingue. La forma mas inteligente de rentar en el paraiso." },
    "renters.hero.cta": { en: "Browse Rentals", es: "Explorar Rentas" },
    "renters.hero.ctaSecondary": { en: "How It Works", es: "Como Funciona" },
    "renters.benefits.title": { en: "Why Rent Through Us", es: "Por Que Rentar Con Nosotros" },
    "renters.benefits.subtitle": { en: "We have reimagined the rental experience for long-term living in Baja California Sur.", es: "Hemos reinventado la experiencia de renta para vivir a largo plazo en Baja California Sur." },
    "renters.benefits.verified.title": { en: "Verified Listings", es: "Listados Verificados" },
    "renters.benefits.verified.desc": { en: "Every property is personally inspected and verified by our local team. No surprises, no scams, no misleading photos. What you see is what you get.", es: "Cada propiedad es inspeccionada y verificada personalmente por nuestro equipo local. Sin sorpresas, sin estafas, sin fotos enganosas. Lo que ves es lo que obtienes." },
    "renters.benefits.verified.feature1": { en: "In-person property inspections", es: "Inspecciones de propiedad en persona" },
    "renters.benefits.verified.feature2": { en: "Verified owner identity", es: "Identidad del propietario verificada" },
    "renters.benefits.verified.feature3": { en: "Accurate photos & descriptions", es: "Fotos y descripciones precisas" },
    "renters.benefits.digital.title": { en: "Digital Leases", es: "Contratos Digitales" },
    "renters.benefits.digital.desc": { en: "Sign your Mexican rental contract securely online. Bilingual agreements in English and Spanish, legally binding under Mexican federal law, stored digitally for your records.", es: "Firma tu contrato de arrendamiento mexicano de forma segura en linea. Acuerdos bilingues en ingles y espanol, legalmente vinculantes bajo la ley federal mexicana, almacenados digitalmente." },
    "renters.benefits.digital.feature1": { en: "Bilingual contracts (EN/ES)", es: "Contratos bilingues (EN/ES)" },
    "renters.benefits.digital.feature2": { en: "Legally binding e-signatures", es: "Firmas electronicas legalmente vinculantes" },
    "renters.benefits.digital.feature3": { en: "Cloud-stored for easy access", es: "Almacenados en la nube para facil acceso" },
    "renters.benefits.secure.title": { en: "Secure Payments", es: "Pagos Seguros" },
    "renters.benefits.secure.desc": { en: "Pay rent securely through our platform. Automatic monthly collection, deposit escrow protection, and detailed payment history. No more cash transactions or bank transfer confusion.", es: "Paga la renta de forma segura a traves de nuestra plataforma. Cobro mensual automatico, proteccion de deposito en fideicomiso e historial detallado de pagos. Sin mas transacciones en efectivo." },
    "renters.benefits.secure.feature1": { en: "Automated monthly payments", es: "Pagos mensuales automatizados" },
    "renters.benefits.secure.feature2": { en: "Deposit held in escrow", es: "Deposito en fideicomiso" },
    "renters.benefits.secure.feature3": { en: "Full payment history & receipts", es: "Historial completo de pagos y recibos" },
    "renters.howItWorks.title": { en: "How It Works", es: "Como Funciona" },
    "renters.howItWorks.subtitle": { en: "Three simple steps to finding your perfect long-term home in Los Cabos.", es: "Tres sencillos pasos para encontrar tu hogar perfecto a largo plazo en Los Cabos." },
    "renters.howItWorks.step1.title": { en: "Browse & Filter", es: "Explora y Filtra" },
    "renters.howItWorks.step1.desc": { en: "Search verified listings by neighborhood, price, bedrooms, and amenities. Save your favorites and set alerts for new properties that match your criteria.", es: "Busca listados verificados por colonia, precio, recamaras y amenidades. Guarda tus favoritos y configura alertas para nuevas propiedades que coincidan con tus criterios." },
    "renters.howItWorks.step2.title": { en: "Apply & Get Approved", es: "Aplica y Obten Aprobacion" },
    "renters.howItWorks.step2.desc": { en: "Submit your application with ID verification in minutes. Our platform handles background checks and connects you directly with the property owner or their agent.", es: "Envia tu solicitud con verificacion de identidad en minutos. Nuestra plataforma maneja verificaciones de antecedentes y te conecta directamente con el propietario o su agente." },
    "renters.howItWorks.step3.title": { en: "Sign & Move In", es: "Firma y Mudate" },
    "renters.howItWorks.step3.desc": { en: "E-sign your bilingual lease, pay your deposit through our secure escrow system, and get your keys. Welcome to your new home in paradise.", es: "Firma electronicamente tu contrato bilingue, paga tu deposito a traves de nuestro sistema seguro de fideicomiso y recibe tus llaves. Bienvenido a tu nuevo hogar en el paraiso." },
    "renters.featured.title": { en: "Featured Properties", es: "Propiedades Destacadas" },
    "renters.featured.subtitle": { en: "Hand-picked listings from our verified collection. Updated weekly.", es: "Listados seleccionados de nuestra coleccion verificada. Actualizados semanalmente." },
    "renters.featured.viewAll": { en: "View All Rentals", es: "Ver Todas las Rentas" },
    "renters.testimonials.title": { en: "What Renters Say", es: "Lo que Dicen los Inquilinos" },
    "renters.testimonials.subtitle": { en: "Real stories from people who found their home in Los Cabos through our platform.", es: "Historias reales de personas que encontraron su hogar en Los Cabos a traves de nuestra plataforma." },
    "renters.testimonials.review1.text": { en: "\"We moved from Austin and were nervous about renting sight-unseen in Mexico. The verified listings gave us total confidence. Our condo in El Tezal was exactly as described, and the digital lease made everything so easy.\"", es: "\"Nos mudamos desde Austin y estabamos nerviosos por rentar sin ver la propiedad en Mexico. Los listados verificados nos dieron total confianza. Nuestro departamento en El Tezal era exactamente como lo describian, y el contrato digital hizo todo muy facil.\"" },
    "renters.testimonials.review1.name": { en: "Michael Thompson", es: "Michael Thompson" },
    "renters.testimonials.review1.location": { en: "Remote worker from Austin, TX", es: "Trabajador remoto desde Austin, TX" },
    "renters.testimonials.review2.text": { en: "\"As a retiree, I needed a safe and reliable way to find long-term housing in Cabo. The secure payment system and bilingual contracts removed all the stress. I have been living here happily for over a year now.\"", es: "\"Como jubilada, necesitaba una forma segura y confiable de encontrar vivienda a largo plazo en Cabo. El sistema de pagos seguro y los contratos bilingues eliminaron todo el estres. Llevo mas de un ano viviendo aqui felizmente.\"" },
    "renters.testimonials.review2.name": { en: "Sarah Williams", es: "Sarah Williams" },
    "renters.testimonials.review2.location": { en: "Retiree from Calgary, Canada", es: "Jubilada de Calgary, Canada" },
    "renters.testimonials.review3.text": { en: "\"My family and I found a beautiful home in San Jose del Cabo within a week. The agent connected us with the perfect landlord and the whole process was transparent from start to finish. Highly recommended!\"", es: "\"Mi familia y yo encontramos una hermosa casa en San Jose del Cabo en menos de una semana. El agente nos conecto con el propietario perfecto y todo el proceso fue transparente de principio a fin. Muy recomendable!\"" },
    "renters.testimonials.review3.name": { en: "David Chen", es: "David Chen" },
    "renters.testimonials.review3.location": { en: "Entrepreneur from San Francisco, CA", es: "Emprendedor de San Francisco, CA" },
    "renters.faq.title": { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
    "renters.faq.subtitle": { en: "Everything you need to know about renting long-term in Los Cabos.", es: "Todo lo que necesitas saber sobre rentar a largo plazo en Los Cabos." },
    "renters.faq.q1.question": { en: "What documents do I need to rent in Mexico?", es: "Que documentos necesito para rentar en Mexico?" },
    "renters.faq.q1.answer": { en: "You will need a valid passport, proof of income or employment, and a reference from a previous landlord. For foreign nationals, we also assist with temporary resident visas if needed. Our platform guides you through every step.", es: "Necesitaras un pasaporte vigente, comprobante de ingresos o empleo, y una referencia de un arrendador anterior. Para extranjeros, tambien asistimos con visas de residente temporal si es necesario. Nuestra plataforma te guia en cada paso." },
    "renters.faq.q2.question": { en: "How long are typical lease terms?", es: "Cual es la duracion tipica de los contratos?" },
    "renters.faq.q2.answer": { en: "Most of our listings offer 6-month or 12-month lease terms. Some landlords are flexible with shorter or longer arrangements. You can filter by lease duration when searching for properties.", es: "La mayoria de nuestros listados ofrecen contratos de 6 o 12 meses. Algunos propietarios son flexibles con plazos mas cortos o largos. Puedes filtrar por duracion del contrato al buscar propiedades." },
    "renters.faq.q3.question": { en: "Is my deposit protected?", es: "Mi deposito esta protegido?" },
    "renters.faq.q3.answer": { en: "Yes. All security deposits are held in escrow through our platform until the lease ends. Deposits are returned within 30 days of move-out, minus any documented deductions for damages beyond normal wear and tear.", es: "Si. Todos los depositos de garantia se mantienen en fideicomiso a traves de nuestra plataforma hasta que termine el contrato. Los depositos se devuelven dentro de los 30 dias posteriores a la mudanza, menos cualquier deduccion documentada por danos mas alla del desgaste normal." },
    "renters.faq.q4.question": { en: "Can I visit properties before signing a lease?", es: "Puedo visitar las propiedades antes de firmar un contrato?" },
    "renters.faq.q4.answer": { en: "Absolutely. We offer in-person tours with a local agent as well as live video tours for those who cannot visit in person. Every listing also includes high-resolution photos and a detailed property description so you know exactly what to expect.", es: "Por supuesto. Ofrecemos recorridos presenciales con un agente local, asi como recorridos en video en vivo para quienes no puedan visitarnos en persona. Cada listado tambien incluye fotos de alta resolucion y una descripcion detallada de la propiedad para que sepas exactamente que esperar." },
    "renters.cta.title": { en: "Ready to Find Your Home in Paradise?", es: "Listo para Encontrar Tu Hogar en el Paraiso?" },
    "renters.cta.subtitle": { en: "Join our waitlist to be the first to know when the app launches. Early members get priority access to new listings.", es: "Unite a nuestra lista de espera para ser el primero en enterarte cuando la app se lance. Los miembros anticipados obtienen acceso prioritario a nuevos listados." },
    "renters.cta.emailPlaceholder": { en: "Enter your email", es: "Ingresa tu correo electronico" },

    // ===== LANDLORDS PAGE =====

    "landlords.hero.badge": { en: "For Property Owners", es: "Para Propietarios" },
    "landlords.hero.title": { en: "Maximize Your Property's <span class=\"text-accent-sunset\">Potential</span>", es: "Maximiza el <span class=\"text-accent-sunset\">Potencial</span> de Tu Propiedad" },
    "landlords.hero.subtitle": { en: "Attract quality long-term tenants, automate rent collection, and manage your properties from anywhere. The smart way to be a landlord in Los Cabos.", es: "Atrae inquilinos de calidad a largo plazo, automatiza el cobro de renta y administra tus propiedades desde cualquier lugar. La forma inteligente de ser propietario en Los Cabos." },
    "landlords.hero.cta": { en: "List Your Property", es: "Publica Tu Propiedad" },
    "landlords.hero.ctaSecondary": { en: "Schedule a Demo", es: "Agenda una Demostracion" },
    "landlords.benefits.title": { en: "Tools Built for Landlords", es: "Herramientas Disenadas para Propietarios" },
    "landlords.benefits.subtitle": { en: "Everything you need to manage your rental property professionally and profitably.", es: "Todo lo que necesitas para administrar tu propiedad de renta de forma profesional y rentable." },
    "landlords.benefits.screening.title": { en: "Digital Applications", es: "Solicitudes Digitales" },
    "landlords.benefits.screening.desc": { en: "Receive and review renter applications digitally. View applicant details and choose the right tenant for your property.", es: "Recibe y revisa solicitudes de inquilinos digitalmente. Ve los detalles de los solicitantes y elige al inquilino ideal para tu propiedad." },
    "landlords.benefits.screening.feature1": { en: "Online application forms", es: "Formularios de solicitud en linea" },
    "landlords.benefits.screening.feature2": { en: "Applicant profile review", es: "Revision de perfil del solicitante" },
    "landlords.benefits.screening.feature3": { en: "Direct communication with applicants", es: "Comunicacion directa con solicitantes" },
    "landlords.benefits.payments.title": { en: "Rent Collection", es: "Cobro de Renta" },
    "landlords.benefits.payments.desc": { en: "Collect rent payments online with ease. Tenants can pay securely through the platform with multiple payment methods.", es: "Cobra pagos de renta en linea facilmente. Los inquilinos pueden pagar de forma segura a traves de la plataforma con multiples metodos de pago." },
    "landlords.benefits.payments.feature1": { en: "Online rent payments", es: "Pagos de renta en linea" },
    "landlords.benefits.payments.feature2": { en: "Multiple payment methods", es: "Multiples metodos de pago" },
    "landlords.benefits.payments.feature3": { en: "Digital payment receipts", es: "Recibos de pago digitales" },
    "landlords.benefits.management.title": { en: "Tenant Communication", es: "Comunicacion con Inquilinos" },
    "landlords.benefits.management.desc": { en: "Stay connected with your tenants through in-app messaging. Manage lease details and property updates from one place.", es: "Mantente conectado con tus inquilinos a traves de mensajeria en la app. Administra detalles del contrato y actualizaciones de la propiedad desde un solo lugar." },
    "landlords.benefits.management.feature1": { en: "In-app messaging", es: "Mensajeria en la app" },
    "landlords.benefits.management.feature2": { en: "Lease management", es: "Gestion de contratos" },
    "landlords.benefits.management.feature3": { en: "Listing updates & edits", es: "Actualizaciones y ediciones de listados" },
    "landlords.howItWorks.title": { en: "How It Works for Landlords", es: "Como Funciona para Propietarios" },
    "landlords.howItWorks.subtitle": { en: "Three simple steps to start earning more from your property.", es: "Tres sencillos pasos para comenzar a ganar mas con tu propiedad." },
    "landlords.howItWorks.step1.title": { en: "List Your Property", es: "Publica Tu Propiedad" },
    "landlords.howItWorks.step1.desc": { en: "Create a listing in minutes. Upload photos, set your price, and define lease terms. Our team helps you optimize your listing for maximum visibility.", es: "Crea un listado en minutos. Sube fotos, establece tu precio y define los terminos del contrato. Nuestro equipo te ayuda a optimizar tu listado para maxima visibilidad." },
    "landlords.howItWorks.step2.title": { en: "Screen & Select", es: "Evalua y Selecciona" },
    "landlords.howItWorks.step2.desc": { en: "Review tenant applications and choose the right fit for your property. Communicate directly with applicants through the platform.", es: "Revisa las solicitudes de inquilinos y elige el mas adecuado para tu propiedad. Comunicate directamente con los solicitantes a traves de la plataforma." },
    "landlords.howItWorks.step3.title": { en: "Earn & Manage", es: "Genera Ingresos y Administra" },
    "landlords.howItWorks.step3.desc": { en: "Collect rent online, communicate with tenants, and manage your lease agreements. Everything from your dashboard.", es: "Cobra renta en linea, comunicate con inquilinos y administra tus contratos. Todo desde tu panel de control." },
    "landlords.stats.title": { en: "Properties Perform Better With Us", es: "Las Propiedades Rinden Mejor Con Nosotros" },
    "landlords.stats.subtitle": { en: "Data-driven results from landlords across Los Cabos.", es: "Resultados basados en datos de propietarios en todo Los Cabos." },
    "landlords.stats.stat1": { en: "Higher average rent vs. traditional listings", es: "Renta promedio mas alta vs. listados tradicionales" },
    "landlords.stats.stat2": { en: "Faster tenant placement", es: "Colocacion de inquilinos mas rapida" },
    "landlords.stats.stat3": { en: "On-time rent collection rate", es: "Tasa de cobro de renta a tiempo" },
    "landlords.stats.stat4": { en: "Average landlord satisfaction rating", es: "Calificacion promedio de satisfaccion del propietario" },
    "landlords.pricing.title": { en: "Simple, Transparent Pricing", es: "Precios Simples y Transparentes" },
    "landlords.pricing.subtitle": { en: "Choose the plan that fits your portfolio. No hidden fees, no long-term contracts.", es: "Elige el plan que se ajuste a tu portafolio. Sin cargos ocultos, sin contratos a largo plazo." },
    "landlords.pricing.basic.name": { en: "Basic", es: "Basico" },
    "landlords.pricing.basic.desc": { en: "Perfect for individual property owners just getting started.", es: "Perfecto para propietarios individuales que recien comienzan." },
    "landlords.pricing.basic.price": { en: "Free", es: "Gratis" },
    "landlords.pricing.basic.feature1": { en: "1 property listing", es: "1 listado de propiedad" },
    "landlords.pricing.basic.feature2": { en: "Digital lease agreements", es: "Contratos digitales de arrendamiento" },
    "landlords.pricing.basic.feature3": { en: "Digital lease agreements", es: "Contratos de arrendamiento digitales" },
    "landlords.pricing.basic.feature4": { en: "In-app messaging", es: "Mensajeria en la app" },
    "landlords.pricing.basic.cta": { en: "Get Started Free", es: "Comienza Gratis" },
    "landlords.pricing.pro.badge": { en: "Most Popular", es: "Mas Popular" },
    "landlords.pricing.pro.name": { en: "Professional", es: "Profesional" },
    "landlords.pricing.pro.desc": { en: "For serious landlords managing multiple properties.", es: "Para propietarios serios que administran multiples propiedades." },
    "landlords.pricing.pro.period": { en: "/month", es: "/mes" },
    "landlords.pricing.pro.feature1": { en: "Up to 10 property listings", es: "Hasta 10 listados de propiedades" },
    "landlords.pricing.pro.feature2": { en: "Digital lease agreements", es: "Contratos digitales de arrendamiento" },
    "landlords.pricing.pro.feature3": { en: "Online rent collection", es: "Cobro de renta en linea" },
    "landlords.pricing.pro.feature4": { en: "In-app messaging", es: "Mensajeria en la app" },
    "landlords.pricing.pro.feature5": { en: "Priority listing placement", es: "Ubicacion prioritaria de listados" },
    "landlords.pricing.pro.cta": { en: "Start Free Trial", es: "Iniciar Prueba Gratuita" },
    "landlords.pricing.premium.name": { en: "Premium", es: "Premium" },
    "landlords.pricing.premium.desc": { en: "Full-service property management for portfolios of any size.", es: "Administracion integral de propiedades para portafolios de cualquier tamano." },
    "landlords.pricing.premium.period": { en: "/month", es: "/mes" },
    "landlords.pricing.premium.feature1": { en: "Unlimited property listings", es: "Listados de propiedades ilimitados" },
    "landlords.pricing.premium.feature2": { en: "Digital lease agreements", es: "Contratos digitales de arrendamiento" },
    "landlords.pricing.premium.feature3": { en: "Priority listing placement", es: "Ubicacion prioritaria de listados" },
    "landlords.pricing.premium.feature4": { en: "Dedicated account manager", es: "Gerente de cuenta dedicado" },
    "landlords.pricing.premium.feature5": { en: "Dedicated account manager", es: "Gerente de cuenta dedicado" },
    "landlords.pricing.premium.cta": { en: "Contact Sales", es: "Contactar Ventas" },
    "landlords.testimonials.title": { en: "Trusted by Property Owners", es: "La Confianza de los Propietarios" },
    "landlords.testimonials.subtitle": { en: "Hear from landlords who are earning more and worrying less.", es: "Escucha a propietarios que estan ganando mas y preocupandose menos." },
    "landlords.testimonials.review1.text": { en: "\"I own three condos in Cabo and managing them from San Diego used to be a nightmare. Now everything is automated -- rent collection, maintenance requests, tenant communication. I have not had a late payment in over eight months.\"", es: "\"Tengo tres departamentos en Cabo y administrarlos desde San Diego solia ser una pesadilla. Ahora todo esta automatizado: cobro de renta, solicitudes de mantenimiento, comunicacion con inquilinos. No he tenido un pago atrasado en mas de ocho meses.\"" },
    "landlords.testimonials.review1.name": { en: "Richard Alvarez", es: "Richard Alvarez" },
    "landlords.testimonials.review1.location": { en: "3 properties in Cabo San Lucas", es: "3 propiedades en Cabo San Lucas" },
    "landlords.testimonials.review2.text": { en: "\"The tenant screening feature alone is worth it. I used to worry about who was living in my property, but now every tenant goes through a thorough verification process. My rental income is up 20% since switching to this platform.\"", es: "\"Solo la funcion de evaluacion de inquilinos ya vale la pena. Solia preocuparme por quien vivia en mi propiedad, pero ahora cada inquilino pasa por un riguroso proceso de verificacion. Mis ingresos por renta aumentaron un 20% desde que cambie a esta plataforma.\"" },
    "landlords.testimonials.review2.name": { en: "Patricia Moreno", es: "Patricia Moreno" },
    "landlords.testimonials.review2.location": { en: "Villa owner in San Jose del Cabo", es: "Propietaria de villa en San Jose del Cabo" },
    "landlords.cta.title": { en: "Start Earning More From Your Property", es: "Comienza a Ganar Mas con Tu Propiedad" },
    "landlords.cta.subtitle": { en: "Join the waitlist and be among the first landlords to access the platform. Early members receive three months free on any plan.", es: "Unite a la lista de espera y se de los primeros propietarios en acceder a la plataforma. Los miembros anticipados reciben tres meses gratis en cualquier plan." },
    "landlords.cta.emailPlaceholder": { en: "Enter your email", es: "Ingresa tu correo electronico" },

    // ===== AGENTS PAGE =====

    "agents.hero.badge": { en: "For Real Estate Agents", es: "Para Agentes Inmobiliarios" },
    "agents.hero.title": { en: "Grow Your Rental <span class=\"text-accent-pink\">Business.</span>", es: "Haz Crecer Tu Negocio de <span class=\"text-accent-pink\">Rentas.</span>" },
    "agents.hero.subtitle": { en: "Join the fastest-growing rental platform in Los Cabos. Manage listings on behalf of landlords and connect them with quality long-term tenants.", es: "Unite a la plataforma de rentas de mayor crecimiento en Los Cabos. Administra listados en nombre de propietarios y conectalos con inquilinos de calidad a largo plazo." },
    "agents.hero.cta": { en: "Join as Agent", es: "Unite como Agente" },
    "agents.hero.ctaSecondary": { en: "Learn More", es: "Conoce Mas" },
    "agents.benefits.title": { en: "Tools to Grow Your Business", es: "Herramientas para Hacer Crecer Tu Negocio" },
    "agents.benefits.subtitle": { en: "Everything you need to manage clients, close deals, and track your earnings in one place.", es: "Todo lo que necesitas para gestionar clientes, cerrar tratos y dar seguimiento a tus ingresos en un solo lugar." },
    "agents.benefits.commission.title": { en: "Listing Management", es: "Gestion de Listados" },
    "agents.benefits.commission.desc": { en: "Create and manage property listings on behalf of landlords. Upload photos, set pricing, and publish to potential tenants.", es: "Crea y administra listados de propiedades en nombre de propietarios. Sube fotos, establece precios y publica para inquilinos potenciales." },
    "agents.benefits.commission.feature1": { en: "Create listings for owners", es: "Crea listados para propietarios" },
    "agents.benefits.commission.feature2": { en: "Upload photos & details", es: "Sube fotos y detalles" },
    "agents.benefits.commission.feature3": { en: "Edit & update listings", es: "Edita y actualiza listados" },
    "agents.benefits.listings.title": { en: "Listing Management", es: "Gestion de Listados" },
    "agents.benefits.listings.desc": { en: "Create and manage property listings on behalf of landlords. Upload photos, set pricing, and publish to thousands of potential tenants instantly.", es: "Crea y administra listados de propiedades en nombre de los propietarios. Sube fotos, establece precios y publica para miles de inquilinos potenciales al instante." },
    "agents.benefits.listings.feature1": { en: "Multi-property management", es: "Gestion de multiples propiedades" },
    "agents.benefits.listings.feature2": { en: "Bulk photo uploads", es: "Carga masiva de fotos" },
    "agents.benefits.listings.feature3": { en: "Listing performance analytics", es: "Analisis de rendimiento de listados" },
    "agents.benefits.crm.title": { en: "Client CRM", es: "CRM de Clientes" },
    "agents.benefits.crm.desc": { en: "Keep track of your landlord and tenant relationships. Manage contacts and communication in one organized place.", es: "Lleva el control de tus relaciones con propietarios e inquilinos. Administra contactos y comunicacion en un solo lugar organizado." },
    "agents.benefits.crm.feature1": { en: "Contact management", es: "Gestion de contactos" },
    "agents.benefits.crm.feature2": { en: "Landlord & tenant contacts", es: "Contactos de propietarios e inquilinos" },
    "agents.benefits.crm.feature3": { en: "Communication history", es: "Historial de comunicacion" },
    "agents.commission.title": { en: "Competitive Commission Structure", es: "Estructura de Comisiones Competitiva" },
    "agents.commission.subtitle": { en: "Transparent earnings on every lease you facilitate. The more you close, the more you earn.", es: "Ganancias transparentes en cada contrato que facilites. Mientras mas cierres, mas ganas." },
    "agents.commission.tier1.title": { en: "Starter", es: "Inicial" },
    "agents.commission.tier1.range": { en: "1-5 leases per quarter", es: "1-5 contratos por trimestre" },
    "agents.commission.tier1.basis": { en: "of annual lease value", es: "del valor anual del contrato" },
    "agents.commission.tier1.example": { en: "Example: $2,500/mo lease = <span class=\"font-bold text-primary\">$1,500</span> commission", es: "Ejemplo: contrato de $2,500/mes = <span class=\"font-bold text-primary\">$1,500</span> de comision" },
    "agents.commission.tier2.title": { en: "Professional", es: "Profesional" },
    "agents.commission.tier2.range": { en: "6-15 leases per quarter", es: "6-15 contratos por trimestre" },
    "agents.commission.tier2.basis": { en: "of annual lease value", es: "del valor anual del contrato" },
    "agents.commission.tier2.example": { en: "Example: $2,500/mo lease = <span class=\"font-bold text-primary\">$2,100</span> commission", es: "Ejemplo: contrato de $2,500/mes = <span class=\"font-bold text-primary\">$2,100</span> de comision" },
    "agents.commission.tier3.title": { en: "Elite", es: "Elite" },
    "agents.commission.tier3.range": { en: "16+ leases per quarter", es: "16+ contratos por trimestre" },
    "agents.commission.tier3.basis": { en: "of annual lease value", es: "del valor anual del contrato" },
    "agents.commission.tier3.example": { en: "Example: $2,500/mo lease = <span class=\"font-bold text-primary\">$2,400</span> commission", es: "Ejemplo: contrato de $2,500/mes = <span class=\"font-bold text-primary\">$2,400</span> de comision" },
    "agents.howItWorks.title": { en: "How It Works for Agents", es: "Como Funciona para Agentes" },
    "agents.howItWorks.subtitle": { en: "Start earning in three simple steps.", es: "Comienza a ganar en tres sencillos pasos." },
    "agents.howItWorks.step1.title": { en: "Register & Verify", es: "Registrate y Verificate" },
    "agents.howItWorks.step1.desc": { en: "Create your agent profile, submit your credentials, and get verified. We confirm your license and experience to build trust with landlords.", es: "Crea tu perfil de agente, envia tus credenciales y verificate. Confirmamos tu licencia y experiencia para generar confianza con los propietarios." },
    "agents.howItWorks.step2.title": { en: "Connect & Close", es: "Conecta y Cierra" },
    "agents.howItWorks.step2.desc": { en: "Match landlords with qualified tenants using our smart tools. Manage showings, applications, and lease signings through the platform.", es: "Conecta propietarios con inquilinos calificados usando nuestras herramientas inteligentes. Gestiona visitas, solicitudes y firmas de contratos a traves de la plataforma." },
    "agents.howItWorks.step3.title": { en: "Manage & Grow", es: "Administra y Crece" },
    "agents.howItWorks.step3.desc": { en: "Manage your listings, build relationships with property owners, and grow your client base through the platform.", es: "Administra tus listados, construye relaciones con propietarios y haz crecer tu cartera de clientes a traves de la plataforma." },
    "agents.dashboard.title": { en: "Your Agent Dashboard", es: "Tu Panel de Agente" },
    "agents.dashboard.subtitle": { en: "A powerful command center designed for real estate professionals.", es: "Un poderoso centro de control disenado para profesionales inmobiliarios." },
    "agents.dashboard.stat1.label": { en: "This Month", es: "Este Mes" },
    "agents.dashboard.stat1.vs": { en: "vs last month", es: "vs mes anterior" },
    "agents.dashboard.stat2.label": { en: "Active Listings", es: "Listados Activos" },
    "agents.dashboard.stat2.detail": { en: "3 pending approval", es: "3 pendientes de aprobacion" },
    "agents.dashboard.stat3.label": { en: "Deals in Progress", es: "Operaciones en Curso" },
    "agents.dashboard.stat3.detail": { en: "2 awaiting signatures", es: "2 en espera de firma" },
    "agents.dashboard.stat4.label": { en: "Client Leads", es: "Prospectos" },
    "agents.dashboard.stat4.detail": { en: "6 new this week", es: "6 nuevos esta semana" },
    "agents.dashboard.activity.title": { en: "Recent Activity", es: "Actividad Reciente" },
    "agents.dashboard.activity.item1": { en: "Lease signed: Oceanfront Villa in Pedregal", es: "Contrato firmado: Villa frente al mar en Pedregal" },
    "agents.dashboard.activity.item1.time": { en: "2 hours ago", es: "Hace 2 horas" },
    "agents.dashboard.activity.item2": { en: "New viewing scheduled: Modern Penthouse at Marina", es: "Nueva visita programada: Penthouse moderno en la Marina" },
    "agents.dashboard.activity.item2.time": { en: "5 hours ago", es: "Hace 5 horas" },
    "agents.dashboard.activity.item3": { en: "New lead assigned: Sarah W. looking for 2bd in San Jose", es: "Nuevo prospecto asignado: Sarah W. busca 2 recamaras en San Jose" },
    "agents.dashboard.activity.item3.time": { en: "Yesterday", es: "Ayer" },
    "agents.testimonials.title": { en: "Agents Love Our Platform", es: "Los Agentes Aman Nuestra Plataforma" },
    "agents.testimonials.subtitle": { en: "Hear from agents who are growing their business with Los Cabos Rental App.", es: "Escucha a los agentes que estan haciendo crecer su negocio con Los Cabos Rental App." },
    "agents.testimonials.review1.text": { en: "\"Before this platform, I was juggling spreadsheets and WhatsApp messages to track my deals. Now everything is in one place. I closed 12 leases last quarter and the commission tracking is flawless. My income has nearly doubled.\"", es: "\"Antes de esta plataforma, hacia malabares con hojas de calculo y mensajes de WhatsApp para dar seguimiento a mis operaciones. Ahora todo esta en un solo lugar. Cerre 12 contratos el trimestre pasado y el seguimiento de comisiones es impecable. Mis ingresos casi se duplicaron.\"" },
    "agents.testimonials.review1.name": { en: "Carlos Rivera", es: "Carlos Rivera" },
    "agents.testimonials.review1.location": { en: "Real estate agent, Cabo San Lucas", es: "Agente inmobiliario, Cabo San Lucas" },
    "agents.testimonials.review2.text": { en: "\"The CRM feature changed how I work. I can see every client interaction, set follow-up reminders, and never let a lead go cold. The platform brings me qualified leads too, which means less time prospecting and more time closing deals.\"", es: "\"La funcion de CRM cambio mi forma de trabajar. Puedo ver cada interaccion con clientes, programar recordatorios de seguimiento y nunca dejar que un prospecto se enfrie. La plataforma tambien me trae prospectos calificados, lo que significa menos tiempo buscando y mas tiempo cerrando operaciones.\"" },
    "agents.testimonials.review2.name": { en: "Maria Elena Fuentes", es: "Maria Elena Fuentes" },
    "agents.testimonials.review2.location": { en: "Independent broker, San Jose del Cabo", es: "Corredora independiente, San Jose del Cabo" },
    "agents.cta.title": { en: "Start Growing Today", es: "Comienza a Crecer Hoy" },
    "agents.cta.subtitle": { en: "Join the waitlist and be among the first agents on the platform. Early agents get exclusive access to list properties and connect with landlords.", es: "Unite a la lista de espera y se de los primeros agentes en la plataforma. Los agentes anticipados obtienen acceso exclusivo para listar propiedades y conectar con propietarios." },
    "agents.cta.emailPlaceholder": { en: "Enter your email", es: "Ingresa tu correo electronico" },

    // ===== LOGIN & SIGNUP PAGES =====

    "login.testimonial": { en: "\"Finding our long-term home in Cabo was effortless. The platform connected us with the perfect oceanview apartment in El Tezal.\"", es: "\"Encontrar nuestro hogar a largo plazo en Cabo fue muy sencillo. La plataforma nos conecto con el departamento perfecto con vista al mar en El Tezal.\"" },
    "login.testimonialRole": { en: "Renter, El Tezal", es: "Inquilino, El Tezal" },
    "login.title": { en: "Welcome back", es: "Bienvenido de nuevo" },
    "login.subtitle": { en: "Log in to manage your rentals, listings, or commissions.", es: "Inicia sesion para administrar tus rentas, propiedades o comisiones." },
    "label.email": { en: "Email address", es: "Correo electronico" },
    "label.password": { en: "Password", es: "Contrasena" },
    "login.rememberMe": { en: "Remember me", es: "Recordarme" },
    "login.forgotPassword": { en: "Forgot password?", es: "Olvidaste tu contrasena?" },
    "login.submit": { en: "Log In", es: "Iniciar Sesion" },
    "login.orContinueWith": { en: "or continue with", es: "o continua con" },
    "login.googleSignIn": { en: "Continue with Google", es: "Continuar con Google" },
    "login.noAccount": { en: "Don't have an account?", es: "No tienes una cuenta?" },
    "login.signUpLink": { en: "Sign up", es: "Registrate" },
    "signup.heroTitle": { en: "Join the fastest-growing rental community in Los Cabos", es: "Unite a la comunidad de rentas de mayor crecimiento en Los Cabos" },
    "signup.statListings": { en: "Verified Listings", es: "Propiedades Verificadas" },
    "signup.statTenants": { en: "Happy Tenants", es: "Inquilinos Satisfechos" },
    "signup.statSatisfaction": { en: "Satisfaction Rate", es: "Tasa de Satisfaccion" },
    "signup.statResponse": { en: "Avg. Response Time", es: "Tiempo Promedio de Respuesta" },
    "signup.title": { en: "Create your account", es: "Crea tu cuenta" },
    "signup.subtitle": { en: "Get started in under a minute. Choose your role below.", es: "Comienza en menos de un minuto. Elige tu rol a continuacion." },
    "signup.selectRole": { en: "I want to join as a...", es: "Quiero unirme como..." },
    "signup.roleRenter": { en: "Renter", es: "Inquilino" },
    "signup.roleRenterDesc": { en: "I'm looking for a rental", es: "Busco una propiedad en renta" },
    "signup.roleLandlord": { en: "Landlord", es: "Propietario" },
    "signup.roleLandlordDesc": { en: "I want to list my property", es: "Quiero publicar mi propiedad" },
    "signup.roleAgent": { en: "Agent", es: "Agente" },
    "signup.roleAgentDesc": { en: "I want to earn commissions", es: "Quiero ganar comisiones" },
    "label.fullName": { en: "Full name", es: "Nombre completo" },
    "label.confirmPassword": { en: "Confirm password", es: "Confirmar contrasena" },
    "label.phone": { en: "Phone number", es: "Numero de telefono" },
    "label.optional": { en: "(optional)", es: "(opcional)" },
    "signup.passwordMismatch": { en: "Passwords do not match", es: "Las contrasenas no coinciden" },
    "signup.agreePrefix": { en: "I agree to the", es: "Acepto los" },
    "signup.termsLink": { en: "Terms of Service", es: "Terminos de Servicio" },
    "signup.agreeAnd": { en: "and", es: "y la" },
    "signup.privacyLink": { en: "Privacy Policy", es: "Politica de Privacidad" },
    "signup.submit": { en: "Create Account", es: "Crear Cuenta" },
    "signup.orSignUpWith": { en: "or sign up with", es: "o registrate con" },
    "signup.googleSignUp": { en: "Sign up with Google", es: "Registrarse con Google" },
    "signup.hasAccount": { en: "Already have an account?", es: "Ya tienes una cuenta?" },
    "signup.loginLink": { en: "Log in", es: "Inicia sesion" },

    // ===== HOW IT WORKS PAGE =====

    "hiw.hero.badge": { en: "Step by Step", es: "Paso a Paso" },
    "hiw.hero.title": { en: "Simple. Transparent. Secure.", es: "Simple. Transparente. Seguro." },
    "hiw.hero.subtitle": { en: "Whether you're renting, listing, or earning commissions -- here's how it works.", es: "Ya sea que rentes, publiques o ganes comisiones -- asi es como funciona." },
    "hiw.tab.renters": { en: "For Renters", es: "Para Inquilinos" },
    "hiw.tab.landlords": { en: "For Landlords", es: "Para Propietarios" },
    "hiw.tab.agents": { en: "For Agents", es: "Para Agentes" },
    "hiw.renters.heading": { en: "For Renters", es: "Para Inquilinos" },
    "hiw.renters.step1.title": { en: "Browse & Discover", es: "Explora y Descubre" },
    "hiw.renters.step1.desc": { en: "Search verified listings by neighborhood, price, and amenities. Filter for pet-friendly, furnished, or ocean-view properties across Los Cabos.", es: "Busca propiedades verificadas por colonia, precio y amenidades. Filtra por propiedades que aceptan mascotas, amuebladas o con vista al mar en todo Los Cabos." },
    "hiw.renters.step2.title": { en: "Apply Online", es: "Aplica en Linea" },
    "hiw.renters.step2.desc": { en: "Submit your application with ID verification in under 10 minutes. Upload documents, provide references, and let our platform handle the rest.", es: "Envia tu solicitud con verificacion de identidad en menos de 10 minutos. Sube documentos, proporciona referencias y deja que nuestra plataforma haga el resto." },
    "hiw.renters.step3.title": { en: "Sign Your Lease", es: "Firma tu Contrato" },
    "hiw.renters.step3.desc": { en: "Review and e-sign your Mexican rental contract securely. All agreements are legally binding and stored digitally for your records.", es: "Revisa y firma electronicamente tu contrato de arrendamiento mexicano de forma segura. Todos los acuerdos son legalmente vinculantes y se almacenan digitalmente." },
    "hiw.renters.step4.title": { en: "Move In", es: "Mudate" },
    "hiw.renters.step4.desc": { en: "Get your keys, set up utilities, and start living in paradise. Manage rent payments and maintenance requests right from the app.", es: "Recibe tus llaves, activa los servicios y comienza a vivir en el paraiso. Administra pagos de renta y solicitudes de mantenimiento desde la app." },
    "hiw.landlords.heading": { en: "For Landlords", es: "Para Propietarios" },
    "hiw.landlords.step1.title": { en: "List Your Property", es: "Publica tu Propiedad" },
    "hiw.landlords.step1.desc": { en: "Upload photos, set pricing, and describe your property in detail. Our listing wizard walks you through every step to maximize visibility.", es: "Sube fotos, establece precios y describe tu propiedad en detalle. Nuestro asistente de publicacion te guia en cada paso para maximizar la visibilidad." },
    "hiw.landlords.step2.title": { en: "Screen Tenants", es: "Evalua Inquilinos" },
    "hiw.landlords.step2.desc": { en: "Our platform runs background checks and verifies income so you can rent with confidence. Review applicant profiles side by side.", es: "Nuestra plataforma realiza verificaciones de antecedentes y comprueba ingresos para que rentes con confianza. Compara perfiles de solicitantes lado a lado." },
    "hiw.landlords.step3.title": { en: "Sign & Collect", es: "Firma y Cobra" },
    "hiw.landlords.step3.desc": { en: "Digital lease signing and automated monthly rent collection. No more chasing payments or dealing with cash transactions.", es: "Firma digital de contratos y cobro automatico de renta mensual. No mas perseguir pagos ni lidiar con transacciones en efectivo." },
    "hiw.landlords.step4.title": { en: "Manage Remotely", es: "Administra a Distancia" },
    "hiw.landlords.step4.desc": { en: "Handle maintenance requests and communications from anywhere in the world. Track income, expenses, and occupancy from your dashboard.", es: "Gestiona solicitudes de mantenimiento y comunicaciones desde cualquier parte del mundo. Monitorea ingresos, gastos y ocupacion desde tu panel de control." },
    "hiw.agents.heading": { en: "For Agents", es: "Para Agentes" },
    "hiw.agents.step1.title": { en: "Register & Get Verified", es: "Registrate y Verifica tu Perfil" },
    "hiw.agents.step1.desc": { en: "Apply to join our agent network. Submit your credentials, local market knowledge, and pass our verification process.", es: "Solicita unirte a nuestra red de agentes. Presenta tus credenciales, conocimiento del mercado local y aprueba nuestro proceso de verificacion." },
    "hiw.agents.step2.title": { en: "Connect Owners & Renters", es: "Conecta Propietarios e Inquilinos" },
    "hiw.agents.step2.desc": { en: "Match landlords with qualified tenants using our smart matching tools. Access a growing database of properties and tenant profiles.", es: "Conecta propietarios con inquilinos calificados usando nuestras herramientas inteligentes. Accede a una base de datos creciente de propiedades y perfiles de inquilinos." },
    "hiw.agents.step3.title": { en: "Facilitate the Deal", es: "Facilita el Acuerdo" },
    "hiw.agents.step3.desc": { en: "Manage showings, applications, and lease signing all from one dashboard. Keep all parties informed with automated status updates.", es: "Gestiona visitas, solicitudes y firma de contratos desde un solo panel. Manten a todas las partes informadas con actualizaciones automaticas de estado." },
    "hiw.agents.step4.title": { en: "Earn Your Commission", es: "Gana tu Comision" },
    "hiw.agents.step4.desc": { en: "Get paid 5-8% on every successful lease. Track your earnings, pending deals, and payout history in real time.", es: "Recibe del 5 al 8% por cada contrato exitoso. Rastrea tus ganancias, acuerdos pendientes e historial de pagos en tiempo real." },
    "hiw.compare.title": { en: "Traditional Renting vs. Los Cabos Rental App", es: "Renta Tradicional vs. Los Cabos Rental App" },
    "hiw.compare.subtitle": { en: "See why hundreds of renters and landlords are making the switch.", es: "Descubre por que cientos de inquilinos y propietarios estan haciendo el cambio." },
    "hiw.compare.category": { en: "Category", es: "Categoria" },
    "hiw.compare.traditional": { en: "Traditional Way", es: "Forma Tradicional" },
    "hiw.compare.platform": { en: "Los Cabos Rental App", es: "Los Cabos Rental App" },
    "hiw.compare.row1.label": { en: "Finding Listings", es: "Buscar Propiedades" },
    "hiw.compare.row1.old": { en: "WhatsApp groups, Facebook, word of mouth", es: "Grupos de WhatsApp, Facebook, de boca en boca" },
    "hiw.compare.row1.new": { en: "Verified, searchable listings with filters", es: "Propiedades verificadas y buscables con filtros" },
    "hiw.compare.row2.label": { en: "Tenant Screening", es: "Evaluacion de Inquilinos" },
    "hiw.compare.row2.old": { en: "Trust and gut feeling", es: "Confianza e intuicion" },
    "hiw.compare.row2.new": { en: "Background checks & income verification", es: "Verificacion de antecedentes e ingresos" },
    "hiw.compare.row3.label": { en: "Lease Signing", es: "Firma de Contrato" },
    "hiw.compare.row3.old": { en: "Paper contracts, notary visits", es: "Contratos en papel, visitas al notario" },
    "hiw.compare.row3.new": { en: "Digital e-signatures, legally binding", es: "Firmas electronicas digitales, legalmente vinculantes" },
    "hiw.compare.row4.label": { en: "Rent Payments", es: "Pagos de Renta" },
    "hiw.compare.row4.old": { en: "Cash, bank transfers, chasing tenants", es: "Efectivo, transferencias bancarias, perseguir inquilinos" },
    "hiw.compare.row4.new": { en: "Automated monthly collection", es: "Cobro mensual automatizado" },
    "hiw.compare.row5.label": { en: "Maintenance", es: "Mantenimiento" },
    "hiw.compare.row5.old": { en: "Phone calls, no tracking", es: "Llamadas telefonicas, sin seguimiento" },
    "hiw.compare.row5.new": { en: "In-app requests with photo & status tracking", es: "Solicitudes en la app con fotos y seguimiento de estado" },
    "hiw.compare.row6.label": { en: "Transparency", es: "Transparencia" },
    "hiw.compare.row6.old": { en: "Hidden fees, unclear terms", es: "Cargos ocultos, terminos poco claros" },
    "hiw.compare.row6.new": { en: "Clear pricing, no hidden costs", es: "Precios claros, sin costos ocultos" },
    "hiw.cta.title": { en: "Ready to Experience Better Renting?", es: "Listo para una Mejor Experiencia de Renta?" },
    "hiw.cta.subtitle": { en: "Join hundreds of renters, landlords, and agents who are transforming the rental experience in Los Cabos.", es: "Unite a cientos de inquilinos, propietarios y agentes que estan transformando la experiencia de renta en Los Cabos." },
    "hiw.cta.privacy": { en: "No spam. Unsubscribe anytime. We respect your inbox.", es: "Sin spam. Cancela cuando quieras. Respetamos tu bandeja de entrada." },

    // ===== ABOUT PAGE =====

    "about.hero.badge": { en: "Our Story", es: "Nuestra Historia" },
    "about.hero.title": { en: "Built for Baja, By People Who Live Here", es: "Hecho para Baja, por Personas que Viven Aqui" },
    "about.hero.subtitle": { en: "We know the struggle of finding a long-term home in Los Cabos. That's why we built the solution.", es: "Conocemos lo dificil que es encontrar un hogar a largo plazo en Los Cabos. Por eso creamos la solucion." },
    "about.mission.title": { en: "Our Mission", es: "Nuestra Mision" },
    "about.mission.text": { en: "We believe finding a long-term home in Los Cabos shouldn't require WhatsApp groups, Facebook stalking, or trusting random posts. We're building the platform that centralizes and professionalizes the entire rental experience.", es: "Creemos que encontrar un hogar a largo plazo en Los Cabos no deberia depender de grupos de WhatsApp, buscar en Facebook o confiar en publicaciones al azar. Estamos construyendo la plataforma que centraliza y profesionaliza toda la experiencia de renta." },
    "about.mission.text2": { en: "From verified listings and digital leases to automated payments and maintenance tracking, every feature is designed to bring transparency, security, and ease to renters, landlords, and agents alike.", es: "Desde propiedades verificadas y contratos digitales hasta pagos automatizados y seguimiento de mantenimiento, cada funcion esta disenada para brindar transparencia, seguridad y facilidad a inquilinos, propietarios y agentes por igual." },
    "about.stats.listings": { en: "500+", es: "500+" },
    "about.stats.listingsLabel": { en: "Listings", es: "Propiedades" },
    "about.stats.neighborhoods": { en: "3", es: "3" },
    "about.stats.neighborhoodsLabel": { en: "Neighborhoods", es: "Colonias" },
    "about.stats.renters": { en: "200+", es: "200+" },
    "about.stats.rentersLabel": { en: "Happy Renters", es: "Inquilinos Satisfechos" },
    "about.stats.landlords": { en: "50+", es: "50+" },
    "about.stats.landlordsLabel": { en: "Verified Landlords", es: "Propietarios Verificados" },
    "about.team.title": { en: "Meet the Team", es: "Conoce al Equipo" },
    "about.team.subtitle": { en: "A passionate group of locals and expats dedicated to fixing the rental experience in Baja.", es: "Un grupo apasionado de locales y expatriados dedicados a mejorar la experiencia de renta en Baja." },
    "about.team.member1.name": { en: "Mario Polanco", es: "Mario Polanco" },
    "about.team.member1.title": { en: "Founder & CEO", es: "Fundador y CEO" },
    "about.team.member1.bio": { en: "A Los Cabos native with deep roots in digital marketing and fintech. Mario saw firsthand how broken the rental market was and decided to build the fix.", es: "Originario de Los Cabos con profundas raices en marketing digital y fintech. Mario vio de primera mano lo deficiente que era el mercado de rentas y decidio construir la solucion." },
    "about.team.member2.name": { en: "Sofia Ramirez", es: "Sofia Ramirez" },
    "about.team.member2.title": { en: "Head of Operations", es: "Directora de Operaciones" },
    "about.team.member2.bio": { en: "With 10 years in Cabo's hospitality industry, Sofia brings unmatched knowledge of the local rental landscape and property management best practices.", es: "Con 10 anos en la industria hotelera de Cabo, Sofia aporta un conocimiento inigualable del panorama local de rentas y las mejores practicas en administracion de propiedades." },
    "about.team.member3.name": { en: "Daniel Torres", es: "Daniel Torres" },
    "about.team.member3.title": { en: "Lead Developer", es: "Desarrollador Principal" },
    "about.team.member3.bio": { en: "A full-stack engineer passionate about building products that solve real problems. Daniel ensures the platform is fast, secure, and delightful to use.", es: "Un ingeniero full-stack apasionado por crear productos que resuelven problemas reales. Daniel se asegura de que la plataforma sea rapida, segura y agradable de usar." },
    "about.values.title": { en: "What We Stand For", es: "Lo que Nos Define" },
    "about.values.subtitle": { en: "These values guide every decision we make, from product design to customer support.", es: "Estos valores guian cada decision que tomamos, desde el diseno del producto hasta la atencion al cliente." },
    "about.values.transparency.title": { en: "Transparency", es: "Transparencia" },
    "about.values.transparency.desc": { en: "No hidden fees, no surprise charges. Every listing shows true costs, every contract is clear, and every transaction is tracked.", es: "Sin cargos ocultos ni sorpresas. Cada propiedad muestra costos reales, cada contrato es claro y cada transaccion queda registrada." },
    "about.values.security.title": { en: "Security", es: "Seguridad" },
    "about.values.security.desc": { en: "Verified identities, background checks, and secure digital contracts protect both renters and landlords from fraud and disputes.", es: "Identidades verificadas, verificacion de antecedentes y contratos digitales seguros protegen tanto a inquilinos como a propietarios contra fraudes y disputas." },
    "about.values.community.title": { en: "Community", es: "Comunidad" },
    "about.values.community.desc": { en: "We're not just building an app -- we're strengthening the bonds between locals, expats, and the neighborhoods that make Cabo special.", es: "No solo estamos creando una app -- estamos fortaleciendo los lazos entre locales, expatriados y las colonias que hacen de Cabo un lugar especial." },
    "about.values.innovation.title": { en: "Innovation", es: "Innovacion" },
    "about.values.innovation.desc": { en: "AI-powered matching, digital lease signing, and automated payments. We bring modern tech solutions to an industry stuck in the past.", es: "Emparejamiento impulsado por IA, firma digital de contratos y pagos automatizados. Llevamos soluciones tecnologicas modernas a una industria estancada en el pasado." },
    "about.timeline.title": { en: "Our Journey", es: "Nuestro Camino" },
    "about.timeline.subtitle": { en: "From idea to platform -- the milestones that define us.", es: "De la idea a la plataforma -- los hitos que nos definen." },
    "about.timeline.m1.date": { en: "Q3 2024", es: "3er Trim. 2024" },
    "about.timeline.m1.title": { en: "The Idea is Born", es: "Nace la Idea" },
    "about.timeline.m1.desc": { en: "After struggling to find a long-term rental in Cabo, our founder decided the market needed a dedicated, professional platform.", es: "Despues de luchar por encontrar una renta a largo plazo en Cabo, nuestro fundador decidio que el mercado necesitaba una plataforma dedicada y profesional." },
    "about.timeline.m2.date": { en: "Q1 2025", es: "1er Trim. 2025" },
    "about.timeline.m2.title": { en: "Development Begins", es: "Comienza el Desarrollo" },
    "about.timeline.m2.desc": { en: "Team assembled, market research completed, and the first lines of code written. Partnerships formed with local property managers.", es: "Equipo reunido, investigacion de mercado completada y las primeras lineas de codigo escritas. Se formaron alianzas con administradores de propiedades locales." },
    "about.timeline.m3.date": { en: "Q3 2025", es: "3er Trim. 2025" },
    "about.timeline.m3.title": { en: "Beta Launch", es: "Lanzamiento Beta" },
    "about.timeline.m3.desc": { en: "Invite-only beta with select landlords and renters in Cabo San Lucas. Refining the platform based on real user feedback.", es: "Beta por invitacion con propietarios e inquilinos selectos en Cabo San Lucas. Refinando la plataforma con base en retroalimentacion real de usuarios." },
    "about.timeline.m4.date": { en: "Q1 2026", es: "1er Trim. 2026" },
    "about.timeline.m4.title": { en: "Public Launch", es: "Lanzamiento Publico" },
    "about.timeline.m4.desc": { en: "Full platform launch across Los Cabos with agent network, automated payments, and expansion to San Jose del Cabo and El Tezal.", es: "Lanzamiento completo de la plataforma en Los Cabos con red de agentes, pagos automatizados y expansion a San Jose del Cabo y El Tezal." },
    "about.cta.title": { en: "Join Us in Transforming Rentals in Baja", es: "Unite a Transformar las Rentas en Baja" },
    "about.cta.subtitle": { en: "Whether you're looking for your next home, want to list your property, or are ready to earn as an agent -- we'd love to have you.", es: "Ya sea que busques tu proximo hogar, quieras publicar tu propiedad o estes listo para ganar como agente -- nos encantaria tenerte." },
    "about.cta.privacy": { en: "No spam. Unsubscribe anytime. We respect your inbox.", es: "Sin spam. Cancela cuando quieras. Respetamos tu bandeja de entrada." },

    // ===== BLOG INDEX + CONTACT + HELP PAGES =====

    "blogIndex.hero.label": { en: "Stories & Guides", es: "Historias y Guias" },
    "blogIndex.hero.title": { en: "The Los Cabos Rental Blog", es: "El Blog de Rentas en Los Cabos" },
    "blogIndex.hero.subtitle": { en: "Expert insights on long-term living, neighborhoods, legal guides, and lifestyle in Baja California Sur.", es: "Perspectivas de expertos sobre vida a largo plazo, vecindarios, guias legales y estilo de vida en Baja California Sur." },
    "blogIndex.filter.all": { en: "All", es: "Todos" },
    "blogIndex.filter.neighborhoods": { en: "Neighborhoods", es: "Vecindarios" },
    "blogIndex.filter.lifestyle": { en: "Lifestyle", es: "Estilo de Vida" },
    "blogIndex.filter.legal": { en: "Legal", es: "Legal" },
    "blogIndex.filter.movingGuide": { en: "Moving Guide", es: "Guia de Mudanza" },
    "blogIndex.filter.marketTrends": { en: "Market Trends", es: "Tendencias del Mercado" },
    "blogIndex.featured.heading": { en: "Featured Article", es: "Articulo Destacado" },
    "blogIndex.featured.category": { en: "Relocation Guide", es: "Guia de Reubicacion" },
    "blogIndex.featured.popular": { en: "Most Popular", es: "Mas Popular" },
    "blogIndex.featured.excerpt": { en: "Discover how to navigate the luxury rental market in Baja California Sur, from hidden beach gems to exclusive gated communities. Everything you need to know before making the move.", es: "Descubre como navegar el mercado de rentas de lujo en Baja California Sur, desde joyas escondidas en la playa hasta exclusivas comunidades privadas. Todo lo que necesitas saber antes de mudarte." },
    "blogIndex.latest.heading": { en: "Latest Articles", es: "Ultimos Articulos" },
    "blogIndex.latest.sortLabel": { en: "Sort by:", es: "Ordenar por:" },
    "blogIndex.latest.sortNewest": { en: "Newest First", es: "Mas Recientes" },
    "blogIndex.latest.sortOldest": { en: "Oldest First", es: "Mas Antiguos" },
    "blogIndex.latest.sortPopular": { en: "Most Popular", es: "Mas Populares" },
    "blogIndex.article1.category": { en: "Community", es: "Comunidad" },
    "blogIndex.article1.excerpt": { en: "Everything you need to know about the most popular residential area in Cabo San Lucas. Schools, amenities, and community life.", es: "Todo lo que necesitas saber sobre la zona residencial mas popular de Cabo San Lucas. Escuelas, servicios y vida comunitaria." },
    "blogIndex.article1.readTime": { en: "5 min read", es: "5 min de lectura" },
    "blogIndex.article2.category": { en: "Lifestyle", es: "Estilo de Vida" },
    "blogIndex.article2.excerpt": { en: "From groceries to gym memberships, we break down what life really costs in Baja California Sur compared to what you might expect.", es: "Desde el supermercado hasta las membresias de gimnasio, desglosamos cuanto cuesta realmente vivir en Baja California Sur comparado con lo que podrias esperar." },
    "blogIndex.article2.readTime": { en: "8 min read", es: "8 min de lectura" },
    "blogIndex.article3.category": { en: "Legal", es: "Legal" },
    "blogIndex.article3.excerpt": { en: "A simplified guide to your rights and responsibilities as a long-term tenant in Mexico. Contracts, deposits, and dispute resolution.", es: "Una guia simplificada de tus derechos y responsabilidades como inquilino a largo plazo en Mexico. Contratos, depositos y resolucion de conflictos." },
    "blogIndex.article3.readTime": { en: "12 min read", es: "12 min de lectura" },
    "blogIndex.article4.category": { en: "Moving Guide", es: "Guia de Mudanza" },
    "blogIndex.article4.excerpt": { en: "Everything you need to know about temporary resident visas, tax implications, and legal requirements for remote workers in Mexico.", es: "Todo lo que necesitas saber sobre visas de residente temporal, implicaciones fiscales y requisitos legales para trabajadores remotos en Mexico." },
    "blogIndex.article4.readTime": { en: "4 min read", es: "4 min de lectura" },
    "blogIndex.article5.category": { en: "Lifestyle", es: "Estilo de Vida" },
    "blogIndex.article5.excerpt": { en: "A comprehensive review of the best international and bilingual schools for expat families relocating to the Los Cabos area.", es: "Una revision completa de las mejores escuelas internacionales y bilingues para familias de expatriados que se mudan a la zona de Los Cabos." },
    "blogIndex.article5.readTime": { en: "7 min read", es: "7 min de lectura" },
    "blogIndex.article6.category": { en: "Market Trends", es: "Tendencias del Mercado" },
    "blogIndex.article6.excerpt": { en: "Rent, utilities, food, transport, healthcare, and entertainment. A realistic monthly budget for living in Los Cabos in 2024.", es: "Renta, servicios, comida, transporte, salud y entretenimiento. Un presupuesto mensual realista para vivir en Los Cabos en 2024." },
    "blogIndex.article6.readTime": { en: "10 min read", es: "10 min de lectura" },
    "blogIndex.pagination.previous": { en: "Previous", es: "Anterior" },
    "blogIndex.pagination.next": { en: "Next", es: "Siguiente" },
    "blogIndex.newsletter.title": { en: "Get Weekly Cabo Insights", es: "Recibe Novedades Semanales de Cabo" },
    "blogIndex.newsletter.desc": { en: "Join thousands of readers getting exclusive rental market updates, neighborhood guides, and expat tips delivered every Thursday.", es: "Unite a miles de lectores que reciben actualizaciones exclusivas del mercado de rentas, guias de vecindarios y consejos para expatriados cada jueves." },
    "blogIndex.newsletter.subscribe": { en: "Subscribe", es: "Suscribirse" },
    "blogIndex.newsletter.privacy": { en: "No spam. Unsubscribe anytime. We respect your privacy.", es: "Sin spam. Cancela cuando quieras. Respetamos tu privacidad." },
    "contact.hero.title": { en: "Get in Touch", es: "Contactanos" },
    "contact.hero.subtitle": { en: "Questions about renting, listing, or partnering? We'd love to hear from you.", es: "Preguntas sobre rentar, publicar o asociarte? Nos encantaria saber de ti." },
    "contact.form.title": { en: "Send Us a Message", es: "Envianos un Mensaje" },
    "contact.form.subtitle": { en: "Fill out the form below and we'll get back to you within 24 hours.", es: "Llena el formulario y te responderemos en un plazo de 24 horas." },
    "contact.form.nameLabel": { en: "Full Name", es: "Nombre Completo" },
    "contact.form.emailLabel": { en: "Email Address", es: "Correo Electronico" },
    "contact.form.subjectLabel": { en: "Subject", es: "Asunto" },
    "contact.form.subjectDefault": { en: "Select a subject", es: "Selecciona un asunto" },
    "contact.form.subjectGeneral": { en: "General Inquiry", es: "Consulta General" },
    "contact.form.subjectRenter": { en: "Renter Question", es: "Pregunta de Inquilino" },
    "contact.form.subjectLandlord": { en: "Landlord Question", es: "Pregunta de Propietario" },
    "contact.form.subjectAgent": { en: "Agent Inquiry", es: "Consulta de Agente" },
    "contact.form.subjectPartnership": { en: "Partnership", es: "Alianza Comercial" },
    "contact.form.subjectSupport": { en: "Technical Support", es: "Soporte Tecnico" },
    "contact.form.messageLabel": { en: "Message", es: "Mensaje" },
    "contact.form.submit": { en: "Send Message", es: "Enviar Mensaje" },
    "contact.info.emailTitle": { en: "Email", es: "Correo Electronico" },
    "contact.info.emailDesc": { en: "Our team typically responds within a few hours.", es: "Nuestro equipo generalmente responde en pocas horas." },
    "contact.info.phoneTitle": { en: "Phone", es: "Telefono" },
    "contact.info.phoneDesc": { en: "Give us a call during business hours.", es: "Llamanos en horario de oficina." },
    "contact.info.officeTitle": { en: "Office", es: "Oficina" },
    "contact.info.officeDesc": { en: "Visit us at our office in downtown Cabo.", es: "Visitanos en nuestra oficina en el centro de Cabo." },
    "contact.info.hoursTitle": { en: "Business Hours", es: "Horario de Atencion" },
    "contact.info.hoursDesc": { en: "We're available during the following hours.", es: "Estamos disponibles en el siguiente horario." },
    "contact.info.hoursValue": { en: "Mon - Fri: 9:00 AM - 6:00 PM CST", es: "Lun - Vie: 9:00 AM - 6:00 PM CST" },
    "contact.info.hoursWeekend": { en: "Sat - Sun: Closed", es: "Sab - Dom: Cerrado" },
    "contact.map.title": { en: "Find Us in Cabo San Lucas", es: "Encuentranos en Cabo San Lucas" },
    "contact.map.subtitle": { en: "Located in the heart of Baja California Sur, serving the entire Los Cabos corridor.", es: "Ubicados en el corazon de Baja California Sur, sirviendo a todo el corredor de Los Cabos." },
    "contact.social.title": { en: "Follow Us", es: "Siguenos" },
    "contact.social.subtitle": { en: "Stay connected and get the latest listings, tips, and Los Cabos living updates.", es: "Mantente conectado y recibe los ultimos listados, consejos y novedades sobre la vida en Los Cabos." },
    "contact.form.namePlaceholder": { en: "Your full name", es: "Tu nombre completo" },
    "contact.form.emailPlaceholder": { en: "you@example.com", es: "tu@ejemplo.com" },
    "contact.form.messagePlaceholder": { en: "Tell us how we can help...", es: "Cuentanos como podemos ayudarte..." },
    "nav.help": { en: "Help", es: "Ayuda" },
    "help.hero.title": { en: "How Can We Help?", es: "Como Podemos Ayudarte?" },
    "help.hero.subtitle": { en: "Find answers to common questions or browse our help categories below.", es: "Encuentra respuestas a preguntas frecuentes o explora nuestras categorias de ayuda." },
    "help.hero.searchPlaceholder": { en: "Search for answers...", es: "Buscar respuestas..." },
    "help.categories.title": { en: "Browse by Category", es: "Explorar por Categoria" },
    "help.categories.subtitle": { en: "Select a topic to find the information you need.", es: "Selecciona un tema para encontrar la informacion que necesitas." },
    "help.cat.started.title": { en: "Getting Started", es: "Primeros Pasos" },
    "help.cat.started.desc": { en: "New to the platform? Start here.", es: "Nuevo en la plataforma? Comienza aqui." },
    "help.cat.viewArticles": { en: "View articles", es: "Ver articulos" },
    "help.cat.renting.title": { en: "Renting a Property", es: "Rentar una Propiedad" },
    "help.cat.renting.desc": { en: "Find answers about searching, applying, and leasing.", es: "Encuentra respuestas sobre busqueda, solicitud y arrendamiento." },
    "help.cat.listing.title": { en: "Listing a Property", es: "Publicar una Propiedad" },
    "help.cat.listing.desc": { en: "Learn how to list and manage your properties.", es: "Aprende como publicar y administrar tus propiedades." },
    "help.cat.payments.title": { en: "Payments & Billing", es: "Pagos y Facturacion" },
    "help.cat.payments.desc": { en: "Questions about rent payments, deposits, and invoicing.", es: "Preguntas sobre pagos de renta, depositos y facturacion." },
    "help.cat.agents.title": { en: "Agent Program", es: "Programa de Agentes" },
    "help.cat.agents.desc": { en: "Commission tracking, leads, and agent tools.", es: "Seguimiento de comisiones, prospectos y herramientas para agentes." },
    "help.cat.security.title": { en: "Account & Security", es: "Cuenta y Seguridad" },
    "help.cat.security.desc": { en: "Password, verification, and account settings.", es: "Contrasena, verificacion y configuracion de cuenta." },
    "help.faq.title": { en: "Popular Questions", es: "Preguntas Populares" },
    "help.faq.subtitle": { en: "Quick answers to the most frequently asked questions.", es: "Respuestas rapidas a las preguntas mas frecuentes." },
    "help.faq.q1": { en: "How do I create an account?", es: "Como creo una cuenta?" },
    "help.faq.a1": { en: "Creating an account is simple. Click the \"Get Started\" button at the top of any page, enter your email address and choose a password. You can sign up as a renter, landlord, or agent. You will receive a verification email to confirm your account before you can start using all features.", es: "Crear una cuenta es sencillo. Haz clic en el boton \"Comenzar\" en la parte superior de cualquier pagina, ingresa tu correo electronico y elige una contrasena. Puedes registrarte como inquilino, propietario o agente. Recibiras un correo de verificacion para confirmar tu cuenta antes de poder usar todas las funciones." },
    "help.faq.q2": { en: "Is the platform available in English and Spanish?", es: "La plataforma esta disponible en ingles y espanol?" },
    "help.faq.a2": { en: "Yes! Los Cabos Rental App is fully bilingual. You can switch between English and Spanish at any time using the language toggle in the navigation bar. All listings, contracts, and support communications are available in both languages.", es: "Si! Los Cabos Rental App es completamente bilingue. Puedes cambiar entre ingles y espanol en cualquier momento usando el selector de idioma en la barra de navegacion. Todos los listados, contratos y comunicaciones de soporte estan disponibles en ambos idiomas." },
    "help.faq.q3": { en: "How are properties verified?", es: "Como se verifican las propiedades?" },
    "help.faq.a3": { en: "Every property listed on our platform goes through a verification process. We confirm ownership documents, conduct a physical inspection of the property, verify the landlord's identity, and ensure the listing details are accurate. Properties that pass all checks receive a verified badge.", es: "Cada propiedad publicada en nuestra plataforma pasa por un proceso de verificacion. Confirmamos documentos de propiedad, realizamos una inspeccion fisica del inmueble, verificamos la identidad del propietario y nos aseguramos de que los detalles del listado sean precisos. Las propiedades que pasan todas las revisiones reciben una insignia de verificacion." },
    "help.faq.q4": { en: "What payment methods are accepted?", es: "Que metodos de pago se aceptan?" },
    "help.faq.a4": { en: "We accept bank transfers (both Mexican and international), credit and debit cards (Visa, Mastercard, American Express), and digital payment platforms. All transactions are processed securely, and you will receive digital receipts for every payment made through the platform.", es: "Aceptamos transferencias bancarias (mexicanas e internacionales), tarjetas de credito y debito (Visa, Mastercard, American Express) y plataformas de pago digital. Todas las transacciones se procesan de forma segura y recibiras recibos digitales por cada pago realizado a traves de la plataforma." },
    "help.faq.q5": { en: "How do agents earn commissions?", es: "Como ganan comisiones los agentes?" },
    "help.faq.a5": { en: "Agents earn a commission when they successfully connect a tenant with a landlord and a lease is signed through the platform. Commission rates vary by property type and lease duration. You can track all your earnings, pending deals, and payment history through the agent dashboard.", es: "Los agentes ganan una comision cuando conectan exitosamente a un inquilino con un propietario y se firma un contrato a traves de la plataforma. Las tasas de comision varian segun el tipo de propiedad y la duracion del contrato. Puedes rastrear todas tus ganancias, tratos pendientes e historial de pagos a traves del panel de agentes." },
    "help.faq.q6": { en: "Can I list a short-term rental?", es: "Puedo publicar una renta a corto plazo?" },
    "help.faq.a6": { en: "Los Cabos Rental App is designed specifically for long-term rentals, typically six months or longer. Short-term vacation rentals are not currently supported on our platform. This focus allows us to provide the best experience for both tenants seeking stable housing and landlords looking for reliable, long-term tenants.", es: "Los Cabos Rental App esta disenada especificamente para rentas a largo plazo, generalmente de seis meses o mas. Las rentas vacacionales a corto plazo no estan disponibles actualmente en nuestra plataforma. Este enfoque nos permite brindar la mejor experiencia tanto para inquilinos que buscan vivienda estable como para propietarios que buscan inquilinos confiables a largo plazo." },
    "help.faq.q7": { en: "How do I report an issue with a listing?", es: "Como reporto un problema con un listado?" },
    "help.faq.a7": { en: "If you find a listing that appears inaccurate, misleading, or suspicious, you can report it directly from the listing page using the \"Report\" button. You can also contact our support team through the contact page or by emailing hello@loscabosrentalapp.com. We review all reports within 24 hours.", es: "Si encuentras un listado que parece inexacto, enganoso o sospechoso, puedes reportarlo directamente desde la pagina del listado usando el boton \"Reportar\". Tambien puedes contactar a nuestro equipo de soporte a traves de la pagina de contacto o enviando un correo a hello@loscabosrentalapp.com. Revisamos todos los reportes en un plazo de 24 horas." },
    "help.faq.q8": { en: "Is my personal data secure?", es: "Mis datos personales estan seguros?" },
    "help.faq.a8": { en: "Absolutely. We use industry-standard encryption to protect all personal data. Your information is never shared with third parties without your consent. We comply with Mexican data protection laws (LFPDPPP) and implement strict access controls, regular security audits, and secure data storage practices.", es: "Por supuesto. Utilizamos cifrado estandar de la industria para proteger todos los datos personales. Tu informacion nunca se comparte con terceros sin tu consentimiento. Cumplimos con las leyes mexicanas de proteccion de datos (LFPDPPP) e implementamos controles de acceso estrictos, auditorias de seguridad regulares y practicas seguras de almacenamiento de datos." },
    "help.cta.title": { en: "Still Need Help?", es: "Aun Necesitas Ayuda?" },
    "help.cta.desc": { en: "Can't find what you're looking for? Our support team is ready to assist you with any questions.", es: "No encuentras lo que buscas? Nuestro equipo de soporte esta listo para ayudarte con cualquier pregunta." },
    "help.cta.button": { en: "Contact Support", es: "Contactar Soporte" },

    // ===== LEGAL PAGES (Terms, Privacy, Safety) =====

    "terms.title": { en: "Terms of Service", es: "Terminos de Servicio" },
    "terms.s1.title": { en: "1. Acceptance of Terms", es: "1. Aceptacion de los Terminos" },
    "terms.s2.title": { en: "2. Description of Service", es: "2. Descripcion del Servicio" },
    "terms.s3.title": { en: "3. User Accounts & Registration", es: "3. Cuentas de Usuario y Registro" },
    "terms.s4.title": { en: "4. Rental Listings & Transactions", es: "4. Listados de Renta y Transacciones" },
    "terms.s5.title": { en: "5. Agent Program Terms", es: "5. Terminos del Programa de Agentes" },
    "terms.s6.title": { en: "6. Payments & Fees", es: "6. Pagos y Tarifas" },
    "terms.s7.title": { en: "7. User Conduct & Prohibited Activities", es: "7. Conducta del Usuario y Actividades Prohibidas" },
    "terms.s8.title": { en: "8. Intellectual Property", es: "8. Propiedad Intelectual" },
    "terms.s9.title": { en: "9. Limitation of Liability", es: "9. Limitacion de Responsabilidad" },
    "terms.s10.title": { en: "10. Dispute Resolution", es: "10. Resolucion de Disputas" },
    "terms.s11.title": { en: "11. Governing Law", es: "11. Ley Aplicable" },
    "terms.s12.title": { en: "12. Changes to Terms", es: "12. Cambios a los Terminos" },
    "terms.s13.title": { en: "13. Contact Information", es: "13. Informacion de Contacto" },
    "privacy.title": { en: "Privacy Policy", es: "Politica de Privacidad" },
    "privacy.s1.title": { en: "1. Information We Collect", es: "1. Informacion que Recopilamos" },
    "privacy.s2.title": { en: "2. How We Use Your Information", es: "2. Como Utilizamos Tu Informacion" },
    "privacy.s3.title": { en: "3. Information Sharing & Disclosure", es: "3. Comparticion y Divulgacion de Informacion" },
    "privacy.s4.title": { en: "4. Data Security", es: "4. Seguridad de los Datos" },
    "privacy.s5.title": { en: "5. Your Rights", es: "5. Tus Derechos" },
    "privacy.s6.title": { en: "6. Cookies & Tracking", es: "6. Cookies y Rastreo" },
    "privacy.s7.title": { en: "7. Third-Party Services", es: "7. Servicios de Terceros" },
    "privacy.s8.title": { en: "8. Data Retention", es: "8. Retencion de Datos" },
    "privacy.s9.title": { en: "9. Children's Privacy", es: "9. Privacidad de Menores" },
    "privacy.s10.title": { en: "10. International Data Transfers", es: "10. Transferencias Internacionales de Datos" },
    "privacy.s11.title": { en: "11. Changes to This Policy", es: "11. Cambios a Esta Politica" },
    "privacy.s12.title": { en: "12. Contact Us", es: "12. Contactenos" },
    "safety.hero.title": { en: "Your Safety is Our Priority", es: "Tu Seguridad es Nuestra Prioridad" },
    "safety.verify.title": { en: "How We Protect You", es: "Como Te Protegemos" },
    "safety.renters.title": { en: "Safety Tips for Renters", es: "Consejos de Seguridad para Inquilinos" },
    "safety.landlords.title": { en: "Safety Tips for Landlords", es: "Consejos de Seguridad para Propietarios" },
    "safety.emergency.title": { en: "Emergency Contacts in Los Cabos", es: "Contactos de Emergencia en Los Cabos" },
    "safety.report.title": { en: "Report a Concern", es: "Reportar un Problema" },

    // ===== CAREERS + PARTNERS + RELOCATION PAGES =====

    "careers.hero.badge": { en: "We're Hiring", es: "Estamos Contratando" },
    "careers.hero.title": { en: "Build the Future of Rentals in Baja", es: "Construye el Futuro de las Rentas en Baja" },
    "careers.hero.subtitle": { en: "Join a fast-growing team transforming how people find homes in Los Cabos.", es: "Unite a un equipo en rapido crecimiento que esta transformando la forma en que las personas encuentran hogar en Los Cabos." },
    "careers.hero.cta": { en: "View Open Positions", es: "Ver Posiciones Abiertas" },
    "careers.why.title": { en: "Why Work With Us", es: "Por Que Trabajar Con Nosotros" },
    "careers.why.subtitle": { en: "We believe great work happens when you combine purpose with freedom. Here is what makes our team different.", es: "Creemos que el gran trabajo surge cuando combinas proposito con libertad. Esto es lo que hace diferente a nuestro equipo." },
    "careers.why.remote.title": { en: "Remote-First", es: "Trabajo Remoto" },
    "careers.why.remote.desc": { en: "Work from anywhere in the world. Our distributed team spans time zones and thrives on async collaboration with flexible schedules.", es: "Trabaja desde cualquier lugar del mundo. Nuestro equipo distribuido abarca zonas horarias y prospera con colaboracion asincrona y horarios flexibles." },
    "careers.why.pay.title": { en: "Competitive Pay", es: "Salario Competitivo" },
    "careers.why.pay.desc": { en: "Market-rate salaries, equity participation, and performance bonuses. We invest in our people because they are our greatest asset.", es: "Salarios a precio de mercado, participacion accionaria y bonos por desempeno. Invertimos en nuestra gente porque son nuestro mayor activo." },
    "careers.why.beach.title": { en: "Beach Life", es: "Vida de Playa" },
    "careers.why.beach.desc": { en: "For those based in Cabo, enjoy team surf sessions, rooftop meetups, and a lifestyle where work-life balance is not just a slogan.", es: "Para quienes viven en Cabo, disfruta sesiones de surf en equipo, reuniones en azoteas y un estilo de vida donde el equilibrio laboral no es solo un eslogan." },
    "careers.why.impact.title": { en: "Real Impact", es: "Impacto Real" },
    "careers.why.impact.desc": { en: "Shape how thousands of people find their homes in paradise. Your work directly improves lives for renters, landlords, and communities.", es: "Define como miles de personas encuentran su hogar en el paraiso. Tu trabajo mejora directamente la vida de inquilinos, propietarios y comunidades." },
    "careers.positions.title": { en: "Open Positions", es: "Posiciones Abiertas" },
    "careers.positions.subtitle": { en: "Find the role that fits your skills and ambitions. We are looking for passionate individuals ready to make a difference.", es: "Encuentra el puesto que se adapte a tus habilidades y ambiciones. Buscamos personas apasionadas listas para hacer la diferencia." },
    "careers.positions.dept.engineering": { en: "Engineering", es: "Ingenieria" },
    "careers.positions.dept.marketing": { en: "Marketing", es: "Marketing" },
    "careers.positions.dept.operations": { en: "Operations", es: "Operaciones" },
    "careers.positions.dept.bizdev": { en: "Business Development", es: "Desarrollo de Negocios" },
    "careers.positions.loc.remote": { en: "Remote", es: "Remoto" },
    "careers.positions.loc.csl": { en: "Cabo San Lucas", es: "Cabo San Lucas" },
    "careers.positions.loc.sjc": { en: "San Jose del Cabo", es: "San Jose del Cabo" },
    "careers.positions.1.title": { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    "careers.positions.1.desc": { en: "Build and maintain our rental platform using React, Node.js, and PostgreSQL. You will own features end-to-end.", es: "Construye y mantiene nuestra plataforma de rentas usando React, Node.js y PostgreSQL. Seras responsable de funcionalidades de principio a fin." },
    "careers.positions.2.title": { en: "Marketing Manager", es: "Gerente de Marketing" },
    "careers.positions.2.desc": { en: "Lead our brand strategy across digital and offline channels. Drive user acquisition through SEO, paid campaigns, content marketing, and local partnerships.", es: "Lidera nuestra estrategia de marca en canales digitales y presenciales. Impulsa la adquisicion de usuarios mediante SEO, campanas pagadas, marketing de contenido y alianzas locales." },
    "careers.positions.3.title": { en: "Community Manager", es: "Community Manager" },
    "careers.positions.3.desc": { en: "Be the face of our platform in the community. Organize meetups, manage social media engagement, handle tenant and landlord relations.", es: "Se la cara de nuestra plataforma en la comunidad. Organiza encuentros, gestiona la interaccion en redes sociales, maneja relaciones con inquilinos y propietarios." },
    "careers.positions.4.title": { en: "Real Estate Partnerships Lead", es: "Lider de Alianzas Inmobiliarias" },
    "careers.positions.4.desc": { en: "Develop and manage strategic partnerships with real estate agencies, property developers, and HOAs across Baja California Sur.", es: "Desarrolla y gestiona alianzas estrategicas con agencias inmobiliarias, desarrolladores y asociaciones de propietarios en toda Baja California Sur." },
    "careers.positions.apply": { en: "Apply Now", es: "Postularme" },
    "careers.culture.title": { en: "Life at Los Cabos Rental App", es: "La Vida en Los Cabos Rental App" },
    "careers.culture.subtitle": { en: "We work hard, play hard, and never forget that we are building something meaningful in one of the most beautiful places on earth.", es: "Trabajamos duro, disfrutamos al maximo y nunca olvidamos que estamos construyendo algo significativo en uno de los lugares mas hermosos del planeta." },
    "careers.culture.photo1": { en: "Collaborative brainstorming sessions", es: "Sesiones colaborativas de lluvia de ideas" },
    "careers.culture.photo2": { en: "Strategy planning with ocean views", es: "Planeacion estrategica con vista al mar" },
    "careers.culture.photo3": { en: "Team outings in paradise", es: "Paseos de equipo en el paraiso" },
    "careers.cta.title": { en: "Don't See Your Role?", es: "No Ves Tu Puesto?" },
    "careers.cta.subtitle": { en: "We are always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.", es: "Siempre estamos buscando personas talentosas. Envianos tu curriculum y cuentanos como puedes contribuir a nuestra mision." },
    "careers.cta.button": { en: "Send Your Resume", es: "Enviar Tu Curriculum" },
    "careers.cta.email": { en: "careers@loscabosrentalapp.com", es: "careers@loscabosrentalapp.com" },
    "partners.hero.badge": { en: "Partnership Program", es: "Programa de Alianzas" },
    "partners.hero.title": { en: "Grow Together", es: "Crezcamos Juntos" },
    "partners.hero.subtitle": { en: "Partner with the #1 long-term rental platform in Baja California Sur.", es: "Asociate con la plataforma #1 de rentas a largo plazo en Baja California Sur." },
    "partners.hero.cta": { en: "Become a Partner", es: "Conviertete en Socio" },
    "partners.types.title": { en: "Partner Types", es: "Tipos de Alianza" },
    "partners.types.subtitle": { en: "Whether you manage properties, run an agency, or offer services, there is a partnership built for you.", es: "Ya sea que administres propiedades, dirijas una agencia u ofrezcas servicios, hay una alianza disenada para ti." },
    "partners.types.pm.title": { en: "Property Managers", es: "Administradores de Propiedades" },
    "partners.types.pm.desc": { en: "Manage multiple properties? Get bulk tools and priority support.", es: "Administras multiples propiedades? Obtiene herramientas masivas y soporte prioritario." },
    "partners.types.pm.f1": { en: "Bulk listing management", es: "Gestion masiva de listados" },
    "partners.types.pm.f2": { en: "Priority tenant matching", es: "Emparejamiento prioritario de inquilinos" },
    "partners.types.pm.f3": { en: "Consolidated financial reports", es: "Reportes financieros consolidados" },
    "partners.types.agency.title": { en: "Real Estate Agencies", es: "Agencias Inmobiliarias" },
    "partners.types.agency.desc": { en: "Expand your business with our verified tenant pipeline.", es: "Expande tu negocio con nuestro flujo de inquilinos verificados." },
    "partners.types.agency.f1": { en: "Verified tenant pipeline", es: "Flujo de inquilinos verificados" },
    "partners.types.agency.f2": { en: "Referral commission structure", es: "Estructura de comisiones por referencia" },
    "partners.types.agency.f3": { en: "Co-branded marketing materials", es: "Materiales de marketing compartidos" },
    "partners.types.service.title": { en: "Service Providers", es: "Proveedores de Servicios" },
    "partners.types.service.desc": { en: "Offer cleaning, maintenance, or legal services to our users.", es: "Ofrece servicios de limpieza, mantenimiento o legales a nuestros usuarios." },
    "partners.types.service.f1": { en: "Direct client access", es: "Acceso directo a clientes" },
    "partners.types.service.f2": { en: "In-app booking system", es: "Sistema de reservas en la app" },
    "partners.types.service.f3": { en: "Verified provider badge", es: "Insignia de proveedor verificado" },
    "partners.benefits.title": { en: "Partnership Benefits", es: "Beneficios de la Alianza" },
    "partners.benefits.subtitle": { en: "Every partner gets access to tools and support designed to accelerate growth.", es: "Cada socio obtiene acceso a herramientas y soporte disenados para acelerar el crecimiento." },
    "partners.benefits.revenue.title": { en: "Revenue Sharing", es: "Ingresos Compartidos" },
    "partners.benefits.revenue.desc": { en: "Earn competitive commissions on every transaction that comes through your partnership channel.", es: "Gana comisiones competitivas en cada transaccion que llegue a traves de tu canal de alianza." },
    "partners.benefits.marketing.title": { en: "Co-Marketing", es: "Co-Marketing" },
    "partners.benefits.marketing.desc": { en: "Joint campaigns, featured placement on our platform, and shared social media exposure to grow your brand.", es: "Campanas conjuntas, posicionamiento destacado en nuestra plataforma y exposicion compartida en redes sociales para hacer crecer tu marca." },
    "partners.benefits.manager.title": { en: "Dedicated Account Manager", es: "Gerente de Cuenta Dedicado" },
    "partners.benefits.manager.desc": { en: "A personal point of contact to help you maximize the partnership and resolve any issues quickly.", es: "Un punto de contacto personal para ayudarte a maximizar la alianza y resolver cualquier problema rapidamente." },
    "partners.benefits.early.title": { en: "Early Access", es: "Acceso Anticipado" },
    "partners.benefits.early.desc": { en: "Be the first to test new features, tools, and integrations before they roll out to the general public.", es: "Se el primero en probar nuevas funciones, herramientas e integraciones antes de que se lancen al publico general." },
    "partners.process.title": { en: "How to Partner", es: "Como Asociarte" },
    "partners.process.subtitle": { en: "Getting started is simple. Three steps and you are in.", es: "Comenzar es sencillo. Tres pasos y listo." },
    "partners.process.step1.title": { en: "Apply", es: "Aplica" },
    "partners.process.step1.desc": { en: "Fill out the partnership form below with your company details and the type of partnership you are interested in.", es: "Completa el formulario de alianza a continuacion con los datos de tu empresa y el tipo de alianza que te interesa." },
    "partners.process.step2.title": { en: "Review", es: "Revision" },
    "partners.process.step2.desc": { en: "Our partnerships team will review your application and schedule a call to discuss terms, expectations, and mutual goals.", es: "Nuestro equipo de alianzas revisara tu solicitud y programara una llamada para discutir terminos, expectativas y objetivos mutuos." },
    "partners.process.step3.title": { en: "Launch", es: "Lanzamiento" },
    "partners.process.step3.desc": { en: "Once approved, get onboarded with your dedicated account manager, access partner tools, and start growing together.", es: "Una vez aprobado, recibe tu incorporacion con tu gerente de cuenta dedicado, accede a herramientas de socios y comienza a crecer juntos." },
    "partners.form.title": { en: "Apply to Partner", es: "Solicitar Alianza" },
    "partners.form.subtitle": { en: "Tell us about your business and how you would like to work together. We review applications within 48 hours.", es: "Cuentanos sobre tu negocio y como te gustaria trabajar juntos. Revisamos solicitudes en un plazo de 48 horas." },
    "partners.form.info1.title": { en: "48-Hour Response", es: "Respuesta en 48 Horas" },
    "partners.form.info1.desc": { en: "We review every application and get back to you within two business days.", es: "Revisamos cada solicitud y te respondemos en un plazo de dos dias habiles." },
    "partners.form.info2.title": { en: "Confidential", es: "Confidencial" },
    "partners.form.info2.desc": { en: "Your business information is kept strictly confidential and used only for partnership evaluation.", es: "Tu informacion comercial se mantiene estrictamente confidencial y se usa unicamente para la evaluacion de la alianza." },
    "partners.form.info3.title": { en: "No Exclusivity Required", es: "Sin Exclusividad Requerida" },
    "partners.form.info3.desc": { en: "Our partnerships are flexible. Work with us alongside your existing channels and platforms.", es: "Nuestras alianzas son flexibles. Trabaja con nosotros junto con tus canales y plataformas actuales." },
    "partners.form.company": { en: "Company Name", es: "Nombre de la Empresa" },
    "partners.form.companyPlaceholder": { en: "Your company name", es: "Nombre de tu empresa" },
    "partners.form.contact": { en: "Contact Name", es: "Nombre de Contacto" },
    "partners.form.contactPlaceholder": { en: "Full name", es: "Nombre completo" },
    "partners.form.email": { en: "Email Address", es: "Correo Electronico" },
    "partners.form.emailPlaceholder": { en: "you@company.com", es: "tu@empresa.com" },
    "partners.form.type": { en: "Partner Type", es: "Tipo de Alianza" },
    "partners.form.typeDefault": { en: "Select partner type", es: "Selecciona tipo de alianza" },
    "partners.form.typePM": { en: "Property Manager", es: "Administrador de Propiedades" },
    "partners.form.typeAgency": { en: "Real Estate Agency", es: "Agencia Inmobiliaria" },
    "partners.form.typeService": { en: "Service Provider", es: "Proveedor de Servicios" },
    "partners.form.typeOther": { en: "Other", es: "Otro" },
    "partners.form.message": { en: "Message", es: "Mensaje" },
    "partners.form.messagePlaceholder": { en: "Tell us about your business and how you'd like to partner...", es: "Cuentanos sobre tu negocio y como te gustaria asociarte..." },
    "partners.form.submit": { en: "Submit Application", es: "Enviar Solicitud" },
    "partners.logos.title": { en: "Trusted By Leading Companies", es: "Empresas Lideres Confian en Nosotros" },
    "partners.logos.subtitle": { en: "We are proud to work alongside top businesses across Baja California Sur.", es: "Estamos orgullosos de trabajar junto a las mejores empresas de Baja California Sur." },
    "partners.logos.p1": { en: "Cabo Realty Group", es: "Cabo Realty Group" },
    "partners.logos.p2": { en: "BCS Properties", es: "BCS Properties" },
    "partners.logos.p3": { en: "Pacific Clean Co.", es: "Pacific Clean Co." },
    "partners.logos.p4": { en: "Baja Legal MX", es: "Baja Legal MX" },
    "partners.logos.p5": { en: "Marina Homes", es: "Marina Homes" },
    "partners.logos.p6": { en: "SunCoast Mgmt", es: "SunCoast Mgmt" },
    "relocation.hero.badge": { en: "Relocation Services", es: "Servicios de Reubicacion" },
    "relocation.hero.title": { en: "Your Cabo Relocation, Simplified", es: "Tu Reubicacion a Cabo, Simplificada" },
    "relocation.hero.subtitle": { en: "From finding the perfect home to setting up utilities, we handle every detail of your move to paradise so you can focus on enjoying your new life.", es: "Desde encontrar el hogar perfecto hasta configurar los servicios, nos encargamos de cada detalle de tu mudanza al paraiso para que te concentres en disfrutar tu nueva vida." },
    "relocation.hero.cta": { en: "View Packages", es: "Ver Paquetes" },
    "relocation.hero.ctaSecondary": { en: "Talk to a Consultant", es: "Hablar con un Consultor" },
    "relocation.services.title": { en: "What We Help With", es: "En Que Te Ayudamos" },
    "relocation.services.subtitle": { en: "Relocating to a new country can feel overwhelming. We have broken it down into manageable steps and handle each one for you.", es: "Reubicarse a un nuevo pais puede sentirse abrumador. Lo hemos dividido en pasos manejables y nos encargamos de cada uno por ti." },
    "relocation.services.home.title": { en: "Home Finding", es: "Busqueda de Hogar" },
    "relocation.services.home.desc": { en: "Curated property selection based on your needs, budget, and lifestyle preferences.", es: "Seleccion curada de propiedades segun tus necesidades, presupuesto y preferencias de estilo de vida." },
    "relocation.services.visa.title": { en: "Visa & Legal", es: "Visa y Legal" },
    "relocation.services.visa.desc": { en: "Immigration guidance and rental law basics. We connect you with trusted attorneys.", es: "Orientacion migratoria y fundamentos de la ley de arrendamiento. Te conectamos con abogados de confianza." },
    "relocation.services.school.title": { en: "School Search", es: "Busqueda de Escuelas" },
    "relocation.services.school.desc": { en: "International school recommendations for families.", es: "Recomendaciones de escuelas internacionales para familias." },
    "relocation.services.utility.title": { en: "Utility Setup", es: "Instalacion de Servicios" },
    "relocation.services.utility.desc": { en: "CFE electricity, high-speed internet, water, and gas. We handle the paperwork.", es: "Electricidad de CFE, internet de alta velocidad, agua y gas. Nos encargamos del papeleo." },
    "relocation.services.tours.title": { en: "Neighborhood Tours", es: "Recorridos por Vecindarios" },
    "relocation.services.tours.desc": { en: "Guided visits to Pedregal, El Tezal, The Corridor, and more.", es: "Visitas guiadas a Pedregal, El Tezal, El Corredor y mas." },
    "relocation.services.community.title": { en: "Community Introduction", es: "Integracion Comunitaria" },
    "relocation.services.community.desc": { en: "Connect with expat groups, local Facebook communities, sports leagues, and social clubs.", es: "Conecta con grupos de expatriados, comunidades locales en Facebook, ligas deportivas y clubes sociales." },
    "relocation.packages.title": { en: "Choose Your Package", es: "Elige Tu Paquete" },
    "relocation.packages.subtitle": { en: "Whether you are a confident self-starter or prefer white-glove service, we have a package designed for your relocation style.", es: "Ya sea que prefieras hacerlo por tu cuenta o un servicio de primera clase, tenemos un paquete disenado para tu estilo de reubicacion." },
    "relocation.packages.free.title": { en: "Self-Service", es: "Autoservicio" },
    "relocation.packages.free.price": { en: "Free", es: "Gratis" },
    "relocation.packages.free.desc": { en: "Everything you need to research and plan your move independently.", es: "Todo lo que necesitas para investigar y planificar tu mudanza de forma independiente." },
    "relocation.packages.free.f1": { en: "Full platform access", es: "Acceso completo a la plataforma" },
    "relocation.packages.free.f2": { en: "Neighborhood guides and maps", es: "Guias de vecindarios y mapas" },
    "relocation.packages.free.f3": { en: "Community forum access", es: "Acceso al foro comunitario" },
    "relocation.packages.free.f4": { en: "Rental market reports", es: "Reportes del mercado de rentas" },
    "relocation.packages.free.cta": { en: "Get Started Free", es: "Comenzar Gratis" },
    "relocation.packages.guided.badge": { en: "Most Popular", es: "Mas Popular" },
    "relocation.packages.guided.title": { en: "Guided", es: "Guiado" },
    "relocation.packages.guided.period": { en: "one-time", es: "pago unico" },
    "relocation.packages.guided.desc": { en: "Personal support to make your relocation smooth and stress-free.", es: "Apoyo personalizado para que tu reubicacion sea fluida y sin estres." },
    "relocation.packages.guided.f1": { en: "Personal relocation consultant", es: "Consultor personal de reubicacion" },
    "relocation.packages.guided.f2": { en: "3 guided property tours", es: "3 recorridos guiados de propiedades" },
    "relocation.packages.guided.f3": { en: "Utility setup assistance", es: "Asistencia en instalacion de servicios" },
    "relocation.packages.guided.f4": { en: "Neighborhood orientation tour", es: "Recorrido de orientacion por el vecindario" },
    "relocation.packages.guided.f5": { en: "Visa and legal referrals", es: "Referencias de visa y legales" },
    "relocation.packages.guided.cta": { en: "Choose Guided", es: "Elegir Guiado" },
    "relocation.packages.vip.title": { en: "VIP", es: "VIP" },
    "relocation.packages.vip.period": { en: "one-time", es: "pago unico" },
    "relocation.packages.vip.desc": { en: "The ultimate white-glove experience. We handle absolutely everything.", es: "La experiencia definitiva de servicio premium. Nos encargamos de absolutamente todo." },
    "relocation.packages.vip.f1": { en: "Everything in Guided", es: "Todo lo incluido en Guiado" },
    "relocation.packages.vip.f2": { en: "Airport pickup and welcome", es: "Recepcion y bienvenida en el aeropuerto" },
    "relocation.packages.vip.f3": { en: "Furnished move-in coordination", es: "Coordinacion de mudanza con muebles" },
    "relocation.packages.vip.f4": { en: "30-day post-move support", es: "Soporte de 30 dias posteriores a la mudanza" },
    "relocation.packages.vip.f5": { en: "School enrollment assistance", es: "Asistencia en inscripcion escolar" },
    "relocation.packages.vip.f6": { en: "Community welcome package", es: "Paquete de bienvenida comunitario" },
    "relocation.packages.vip.cta": { en: "Choose VIP", es: "Elegir VIP" },
    "relocation.testimonials.title": { en: "Relocation Success Stories", es: "Historias de Exito de Reubicacion" },
    "relocation.testimonials.subtitle": { en: "Hear from people who made the move and never looked back.", es: "Conoce a quienes dieron el paso y nunca miraron atras." },
    "relocation.testimonials.t1.quote": { en: "\"We moved from Austin with two kids and a dog. The VIP package was worth every penny.\"", es: "\"Nos mudamos desde Austin con dos hijos y un perro. El paquete VIP valio cada centavo.\"" },
    "relocation.testimonials.t1.name": { en: "Sarah & Mike Thompson", es: "Sarah y Mike Thompson" },
    "relocation.testimonials.t1.detail": { en: "Relocated from Austin, TX -- VIP Package", es: "Reubicados desde Austin, TX -- Paquete VIP" },
    "relocation.testimonials.t2.quote": { en: "\"As a remote worker, I needed reliable internet and a quiet neighborhood. The Guided package connected me with three great properties near the Corridor.\"", es: "\"Como trabajador remoto, necesitaba internet confiable y un vecindario tranquilo. El paquete Guiado me conecto con tres excelentes propiedades cerca del Corredor.\"" },
    "relocation.testimonials.t2.name": { en: "James Rivera", es: "James Rivera" },
    "relocation.testimonials.t2.detail": { en: "Relocated from Denver, CO -- Guided Package", es: "Reubicado desde Denver, CO -- Paquete Guiado" },
    "relocation.cta.title": { en: "Start Your Relocation", es: "Inicia Tu Reubicacion" },
    "relocation.cta.subtitle": { en: "Ready to make Los Cabos your home? Get in touch with our relocation team and take the first step toward your new life in paradise.", es: "Listo para hacer de Los Cabos tu hogar? Contacta a nuestro equipo de reubicacion y da el primer paso hacia tu nueva vida en el paraiso." },
    "relocation.cta.contact": { en: "Contact Our Team", es: "Contactar a Nuestro Equipo" },
    "relocation.cta.call": { en: "Call Us Now", es: "Llamanos Ahora" }
  };

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
