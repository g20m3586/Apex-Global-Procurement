import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Users, Zap } from "lucide-react";

export default function Hero() {
  const perks = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Forex Solution",
      desc: "Pay locally in MWK, we handle the ZAR.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Duty Savings",
      desc: "Official SADC Certificates of Origin to reduce your import taxes.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Full Compliance",
      desc: "SARS-auditable paper trail for every shipment.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "End-to-End Management",
      desc: "From supplier payment in SA to delivery at your door.",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-sm">
              Professional Procurement & Export Service
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Source from South Africa.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pay in Kwacha.
              </span>{' '}
              No USD Required.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              A professional procurement & export service for Malawian businesses, leveraging
              SADC trade agreements and VAT compliance to lower your landed costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Landed Cost Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white rounded-full font-semibold transition-all duration-300 hover:bg-cyan-500/10"
              >
                Learn More About Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">24+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p) => (
                <div 
                  key={p.title} 
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}