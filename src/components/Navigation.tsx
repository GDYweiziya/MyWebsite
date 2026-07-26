import { useTheme } from '../context/ThemeContext'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export default function Navigation() {
  const { theme } = useTheme()
  const { scrollToSection } = useSmoothScroll()

  const isDark = theme === 'dark'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-900/80 text-white' 
        : 'bg-white/80 text-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">子雅</span>
        
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            首页
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            项目
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            联系我
          </button>
        </div>
      </div>
    </nav>
  )
}