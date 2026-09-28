// Chrome Web Store reviews, copied verbatim from the listing (English filter,
// store order). Quotes are never translated or edited, so they live here
// rather than in the locale dictionaries; only the surrounding labels are
// localised. Re-check the listing and update `checkedOn` when this changes.

export const STORE_REVIEWS_URL =
  'https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf/reviews'

export const storeRating = {
  average: 5,
  count: 10,
  checkedOn: '2026-09-28',
}

export interface StoreReview {
  author: string
  rating: number
  /** ISO date, as shown on the listing. */
  date: string
  text: string
}

export const storeReviews: StoreReview[] = [
  {
    author: 'Moser Keen',
    rating: 5,
    date: '2026-09-24',
    text: 'Really handy for portfolio screenshots. It makes them look much cleaner without needing another design app. Highly recommend.',
  },
  {
    author: 'Eric Martin',
    rating: 5,
    date: '2026-09-23',
    text: "Really useful for making screenshots look more professional. Simple, quick, and easy to use. I'd definitely recommend it.",
  },
  {
    author: 'DESIGN PRO',
    rating: 5,
    date: '2026-09-23',
    text: 'Great extension for designers. I like how quickly I can turn a basic screenshot into something presentation-ready. More customization would be nice.',
  },
  {
    author: 'Samuel Ejeh',
    rating: 5,
    date: '2026-09-23',
    text: 'This tool saves me a lot of time when preparing screenshots for my portfolio . The frames and backgrounds are a nice touch.',
  },
  {
    author: 'Arnold Ben',
    rating: 5,
    date: '2026-09-23',
    text: 'Easy to understand and it does exactly what I need!',
  },
  {
    author: 'לירן בלומנברג',
    rating: 5,
    date: '2026-09-20',
    text: 'This extension is exactly what I needed! It wraps my designs in beautiful, customizable frames and adds an instant professional polish with zero hassle. Highly recommend for any creator!',
  },
  {
    author: 'Vladyslav Verbytskyi',
    rating: 5,
    date: '2026-09-15',
    text: 'Exactly what I needed!',
  },
  {
    author: 'admin chisoft',
    rating: 5,
    date: '2026-09-15',
    text: 'Portfolio Frame makes showcasing your work effortless. This handy Chrome extension wraps your designs in beautiful, customizable frames, adding an instant professional polish with zero hassle.',
  },
]
