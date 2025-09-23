import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Award, Sparkles, Zap, Globe, Cpu } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section - Fixed mobile overlap issue */}
      <section className="relative z-10 pt-20 sm:pt-24 lg:pt-28 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                {/* Fixed mobile text overlap with proper spacing */}
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <p className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Premium Furniture Since 1999
                  </p>
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                    Crafting Your
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Perfect Space
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Discover premium furniture that combines timeless elegance with modern comfort. 
                  Each piece is carefully crafted to transform your house into a home.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  to="/catalog" 
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 group transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <span className="relative flex items-center">
                  Shop Collection
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400/50 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                alt="Premium Furniture"
                className="relative rounded-2xl shadow-2xl w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px] object-cover border border-white/10 backdrop-blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-lg px-3 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-medium">Live Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Why Choose LuxeFurn?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and service in every piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center group p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/25">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Premium Quality</h3>
              <p className="text-sm sm:text-base text-white/70">Handcrafted with the finest materials for lasting durability.</p>
            </div>
            <div className="text-center group p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Free Delivery</h3>
              <p className="text-sm sm:text-base text-white/70">Complimentary white-glove delivery and setup service.</p>
            </div>
            <div className="text-center group p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">25 Year Warranty</h3>
              <p className="text-sm sm:text-base text-white/70">Comprehensive warranty on all furniture pieces.</p>
            </div>
            <div className="text-center group p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Custom Design</h3>
              <p className="text-sm sm:text-base text-white/70">Personalized designs to match your unique style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8">
            Explore our collection of premium furniture and find the perfect pieces for your home.
          </p>
          <Link 
            to="/catalog" 
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white to-cyan-100 text-gray-900 font-semibold rounded-xl hover:from-cyan-100 hover:to-white transition-all duration-300 group transform hover:scale-105 shadow-lg shadow-white/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-100 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <span className="relative flex items-center">
            Start Shopping
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;