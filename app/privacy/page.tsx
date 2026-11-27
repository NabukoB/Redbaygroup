import { Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/privacy/";

export const metadata = pageMeta({
  title: "Privacy: What This Website Records",
  description: "What redbaygroup.co.ke records about visitors, what we do with messages you send us on WhatsApp, phone or email, and how to ask us to delete your details.",
  path,
});

const sections = [
  {
    heading: "What we count when you visit",
    body: [
      "We keep simple totals to learn which pages help people. We count page views, taps on our WhatsApp and call buttons, how a visit arrived (for example from Google, Facebook or a direct link), whether it was a phone or a computer, and a rough country taken from your browser's time zone.",
      "These are stored as daily totals. They are not linked to your name, phone number or email, and our counter does not store your IP address. This site does not use advertising cookies or tracking pixels.",
    ],
  },
  {
    heading: "What your browser may store",
    body: ["If the site owner turns off counting on a device, a small note is saved in that browser to remember it. Nothing else is saved for tracking."],
  },
  {
    heading: "When you message or call us",
    body: [
      "If you contact us through WhatsApp, a call or email, we receive your phone number or email and whatever you write. We use it to reply, to prepare quotations and bills of quantities, and to run your project if you hire us. Tools on this site, such as the calculators, only prefill a WhatsApp message. Nothing is sent until you press send in WhatsApp.",
      "We do not sell your details.",
    ],
  },
  {
    heading: "Other services involved",
    body: [
      "The site is hosted by Hostinger, which keeps standard server logs. WhatsApp and Facebook handle messages and shares on their own terms. We also use Google Search Console, which shows us in total what people searched to find the site.",
    ],
  },
  {
    heading: "Your choices",
    body: [`You can ask what we hold about you, ask us to correct it, or ask us to delete it. Write to ${site.email} and we will respond.`],
  },
  {
    heading: "Changes",
    body: ["We will update this page if what we record changes. Last updated: 27 November 2026."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Privacy", path }]}
          label="Privacy"
          title="What this website records"
          intro="In plain words: we count visits in totals, we do not use advertising trackers, and we only keep what you choose to send us."
        />
        <section className="pb-24">
          <div className={`${wrap} max-w-3xl`}>
            {sections.map((s) => (
              <div key={s.heading} className="mt-10 first:mt-0">
                <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-lg leading-relaxed text-charcoal">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
