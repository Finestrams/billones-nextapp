export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ────────────────────────────
           HERO SECTION
           ──────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] bg-purple-500/10 rounded-full blur-3xl animate-blob [animation-delay:3s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-indigo-500/8 rounded-full blur-3xl animate-blob [animation-delay:6s]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="text-center animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-white/80 mb-10 hover:bg-white/10 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now in beta — join the waitlist
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight">
              Build Something
              <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                Truly Amazing
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              A modern Next.js application with authentication, responsive design, and the latest web technologies. 
              Ship faster with a rock-solid foundation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-indigo-700 bg-white hover:bg-gray-50 md:text-lg transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 hover:-translate-y-0.5"
              >
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-base font-semibold rounded-full text-white/90 hover:text-white hover:bg-white/10 md:text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Sign In
              </a>
            </div>

            {/* Trusted by */}
            <div className="mt-20 pt-14 border-t border-white/5">
              <p className="text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-8">
                Trusted by teams worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-10 opacity-30">
                {["Company", "Product", "Design", "Code", "Build"].map((name) => (
                  <span key={name} className="text-white text-2xl font-bold tracking-tight">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────
           STATS SECTION
           ──────────────────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { label: "Active Users", value: "10K+" },
              { label: "Requests / Day", value: "1M+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Countries", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1.5 tabular-nums tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────
           FEATURES SECTION
           ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-gray-50/80 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Built with modern tools and best practices to help you build better applications, faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Lightning Fast",
                desc: "Built on Next.js for optimal performance and SEO with server-side rendering and automatic code splitting.",
                color: "from-blue-500 to-blue-600",
                shadow: "shadow-blue-500/25",
                accent: "text-blue-600 dark:text-blue-400",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
              },
              {
                title: "Enterprise Security",
                desc: "Industry-standard security practices, encrypted data, and SOC 2 compliance to keep your data safe.",
                color: "from-green-500 to-emerald-600",
                shadow: "shadow-green-500/25",
                accent: "text-green-600 dark:text-green-400",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
              },
              {
                title: "Modern UI Kit",
                desc: "Responsive design system built with Tailwind CSS that looks stunning on any device or screen size.",
                color: "from-purple-500 to-violet-600",
                shadow: "shadow-purple-500/25",
                accent: "text-purple-600 dark:text-purple-400",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800/60"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${feature.shadow}`}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[0.95rem]">
                  {feature.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className={`text-sm font-medium ${feature.accent} group-hover:gap-2 transition-all inline-flex items-center gap-1`}>
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────
           HOW IT WORKS SECTION
           ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-5">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              From signup to deployment — your journey made simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50" aria-hidden />

            {[
              {
                step: "01",
                title: "Create an Account",
                description: "Sign up in seconds with your email. No credit card required to get started.",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "02",
                title: "Configure Your Project",
                description: "Set up your preferences, connect your tools, and customize your workflow.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                step: "03",
                title: "Launch & Scale",
                description: "Deploy with one click and scale automatically as your user base grows.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div
                  className={`relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white text-xl font-bold tabular-nums">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────
           TESTIMONIAL SECTION
           ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Testimonials
          </span>
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8 max-w-3xl mx-auto">
            &ldquo;BillonesNextApp completely transformed our development workflow. 
            We went from idea to production in record time.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-500/20">
              RB
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">Ramwell Billones</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CEO, BillonesTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────
           CTA SECTION
           ──────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers and teams already building with us. 
            Start your free trial today — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-indigo-700 bg-white hover:bg-gray-50 md:text-lg transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 hover:-translate-y-0.5"
            >
              Create Your Free Account
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-base font-semibold rounded-full text-white/90 hover:text-white hover:bg-white/10 md:text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Talk to Sales
            </a>
          </div>
          <p className="mt-6 text-sm text-white/40">No credit card required. Free plan available.</p>
        </div>
      </section>

      {/* ────────────────────────────
           FOOTER
           ──────────────────────────── */}
      <footer className="bg-gray-950 text-gray-400 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-lg font-bold tracking-tight mb-4">BillonesNextApp</h3>
              <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                Building the future of web applications with modern tools and best practices.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Changelog", "Documentation"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies"],
              },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-all duration-200 hover:translate-x-0.5 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} BillonesNextApp. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Twitter", "GitHub", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-gray-500 hover:text-white transition-all duration-200 hover:translate-y-[-1px]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}