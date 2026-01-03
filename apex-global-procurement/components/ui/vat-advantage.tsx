export default function VatAdvantage() {
  return (
    <section id="vat-advantage" className="bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">The VAT & Duty Advantage</h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">This is where we educate and justify our fee — explained like an accountant. Below we describe our triangular procurement model and show how VAT becomes a net saving for you.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Triangular Procurement (simple diagram)</h3>
            <div className="mt-4 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <svg viewBox="0 0 300 220" className="w-full h-48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangular procurement diagram">
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                    <path d="M0 0 L10 5 L0 10 z" fill="#2563EB" />
                  </marker>
                </defs>
                <circle cx="150" cy="30" r="28" fill="#EFF6FF" stroke="#60A5FA" />
                <text x="150" y="36" fontSize="12" fontWeight="600" textAnchor="middle" fill="#1E293B">Malawian Buyer</text>

                <circle cx="40" cy="170" r="28" fill="#F0FDF4" stroke="#34D399" />
                <text x="40" y="176" fontSize="12" fontWeight="600" textAnchor="middle" fill="#064E3B">AGP (MWK)</text>

                <circle cx="260" cy="170" r="28" fill="#FEF3C7" stroke="#F59E0B" />
                <text x="260" y="176" fontSize="12" fontWeight="600" textAnchor="middle" fill="#7C2D12">SA Supplier (ZAR)</text>

                <line x1="150" y1="52" x2="260" y2="142" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="260" y1="142" x2="40" y2="142" stroke="#34D399" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="40" y1="142" x2="150" y2="52" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" />
              </svg>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">We act as the middle entity: you pay AGP in MWK, we pay the supplier in ZAR, and we manage documentation to ensure VAT/duty advantages under SADC.</p>
            </div>

            <div className="mt-6 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">How we turn South Africa's 15% VAT into your savings</h4>
              <ol className="mt-3 list-decimal list-inside text-sm text-slate-700 dark:text-slate-300">
                <li>Supplier charges 15% VAT in ZAR (domestic VAT).</li>
                <li>With correct SADC export paperwork and customs procedures, import duties and VAT can be reduced when goods are moved regionally.</li>
                <li>We reclaim or offset VAT where possible and document the value chain so that your landed cost in MWK excludes hidden VAT/duties.</li>
              </ol>
            </div>
          </div>

          <div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Why our SADC Certificate saves you 15-25% on duties</h4>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">By providing official SADC Certificates of Origin and following formal procedures, imports qualify for preferential duty rates under SADC trade rules — compared with informal channels that often incur full duty and added brokerage fees.</p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="p-3">Item</th>
                    <th className="p-3">Informal Runner Cost</th>
                    <th className="p-3">Our Professional Service Cost</th>
                    <th className="p-3">Net Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="p-3">Sample Item (incl. transfer & fees)</td>
                    <td className="p-3">MWK 1,500,000</td>
                    <td className="p-3">MWK 1,350,000</td>
                    <td className="p-3 font-semibold text-green-700">MWK 150,000 (10%)</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="p-3">Notes</td>
                    <td className="p-3">Includes inflated duties & informal margins</td>
                    <td className="p-3">Includes our fee + formal duties; lower due to SADC</td>
                    <td className="p-3">You keep more despite the service fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
