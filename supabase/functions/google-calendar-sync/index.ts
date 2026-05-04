import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { refresh_token, summary, description, start_date, end_date } = await req.json()
    
    const client_id = Deno.env.get('GOOGLE_CLIENT_ID')
    const client_secret = Deno.env.get('GOOGLE_CLIENT_SECRET')

    if (!client_id || !client_secret || !refresh_token) {
      throw new Error('Configuração ou Token ausente')
    }

    // 1. Obter novo Access Token usando o Refresh Token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id,
        client_secret,
        refresh_token,
        grant_type: 'refresh_token',
      }),
    })

    const tokenData = await tokenResponse.json()
    if (tokenData.error) throw new Error(`Erro Token: ${tokenData.error_description || tokenData.error}`)

    const accessToken = tokenData.access_token

    // 2. Criar Evento no Google Calendar
    const event = {
      summary: summary || 'Avaliação ShapeTrack',
      description: description || 'Avaliação de bioimpedância e acompanhamento.',
      start: {
        date: start_date, // Formato YYYY-MM-DD para evento de dia inteiro
      },
      end: {
        date: end_date || start_date,
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 24 * 60 }, // 1 dia antes
          { method: 'popup', minutes: 60 },      // 1 hora antes
        ],
      },
    }

    const calendarResponse = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })

    const calendarData = await calendarResponse.json()
    if (calendarData.error) throw new Error(`Erro Calendar: ${calendarData.error.message}`)

    return new Response(JSON.stringify({ success: true, event: calendarData }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
