export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">Contact & Quotation Request</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Fill the form below to request a quotation or get in touch via WhatsApp for a faster response.</p>

        <form className="mt-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" className="w-full p-3 border rounded" />
            <input name="business" placeholder="Business" className="w-full p-3 border rounded" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input name="email" type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <input name="phone" placeholder="Phone" className="w-full p-3 border rounded" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <select name="category" className="w-full p-3 border rounded">
              <option>Product Category</option>
              <option>Industrial Supplies</option>
              <option>Solar & Energy</option>
              <option>Automotive Parts</option>
              <option>Medical Equipment</option>
              <option>Agricultural Inputs</option>
            </select>
            <input name="budget" placeholder="Estimated Budget (MWK)" className="w-full p-3 border rounded" />
          </div>

          <div>
            <label className="sr-only">Specific Items Needed</label>
            <textarea name="items" placeholder="Specific items needed (or attach list)" rows={4} className="w-full p-3 border rounded" />
            <div className="mt-2">
              <input type="file" name="attachment" accept=".pdf,.xlsx,.csv" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded font-semibold">Request Quote</button>
            <a href="https://wa.me/26512345678" target="_blank" rel="noreferrer" className="text-sm text-green-600">Chat on WhatsApp</a>
          </div>
        </form>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">South Africa (Registered Office)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">123 Business Ave, Johannesburg, South Africa</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Phone: +27 11 123 4567</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Malawi (Operational Contact)</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">45 Commercial Rd, Blantyre, Malawi</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Phone: +265 1 234 567</p>
          </div>
        </div>
      </div>
    </section>
  );
}
