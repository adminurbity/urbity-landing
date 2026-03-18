import { Resend } from 'resend'

type ApiRequest = {
  body?: unknown
  method?: string
}

type ApiResponse = {
  status: (code: number) => {
    json: (body: unknown) => void
  }
}

const resendApiKey = process.env.RESEND_API_KEY
const leadFromEmail = process.env.LEAD_FROM_EMAIL
const leadToEmail = process.env.LEAD_TO_EMAIL
const subjectPrefix = process.env.LEAD_EMAIL_SUBJECT_PREFIX ?? 'Urbity'

const resend = resendApiKey ? new Resend(resendApiKey) : null

function json(
  response: ApiResponse,
  statusCode: number,
  body: unknown,
) {
  response.status(statusCode).json(body)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    return json(response, 405, { error: 'Method not allowed' })
  }

  if (!resend || !leadFromEmail || !leadToEmail) {
    return json(response, 500, {
      error: 'Server email integration is not configured.',
    })
  }

  const payload =
    request.body && typeof request.body === 'object'
      ? (request.body as { name?: unknown; email?: unknown; phone?: unknown })
      : {}

  const { name, email, phone } = payload

  const cleanName = typeof name === 'string' ? name.trim() : ''
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const cleanPhone = typeof phone === 'string' ? phone.trim() : ''

  if (!cleanName || !cleanEmail || !cleanPhone) {
    return json(response, 400, {
      error: 'Name, email and phone are required.',
    })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(cleanEmail)) {
    return json(response, 400, {
      error: 'Email is invalid.',
    })
  }

  const phonePattern = /^3\d{9}$/
  if (!phonePattern.test(cleanPhone)) {
    return json(response, 400, {
      error: 'Phone is invalid.',
    })
  }

  const submittedAt = new Date().toISOString()

  try {
    await resend.emails.send({
      from: leadFromEmail,
      to: [leadToEmail],
      replyTo: cleanEmail,
      subject: `${subjectPrefix} | Nuevo lead de acceso`,
      text: [
        'Nuevo lead recibido desde urbity.app',
        '',
        `Nombre: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Celular: ${cleanPhone}`,
        `Fecha: ${submittedAt}`,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Nuevo lead recibido desde urbity.app</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Celular:</strong> ${escapeHtml(cleanPhone)}</p>
          <p><strong>Fecha:</strong> ${submittedAt}</p>
        </div>
      `,
    })

    return json(response, 200, { ok: true })
  } catch (error) {
    console.error('Lead email send failed', error)
    return json(response, 500, {
      error: 'Lead email could not be sent.',
    })
  }
}
