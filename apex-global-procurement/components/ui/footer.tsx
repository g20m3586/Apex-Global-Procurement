export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Apex Global Procurement</h4>
          <p className="text-sm mt-2">Email: info@agp.example</p>
          <p className="text-sm">WhatsApp: +26512345678</p>
        </div>

        <div>
          <h4 className="font-semibold">South Africa</h4>
          <p className="text-sm mt-2">123 Business Ave, Johannesburg</p>
          <p className="text-sm">Phone: +27 11 123 4567</p>
        </div>

        <div>
          <h4 className="font-semibold">Malawi</h4>
          <p className="text-sm mt-2">45 Commercial Rd, Blantyre</p>
          <p className="text-sm">Phone: +265 1 234 567</p>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-400">© {new Date().getFullYear()} Apex Global Procurement — All rights reserved.</div>
      </div>
    </footer>
  );
}
