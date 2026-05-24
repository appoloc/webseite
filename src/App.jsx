import { useState } from 'react';

const T = {
  de: {
    nav: { configure: 'Konfigurator', contact: 'Kontakt' },
    hero: {
      tag: 'Modulare Wandsysteme',
      title: 'Klick dir deine Wand.',
      sub: '',
      cta: 'Jetzt konfigurieren',
    },
    about: {
      tag: 'Das System',
      title: 'Apps in analog.',
      sub: 'Dein Betriebssystem für Wohnung & Business',
      p1: 'Ein Eichenboard an der Wand. Runde Module die du einklickst. Schlüssel an Magnet. Mantel an Haken. Moos für die Stimmung.',
      p2: 'Eine Wand. Unzählige Stimmungen. Geht in Sekunden, hält Jahrzehnte. Aus der Manufaktur eines Tischlermeisters.',
      cta: 'Konfigurieren',
    },
    scenes: {
      tag: 'Räume',
      title: 'Dein Raum. Dein System.',
      items: ['Flur & Garderobe', 'Küche', 'Home Office'],
    },
    smart: {
      tag: 'Smart App',
      title: 'Deine Wand denkt mit.',
      sub: 'Schlüssel. Jacke. Ein Touch — und dein Zuhause regelt den Rest.',
      p1: 'Licht aus, Heizung runter, Alarmanlage an — ein Fingertipp auf dem Weg zur Tür. Die Smart App ist ein rundes Touchdisplay, eingebettet in dein APPOLOC Board.',
      p2: 'Kein Tablet an der Wand, kein Plastikgehäuse — schwarzes Aluminium auf Eiche, wie jede andere App. Auf Anfrage.',
      cta: 'Jetzt anfragen',
    },
    business: {
      tag: 'Business Apps',
      title: 'Funktion trifft Handwerk.',
      p1: 'Raumschilder, QR-Codes, Logos — lasergraviert auf Eiche oder Aluminium. Jede App passt ins APPOLOC-System und lässt sich jederzeit tauschen.',
      p2: 'Alle Business Apps sind individuell anpassbar: eigener Text, eigenes Logo, eigenes Piktogramm. Komplette Raumkonzepte für Praxen, Büros und Studios? Sprich uns an.',
      cta: 'Anfrage starten',
    },
    bizDisplay: {
      tag: 'Smart App · Business',
      title: 'Dein Raum spricht für sich.',
      sub: 'Videos. Infos. Begrüßung. Ein Display — eingebettet in dein Board.',
      p1: 'Im Wartezimmer zeigt es Behandlungsvideos. In der Hotellobby begrüßt es Gäste. In der Kanzlei zeigt es den Tagesplan. Inhalte steuerst du bequem vom PC.',
      cta: 'Jetzt anfragen',
    },
    maker: {
      tag: 'Die Manufaktur',
      title: 'Handwerk hat schöne Wände.',
      p1: 'Mein Name ist Lupo. Tischlermeister mit 36 Jahren Erfahrung am Holz. APPOLOC ist mein Lebenswerk — ein System aus der Manufaktur, entwickelt mit der Präzision moderner Fertigung und der Sorgfalt alter Handwerksschulen.',
      p2: 'Jedes Board entsteht in meiner Werkstatt. Jede App wird von Hand kontrolliert. Jede Bestellung trägt eine Nummer und meine Signatur.',
      p3: 'Made in Manufaktur.',
    },
    contact: {
      tag: 'Kontakt',
      title: 'Sprich mit uns.',
      sub: 'Fragen zum System, individuelle Projekte oder komplette Raumkonzepte — schreib uns.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      sent: 'Gesendet! Wir melden uns.',
      error: 'Fehler — bitte schreib direkt an click@appoloc.com',
    },
    footer: {
      conf: 'Konfigurator öffnen',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: { configure: 'Configurator', contact: 'Contact' },
    hero: {
      tag: 'Modular Wall Systems',
      title: 'Click your wall.',
      sub: '',
      cta: 'Configure now',
    },
    about: {
      tag: 'The System',
      title: 'Apps in analog.',
      sub: 'Your operating system for home & business',
      p1: 'An oak board on the wall. Round modules that click in. Keys on magnet. Coat on hook. Moss for the mood.',
      p2: 'One wall. Endless moods. Takes seconds, lasts decades. From a master carpenter\'s workshop.',
      cta: 'Configure',
    },
    scenes: {
      tag: 'Rooms',
      title: 'Your room. Your system.',
      items: ['Hallway & Wardrobe', 'Kitchen', 'Home Office'],
    },
    smart: {
      tag: 'Smart App',
      title: 'Your wall thinks ahead.',
      sub: 'Keys. Jacket. One touch — and your home takes care of the rest.',
      p1: 'Lights off, heating down, alarm on — one tap on your way out. The Smart App is a round touchscreen, embedded in your APPOLOC board.',
      p2: 'No tablet on the wall, no plastic case — black aluminium on oak, like any other app. On request.',
      cta: 'Inquire now',
    },
    business: {
      tag: 'Business Apps',
      title: 'Function meets craft.',
      p1: 'Room signs, QR codes, logos — laser-engraved on oak or aluminium. Every app fits the APPOLOC system and can be swapped anytime.',
      p2: 'All Business Apps are fully customisable: your own text, logo or pictogram. Complete room concepts for practices, offices and studios? Get in touch.',
      cta: 'Start inquiry',
    },
    bizDisplay: {
      tag: 'Smart App · Business',
      title: 'Your room speaks for itself.',
      sub: 'Videos. Info. Welcome. A display — embedded in your board.',
      p1: 'In the waiting room it shows treatment videos. In the hotel lobby it greets guests. In the law firm it shows the daily schedule. Manage content from your PC.',
      cta: 'Inquire now',
    },
    maker: {
      tag: 'The Workshop',
      title: 'Craft makes beautiful walls.',
      p1: 'My name is Lupo. Master carpenter with 36 years of experience working with wood. APPOLOC is my life\'s work — a system from the workshop, developed with the precision of modern manufacturing and the care of old craftsmanship.',
      p2: 'Every board is made in my workshop. Every app is hand-checked. Every order carries a number and my signature.',
      p3: 'Made in Workshop.',
    },
    contact: {
      tag: 'Contact',
      title: 'Talk to us.',
      sub: 'Questions about the system, custom projects or complete room concepts — write to us.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sent: 'Sent! We\'ll be in touch.',
      error: 'Error — please write directly to click@appoloc.com',
    },
    footer: {
      conf: 'Open configurator',
      imprint: 'Imprint',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
  },
};

const KONFIGURATOR_URL = 'https://appoloc-konfigurator.vercel.app';

function Logo() {
  return (
    <img src="/images/logo.png" alt="appoloc" style={{ height: 36 }} />
  );
}

export default function App() {
  const [lang, setLang] = useState('de');
  const [reqName, setReqName] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqMsg, setReqMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const t = T[lang];

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const r = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: reqName, email: reqEmail, message: reqMsg }),
      });
      if (r.ok) { setSent(true); setError(false); }
      else { setError(true); }
    } catch { setError(true); }
  }

  const sectionStyle = { maxWidth: 1200, margin: '0 auto', padding: '120px 32px' };
  const tagStyle = { fontFamily: "'Montserrat'", fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9a9590', fontWeight: 500, marginBottom: 16 };
  const h2Style = { fontFamily: "'Montserrat'", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 500, color: '#1a1714', lineHeight: 1.15, margin: '0 0 16px' };
  const pStyle = { fontFamily: "'Montserrat'", fontSize: 16, color: '#5a5550', lineHeight: 1.7, margin: '0 0 16px', fontWeight: 300 };
  const btnStyle = {
    display: 'inline-block', fontFamily: "'Montserrat'", fontSize: 14, fontWeight: 500,
    color: '#f5f0e8', background: '#1a1714', padding: '14px 36px', borderRadius: 50,
    textDecoration: 'none', letterSpacing: '0.02em', border: 'none', cursor: 'pointer',
    transition: 'opacity 0.2s',
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#1a1714', background: '#faf9f7', overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250,249,247,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: '#1a1714', textDecoration: 'none', fontWeight: 500 }}>
              {t.nav.configure}
            </a>
            <a href="#kontakt" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: '#1a1714', textDecoration: 'none', fontWeight: 500 }}>
              {t.nav.contact}
            </a>
            <div style={{ display: 'flex', gap: 2, marginLeft: 8 }}>
              {['de', 'en'].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '3px 8px', fontSize: 11, fontFamily: "'Montserrat'", fontWeight: lang === l ? 600 : 400,
                  color: lang === l ? '#1a1714' : '#aaa', background: lang === l ? '#ece8e1' : 'transparent',
                  border: 'none', borderRadius: 4, cursor: 'pointer', textTransform: 'uppercase',
                }}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 70 }}>
        <div style={{ position: 'relative', width: '100%', height: 'clamp(450px, 50vw, 750px)', overflow: 'hidden' }}>
          <img src="/images/hero.jpg" alt="APPOLOC Wandboard im Flur" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(26,23,20,0.85))',
            padding: '120px 32px 60px',
          }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <div style={{ ...tagStyle, color: '#d4c4a8' }}>{t.hero.tag}</div>
              <h1 style={{ fontFamily: "'Montserrat'", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 500, color: '#fff', lineHeight: 1.1, margin: '0 0 16px' }}>
                {t.hero.title}
              </h1>
              <div style={{ marginBottom: 32 }}></div>
              <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ ...btnStyle, background: '#1a1714', color: '#f5f0e8' }}>
                {t.hero.cta} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
          <img src="/images/product.jpg" alt="APPOLOC Board mit Spiegel, Moos und Leder" style={{ width: '100%', borderRadius: 8 }} />
          <div>
            <div style={tagStyle}>{t.about.tag}</div>
            <h2 style={h2Style}>{t.about.title}</h2>
            <p style={{ fontFamily: "'Montserrat'", fontSize: 20, color: '#5a5550', fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 24px' }}>
              {t.about.sub}
            </p>
            <p style={pStyle}>{t.about.p1}</p>
            <p style={pStyle}>{t.about.p2}</p>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={btnStyle}>{t.about.cta} →</a>
          </div>
        </div>
      </section>

      {/* SCENES */}
      <section style={{ background: '#f0ece6', padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={tagStyle}>{t.scenes.tag}</div>
          <h2 style={{ ...h2Style, marginBottom: 48 }}>{t.scenes.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { img: '/images/colors.jpg', label: t.scenes.items[0] },
              { img: '/images/kitchen.jpg', label: t.scenes.items[1] },
              { img: '/images/office.jpg', label: t.scenes.items[2] },
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                  padding: '40px 20px 16px',
                }}>
                  <span style={{ fontFamily: "'Montserrat'", fontSize: 14, color: '#fff', fontWeight: 500 }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* SMART APP */}
      <section style={{ background: '#1a1714', color: '#fff' }}>
        <div style={{ ...sectionStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
          <img src="/images/smart.jpg" alt="APPOLOC Smart App im Flur" style={{ width: '100%', borderRadius: 8 }} />
          <div>
            <div style={{ ...tagStyle, color: '#d4c4a8' }}>{t.smart.tag}</div>
            <h2 style={{ ...h2Style, color: '#f5f0e8' }}>{t.smart.title}</h2>
            <p style={{ fontFamily: "'Montserrat'", fontSize: 18, color: '#b8a88a', fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 24px' }}>
              {t.smart.sub}
            </p>
            <p style={{ ...pStyle, color: '#a09890' }}>{t.smart.p1}</p>
            <p style={{ ...pStyle, color: '#a09890' }}>{t.smart.p2}</p>
            <a href="#kontakt" style={{ ...btnStyle, background: '#fff', color: '#1a1714' }}>{t.smart.cta} →</a>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
          <img src="/images/business.jpg" alt="APPOLOC Business — Zahnarztpraxis Empfang" style={{ width: '100%', borderRadius: 8 }} />
          <div>
            <div style={tagStyle}>{t.business.tag}</div>
            <h2 style={h2Style}>{t.business.title}</h2>
            <p style={pStyle}>{t.business.p1}</p>
            <p style={pStyle}>{t.business.p2}</p>
            <a href="#kontakt" style={btnStyle}>{t.business.cta} →</a>
          </div>
        </div>
      </section>

      {/* BUSINESS DISPLAY */}
      <section style={{ background: '#1a1714', color: '#fff' }}>
        <div style={{ ...sectionStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
          <img src="/images/biz-display.jpg" alt="APPOLOC Smart App im Wartezimmer mit Behandlungsvideo" style={{ width: '100%', borderRadius: 8 }} />
          <div>
            <div style={{ ...tagStyle, color: '#d4c4a8' }}>{t.bizDisplay.tag}</div>
            <h2 style={{ ...h2Style, color: '#f5f0e8' }}>{t.bizDisplay.title}</h2>
            <p style={{ fontFamily: "'Montserrat'", fontSize: 18, color: '#b8a88a', fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 24px' }}>
              {t.bizDisplay.sub}
            </p>
            <p style={{ ...pStyle, color: '#a09890' }}>{t.bizDisplay.p1}</p>
            <a href="#kontakt" style={{ ...btnStyle, background: '#fff', color: '#1a1714' }}>{t.bizDisplay.cta} →</a>
          </div>
        </div>
      </section>

      {/* MAKER */}
      <section style={{ background: '#1a1714', color: '#f5f0e8' }}>
        <div style={{ ...sectionStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ ...tagStyle, color: '#d4c4a8' }}>{t.maker.tag}</div>
            <h2 style={{ ...h2Style, color: '#f5f0e8' }}>{t.maker.title}</h2>
            <p style={{ ...pStyle, color: '#a09890' }}>{t.maker.p1}</p>
            <p style={{ ...pStyle, color: '#a09890' }}>{t.maker.p2}</p>
            <p style={{ fontFamily: "'Montserrat'", fontSize: 14, color: '#999', fontWeight: 500, letterSpacing: '0.1em', marginTop: 24 }}>
              {t.maker.p3}
            </p>
          </div>
          <img src="/images/portrait.jpg" alt="Lupo — Tischlermeister" style={{ width: '100%', maxWidth: 460, borderRadius: 8, justifySelf: 'center' }} />
        </div>
      </section>

      {/* CONTACT */}
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
              style={{
                fontFamily: "'Montserrat'", fontSize: 15, padding: '14px 18px',
                border: '1px solid #ddd', borderRadius: 8, outline: 'none', background: '#fff',
              }}
            />
            <input required type="email" value={reqEmail} onChange={e => setReqEmail(e.target.value)}
              placeholder={t.contact.email}
              style={{
                fontFamily: "'Montserrat'", fontSize: 15, padding: '14px 18px',
                border: '1px solid #ddd', borderRadius: 8, outline: 'none', background: '#fff',
              }}
            />
            <textarea value={reqMsg} onChange={e => setReqMsg(e.target.value)}
              placeholder={t.contact.message} rows={5}
              style={{
                fontFamily: "'Montserrat'", fontSize: 15, padding: '14px 18px',
                border: '1px solid #ddd', borderRadius: 8, outline: 'none', background: '#fff', resize: 'vertical',
              }}
            />
            {error && <p style={{ color: '#c0392b', fontSize: 13 }}>{t.contact.error}</p>}
            <button type="submit" style={{ ...btnStyle, alignSelf: 'center', marginTop: 8 }}>
              {t.contact.send} →
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #e5e0d8', background: '#faf9f7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Logo />
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href={KONFIGURATOR_URL} target="_blank" rel="noreferrer" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: '#5a5550', textDecoration: 'none' }}>
              {t.footer.conf}
            </a>
            <a href="#" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: '#5a5550', textDecoration: 'none' }}>{t.footer.imprint}</a>
            <a href="#" style={{ fontFamily: "'Montserrat'", fontSize: 13, color: '#5a5550', textDecoration: 'none' }}>{t.footer.privacy}</a>
          </div>
          <p style={{ fontFamily: "'Montserrat'", fontSize: 12, color: '#aaa' }}>© 2026 APPOLOC. {t.footer.rights}</p>
        </div>
      </footer>

      {/* GLOBAL STYLES */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        img { display: block; }
        a:hover { opacity: 0.85; }
        button:hover { opacity: 0.85; }
        @media (max-width: 860px) {
          section > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          section[style*="grid-template-columns: repeat(3"] > div,
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
