import { FileText, DollarSign, CheckCircle, CreditCard, Truck, MapPin, Package, Check } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      title: "You Send Quotation Request",
      description: "Share your product list, SKUs, or specifications with us through our simple form.",
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "We Provide Fixed-Price Quote in MWK",
      description: "Receive a comprehensive quote including all costs - no hidden fees or surprises.",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "You Approve & Pay in Kwacha",
      description: "Simple approval process with payment to our designated Malawian account.",
      icon: <CheckCircle className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "We Procure & Pay Supplier in ZAR",
      description: "We handle all South African supplier payments with full transparency and proof.",
      icon: <CreditCard className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Export Logistics & SADC Documentation",
      description: "Complete management of export paperwork and SADC compliance requirements.",
      icon: <Truck className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Border Clearance & Tracking",
      description: "Real-time tracking as goods clear customs with full visibility.",
      icon: <MapPin className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Delivery & Documentation Handover",
      description: "Direct delivery to your premises with complete customs file for your records.",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="our-process" className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4 backdrop-blur-sm">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Transparent{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building trust through transparency. Follow our step-by-step procurement process designed for your peace of mind.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                      <div className="absolute -inset-1 bg-gradient-to-br ${step.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">STEP {i + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* EFT Proof Sample for Step 4 */}
                    {i === 3 && (
                      <div className="mt-6 p-6 bg-slate-800/80 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="relative">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                          </div>
                          <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Sample EFT Proof
                          </div>
                        </div>
                        <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/30 shadow-inner">
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-5">
                            <div>
                              <div className="font-bold text-white text-xl mb-2">From: AGP (ZA)</div>
                              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                Account: ZAR 123-456789
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-500">
                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                Standard Bank, Johannesburg
                              </div>
                            </div>
                            <div className="text-left sm:text-right">
                              <div className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Amount</div>
                              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                ZAR 45,000.00
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-slate-700/50 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                            <div className="flex items-center gap-2 text-slate-400">
                              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                              <span className="text-slate-500">Ref:</span>
                              <span className="font-mono text-slate-300">INV-2025-001</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                              <span className="text-slate-500">Date:</span>
                              <span className="text-slate-300">2025-01-03</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                              <span className="text-slate-500">Status:</span>
                              <span className="text-green-400 font-semibold">Completed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex justify-center py-2">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 via-slate-700 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative p-8 md:p-10 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50"></div>
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-2xl md:text-3xl text-white mb-3 flex items-center gap-3">
                  No Hidden Costs. Fixed Pricing.
                  <span className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm font-semibold border border-green-500/30">
                    <Check className="w-4 h-4 mr-1" />
                    Guaranteed
                  </span>
                </h4>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Your final Kwacha price is locked in upon approval. What you see is exactly what you pay - no surprises, no additional charges, complete transparency guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}