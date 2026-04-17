import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO = process.env.CONTACT_TO_EMAIL || 'jakub.tiuchty@takma.com.pl'
const FROM = process.env.CONTACT_FROM_EMAIL || 'kontakt@tc22.pl'

function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, nip, phone, variant, quantity, accessories, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Brak wymaganych pól' }, { status: 400 })
    }

    const hasAccessories = Array.isArray(accessories) && accessories.length > 0
    const accessoriesList = hasAccessories
      ? (accessories as string[]).map(a => `<code style="display:inline-block;padding:4px 10px;margin:2px 4px 2px 0;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;font-family:ui-monospace,monospace;font-size:12px;color:#0f172a">${esc(a)}</code>`).join('')
      : '<span style="color:#94a3b8">— brak —</span>'

    const now = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw', dateStyle: 'long', timeStyle: 'short' })

    const messageText = String(message ?? '').trim()
    const messageHtml = messageText
      ? `<tr><td colspan="2" style="padding:20px 28px 4px;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Uwagi / pytania</td></tr>
         <tr><td colspan="2" style="padding:0 28px 24px"><div style="background:#f8fafc;border-left:3px solid #A8F000;border-radius:8px;padding:14px 16px;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(messageText).replace(/\n/g, '<br>')}</div></td></tr>`
      : ''

    const html = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>Nowe zapytanie z tc22.pl</title>
<style>
:root { color-scheme: light only; supported-color-schemes: light only; }
[data-ogsc] .hdr-title, [data-ogsb] .hdr-title { color: #f8fafc !important; }
u + .body .hdr-title { color: #f8fafc !important; }
</style>
</head>
<body class="body" style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0f172a">
<div style="display:none;overflow:hidden;line-height:1px;max-height:0;opacity:0">Zapytanie od ${esc(name)}${variant ? ` — wariant ${esc(variant)}` : ''}${quantity ? `, ilość ${esc(quantity)}` : ''}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;padding:32px 16px">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px -12px rgba(15,23,42,0.12)">

<!-- Header -->
<tr><td bgcolor="#0A1A2F" style="background-color:#0A1A2F;background:linear-gradient(135deg,#0A1A2F 0%,#1e293b 100%);padding:28px 28px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="vertical-align:middle">
<div style="color:#A8F000;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">tc22.pl</div>
<div class="hdr-title" style="color:#f8fafc;mso-line-height-rule:exactly;font-size:22px;font-weight:700;line-height:1.3"><font color="#f8fafc">Nowe zapytanie ofertowe</font></div>
</td>
<td style="vertical-align:middle;text-align:right">
<div style="display:inline-block;padding:6px 12px;background-color:#A8F000;background:#A8F000;color:#0A1A2F;font-size:12px;font-weight:700;border-radius:999px"><font color="#0A1A2F">NEW</font></div>
</td>
</tr>
</table>
<div style="color:#cbd5e1;font-size:12px;margin-top:10px"><font color="#cbd5e1">${esc(now)}</font></div>
</td></tr>

<!-- Client name + CTA -->
<tr><td style="padding:28px 28px 20px;border-bottom:1px solid #e2e8f0">
<div style="color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Od kogo</div>
<div style="color:#0f172a;font-size:24px;font-weight:700;line-height:1.2">${esc(name)}</div>
${company ? `<div style="color:#475569;font-size:14px;margin-top:4px">${esc(company)}</div>` : ''}

<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px">
<tr>
<td style="padding-right:8px"><a href="tel:${esc(phone)}" style="display:inline-block;padding:10px 18px;background:#A8F000;color:#0A1A2F;font-size:13px;font-weight:700;text-decoration:none;border-radius:999px">📞 Zadzwoń</a></td>
<td><a href="mailto:${esc(email)}?subject=Re%3A%20Zapytanie%20z%20tc22.pl" style="display:inline-block;padding:10px 18px;background:#0A1A2F;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;border-radius:999px">✉ Odpowiedz</a></td>
</tr>
</table>
</td></tr>

<!-- Produkt -->
<tr><td style="padding:24px 28px 8px;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Interesujący produkt</td></tr>
<tr><td style="padding:0 28px 20px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px">
<tr>
<td style="padding:16px 18px;vertical-align:middle">
<div style="color:#0f172a;font-size:16px;font-weight:700">Zebra TC22</div>
<div style="color:#475569;font-size:13px;font-family:ui-monospace,monospace;margin-top:2px">${variant ? esc(variant) : '— wariant nie wybrany —'}</div>
</td>
<td style="padding:16px 18px;vertical-align:middle;text-align:right;white-space:nowrap">
<div style="color:#64748b;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px">Ilość</div>
<div style="color:#0A1A2F;font-size:28px;font-weight:800;line-height:1">${esc(quantity) || '1'}</div>
<div style="color:#64748b;font-size:11px;margin-top:2px">szt.</div>
</td>
</tr>
</table>
</td></tr>

<!-- Akcesoria -->
<tr><td style="padding:4px 28px 8px;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Akcesoria</td></tr>
<tr><td style="padding:0 28px 20px;font-size:13px;line-height:1.8">${accessoriesList}</td></tr>

<!-- Dane kontaktowe -->
<tr><td style="padding:8px 28px 8px;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Dane kontaktowe</td></tr>
<tr><td style="padding:0 28px 20px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px">
<tr><td width="110" style="padding:8px 0;color:#64748b;border-bottom:1px solid #f1f5f9">E-mail</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9"><a href="mailto:${esc(email)}" style="color:#0A1A2F;text-decoration:none;font-weight:600">${esc(email)}</a></td></tr>
<tr><td style="padding:8px 0;color:#64748b;border-bottom:1px solid #f1f5f9">Telefon</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9"><a href="tel:${esc(phone)}" style="color:#0A1A2F;text-decoration:none;font-weight:600">${esc(phone)}</a></td></tr>
${company ? `<tr><td style="padding:8px 0;color:#64748b;border-bottom:1px solid #f1f5f9">Firma</td><td style="padding:8px 0;color:#0f172a;border-bottom:1px solid #f1f5f9">${esc(company)}</td></tr>` : ''}
${nip ? `<tr><td style="padding:8px 0;color:#64748b">NIP</td><td style="padding:8px 0;color:#0f172a;font-family:ui-monospace,monospace">${esc(nip)}</td></tr>` : ''}
</table>
</td></tr>

${messageHtml}

<!-- Footer -->
<tr><td style="padding:20px 28px 24px;background:#f8fafc;border-top:1px solid #e2e8f0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="color:#94a3b8;font-size:11px">Źródło: <a href="https://tc22.pl" style="color:#475569;text-decoration:none;font-weight:600">tc22.pl</a></td>
<td style="color:#94a3b8;font-size:11px;text-align:right">TAKMA · partner Zebra od 2001</td>
</tr>
</table>
</td></tr>

</table>
</td></tr>
</table>

</body>
</html>`.trim()

    const { data, error } = await resend.emails.send({
      from: `tc22.pl <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `[tc22.pl] Zapytanie: ${name}${variant ? ` — ${variant}` : ''}`,
      html,
    })

    if (error) {
      console.error('[contact] resend error:', error)
      return NextResponse.json({ error: 'Błąd wysyłki' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('[contact] exception:', err)
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 })
  }
}
