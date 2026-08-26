// Vercel serverless function. Runs server-side only — this is where the
// secret Dodo API key lives (via env vars), never in frontend code.
// Local dev note: `vite dev` does not serve /api routes — use `vercel dev`
// to test this locally, otherwise the checkout button will 404.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch('https://test.dodopayments.com/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DODO_PAYMENTS_API_KEY}`,
      },
      body: JSON.stringify({
        product_cart: [{ product_id: process.env.DODO_PRO_PRODUCT_ID, quantity: 1 }],
        return_url: 'https://portfolioframe.com/#pricing',
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      return res.status(response.status).json({ error: errText })
    }

    const data = await response.json()
    return res.status(200).json({ checkoutUrl: data.checkout_url })
  } catch {
    return res.status(500).json({ error: 'Failed to create checkout session' })
  }
}
