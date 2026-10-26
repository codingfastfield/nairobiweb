export interface Service {
  slug: string; name: string; price: number; from?: boolean; short: string; time: string;
  title: string; description: string; who: string[]; includes: string[]; notIncluded: string[];
  about: string[]; faqs: { q: string; a: string }[];
}
export const services: Service[] = [
  {
    slug: 'landing-page', name: 'Landing Page', price: 9999, short: 'One sharp, fast page that turns visitors into calls and WhatsApp chats.', time: '3–5 days',
    title: 'Affordable Landing Page Design in Nairobi from KSh 9,999',
    description: 'Get a professional, fast landing page built by a reliable Nairobi developer for KSh 9,999. Mobile-first, SEO-ready, WhatsApp and call buttons included.',
    who: ['New businesses testing an offer', 'Event, course or campaign promotions', 'Freelancers and consultants who need a genuine online presence'],
    includes: ['One custom-designed responsive page', 'Call and WhatsApp buttons with prefilled message', 'On-page SEO: title, description, headings, schema', 'Contact form delivered to your email', 'Google Analytics and Search Console setup', 'Domain and hosting setup help', '14 days of free fixes after launch'],
    notIncluded: ['Domain and hosting fees paid to the provider', 'Copywriting beyond light edits', 'Multi-page navigation'],
    about: ['A landing page has one job: get the visitor to act. We design it around a single offer, a clear price or promise, proof that you are genuine, and two ways to reach you instantly: a call button and a WhatsApp button. In Kenya most customers prefer to message before they buy, so we make that the main path.', 'Every page ships as static, lightweight code that loads quickly on 4G, scores well on Core Web Vitals and is structured so Google and AI assistants can read what you offer, where you operate and what you charge.'],
    faqs: [{ q: 'Is KSh 9,999 really the full price?', a: 'Yes. The fee covers design, build, on-page SEO and launch. Only your domain and hosting renewals are paid separately to those providers.' }, { q: 'Can I upgrade to a full website later?', a: 'Yes. The landing page is built so we can add pages later and you only pay the difference between tiers.' }],
  },
  {
    slug: 'business-website', name: 'Business Website', price: 19999, short: 'A 5-page professional website that ranks locally and earns trust.', time: '7–10 days',
    title: 'Professional Business Website in Nairobi from KSh 19,999',
    description: 'A reliable, affordable 5-page business website for Nairobi companies. Local SEO, Google Maps, WhatsApp and speed built in. Fixed price KSh 19,999.',
    who: ['Clinics, schools, salons, law and accounting firms', 'Contractors and service companies', 'Shops that want customers to find them on Google'],
    includes: ['Up to 5 pages: Home, About, Services, Contact and one more', 'Local SEO setup with Google Business Profile guidance', 'Embedded Google Map and click-to-call', 'Service pages written around what Nairobi customers search for', 'FAQ section with structured data', 'Blog-ready structure', '30 days of free support'],
    notIncluded: ['Online payments (see E-commerce tier)', 'Logo design', 'Paid advertising management'],
    about: ['Most Nairobi searches are local: "plumber in Kilimani", "dentist near Westlands". A business website works when each service and location is explained clearly, with real details such as hours, prices, coverage areas and answers to the questions callers actually ask.', 'We write and structure those pages so they are genuinely useful, not padded. That is what earns rankings and what AI search tools quote when someone asks for a recommendation.'],
    faqs: [{ q: 'Will my site appear on Google page one?', a: 'Nobody can promise a position. We build the technical and content foundation that gives you the best chance and show you how to track progress in Search Console.' }, { q: 'Do I own the website?', a: 'Yes. You receive full source code and all logins on final payment.' }],
  },
  {
    slug: 'premium-brand-website', name: 'Premium Brand Website', price: 34999, short: 'A premium, motion-rich site for brands that compete on quality.', time: '2–3 weeks',
    title: 'Premium Website Design Nairobi: Top-Rated Brand Sites from KSh 34,999',
    description: 'Premium custom website design in Nairobi with motion, bespoke layout, up to 10 pages and advanced SEO. Fixed price from KSh 34,999.',
    who: ['Hotels, restaurants and real estate developers', 'Agencies, startups and professional firms', 'Brands where design signals credibility'],
    includes: ['Bespoke design, not a template', 'Up to 10 pages with CMS-ready content', 'Smooth motion and page transitions', 'Case study and testimonial layouts', 'Advanced schema and Open Graph previews', 'Image optimisation and performance tuning', '60 days of free support'],
    notIncluded: ['Professional photography', 'Video production', 'Ongoing content writing'],
    about: ['When a buyer compares three suppliers, the best-looking and fastest site often wins the first impression. A premium build gives you a distinct visual identity, tasteful motion and a layout shaped around your own story.', 'Premium does not mean heavy. We keep pages light and accessible, so the polish never costs you speed or search visibility.'],
    faqs: [{ q: 'What makes it premium?', a: 'Custom layout and typography, motion design, more pages, deeper SEO content and a longer support window.' }, { q: 'Can you redesign my existing site?', a: 'Yes. We keep your URLs and rankings by setting up proper redirects.' }],
  },
  {
    slug: 'ecommerce-store', name: 'E-commerce Store with M-Pesa', price: 54999, short: 'Sell online in Kenya with M-Pesa, cards and delivery zones.', time: '3–4 weeks',
    title: 'E-commerce Website Kenya with M-Pesa from KSh 54,999',
    description: 'Genuine, reliable online store development in Nairobi. M-Pesa STK push, card payments, inventory, delivery zones. Fixed price KSh 54,999.',
    who: ['Retailers moving online', 'Fashion, electronics and grocery brands', 'Wholesalers who want order automation'],
    includes: ['Up to 100 products loaded', 'M-Pesa Daraja STK push and card payments', 'Nairobi delivery zones and fees', 'Order emails and WhatsApp order alerts', 'Product schema for Google Shopping visibility', 'Admin dashboard for stock and orders', '90 days of free support'],
    notIncluded: ['Safaricom and payment gateway fees', 'Product photography', 'Courier contracts'],
    about: ['In Kenya, checkout means M-Pesa. We integrate STK push so customers confirm on their phone and your order is marked paid automatically, with no manual till reconciliation.', 'Each product page gets proper structured data, clear delivery and return information and fast images, which helps both ranking and conversion.'],
    faqs: [{ q: 'Do you handle Safaricom Daraja approval?', a: 'We guide you through the paperwork and configure the integration. Approval itself is issued by Safaricom.' }, { q: 'Can I manage stock myself?', a: 'Yes. You get a simple dashboard and a training session.' }],
  },
  {
    slug: 'custom-web-app', name: 'Custom Web App', price: 84999, short: 'Booking systems, portals and dashboards built around your workflow.', time: '4–8 weeks',
    title: 'Custom Web App Development Nairobi from KSh 84,999',
    description: 'Professional custom web app development in Nairobi: booking systems, client portals, dashboards and APIs. Transparent fixed pricing from KSh 84,999.',
    who: ['Businesses running on spreadsheets and WhatsApp', 'Clinics, schools and logistics firms', 'Startups building a first product'],
    includes: ['Discovery workshop and written scope', 'User accounts and role-based access', 'Database, admin panel and reporting', 'Online scheduling and payments', 'Integrations such as M-Pesa, SMS and email', 'Automated backups', '90 days of free support'],
    notIncluded: ['Native mobile apps', 'Third-party licence fees', 'Data entry'],
    about: ['A custom app replaces the manual work that slows you down: double-booked appointments, lost orders, scattered customer records. We start with a discovery workshop, write the scope down, then build in short milestones you can test.', 'You see working software every week, and the agreed price does not move unless you change the scope.'],
    faqs: [{ q: 'How do you price custom work fairly?', a: 'The tier covers a defined scope. Any extra feature is quoted separately in writing before we build it.' }, { q: 'Who owns the code?', a: 'You do, on final payment.' }],
  },
  {
    slug: 'enterprise-app', name: 'Enterprise App', price: 120000, from: true, short: 'Secure, scalable systems for large teams and multi-branch operations.', time: '8–16 weeks',
    title: 'Enterprise Web App Development Kenya from KSh 120,000',
    description: 'Reliable enterprise software development in Nairobi: secure multi-user systems, integrations, audit trails and support. Pricing from KSh 120,000.',
    who: ['Multi-branch companies and SACCOs', 'NGOs and institutions with reporting requirements', 'Fintech, logistics and healthcare operators'],
    includes: ['Architecture and security review', 'Single sign-on and granular permissions', 'Audit logs and careful data handling', 'ERP, accounting and payment integrations', 'Staging and production environments', 'Documentation and team training', '6 months of priority support'],
    notIncluded: ['Cloud hosting bills', 'Hardware', 'Regulatory licensing'],
    about: ['Enterprise projects fail when scope is vague. We open with a written specification and a fixed milestone plan, so finance and technical teams both know what is being delivered and when.', 'KSh 120,000 is the starting price for the smallest enterprise scope. Larger systems are quoted after discovery, always in writing and never as an open-ended hourly bill.'],
    faqs: [{ q: 'Why "from" KSh 120,000?', a: 'Enterprise scope varies. The starting price covers a single-system build; integrations and extra modules are quoted after discovery.' }, { q: 'Do you sign NDAs?', a: 'Yes, before we see any sensitive material.' }],
  },
];
export const getService = (s: string) => services.find((x) => x.slug === s)!;
