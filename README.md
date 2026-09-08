# NI Signals

“We tell Northern Ireland businesses who is likely to buy next, before they become an obvious lead.”

An independent Northern Ireland commercial-intelligence MVP. Plain HTML, CSS and a small JavaScript email-request helper. No framework, package installation, build step, paid subscription, or connection to other businesses.

## Launch

Publish this repository with GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save. The expected URL is https://kaplankopy-debug.github.io/ni-signals/ . A `.nojekyll` file keeps this a plain static site.

Preview locally by opening `index.html`, or serve this directory using any static HTTP server. All normal page assets use relative paths to work under the GitHub Pages repository subpath.

## Signup and enquiries

The form validates an email address and explicit consent, then opens a prefilled email to `kap1an_t3@hotmail.com`. The visitor must send it. Nothing is stored in localStorage, sent automatically, or represented as a completed subscription. A visible manual fallback and no-JavaScript email link are included. Early-access and contact links also open an email draft. No payment is taken.

This is a manual demand-validation flow, not an automated mailing platform. Monitor the mailbox, acknowledge requests, record consent privately, and honour unsubscribe requests. Never commit subscriber data. Before bulk sends, connect a suitable email platform, verify the sender and configure its consent/unsubscribe flow; update the privacy notice and replace the form handler with the provider’s supported integration. Do not expose private API keys in browser code.

## Content and maintenance

- `index.html`: landing page, fictional sample signals, free list and paid early-access offer.
- `privacy.html`: operational privacy notice; complete the operator’s legal/trading identity when established and review it before introducing new processing.
- `styles.css`: responsive layout, shared styles, keyboard focus and reduced-motion support.
- `signup.js`: email request preparation; no backend.
- `favicon.svg`, `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`: basic deployment and discovery assets.

Samples are fictional and explicitly labelled. Replace them only with researched signals that include public source URLs and dates, clearly separating evidence from buying-window interpretation. Delivery frequency, prices, features and launch date remain uncommitted placeholders. Paid interest is an enquiry, not a purchase.

If the GitHub owner or domain changes, update canonical URLs, `og:url`, sitemap, robots sitemap location and the 404 page’s repository path. No analytics, cookies, external fonts or third-party scripts are loaded.
