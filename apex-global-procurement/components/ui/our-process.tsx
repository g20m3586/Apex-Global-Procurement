export default function OurProcess() {
  const steps = [
    {
      title: "You Send Quotation Request (with product list/SKU)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 5h18v14H3z" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9h10" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "We Provide Fixed-Price Quote in MWK (includes all costs)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 8v8" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12h8" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "You Approve & Pay Kwacha to Our Designated Malawian Account",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 11.5A8.38 8.38 0 0012.5 3 8.38 8.38 0 003 11.5C3 16.1 6.4 20 11 21v-7h-3v-4h3V8.5c0-3 1.8-4.6 4.4-4.6 1.3 0 2.6.1 2.6.1v3h-1.6c-1.6 0-2.1 1-2.1 2v2.2h3.5l-.5 4H18v7c4.6-1 8-4.9 8-9.5z" stroke="#0f172a" strokeWidth="0" />
        </svg>
      ),
    },
    {
      title: "We Procure & Pay Supplier in South Africa (Show EFT proof sample)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 15v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10l5 5 5-5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "We Manage Export Logistics & SADC Documentation",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 7h18" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3v18" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Goods Clear Border & We Provide Tracking",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 15V6a2 2 0 00-2-2H5a2 2 0 00-2 2v9" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10l5 5 5-5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Delivery to Your Premises & Handover of Full Customs File",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 7h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 7v-2a1 1 0 011-1h8a1 1 0 011 1v2" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="our-process" className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">How It Works / Our Process</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">This page builds trust through transparency. Below is our visual timeline explaining how we handle procurement end-to-end.</p>

        <div className="mt-8 grid gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-none w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">{s.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Step {i + 1}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{s.title}</p>

                {i === 3 && (
                  <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-md border border-slate-100 dark:border-slate-700">
                    <div className="text-xs text-slate-500">EFT Proof (sample)</div>
                    <div className="mt-2 bg-white dark:bg-slate-900 p-3 rounded-md shadow-sm">
                      <div className="flex justify-between text-sm">
                        <div>
                          <div className="font-medium">From: AGP (ZA)</div>
                          <div className="text-xs text-slate-500">Account: ZAR 123-456789</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">Amount</div>
                          <div className="text-sm text-slate-700 font-semibold">ZAR 45,000.00</div>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-slate-500">Ref: INV-2025-001 • Date: 2025-01-03</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-slate-800 rounded-md border border-blue-100 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100">No hidden costs. Your final Kwacha price is fixed upon approval.</p>
        </div>
      </div>
    </section>
  );
}
