import { DodoPayments } from 'dodopayments-checkout'

export function initDodo() {
  DodoPayments.Initialize({
    mode: 'test', // flip to 'live' when you go live
    displayType: 'overlay',
    onEvent: (event) => {
      if (event.event_type === 'checkout.error') {
        console.error('Dodo checkout error:', event.data?.message)
      }
    },
  })
}
