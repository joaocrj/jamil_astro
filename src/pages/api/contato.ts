export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { nome, email, celular } = data;

    // Validate required fields
    if (!nome || !email || !celular) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios não preenchidos.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(String(email).trim())) {
      return new Response(
        JSON.stringify({ error: 'Endereço de e-mail inválido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Forward to n8n webhook
    const n8nResponse = await fetch('https://webhook.joaocrj.com.br/webhook/jamil_form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        projeto: 'Jamil Dentista',
        destinatarios: ['joaocrj@gmail.com', 'jamildentista1000@gmail.com']
      })
    });

    if (!n8nResponse.ok) {
      const errText = await n8nResponse.text();
      console.error('n8n error:', errText);
      return new Response(
        JSON.stringify({ error: 'Erro ao processar envio no servidor.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Formulário enviado com sucesso!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('API Error:', err);
    return new Response(
      JSON.stringify({ error: 'Erro interno ao processar requisição.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

