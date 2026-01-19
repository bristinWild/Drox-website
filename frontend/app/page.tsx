'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call - replace with your actual API endpoint
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success');
        setMessage('🎉 Welcome aboard! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Please enter a valid email address.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 bg-sky-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-28 bg-gradient-to-br from-orange-300 to-sky-300 rounded-full blur-3xl opacity-40"
              animate={{ scale: [1.1, 1.35, 1.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src="/text-logo-bg.png"
              alt="Drox Logo"
              className="relative w-[50rem] h-auto drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>`

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black text-rose-900 mb-6 leading-tight "
            style={{ letterSpacing: -0.2 }}>

            Discover experiences
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 "
              style={{ fontFamily: "Marker Felt" }}>
              around you.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
            Meet people who want to explore like you do.
            <br />
            Safe, shared experiences — wherever you are.
          </p>
        </motion.div>

        {/* Waitlist form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-4 border-white">
            <h3 className="text-2xl font-bold text-rose-900 mb-2 text-center">
              Join the Waitlist
            </h3>
            <p className="text-slate-600 mb-6 text-center">
              Be the first to explore with Drox
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 text-lg rounded-2xl border-3 border-sky-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-200/50 outline-none transition-all bg-white/90 text-slate-800 placeholder:text-slate-400"
                  disabled={status === 'loading'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 text-xl font-bold text-white rounded-2xl shadow-lg transition-all ${status === 'loading'
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-300/50'
                  }`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  'GET STARTED'
                )}
              </motion.button>
            </form>

            {/* Status message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-xl text-center font-medium ${status === 'success'
                  ? 'bg-green-100 text-green-800 border-2 border-green-300'
                  : 'bg-red-100 text-red-800 border-2 border-red-300'
                  }`}
              >
                {message}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Features
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {[
            { icon: '✈️', title: 'Explore Together', desc: 'Find adventures with like-minded travelers' },
            { icon: '🤝', title: 'Safe Community', desc: 'Verified members and secure experiences' },
            { icon: '🌍', title: 'Anywhere', desc: 'Discover experiences wherever you go' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border-2 border-white hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-rose-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center text-slate-600"
        >
          <p className="text-sm">
            © 2024 Drox. Coming soon to your adventures.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}