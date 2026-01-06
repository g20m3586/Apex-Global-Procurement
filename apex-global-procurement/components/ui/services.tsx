"use client";

import { CheckCircle, X, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      name: "Industrial Supplies",
      gradient: "from-blue-500 to-cyan-500",
      description: "Machinery, tools, and manufacturing equipment"
    },
    {
      name: "Solar & Energy",
      gradient: "from-yellow-500 to-orange-500",
      description: "Solar panels, batteries, and renewable energy systems"
    },
    {
      name: "Automotive Parts",
      gradient: "from-red-500 to-pink-500",
      description: "Quality vehicle parts and maintenance equipment"
    },
    {
      name: "Medical Equipment",
      gradient: "from-green-500 to-emerald-500",
      description: "Healthcare devices and medical supplies"
    },
    {
      name: "Agricultural Inputs",
      gradient: "from-lime-500 to-green-500",
      description: "Farming equipment and agricultural supplies"
    },
  ];

  const notHandled = [
    { name: "Controlled substances / regulated chemicals", reason: "Regulatory restrictions" },
    { name: "Used clothing / second-hand textiles", reason: "Quality control concerns" },
    { name: "Hazardous waste", reason: "Environmental compliance" },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            What We Offer
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Services &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Product Focus
            </span>
          </h2>
          <p className={`text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We specialize in high-value, quality-critical goods where compliance and correct documentation matter most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Categories We Specialize In */}
          <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-700 shadow-xl ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{transitionDelay: '300ms'}}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-white">
                Categories We Specialize In
              </h3>
            </div>
            
            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className={`group relative bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/50 transition-all duration-500 overflow-hidden cursor-pointer ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{transitionDelay: `${400 + idx * 100}ms`}}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative flex items-start gap-4 p-5">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${cat.gradient} rounded-lg flex items-center justify-center transition-all duration-500 shadow-lg ${
                      activeCard === idx ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors mb-1">
                        {cat.name}
                      </h4>
                      <p className={`text-sm text-slate-500 group-hover:text-slate-400 transition-all duration-300 ${
                        activeCard === idx ? 'translate-x-2' : 'translate-x-0'
                      }`}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-green-500/10 rounded-xl border border-green-500/20 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="text-sm text-slate-300">
                  All categories are handled with <span className="text-green-400 font-semibold">full SADC compliance</span> and complete documentation.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do NOT Handle */}
          <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-slate-700/50 hover:border-red-500/30 transition-all duration-700 shadow-xl ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{transitionDelay: '300ms'}}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                <X className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-white">
                What We Do NOT Handle
              </h3>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              To ensure quality and compliance, we avoid these categories:
            </p>
            
            <div className="space-y-3">
              {notHandled.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group relative bg-red-500/5 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{transitionDelay: `${400 + idx * 100}ms`}}
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-start gap-4 p-5">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 group-hover:rotate-90 transition-all duration-300">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-300 mb-1">{item.name}</div>
                      <div className="text-sm text-slate-500">{item.reason}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-red-500/10 rounded-xl border border-red-500/20 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="text-sm text-slate-300">
                  These exclusions help us maintain <span className="text-red-400 font-semibold">high standards</span> and ensure regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning Statement */}
        <div className={`relative bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 overflow-hidden shadow-xl ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{transitionDelay: '600ms'}}>
          {/* Animated background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
          
          <div className="relative flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">Our Positioning</h4>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                We focus on <span className="text-cyan-400 font-semibold">high-value, quality-critical goods</span> where compliance and correct documentation matter most. Our service is designed to <span className="text-cyan-400 font-semibold">protect your margins</span> by reducing duty and VAT exposure while providing an <span className="text-cyan-400 font-semibold">auditable paper trail</span> for complete peace of mind.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { 
                    icon: TrendingUp,
                    value: "15-25%", 
                    label: "Duty Savings", 
                    gradient: "from-orange-500 to-red-500",
                    iconBg: "from-orange-500/20 to-red-500/20"
                  },
                  { 
                    icon: Shield,
                    value: "100%", 
                    label: "Compliance Rate", 
                    gradient: "from-green-500 to-emerald-500",
                    iconBg: "from-green-500/20 to-emerald-500/20"
                  },
                  { 
                    icon: Award,
                    value: "24/7", 
                    label: "Support Available", 
                    gradient: "from-blue-500 to-cyan-500",
                    iconBg: "from-blue-500/20 to-cyan-500/20"
                  }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className={`group relative p-6 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{transitionDelay: `${800 + idx * 100}ms`}}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <stat.icon className={`w-6 h-6 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}} />
                    </div>
                    
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}