import Link from "next/link";

export default function Hero() {
  const perks = [
    {
      title: "Forex Solution",
      desc: "Pay locally in MWK, we handle the ZAR.",
    },
    {
      title: "Duty Savings",
      desc: "Official SADC Certificates of Origin to reduce your import taxes.",
    },
    {
      title: "Full Compliance",
      desc: "SARS-auditable paper trail for every shipment.",
    },
    {
      title: "End-to-End Management",
      desc: "From supplier payment in SA to delivery at your door.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white/60 to-blue-50 dark:from-slate-900/60 dark:to-slate-800/50">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
              Source from South Africa. Pay in Kwacha. No USD Required.
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
              A professional procurement & export service for Malawian businesses, leveraging
              SADC trade agreements and VAT compliance to lower your landed costs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md shadow"
              >
                Get Your Free Landed Cost Estimate
              </Link>
              <Link href="/services" className="text-sm text-slate-700 dark:text-slate-300 underline">
                Learn more about our services
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p) => (
                <div key={p.title} className="flex items-start gap-3 p-4 bg-white/80 dark:bg-slate-900/60 rounded-lg shadow-sm">
                  <div className="mt-1 text-2xl text-green-600">✅</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
