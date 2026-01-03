export default function Services() {
  const categories = [
    "Industrial Supplies",
    "Solar & Energy",
    "Automotive Parts",
    "Medical Equipment",
    "Agricultural Inputs",
  ];

  const notHandled = [
    "Perishables (fresh food)",
    "Controlled substances / regulated chemicals",
    "Used clothing / second-hand textiles",
    "Hazardous waste",
  ];

  return (
    <section id="services" className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">Services / Product Focus</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">We focus on high-value, quality-critical goods where compliance and correct documentation matter most.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Categories we specialise in</h3>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              {categories.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="text-green-600">✅</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">What we do NOT handle</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">To avoid unsuitable enquiries, we do not handle the following:</p>
            <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
              {notHandled.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="text-red-600">✖</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Positioning</h4>
          <p className="mt-2 text-slate-700 dark:text-slate-300">We focus on high-value, quality-critical goods where compliance and correct documentation matter most. Our service is designed to protect your margins by reducing duty and VAT exposure while providing an auditable paper trail.</p>
        </div>
      </div>
    </section>
  );
}
