export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch(e) { return res.status(400).json({ error: 'Invalid JSON' }); }
  }

  const { name, email, message } = body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Name und E-Mail erforderlich' });
  }

  const html = `
    <h2>Neue Anfrage über appoloc.com</h2>
    <p><strong>Name:</strong> ${name}<br>
    <strong>E-Mail:</strong> ${email}</p>
    ${message ? `<p><strong>Nachricht:</strong><br>${message}</p>` : ''}
  `;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'APPOLOC <konfigurator@appoloc.com>',
        to: ['click@appoloc.com'],
        reply_to: email,
        subject: `Neue Anfrage von ${name}`,
        html: html,
      }),
    });

    const responseText = await r.text();

    if (!r.ok) {
      console.error('Resend error:', r.status, responseText);
      return res.status(500).json({ error: 'Resend error', status: r.status, detail: responseText });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Catch error:', e.message);
    return res.status(500).json({ error: e.message });
  }
}
