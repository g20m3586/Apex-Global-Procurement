import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/#our-process", label: "Our Process" },
    { href: "/#vat-advantage", label: "VAT & Duty" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About Us" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <nav className="relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold tracking-wide text-blue-200"
            >
              AGP
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:underline hover:text-blue-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
