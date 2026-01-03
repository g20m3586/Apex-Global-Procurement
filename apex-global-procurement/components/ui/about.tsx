"use client";

import { Award, Shield, TrendingUp, Users, CheckCircle, Briefcase, Target } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ satisfaction: 0, shipments: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate counters
            const satisfactionTarget = 98;
            const shipmentsTarget = 500;
            const duration = 2000;
            const steps = 60;
            const satisfactionIncrement = satisfactionTarget / steps;
            const shipmentsIncrement = shipmentsTarget / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              setCounters({
                satisfaction: Math.min(Math.round(satisfactionIncrement * currentStep), satisfactionTarget),
                shipments: Math.min(Math.round(shipmentsIncrement * currentStep), shipmentsTarget)
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
              }
            }, duration / steps);
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

  const expertise = [
    {
      title: "Deep knowledge of South African supplier payments and ZAR workflows",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Local Malawian accounting & collections in MWK with auditable records",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Strict adherence to SARS and MRA rules for VAT, duties and documentation",
      icon: <Shield className="w-5 h-5" />
    },
  ];

  const credentials = [
    { 
      label: "SARS VAT Registration", 
      icon: Shield, 
      gradient: "from-green-500 to-emerald-500",
      description: "Fully registered"
    },
    { 
      label: "Company Registration", 
      icon: Award, 
      gradient: "from-blue-500 to-cyan-500",
      description: "Licensed entity"
    },
    { 
      label: "Logistics Partner", 
      icon: TrendingUp, 
      gradient: "from-orange-500 to-red-500",
      description: "Established network"
    },
    { 
      label: "Banking Partner", 
      icon: Users, 
      gradient: "from-purple-500 to-pink-500",
      description: "Malawi & SA"
    },
  ];

  const trustElements = [
    {
      icon: Shield,
      color: "green",
      title: "Fully Licensed & Insured",
      desc: "Complete regulatory compliance",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      color: "blue",
      title: "Certified Accountant",
      desc: "Professional financial oversight",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      color: "purple",
      title: "Trusted Partners",
      desc: "Established logistics network",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold mb-4 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            Our Story
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            About Us /{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              Why Trust Us
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Founder's Story */}
          <div className="space-y-8">
            {/* Founder's Story Card */}
            <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-700 shadow-xl hover:scale-[1.02] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{transitionDelay: '200ms'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-500">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl md:text-3xl text-white">
                  Founder's Story
                </h3>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                As a qualified accountant, I saw the forex challenge and built a compliant bridge. Our approach reduces currency friction for Malawian businesses while keeping full SARS and MRA-compliant records.
              </p>

              {/* Expertise Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center animate-pulse">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-xl text-white">
                    Dual-Country Expertise & Compliance
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {expertise.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`group flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-500 hover:translate-x-2 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                      }`}
                      style={{transitionDelay: `${400 + idx * 100}ms`}}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {item.icon}
                        <div className="text-cyan-400"></div>
                      </div>
                      <span className="text-slate-300 leading-relaxed pt-1.5 group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Indicators with animated counters */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: TrendingUp, 
                  value: counters.satisfaction, 
                  label: "Client Satisfaction",
                  gradient: "from-blue-500 to-cyan-500",
                  suffix: "%"
                },
                { 
                  icon: Award, 
                  value: counters.shipments, 
                  label: "Successful Shipments",
                  gradient: "from-purple-500 to-pink-500",
                  suffix: "+"
                },
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className={`group relative bg-gradient-to-br ${stat.gradient} bg-opacity-10 p-6 rounded-xl border border-opacity-20 hover:border-opacity-40 transition-all duration-700 text-center overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    borderColor: idx === 0 ? 'rgb(59 130 246 / 0.2)' : 'rgb(168 85 247 / 0.2)',
                    transitionDelay: `${600 + idx * 100}ms`
                  }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <stat.icon className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} style={{WebkitTextFillColor: 'transparent'}} />
                    <div className={`text-3xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Professional Credentials */}
          <div className="space-y-8">
            {/* Credentials Card */}
            <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-700 shadow-xl hover:scale-[1.02] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} style={{transitionDelay: '200ms'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-500">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-2xl md:text-3xl text-white">
                  Professional Credentials
                </h3>
              </div>
              
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Our registrations, VAT standing, and partner relationships demonstrate our commitment to compliance and professional service delivery.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {credentials.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`group relative bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 flex flex-col items-center justify-center text-center min-h-[160px] overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{transitionDelay: `${400 + idx * 100}ms`}}
                  >
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg mx-auto`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="font-semibold text-slate-300 group-hover:text-white transition-colors mb-1">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Elements */}
              <div className="space-y-3">
                {trustElements.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`group flex items-center gap-4 p-5 rounded-xl border transition-all duration-500 hover:scale-[1.02] hover:translate-x-2 ${
                      idx === 0 ? 'bg-green-500/10 border-green-500/20 hover:border-green-500/40' :
                      idx === 1 ? 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40' :
                      'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40'
                    } ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{transitionDelay: `${800 + idx * 100}ms`}}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`font-semibold mb-1 ${
                        idx === 0 ? 'text-green-400' :
                        idx === 1 ? 'text-blue-400' :
                        'text-purple-400'
                      }`}>
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Trust Badge with pulse animation */}
            <div className={`relative p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-700 overflow-hidden hover:scale-[1.02] ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`} style={{transitionDelay: '1s'}}>
              {/* Animated glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              
              <div className="relative flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl flex-shrink-0 animate-bounce-slow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">Verified & Trusted</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Operating with <span className="text-purple-400 font-semibold">full regulatory approval</span> in both South Africa and Malawi
                  </p>
                </div>
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
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}