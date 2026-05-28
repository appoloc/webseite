import { useState } from 'react';

const T = {
  de: {
    nav: {
      business: 'Business',
      home: 'Home',
      materials: 'Materialien',
      configurator: 'Konfigurator',
      samples: 'Muster',
      contact: 'Kontakt',
      cta: 'Projekt anfragen',
    },
    hero: {
      tag: 'Modulares Wandsystem',
      title: 'Modulare Raumzeichen für Business und Zuhause.',
      sub: 'APPOLOC verbindet Information, Funktion und warme Materialwirkung in einem wechselbaren Wandsystem — für Praxen, Wellnessräume, Studios und moderne Wohnbereiche.',
      cardBiz: { tag: 'Business', title: 'Für Praxis, Spa & Studio.', text: 'Patienteninformation, Orientierung, QR-Codes, Logos und Raumzeichen — integriert in warme Materialien statt kalter Standard-Beschilderung.', cta: 'Business ansehen' },
      cardHome: { tag: 'Home', title: 'Für Flur, Küche & Homeoffice.', text: 'Ordnung, Alltag, Deko und Funktion — modular kombinierbar mit Apps für Schlüssel, Notizen, Kräuter, Uhr, Moos, Leder und mehr.', cta: 'Home ansehen' },
      cfg: 'Konfigurator öffnen',
    },

    // === BUSINESS ===
    bizWhy: {
      tag: 'Business · Warum',
      title: 'Patienteninformation muss nicht nach Klinikflur aussehen.',
      p1: 'Klassische Beschilderung wirkt oft technisch, kalt oder nach Werbetechnik. APPOLOC Business integriert Orientierung, Patienteninformation und Hinweise in ein modulares Interior-System mit warmen Materialien, ruhigen Farben und wechselbaren Apps.',
      claim: 'Information soll helfen — nicht den Raum stören.',
    },
    bizWhat: {
      tag: 'Business · Was',
      title: 'Ein System für Orientierung, Information und Atmosphäre.',
      p: 'APPOLOC besteht aus Boards und wechselbaren runden Apps. Jede App kann eine Funktion übernehmen: Text, Symbol, QR-Code, Materialfläche, Tafel, Moos, Leder, Holz oder Farbe.',
      groups: [
        { num: '01', title: 'Orientierung', items: 'Anmeldung · Wartebereich · Behandlungsraum · WC · Spa · Treatment Room · Richtungspfeile' },
        { num: '02', title: 'Patienten- und Gästeinformation', items: 'Bitte warten · Check-in · QR-Code Anamnese · QR-Code Termin · Öffnungszeiten · Hinweise' },
        { num: '03', title: 'Branding', items: 'Logo · Praxisname · Welcome · Markenfarbe · Symbol · Raumname' },
        { num: '04', title: 'Materialwirkung', items: 'Moos · Holz · Leder · Linoleum · Tafel · Stein · matte Farbflächen' },
      ],
      claim: 'Nicht jede App muss Text tragen. Manche Apps tragen Ruhe, Material und Atmosphäre.',
    },
    bizWhere: {
      tag: 'Business · Wo',
      title: 'Für Räume, in denen Menschen ankommen, warten und Vertrauen aufbauen.',
      cats: [
        { title: 'Medizin', items: 'Zahnarzt · Privatpraxen · Dermatologie · Physio · Osteopathie · Psychotherapie · Kinderwunsch · Ästhetische Medizin' },
        { title: 'Wellness', items: 'Medical Spas · Day Spas · Wellnesshotels · Yoga · Retreats · Beauty Clinics · Therapie & Coaching' },
        { title: 'Kleine Business-Interiors', items: 'Studios · Showrooms · Beratungsräume · hochwertige kleine Offices' },
      ],
    },
    bizHow: {
      tag: 'Business · Wie',
      title: 'Von der Idee zum fertigen Raumzeichen.',
      steps: [
        { n: '01', t: 'Anwendung wählen', d: 'Empfang, Wartebereich, Flur, Behandlungsraum, Spa oder Studio.' },
        { n: '02', t: 'Apps kombinieren', d: 'Logo, QR-Code, Text, Symbol, Moos, Leder, Tafel, Holz oder Farbflächen.' },
        { n: '03', t: 'Wirkung abstimmen', d: 'Materialien, Farben und Apps passend zum Raumkonzept wählen.' },
        { n: '04', t: 'Konfiguration senden', d: 'Über den Konfigurator oder direkt per Kontaktformular.' },
        { n: '05', t: 'Angebot erhalten', d: 'Für einzelnes Board, Praxis-Set oder größeres Projekt.' },
        { n: '06', t: 'Fertigung & Lieferung', d: 'Manufakturqualität, vorbereitet zur Montage.' },
      ],
      cta1: 'Business-Projekt anfragen',
      cta2: 'Konfigurator starten',
    },
    bizSets: {
      tag: 'Business · Pakete',
      title: 'Drei einfache Startpunkte.',
      sets: [
        { name: 'Welcome Set', for: 'Für Empfang und Eingang.', items: '1 Board · Logo-App · Welcome-App · QR-Code-App', target: 'Praxis, Studio, Spa, kleines Office', cta: 'Welcome Set anfragen' },
        { name: 'Patient Flow Set', for: 'Für Praxis und Wartebereich.', items: '2–3 Boards · Anmeldung · Wartebereich · Behandlungsräume · WC · QR-Code · Material-Apps', target: 'Arzt- und Zahnarztpraxen, Therapie', cta: 'Patient Flow Set anfragen' },
        { name: 'Wellness Guest Set', for: 'Für Spa, Retreat und Wellness.', items: 'Welcome · Treatment Room · Quiet Area · Spa · QR Guest Info · Moos / Leder / Holz / Linoleum', target: 'Medical Spas, Hotels, Retreats', cta: 'Wellness Set anfragen' },
      ],
    },

    // === MATERIAL ===
    mat: {
      tag: 'Materialwelt',
      title: 'Warme Materialien statt kalter Standard-Beschilderung.',
      p: 'APPOLOC nutzt Oberflächen, die nicht nur informieren, sondern auch auf die Raumwirkung einzahlen: mattes Linoleum, Holz, Yakisugi, Moos, Leder, Tafel, echtes Steinfurnier und ruhige Farben.',
      items: [
        { name: 'Linoleum', desc: 'matt · warm · ruhig', extra: 'Forbo · 24 Farben', link: 'https://www.forbo.com/flooring/de-de/produkte/linoleum/furniture-linoleum/furniture-linoleum/biu0na' },
        { name: 'Moos', desc: 'natürlich · weich · biophil' },
        { name: 'Holz', desc: 'vertraut · hochwertig · handwerklich' },
        { name: 'Yakisugi', desc: 'verkohlt · tief · markant' },
        { name: 'Leder', desc: 'warm · haptisch · elegant' },
        { name: 'Tafel', desc: 'analog · veränderbar · menschlich' },
        { name: 'Stein', desc: 'ruhig · stabil · wertig', extra: 'Echtes Steinfurnier · 70 Farben', link: 'https://www.slate-lite.com/c/slate-lite.html' },
        { name: 'Edelstahlkante', desc: 'präzise · fein · sauber' },
      ],
      claim: 'Patienten und Gäste lesen nicht nur Schilder. Sie lesen Räume.',
    },

    // === HOME ===
    homeWhy: {
      tag: 'Home · Warum',
      title: 'Die gleiche modulare Idee für Zuhause.',
      p: 'APPOLOC Home bringt Ordnung, Funktion und Materialwirkung in private Räume — ohne dass die Wand nach Standard-Garderobe, Regal oder Organizer aussieht.',
      rooms: ['Flur', 'Küche', 'Homeoffice', 'Garderobe', 'Kinderbereich', 'Schlafzimmer'],
    },
    homeWhat: {
      tag: 'Home · Was',
      title: 'Apps für Alltag, Ordnung und Atmosphäre.',
      groups: [
        { title: 'Ordnung', items: 'Haken · Magnet · Loop · Schlüssel · Brille · Tasche' },
        { title: 'Küche', items: 'Kräuter · Notiz · Tafel · Timer / Uhr · Magnet' },
        { title: 'Homeoffice', items: 'Uhr · Pin · Whiteboard · QR / NFC · Deko' },
        { title: 'Atmosphäre', items: 'Moos · Linoleum · Holz · Leder · Farbe · Stein' },
      ],
      cta: 'Home konfigurieren',
    },
    homeHow: {
      tag: 'Home · Wie',
      title: 'Board wählen. Apps kombinieren. Jederzeit ändern.',
      steps: ['Boardgröße wählen', 'Raum auswählen', 'Apps kombinieren', 'Farbe und Material wählen', 'Konfiguration ansehen', 'Bestellung oder Anfrage absenden'],
      cta: 'Konfigurator starten',
    },

    // === CFG / SAMPLE / TECH / FAQ / FINAL ===
    cfg: {
      tag: 'Konfigurator',
      title: 'Konfigurieren oder direkt anfragen.',
      p: 'Für private Anwendungen können Sie Ihr Board direkt konfigurieren. Für Praxis-, Spa- und Business-Projekte senden Sie Ihre Konfiguration als Anfrage — auf Wunsch mit Logo, Raumfoto oder Projektbeschreibung.',
      cta1: 'Home konfigurieren',
      cta2: 'Business-Projekt anfragen',
    },
    sample: {
      tag: 'Materialmuster',
      title: 'Materialmuster gibt es individuell.',
      p: 'Materialmuster gibt es nicht als pauschales Paket. Nach einer ersten Anfrage und einem kurzen Gespräch über Ihren Raum stelle ich eine passende Materialauswahl zusammen. Die ausgewählten Muster werden direkt vom Hersteller an Sie versendet.',
      note: 'So sehen Sie nur Materialien, die für Ihren Raum, Ihre Branche und Ihr Konzept wirklich Sinn ergeben.',
      cta: 'Vorgespräch vereinbaren',
    },
    tech: {
      tag: 'Manufaktur',
      title: 'Modular gebaut. Sauber gefertigt. Einfach montiert.',
      items: [
        'Boards in Manufakturqualität',
        'wechselbare runde Apps',
        'präzise Aufnahme',
        'hochwertige Oberflächen',
        'feine Edelstahlkante',
        'vorbereitet zur Wandmontage',
        'spätere Erweiterung möglich',
      ],
    },
    faq: {
      tag: 'Häufige Fragen',
      title: 'FAQ',
      items: [
        { q: 'Ist APPOLOC ein Schildersystem?', a: 'APPOLOC kann als Beschilderung eingesetzt werden, ist aber mehr als ein Schildersystem: Es verbindet Information, Funktion und Materialwirkung.' },
        { q: 'Für welche Branchen eignet sich APPOLOC Business?', a: 'Besonders für Praxen, Medical Spas, Wellnessräume, Studios, Therapieflächen und hochwertige kleine Business-Interiors.' },
        { q: 'Kann mein Logo integriert werden?', a: 'Ja, Logos, Symbole, QR-Codes und individuelle Texte können als Apps umgesetzt werden.' },
        { q: 'Kann ich Apps später austauschen?', a: 'Ja, genau dafür ist das System gedacht.' },
        { q: 'Gibt es Materialmuster?', a: 'Materialmuster gibt es projektbezogen nach einem kurzen Vorabgespräch. Anhand Ihres Raums und Konzepts stelle ich eine passende Auswahl zusammen — die Muster werden direkt vom Hersteller an Sie versendet.' },
        { q: 'Ist APPOLOC auch für Zuhause gedacht?', a: 'Ja. APPOLOC Home nutzt dasselbe System für Flur, Küche, Homeoffice und private Wohnbereiche.' },
      ],
    },
    final: {
      tag: 'Anfrage',
      title: 'Planen Sie gerade eine Praxis, einen Spa-Bereich oder einen Raum, der nicht nach Standard aussehen soll?',
      p: 'Senden Sie Ihre Idee, ein Foto der Wand oder eine erste Konfiguration. Wir prüfen, welche APPOLOC-Lösung zu Ihrem Raum passt.',
      cta1: 'Business-Projekt anfragen',
      cta2: 'Konfigurator starten',
    },
    contact: {
      tag: 'Kontakt',
      title: 'Sprich mit uns.',
      sub: 'Fragen zum System, individuelle Projekte oder komplette Raumkonzepte — schreib uns.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet…',
      sent: 'Gesendet! Wir melden uns.',
      error: 'Fehler — bitte schreib direkt an click@appoloc.com',
    },
    footer: {
      tagline: 'Modulares Wandsystem aus der Manufaktur.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
    },
  },

  // ============== ENGLISH ==============
  en: {
    nav: { business: 'Business', home: 'Home', materials: 'Materials', configurator: 'Configurator', samples: 'Samples', contact: 'Contact', cta: 'Request project' },
    hero: {
      tag: 'Modular Wall System',
      title: 'Modular room signs for business and home.',
      sub: 'APPOLOC combines information, function and warm material presence in a changeable wall system — for practices, wellness spaces, studios and modern living spaces.',
      cardBiz: { tag: 'Business', title: 'For practice, spa & studio.', text: 'Patient information, wayfinding, QR codes, logos and room signs — integrated into warm materials instead of cold standard signage.', cta: 'See Business' },
      cardHome: { tag: 'Home', title: 'For hallway, kitchen & home office.', text: 'Order, daily life, decoration and function — modular combinable with apps for keys, notes, herbs, clock, moss, leather and more.', cta: 'See Home' },
      cfg: 'Open configurator',
    },
    bizWhy: { tag: 'Business · Why', title: "Patient information doesn't have to look like a clinic corridor.", p1: 'Traditional signage often feels technical, cold or industrial. APPOLOC Business integrates wayfinding, patient information and notes into a modular interior system with warm materials, calm colors and changeable apps.', claim: 'Information should help — not disturb the space.' },
    bizWhat: {
      tag: 'Business · What', title: 'One system for orientation, information and atmosphere.',
      p: 'APPOLOC consists of boards and changeable round apps. Each app can hold a function: text, symbol, QR code, material surface, blackboard, moss, leather, wood or color.',
      groups: [
        { num: '01', title: 'Wayfinding', items: 'Reception · Waiting · Treatment · WC · Spa · Treatment Room · Arrows' },
        { num: '02', title: 'Patient & guest info', items: 'Please wait · Check-in · QR anamnesis · QR booking · Opening hours · Notes' },
        { num: '03', title: 'Branding', items: 'Logo · Practice name · Welcome · Brand color · Symbol · Room name' },
        { num: '04', title: 'Material presence', items: 'Moss · Wood · Leather · Linoleum · Blackboard · Stone · matte colors' },
      ],
      claim: 'Not every app must carry text. Some carry calm, material and atmosphere.',
    },
    bizWhere: {
      tag: 'Business · Where', title: 'For spaces where people arrive, wait and build trust.',
      cats: [
        { title: 'Medical', items: 'Dental · Private practice · Dermatology · Physio · Osteopathy · Psychology · Fertility · Aesthetic medicine' },
        { title: 'Wellness', items: 'Medical Spas · Day Spas · Wellness Hotels · Yoga · Retreats · Beauty Clinics · Therapy & Coaching' },
        { title: 'Small business interiors', items: 'Studios · Showrooms · Consultation rooms · refined small offices' },
      ],
    },
    bizHow: {
      tag: 'Business · How', title: 'From idea to finished room sign.',
      steps: [
        { n: '01', t: 'Choose application', d: 'Reception, waiting area, corridor, treatment room, spa or studio.' },
        { n: '02', t: 'Combine apps', d: 'Logo, QR code, text, symbol, moss, leather, blackboard, wood or color.' },
        { n: '03', t: 'Tune the effect', d: 'Materials, colors and apps matched to the room concept.' },
        { n: '04', t: 'Send configuration', d: 'Via the configurator or directly through the contact form.' },
        { n: '05', t: 'Receive quote', d: 'For single board, practice set or larger project.' },
        { n: '06', t: 'Manufacture & delivery', d: 'Workshop quality, prepared for mounting.' },
      ],
      cta1: 'Request business project', cta2: 'Open configurator',
    },
    bizSets: {
      tag: 'Business · Sets', title: 'Three simple starting points.',
      sets: [
        { name: 'Welcome Set', for: 'For reception and entrance.', items: '1 board · Logo app · Welcome app · QR code app', target: 'Practice, studio, spa, small office', cta: 'Request Welcome Set' },
        { name: 'Patient Flow Set', for: 'For practice and waiting area.', items: '2–3 boards · Reception · Waiting · Treatment rooms · WC · QR code · material apps', target: 'Medical and dental practices, therapy', cta: 'Request Patient Flow Set' },
        { name: 'Wellness Guest Set', for: 'For spa, retreat and wellness.', items: 'Welcome · Treatment Room · Quiet Area · Spa · QR guest info · moss / leather / wood / linoleum', target: 'Medical spas, hotels, retreats', cta: 'Request Wellness Set' },
      ],
    },
    mat: {
      tag: 'Materials', title: 'Warm materials instead of cold standard signage.',
      p: 'APPOLOC uses surfaces that not only inform but also contribute to room presence: matte linoleum, wood, yakisugi, moss, leather, blackboard, real stone veneer and calm colors.',
      items: [
        { name: 'Linoleum', desc: 'matte · warm · calm', extra: 'Forbo · 24 colors', link: 'https://www.forbo.com/flooring/de-de/produkte/linoleum/furniture-linoleum/furniture-linoleum/biu0na' },
        { name: 'Moss', desc: 'natural · soft · biophilic' },
        { name: 'Wood', desc: 'familiar · refined · crafted' },
        { name: 'Yakisugi', desc: 'charred · deep · striking' },
        { name: 'Leather', desc: 'warm · tactile · elegant' },
        { name: 'Blackboard', desc: 'analog · changeable · human' },
        { name: 'Stone', desc: 'calm · stable · valuable', extra: 'Real stone veneer · 70 colors', link: 'https://www.slate-lite.com/c/slate-lite.html' },
        { name: 'Steel edge', desc: 'precise · fine · clean' },
      ],
      claim: 'Patients and guests do not just read signs. They read rooms.',
    },
    homeWhy: { tag: 'Home · Why', title: 'The same modular idea for home.', p: 'APPOLOC Home brings order, function and material presence into private spaces — without the wall looking like standard hallway furniture, shelving or organizer.', rooms: ['Hallway', 'Kitchen', 'Home office', 'Wardrobe', "Children's area", 'Bedroom'] },
    homeWhat: {
      tag: 'Home · What', title: 'Apps for daily life, order and atmosphere.',
      groups: [
        { title: 'Order', items: 'Hook · Magnet · Loop · Keys · Glasses · Bag' },
        { title: 'Kitchen', items: 'Herbs · Notes · Blackboard · Timer / Clock · Magnet' },
        { title: 'Home office', items: 'Clock · Pin · Whiteboard · QR / NFC · Decoration' },
        { title: 'Atmosphere', items: 'Moss · Linoleum · Wood · Leather · Color · Stone' },
      ],
      cta: 'Configure Home',
    },
    homeHow: { tag: 'Home · How', title: 'Choose board. Combine apps. Change anytime.', steps: ['Choose board size', 'Select room', 'Combine apps', 'Choose color and material', 'Preview configuration', 'Order or send inquiry'], cta: 'Open configurator' },
    cfg: { tag: 'Configurator', title: 'Configure or send an inquiry.', p: 'For private use you can configure your board directly. For practice, spa and business projects, send your configuration as an inquiry — optionally with logo, room photo or project description.', cta1: 'Configure Home', cta2: 'Request business project' },
    sample: { tag: 'Material samples', title: 'Samples are sent individually.', p: 'Material samples are not offered as a fixed package. After an initial inquiry and a short conversation about your space, I put together a fitting material selection. The chosen samples are sent directly from the manufacturer to you.', note: 'That way you only see materials that actually make sense for your room, your industry and your concept.', cta: 'Arrange a call' },
    tech: { tag: 'Workshop', title: 'Modular by design. Cleanly made. Easy to mount.', items: ['Boards in workshop quality', 'changeable round apps', 'precise housing', 'high-quality surfaces', 'fine stainless steel edge', 'prepared for wall mounting', 'extendable later'] },
    faq: {
      tag: 'Frequently asked', title: 'FAQ',
      items: [
        { q: 'Is APPOLOC a signage system?', a: 'APPOLOC can be used as signage, but it is more than a signage system: it combines information, function and material presence.' },
        { q: 'Which industries does APPOLOC Business fit?', a: 'Especially practices, medical spas, wellness spaces, studios, therapy areas and refined small business interiors.' },
        { q: 'Can my logo be integrated?', a: 'Yes — logos, symbols, QR codes and individual texts can be realized as apps.' },
        { q: 'Can I swap apps later?', a: 'Yes — that is exactly what the system is designed for.' },
        { q: 'Are there material samples?', a: 'Material samples are provided project-based after a brief consultation. Based on your room and concept, I put together a fitting selection — the samples are sent directly from the manufacturer to you.' },
        { q: 'Is APPOLOC also for home?', a: 'Yes. APPOLOC Home uses the same system for hallway, kitchen, home office and private living spaces.' },
      ],
    },
    final: { tag: 'Inquiry', title: 'Are you planning a practice, a spa area or a room that should not look standard?', p: 'Send your idea, a photo of the wall or an initial configuration. We will assess which APPOLOC solution fits your space.', cta1: 'Request business project', cta2: 'Open configurator' },
    contact: { tag: 'Contact', title: 'Talk to us.', sub: 'Questions about the system, custom projects or complete room concepts — write to us.', name: 'Name', email: 'Email', message: 'Message', send: 'Send message', sending: 'Sending…', sent: "Sent! We'll be in touch.", error: 'Error — please write directly to click@appoloc.com' },
    footer: { tagline: 'Modular wall system from the workshop.', imprint: 'Imprint', privacy: 'Privacy', rights: 'All rights reserved.' },
  },
};

const KONFIGURATOR_URL = 'https://appoloc-konfigurator.vercel.app';

// === Bilder ===
// Pfade in /public/images/ — du lädst diese Dateien einfach in den public/images/ Ordner hoch.
const IMG = {
  // === Bereits im bestehenden Repo (musst du behalten) ===
  hero:         '/images/hero.jpg',          // Hero-Bild bestehend
  product:      '/images/product.jpg',       // APPOLOC Board Detail bestehend
  kitchen:      '/images/kitchen.jpg',       // Küche bestehend
  office:       '/images/office.jpg',        // Homeoffice bestehend
  smart:        '/images/smart.jpg',         // Smart-App Flur bestehend
  portrait:     '/images/portrait.jpg',      // Lupos Portrait bestehend

  // === NEUE BUSINESS-BILDER (Renderings aus deinen Uploads) ===
  heroBusiness: '/images/hero-business.jpg',// Hero-Karte Business: Aurum Dental Empfang (3 Boards)
  heroHome:     '/images/hero-home.jpg',    // Hero-Karte Home: Küche mit Kräuter-Apps, Uhr, Moos
  heroStand:    '/images/hero-stand.jpg',    // Hero Stand-Treppenhaus (vertikal, freistehend, Beton+Treppe)
  bizHamilton:  '/images/biz-hamilton.jpg',  // Hamilton & Reeve (dunkel, drei Boards, Anwaltskanzlei)
  bizWhy:       '/images/biz-why.jpg',       // Business-Warum-Sektion: Smile Design Orthodontics Empfang
  bizReception: '/images/biz-reception.jpg', // Lumière Aesthetic Medicine (Bronze-Tresen, dunkel)
  bizPraxis:    '/images/biz-praxis.jpg',    // Smile Design Orthodontics (hell, drei vertikale Boards)
  bizWellness:  '/images/biz-wellness.jpg',  // Pure Balance Wellness Spa (Travertin, Moos)
  bizNorthridge:'/images/biz-northridge.jpg',// Northridge Advisory (hell, drei horizontale Boards)
  bizAurum:     '/images/biz-aurum.jpg',     // Aurum Dental Doppelempfang
  bizRK:        '/images/biz-rk.jpg',        // Smile Design Praxis Wartebereich
  bizHotel:     '/images/biz-hotel.jpg',     // Hotel Suite 204 (Wayfinding Zimmertür)
  bizWardrobe:  '/images/biz-wardrobe.jpg',  // AW Guest Coats Garderobe (Material- und Haken-Module)

  // === HOME / DETAIL ===
  homeGrow:     '/images/home-grow.jpg',     // Wartezimmer mit Smart-Display "Grow" (Moos, Implantat-Video)
  techKanzlei:  '/images/tech-kanzlei.jpg',  // Kanzlei Türschild Detail (Holz + Smart-Display "Mandantengespräch")
  techWide:     '/images/tech-kanzlei-wide.jpg', // Kanzlei Wand aus Distanz (Gang)

  // === MATERIAL-MODULE (echte APPOLOC-Module mit Edelstahlkante, je Material) ===
  matLinoleum:  '/images/mat-linoleum.jpg',  // Lila/Flieder mattes Linoleum-Modul
  matMoos:      '/images/mat-moos.jpg',      // Grünes Moos-Modul
  matHolz:      '/images/mat-holz.jpg',      // Eichenholz-Modul
  matYakisugi:  '/images/mat-yakisugi.jpg',  // Verkohltes Yakisugi-Holz-Modul
  matLeder:     '/images/mat-leder.jpg',     // Cognac Leder-Modul
  matTafel:     '/images/mat-tafel.jpg',     // Dunkles genarbtes Tafel-Modul
  matStein:     '/images/mat-stein.jpg',     // Echtes Steinfurnier (grau)
  matEdelstahl: '/images/mat-edelstahl.jpg', // Detail Edelstahlkante (Yakisugi-Anschnitt)
};

function Logo() {
  return <img src="/images/logo.png" alt="appoloc" style={{ height: 48 }} />;
}

export default function App() {
  const [lang, setLang] = useState('de');
  const [reqName, setReqName] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqMsg, setReqMsg] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const t = T[lang];

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true); setError(false);
    try {
      const r = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: reqName, email: reqEmail, message: reqMsg }),
      });
      if (r.ok) { setSent(true); }
      else { setError(true); }
    } catch { setError(true); }
    setSending(false);
  }

  // === Shared styles ===
  const colors = {
    paper: '#faf9f7',
    paperWarm: '#f0ece6',
    ink: '#1a1714',
    inkSoft: '#5a5550',
    mute: '#9a9590',
    accent: '#d4c4a8',
    line: '#e5e0d8',
  };
  const sectionStyle = { maxWidth: 1200, margin: '0 auto', padding: '100px 32px' };
  const tagStyle = { fontFamily: "'Montserrat'", fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: colors.mute, fontWeight: 500, marginBottom: 16 };
  const h2Style = { fontFamily: "'Montserrat'", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 500, color: colors.ink, lineHeight: 1.15, margin: '0 0 16px' };
  const pStyle = { fontFamily: "'Montserrat'", fontSize: 16, color: colors.inkSoft, lineHeight: 1.7, margin: '0 0 16px', fontWeight: 300 };
  const btnStyle = {
    display: 'inline-block', fontFamily: "'Montserrat'", fontSize: 14, fontWeight: 500,
    color: '#f5f0e8', background: colors.ink, padding: '14px 32px', borderRadius: 50,
    textDecoration: 'none', letterSpacing: '0.02em', border: 'none', cursor: 'pointer',
    transition: 'opacity 0.2s',
  };
  const btnGhost = {
    display: 'inline-block', fontFamily: "'Montserrat'", fontSize: 14, fontWeight: 500,
    color: colors.ink, background: 'transparent', padding: '13px 31px', borderRadius: 50,
    textDecoration: 'none', letterSpacing: '0.02em', border: `1px solid ${colors.ink}`, cursor: 'pointer',
    transition: 'opacity 0.2s',
  };
  const claimStyle = {
    fontFamily: "'Montserrat'", fontSize: 'clamp(18px, 2.2vw, 24px)', fontStyle: 'italic',
    color: colors.inkSoft, lineHeight: 1.45, fontWeight: 300,
    borderLeft: `2px solid ${colors.ink}`, paddingLeft: 24, margin: '24px 0 0',
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: colors.ink, background: colors.paper, overflowX: 'hidden' }}>

      {/* ================= NAV ================= */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250,249,247,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid rgba(0,0,0,0.05)`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <a href="#top" style={{ textDecoration: 'none' }}><Logo /></a>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="#business" style={navLink}>{t.nav.business}</a>
            <a href="#home" style={navLink}>{t.nav.home}</a>
            <a href="#material" style={navLink}>{t.nav.materials}</a>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={navLink}>{t.nav.configurator}</a>
            <a href="#muster" style={navLink}>{t.nav.samples}</a>
            <a href="#kontakt" style={navLink}>{t.nav.contact}</a>
            <div style={{ display: 'flex', gap: 2, marginLeft: 4 }}>
              {['de', 'en'].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '3px 8px', fontSize: 11, fontFamily: "'Montserrat'", fontWeight: lang === l ? 600 : 400,
                  color: lang === l ? colors.ink : '#aaa', background: lang === l ? '#ece8e1' : 'transparent',
                  border: 'none', borderRadius: 4, cursor: 'pointer', textTransform: 'uppercase',
                }}>{l}</button>
              ))}
            </div>
            <a href="#kontakt" style={{ ...btnStyle, padding: '10px 22px', fontSize: 13 }}>{t.nav.cta}</a>
          </div>
        </div>
      </nav>

      <div id="top" />

      {/* ================= HERO ================= */}
      <section style={{ paddingTop: 90, paddingBottom: 60 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '40px auto 56px' }}>
            <div style={tagStyle}>{t.hero.tag}</div>
            <h1 style={{ fontFamily: "'Montserrat'", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 500, color: colors.ink, lineHeight: 1.1, margin: '0 0 20px' }}>
              {t.hero.title}
            </h1>
            <p style={{ ...pStyle, fontSize: 18, maxWidth: 680, margin: '0 auto' }}>{t.hero.sub}</p>
          </div>

          {/* Zwei Auswahlkarten — Bild oben, Text unten */}
          <div className="hero-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 1080, margin: '0 auto' }}>
            {/* Business card */}
            <a href="#business" style={{
              display: 'flex', flexDirection: 'column', textDecoration: 'none',
              background: colors.ink, borderRadius: 12, overflow: 'hidden',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                <img src={IMG.heroBusiness} alt="APPOLOC Business — Praxisempfang mit Boards" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 36 }}>
                <div style={{ ...tagStyle, color: colors.accent, marginBottom: 12 }}>{t.hero.cardBiz.tag}</div>
                <h3 style={{ fontFamily: "'Montserrat'", fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 500, color: '#f5f0e8', margin: '0 0 14px', lineHeight: 1.2 }}>
                  {t.hero.cardBiz.title}
                </h3>
                <p style={{ fontFamily: "'Montserrat'", fontSize: 15, color: '#a09890', lineHeight: 1.65, margin: '0 0 24px', fontWeight: 300 }}>
                  {t.hero.cardBiz.text}
                </p>
                <span style={{ fontFamily: "'Montserrat'", fontSize: 14, fontWeight: 500, color: '#f5f0e8', letterSpacing: '0.02em' }}>
                  {t.hero.cardBiz.cta} →
                </span>
              </div>
            </a>

            {/* Home card */}
            <a href="#home" style={{
              display: 'flex', flexDirection: 'column', textDecoration: 'none',
              background: colors.paperWarm, borderRadius: 12, overflow: 'hidden',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                <img src={IMG.heroHome} alt="APPOLOC Home — Küche mit Kräuter- und Funktions-Apps" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 36 }}>
                <div style={tagStyle}>{t.hero.cardHome.tag}</div>
                <h3 style={{ fontFamily: "'Montserrat'", fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 500, color: colors.ink, margin: '0 0 14px', lineHeight: 1.2 }}>
                  {t.hero.cardHome.title}
                </h3>
                <p style={{ ...pStyle, fontSize: 15, margin: '0 0 24px' }}>{t.hero.cardHome.text}</p>
                <span style={{ fontFamily: "'Montserrat'", fontSize: 14, fontWeight: 500, color: colors.ink, letterSpacing: '0.02em' }}>
                  {t.hero.cardHome.cta} →
                </span>
              </div>
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ fontFamily: "'Montserrat'", fontSize: 13, fontWeight: 500, color: colors.inkSoft, textDecoration: 'underline', textUnderlineOffset: 4 }}>
              {t.hero.cfg} →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* ================ BUSINESS BEREICH ================ */}
      {/* ================================================== */}
      <div id="business" />

      {/* BIZ WHY */}
      <section style={{ ...sectionStyle, paddingTop: 100 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
          <img src={IMG.bizWhy} alt="Empfang einer Praxis mit APPOLOC Board" style={{ width: '100%', borderRadius: 8 }} />
          <div>
            <div style={tagStyle}>{t.bizWhy.tag}</div>
            <h2 style={h2Style}>{t.bizWhy.title}</h2>
            <p style={pStyle}>{t.bizWhy.p1}</p>
            <p style={claimStyle}>{t.bizWhy.claim}</p>
          </div>
        </div>
      </section>

      {/* BIZ WHAT */}
      <section style={{ background: colors.paperWarm }}>
        <div style={sectionStyle}>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div style={tagStyle}>{t.bizWhat.tag}</div>
            <h2 style={h2Style}>{t.bizWhat.title}</h2>
            <p style={pStyle}>{t.bizWhat.p}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: colors.line }}>
            {t.bizWhat.groups.map((g) => (
              <div key={g.num} style={{ background: colors.paper, padding: 32, minHeight: 200 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: colors.mute, letterSpacing: '0.2em', marginBottom: 20 }}>{g.num}</div>
                <h3 style={{ fontFamily: "'Montserrat'", fontSize: 18, fontWeight: 500, color: colors.ink, margin: '0 0 10px' }}>{g.title}</h3>
                <p style={{ fontFamily: "'Montserrat'", fontSize: 14, color: colors.inkSoft, lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{g.items}</p>
              </div>
            ))}
          </div>
          <p style={{ ...claimStyle, marginTop: 48, maxWidth: 720 }}>{t.bizWhat.claim}</p>
        </div>
      </section>

      {/* BIZ WHERE */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={tagStyle}>{t.bizWhere.tag}</div>
          <h2 style={h2Style}>{t.bizWhere.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { img: IMG.bizPraxis, cat: t.bizWhere.cats[0] },     // Medizin → Grow Dental Wartezimmer
            { img: IMG.bizWellness, cat: t.bizWhere.cats[1] },   // Wellness → Pure Balance Spa
            { img: IMG.bizReception, cat: t.bizWhere.cats[2] },  // Kleine Business-Interiors → Kanzlei Martin Keller
          ].map((c, i) => (
            <div key={i}>
              <div style={{ aspectRatio: '4/3', borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}>
                <img src={c.img} alt={c.cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: "'Montserrat'", fontSize: 18, fontWeight: 500, color: colors.ink, margin: '0 0 8px' }}>{c.cat.title}</h3>
              <p style={{ fontFamily: "'Montserrat'", fontSize: 14, color: colors.inkSoft, lineHeight: 1.65, margin: 0, fontWeight: 300 }}>{c.cat.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIZ HOW */}
      <section style={{ background: colors.paperWarm }}>
        <div style={sectionStyle}>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div style={tagStyle}>{t.bizHow.tag}</div>
            <h2 style={h2Style}>{t.bizHow.title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: colors.line }}>
            {t.bizHow.steps.map((s) => (
              <div key={s.n} style={{ background: colors.paperWarm, padding: 28 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: colors.mute, letterSpacing: '0.2em', marginBottom: 16 }}>{s.n}</div>
                <h3 style={{ fontFamily: "'Montserrat'", fontSize: 16, fontWeight: 500, color: colors.ink, margin: '0 0 8px' }}>{s.t}</h3>
                <p style={{ fontFamily: "'Montserrat'", fontSize: 14, color: colors.inkSoft, lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
            <a href="#kontakt" style={btnStyle}>{t.bizHow.cta1} →</a>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={btnGhost}>{t.bizHow.cta2} →</a>
          </div>
        </div>
      </section>

      {/* BIZ SETS */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={tagStyle}>{t.bizSets.tag}</div>
          <h2 style={h2Style}>{t.bizSets.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {t.bizSets.sets.map((s, i) => {
            const setImages = [IMG.bizHotel, IMG.bizAurum, IMG.bizWellness]; // Welcome / Patient Flow / Wellness
            return (
              <div key={i} style={{ background: colors.paper, border: `1px solid ${colors.line}`, borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '5/3', overflow: 'hidden', background: colors.paperWarm }}>
                  <img src={setImages[i]} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                  <h3 style={{ fontFamily: "'Montserrat'", fontSize: 22, fontWeight: 500, color: colors.ink, margin: 0 }}>{s.name}</h3>
                  <p style={{ ...pStyle, margin: 0, fontStyle: 'italic' }}>{s.for}</p>
                  <p style={{ fontFamily: "'Montserrat'", fontSize: 14, color: colors.inkSoft, lineHeight: 1.65, margin: 0, fontWeight: 300 }}>{s.items}</p>
                  <div style={{ fontFamily: "'Montserrat'", fontSize: 12, color: colors.mute, marginTop: 'auto' }}>{s.target}</div>
                  <a href="#kontakt" style={{ ...btnStyle, alignSelf: 'flex-start', marginTop: 8 }}>{s.cta} →</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================ MATERIAL ================ */}
      <div id="material" />
      <section style={{ background: colors.ink, color: '#f5f0e8' }}>
        <div style={sectionStyle}>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div style={{ ...tagStyle, color: colors.accent }}>{t.mat.tag}</div>
            <h2 style={{ ...h2Style, color: '#f5f0e8' }}>{t.mat.title}</h2>
            <p style={{ ...pStyle, color: '#a09890' }}>{t.mat.p}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {t.mat.items.map((m, i) => {
              const matImages = [
                IMG.matLinoleum, IMG.matMoos, IMG.matHolz, IMG.matYakisugi,
                IMG.matLeder, IMG.matTafel, IMG.matStein, IMG.matEdelstahl,
              ];
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ aspectRatio: '1/1', borderRadius: 12, overflow: 'hidden', marginBottom: 16, background: '#0f0d0b' }}>
                    <img src={matImages[i]} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat'", fontSize: 17, fontWeight: 500, color: '#f5f0e8', margin: '0 0 6px' }}>{m.name}</h3>
                  <p style={{ fontFamily: "'Montserrat'", fontSize: 13, color: '#a09890', margin: 0, fontWeight: 300 }}>{m.desc}</p>
                  {m.extra && (
                    <a href={m.link} target="_blank" rel="noreferrer" style={{ fontFamily: "'Montserrat'", fontSize: 12, color: colors.accent, marginTop: 8, textDecoration: 'none', borderBottom: `1px solid rgba(212,196,168,0.4)`, alignSelf: 'flex-start', paddingBottom: 1 }}>
                      {m.extra} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
          <p style={{ ...claimStyle, color: colors.accent, borderLeftColor: colors.accent, marginTop: 56 }}>{t.mat.claim}</p>
        </div>
      </section>

      {/* ============================================ */}
      {/* ================ HOME BEREICH ============== */}
      {/* ============================================ */}
      <div id="home" />

      {/* HOME WHY */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={tagStyle}>{t.homeWhy.tag}</div>
            <h2 style={h2Style}>{t.homeWhy.title}</h2>
            <p style={pStyle}>{t.homeWhy.p}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {t.homeWhy.rooms.map((r) => (
                <span key={r} style={{ fontFamily: "'Montserrat'", fontSize: 13, fontWeight: 400, color: colors.ink, background: colors.paperWarm, padding: '8px 16px', borderRadius: 50 }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
          <img src={IMG.product} alt="APPOLOC Board für Zuhause" style={{ width: '100%', borderRadius: 8 }} />
        </div>
      </section>

      {/* HOME WHAT */}
      <section style={{ background: colors.paperWarm }}>
        <div style={sectionStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, marginBottom: 56, alignItems: 'center' }}>
            <div>
              <div style={tagStyle}>{t.homeWhat.tag}</div>
              <h2 style={h2Style}>{t.homeWhat.title}</h2>
            </div>
            <img src={IMG.homeGrow} alt="APPOLOC Board mit Moos, Smart-Display und App im Wohnraum" style={{ width: '100%', borderRadius: 8 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {t.homeWhat.groups.map((g, i) => (
              <div key={i} style={{ background: colors.paper, borderRadius: 12, padding: 28 }}>
                <h3 style={{ fontFamily: "'Montserrat'", fontSize: 18, fontWeight: 500, color: colors.ink, margin: '0 0 12px' }}>{g.title}</h3>
                <p style={{ fontFamily: "'Montserrat'", fontSize: 14, color: colors.inkSoft, lineHeight: 1.65, margin: 0, fontWeight: 300 }}>{g.items}</p>
              </div>
            ))}
          </div>
          <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ ...btnStyle, marginTop: 40 }}>{t.homeWhat.cta} →</a>
        </div>
      </section>

      {/* HOME HOW */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={tagStyle}>{t.homeHow.tag}</div>
            <h2 style={h2Style}>{t.homeHow.title}</h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', counterReset: 'step' }}>
              {t.homeHow.steps.map((s, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: `1px solid ${colors.line}` }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 12, color: colors.mute, letterSpacing: '0.15em', minWidth: 28 }}>0{i + 1}</span>
                  <span style={{ fontFamily: "'Montserrat'", fontSize: 15, color: colors.ink, fontWeight: 400 }}>{s}</span>
                </li>
              ))}
            </ol>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ ...btnStyle, marginTop: 28 }}>{t.homeHow.cta} →</a>
          </div>
          <img src={IMG.kitchen} alt="APPOLOC in der Küche" style={{ width: '100%', borderRadius: 8 }} />
        </div>
      </section>

      {/* ================ KONFIGURATOR / ANFRAGE ================ */}
      <section style={{ background: colors.paperWarm }}>
        <div style={{ ...sectionStyle, maxWidth: 880, textAlign: 'center' }}>
          <div style={tagStyle}>{t.cfg.tag}</div>
          <h2 style={h2Style}>{t.cfg.title}</h2>
          <p style={{ ...pStyle, maxWidth: 640, margin: '0 auto 32px' }}>{t.cfg.p}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={btnStyle}>{t.cfg.cta1} →</a>
            <a href="#kontakt" style={btnGhost}>{t.cfg.cta2} →</a>
          </div>
        </div>
      </section>

      {/* ================ MATERIALMUSTER ================ */}
      <div id="muster" />
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={tagStyle}>{t.sample.tag}</div>
            <h2 style={h2Style}>{t.sample.title}</h2>
            <p style={pStyle}>{t.sample.p}</p>
            <p style={{ fontFamily: "'Montserrat'", fontSize: 15, color: colors.inkSoft, fontStyle: 'italic', lineHeight: 1.6, margin: '20px 0 0', padding: '20px 24px', background: colors.paperWarm, borderRadius: 8, borderLeft: `2px solid ${colors.ink}` }}>
              {t.sample.note}
            </p>
            <a href="#kontakt" style={{ ...btnStyle, marginTop: 28 }}>{t.sample.cta} →</a>
          </div>
          <img src={IMG.bizWellness} alt="APPOLOC — Moos, Stein, Linoleum als Materialauswahl" style={{ width: '100%', borderRadius: 8 }} />
        </div>
      </section>

      {/* ================ MANUFAKTUR / TECHNIK ================ */}
      <section style={{ background: colors.ink, color: '#f5f0e8' }}>
        <div style={sectionStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ ...tagStyle, color: colors.accent }}>{t.tech.tag}</div>
              <h2 style={{ ...h2Style, color: '#f5f0e8' }}>{t.tech.title}</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0' }}>
                {t.tech.items.map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, padding: '10px 0', alignItems: 'center', fontFamily: "'Montserrat'", fontSize: 15, color: '#a09890', fontWeight: 300 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors.accent, flexShrink: 0 }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              <img src={IMG.techKanzlei} alt="APPOLOC Detail — Holz, Smart-Display, Edelstahlkante" style={{ width: '100%', borderRadius: 8 }} />
              <img src={IMG.bizWardrobe} alt="APPOLOC mit Material- und Funktions-Apps" style={{ width: '100%', borderRadius: 8 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================ FAQ ================ */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ ...tagStyle, textAlign: 'center' }}>{t.faq.tag}</div>
          <h2 style={{ ...h2Style, textAlign: 'center', marginBottom: 48 }}>{t.faq.title}</h2>
          <div>
            {t.faq.items.map((item, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${colors.line}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'transparent', border: 'none', padding: '24px 0', cursor: 'pointer',
                    fontFamily: "'Montserrat'", fontSize: 17, fontWeight: 500, color: colors.ink, textAlign: 'left',
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{ fontSize: 22, fontWeight: 300, color: colors.mute, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block', marginLeft: 16 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 0 24px', fontFamily: "'Montserrat'", fontSize: 15, color: colors.inkSoft, lineHeight: 1.7, fontWeight: 300, maxWidth: 720 }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ ABSCHLUSS-CTA ================ */}
      <section style={{ background: colors.paperWarm }}>
        <div style={{ ...sectionStyle, maxWidth: 880, textAlign: 'center' }}>
          <div style={tagStyle}>{t.final.tag}</div>
          <h2 style={{ ...h2Style, fontSize: 'clamp(24px, 3.5vw, 36px)' }}>{t.final.title}</h2>
          <p style={{ ...pStyle, maxWidth: 640, margin: '0 auto 32px' }}>{t.final.p}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#kontakt" style={btnStyle}>{t.final.cta1} →</a>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={btnGhost}>{t.final.cta2} →</a>
          </div>
        </div>
      </section>

      {/* ================ KONTAKT ================ */}
      <section id="kontakt" style={{ ...sectionStyle, maxWidth: 640 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={tagStyle}>{t.contact.tag}</div>
          <h2 style={h2Style}>{t.contact.title}</h2>
          <p style={pStyle}>{t.contact.sub}</p>
        </div>
        {sent ? (
          <p style={{ textAlign: 'center', fontFamily: "'Montserrat'", fontSize: 16, color: '#1a7a3a', fontWeight: 500 }}>
            ✓ {t.contact.sent}
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input required value={reqName} onChange={e => setReqName(e.target.value)}
              placeholder={t.contact.name}
              style={{ fontFamily: "'Montserrat'", fontSize: 15, padding: '14px 18px', border: '1px solid #ddd', borderRadius: 8, outline: 'none', background: '#fff' }}
            />
            <input required type="email" value={reqEmail} onChange={e => setReqEmail(e.target.value)}
              placeholder={t.contact.email}
              style={{ fontFamily: "'Montserrat'", fontSize: 15, padding: '14px 18px', border: '1px solid #ddd', borderRadius: 8, outline: 'none', background: '#fff' }}
            />
            <textarea value={reqMsg} onChange={e => setReqMsg(e.target.value)}
              placeholder={t.contact.message} rows={5}
              style={{ fontFamily: "'Montserrat'", fontSize: 15, padding: '14px 18px', border: '1px solid #ddd', borderRadius: 8, outline: 'none', background: '#fff', resize: 'vertical' }}
            />
            {error && <p style={{ color: '#c0392b', fontSize: 13 }}>{t.contact.error}</p>}
            <button type="submit" disabled={sending} style={{ ...btnStyle, alignSelf: 'center', marginTop: 8, opacity: sending ? 0.5 : 1 }}>
              {sending ? t.contact.sending : `${t.contact.send} →`}
            </button>
          </form>
        )}
      </section>

      {/* ================ FOOTER ================ */}
      <footer style={{ borderTop: `1px solid ${colors.line}`, background: colors.paper }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Logo />
            <p style={{ fontFamily: "'Montserrat'", fontSize: 12, color: colors.mute, marginTop: 12, maxWidth: 320 }}>{t.footer.tagline}</p>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: colors.inkSoft, textDecoration: 'none' }}>
              {t.nav.configurator}
            </a>
            <a href="#" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: colors.inkSoft, textDecoration: 'none' }}>{t.footer.imprint}</a>
            <a href="#" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: colors.inkSoft, textDecoration: 'none' }}>{t.footer.privacy}</a>
          </div>
          <p style={{ fontFamily: "'Montserrat'", fontSize: 12, color: '#aaa' }}>© 2026 APPOLOC. {t.footer.rights}</p>
        </div>
      </footer>

      {/* ================ GLOBAL STYLES ================ */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        body { -webkit-font-smoothing: antialiased; }
        img { display: block; }
        a:hover, button:hover { opacity: 0.85; }

        @media (max-width: 860px) {
          .hero-cards { grid-template-columns: 1fr !important; }
          .nav-links a, .nav-links button { font-size: 12px !important; }
        }
        @media (max-width: 700px) {
          section > div,
          div[style*="grid-template-columns"]:not(.no-stack) {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          nav .nav-links > a:not([href="#kontakt"]) { display: none; }
        }
        @media (max-width: 480px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </div>
  );
}

const navLink = { fontFamily: "'Montserrat'", fontSize: 13, color: '#1a1714', textDecoration: 'none', fontWeight: 500 };
