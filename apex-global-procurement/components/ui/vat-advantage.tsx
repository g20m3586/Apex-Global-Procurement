import { TrendingDown, FileCheck, DollarSign, Award, Shield, Check } from "lucide-react";

export default function VatAdvantage() {
  const benefits = [
    { 
      icon: TrendingDown, 
      color: "green", 
      title: "Lower Duty Rates", 
      desc: "Preferential rates under SADC agreements",
      colorClass: "text-green-400",
      bgClass: "bg-green-500/10",
      borderClass: "border-green-500/20",
      hoverBorderClass: "hover:border-green-500/40"
    },
    { 
      icon: FileCheck, 
      color: "blue", 
      title: "Full Compliance", 
      desc: "Auditable documentation for peace of mind",
      colorClass: "text-blue-400",
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/20",
      hoverBorderClass: "hover:border-blue-500/40"
    },
    { 
      icon: Shield, 
      color: "purple", 
      title: "No Hidden Fees", 
      desc: "Transparent pricing vs. informal channels",
      colorClass: "text-purple-400",
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/20",
      hoverBorderClass: "hover:border-purple-500/40"
    }
  ];

  const vatSteps = [
    "Supplier charges 15% VAT in ZAR (domestic VAT).",
    "With correct SADC export paperwork, import duties and VAT are reduced when goods move regionally.",
    "We reclaim or offset VAT where possible and document the complete value chain.",
    "Your landed cost in MWK excludes hidden VAT and duties - real savings for your business."
  ];

  return (
    <section id="vat-advantage" className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold mb-4 backdrop-blur-sm">
            Our Value Proposition
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              VAT & Duty
            </span>{' '}
            Advantage
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Understand how our triangular procurement model and SADC expertise transforms VAT into real savings for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Diagram & Explanation */}
          <div className="space-y-8">
            {/* Triangular Model */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
              <h3 className="font-bold text-2xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                Triangular Procurement Model
              </h3>
              
              {/* Diagram */}
              <div className="bg-slate-900/80 p-8 rounded-xl mb-6 border border-slate-700/30">
                <svg viewBox="0 0 300 240" className="w-full h-56" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangular procurement diagram">
                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                      <path d="M0 0 L10 5 L0 10 z" fill="#06b6d4" />
                    </marker>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#34d399', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Glow effects */}
                  <circle cx="150" cy="40" r="40" fill="url(#grad1)" opacity="0.15" />
                  <circle cx="50" cy="190" r="40" fill="url(#grad2)" opacity="0.15" />
                  <circle cx="250" cy="190" r="40" fill="url(#grad3)" opacity="0.15" />
                  
                  {/* Malawian Buyer */}
                  <circle cx="150" cy="40" r="35" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="3" />
                  <text x="150" y="36" fontSize="12" fontWeight="700" textAnchor="middle" fill="#c4b5fd">Malawian</text>
                  <text x="150" y="50" fontSize="12" fontWeight="700" textAnchor="middle" fill="#c4b5fd">Buyer</text>

                  {/* AGP MWK */}
                  <circle cx="50" cy="190" r="35" fill="#064e3b" stroke="#10b981" strokeWidth="3" />
                  <text x="50" y="186" fontSize="12" fontWeight="700" textAnchor="middle" fill="#86efac">AGP</text>
                  <text x="50" y="200" fontSize="12" fontWeight="700" textAnchor="middle" fill="#86efac">(MWK)</text>

                  {/* SA Supplier */}
                  <circle cx="250" cy="190" r="35" fill="#7c2d12" stroke="#f59e0b" strokeWidth="3" />
                  <text x="250" y="186" fontSize="12" fontWeight="700" textAnchor="middle" fill="#fbbf24">SA Supplier</text>
                  <text x="250" y="200" fontSize="12" fontWeight="700" textAnchor="middle" fill="#fbbf24">(ZAR)</text>

                  {/* Arrows with labels */}
                  <line x1="165" y1="70" x2="238" y2="160" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrow)" opacity="0.8" />
                  <text x="210" y="105" fontSize="12" fontWeight="600" fill="#94a3b8">1. Order</text>
                  
                  <line x1="235" y1="185" x2="85" y2="185" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow)" opacity="0.8" />
                  <text x="150" y="173" fontSize="12" fontWeight="600" fill="#94a3b8">2. Goods</text>
                  
                  <line x1="65" y1="163" x2="135" y2="70" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" opacity="0.8" />
                  <text x="75" y="105" fontSize="12" fontWeight="600" fill="#94a3b8">3. MWK</text>
                </svg>
              </div>

              <div className="flex items-start gap-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  We act as the intermediary: you pay AGP in MWK, we pay the supplier in ZAR, and we manage all documentation to ensure maximum VAT and duty advantages under SADC regulations.
                </p>
              </div>
            </div>

            {/* How VAT Works */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 shadow-xl">
              <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                How We Turn 15% VAT Into Your Savings
              </h4>
              <ol className="space-y-4">
                {vatSteps.map((text, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <span className="pt-1 text-slate-300 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Column - SADC Benefits & Comparison */}
          <div className="space-y-8">
            {/* SADC Certificate Benefits */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 shadow-xl">
              <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                Why SADC Certificates Save You 15-25% on Duties
              </h4>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                By providing official SADC Certificates of Origin and following formal procedures, imports qualify for preferential duty rates under SADC trade rules.
              </p>
              
              <div className="space-y-3">
                {benefits.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-4 p-5 ${item.bgClass} rounded-xl border ${item.borderClass} ${item.hoverBorderClass} transition-all duration-300 group`}
                  >
                    <div className={`w-10 h-10 ${item.bgClass} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-5 h-5 ${item.colorClass}`} />
                    </div>
                    <div>
                      <div className={`font-semibold ${item.colorClass} mb-1 text-lg`}>{item.title}</div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Comparison Table */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
              <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                Cost Comparison
              </h4>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-700">
                      <th className="text-left py-4 px-4 text-slate-400 font-semibold">Method</th>
                      <th className="text-right py-4 px-4 text-slate-400 font-semibold">Cost (MWK)</th>
                      <th className="text-right py-4 px-4 text-slate-400 font-semibold">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50 hover:bg-red-500/5 transition-colors">
                      <td className="py-5 px-4">
                        <div className="font-semibold text-red-400 mb-1 text-lg">Informal Runner</div>
                        <div className="text-xs text-slate-500">Inflated duties & margins</div>
                      </td>
                      <td className="py-5 px-4 text-right font-mono text-xl text-red-400 font-bold">1,500,000</td>
                      <td className="py-5 px-4 text-right text-slate-500">-</td>
                    </tr>
                    <tr className="hover:bg-green-500/5 transition-colors">
                      <td className="py-5 px-4">
                        <div className="font-semibold text-green-400 mb-1 text-lg">AGP Professional Service</div>
                        <div className="text-xs text-slate-500">SADC compliant + our fee</div>
                      </td>
                      <td className="py-5 px-4 text-right font-mono text-xl text-green-400 font-bold">1,350,000</td>
                      <td className="py-5 px-4 text-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-400 font-bold border border-green-500/30 shadow-lg">
                          <TrendingDown className="w-5 h-5" />
                          10%
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="font-bold text-green-400 text-xl">You save MWK 150,000</span>
                </div>
                <p className="text-slate-300 leading-relaxed pl-11">
                  Despite our service fee, you save thanks to formal SADC procedures and VAT optimization. That's real money back in your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}