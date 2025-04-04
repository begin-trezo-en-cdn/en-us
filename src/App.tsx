import React from 'react';
import { Shield, ChevronRight, Globe, Lock, Wallet, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-trezor-green" />
            <span className="ml-2 text-xl font-bold text-trezor-dark">SecureWallet</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-trezor-green">Features</a>
            <a href="#setup" className="text-gray-600 hover:text-trezor-green">Setup Guide</a>
            <a href="#support" className="text-gray-600 hover:text-trezor-green">Support</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-trezor-dark mb-6">
              Secure Your Digital Future
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your journey to complete digital asset security with our trusted hardware wallet solution.
            </p>
            <button className="bg-trezor-green text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center mx-auto hover:bg-trezor-green/90 transition-colors">
              Get Started Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-trezor-dark mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Globe className="h-12 w-12 text-trezor-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Access</h3>
                <p className="text-gray-600">Access your assets securely from anywhere in the world</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Lock className="h-12 w-12 text-trezor-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Maximum Security</h3>
                <p className="text-gray-600">Industry-leading security protocols to protect your assets</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Wallet className="h-12 w-12 text-trezor-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Easy Setup</h3>
                <p className="text-gray-600">Quick and simple setup process to get you started</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trezor-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Secure Your Assets?</h2>
          <button className="bg-white text-trezor-dark px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-gray-100 transition-colors">
            Start Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-trezor-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200">Features</a></li>
                <li><a href="#" className="hover:text-gray-200">Security</a></li>
                <li><a href="#" className="hover:text-gray-200">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200">About Us</a></li>
                <li><a href="#" className="hover:text-gray-200">Careers</a></li>
                <li><a href="#" className="hover:text-gray-200">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-200">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 SecureWallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;