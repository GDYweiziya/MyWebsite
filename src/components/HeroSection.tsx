import { useTheme } from '../context/ThemeContext'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import ParticleBackground from './ParticleBackground'
import ThemeToggle from './ThemeToggle'

function HeroSection() {
  const { theme } = useTheme()
  const { scrollToSection } = useSmoothScroll()

  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50'
    }`}>
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-black/30" />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className={`mb-6 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-white/10 text-white/80 border border-white/20' 
            : 'bg-black/10 text-gray-600 border border-gray-200'
        }`}>
          全栈工程师 / 技术博主
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
        style={{ textShadow: theme === 'dark' ? '0 2px 10px rgba(139, 92, 246, 0.3)' : '0 2px 10px rgba(99, 102, 241, 0.2)' }}
        >
          子雅
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 max-w-2xl transition-colors duration-500 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}
        style={{ textShadow: theme === 'dark' ? '0 1px 4px rgba(0, 0, 0, 0.5)' : 'none' }}
        >
          热爱技术，专注于打造优雅的用户体验。让复杂的技术变得简单易懂。
        </p>
        
        <button onClick={() => scrollToSection('projects')} className={`group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 ${
          theme === 'dark' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
        } shadow-lg hover:shadow-xl hover:shadow-purple-500/25`}>
          <span className="relative z-10 flex items-center gap-2">
            查看我的项目
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
      
      <ThemeToggle />
    </section>
  )
}

export default HeroSection