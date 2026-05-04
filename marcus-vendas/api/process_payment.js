// api/process_payment.js
// Este script roda no servidor da Vercel para garantir segurança total

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Apenas método POST é permitido' });
    }

    const { token, issuer_id, payment_method_id, transaction_amount, installments, description, payer } = req.body;

    try {
        const response = await fetch('https://api.mercadopago.com/v1/payments', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
                'X-Idempotency-Key': Math.random().toString(36).substring(7)
            },
            body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: parseFloat(transaction_amount),
                installments: parseInt(installments),
                description,
                payer: {
                    email: payer.email,
                    identification: {
                        type: payer.identification.type,
                        number: payer.identification.number
                    }
                }
            })
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json({
                status: data.status,
                status_detail: data.status_detail,
                id: data.id
            });
        } else {
            console.error('Erro Mercado Pago:', data);
            return res.status(400).json(data);
        }

    } catch (error) {
        console.error('Erro de Processamento:', error);
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }
}
