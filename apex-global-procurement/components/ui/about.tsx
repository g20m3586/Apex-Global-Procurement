export default function About() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">About Us / Why Trust Us</h2>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Founder's Story</h3>
            <p className="mt-3 text-slate-700 dark:text-slate-300">As a qualified accountant, I saw the forex challenge and built a compliant bridge. Our approach reduces currency friction for Malawian businesses while keeping full SARS and MRA-compliant records.</p>

            <div className="mt-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Dual-country expertise & compliance</h4>
              <ul className="mt-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li>Deep knowledge of South African supplier payments and ZAR workflows.</li>
                <li>Local Malawian accounting & collections in MWK with auditable records.</li>
                <li>Strict adherence to SARS and MRA rules for VAT, duties and documentation.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Professional credentials & partners</h3>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Below are placeholders for logos we display once available. These communicate registration, VAT standing and partner relationships (logistics, banking).</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <div className="text-center text-xs text-slate-500">SARS VAT Registration (logo)</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <div className="text-center text-xs text-slate-500">Company Registration (logo)</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <div className="text-center text-xs text-slate-500">Logistics Partner (logo)</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <div className="text-center text-xs text-slate-500">Malawi Bank (logo)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
