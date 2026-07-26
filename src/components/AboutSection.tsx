import { useTheme } from '../context/ThemeContext'

export default function AboutSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" className={`py-24 transition-colors duration-500 ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            关于我
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5 flex justify-center">
            <div className={`relative ${isDark ? 'shadow-2xl shadow-indigo-900/30' : 'shadow-2xl shadow-gray-200'}`}>
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20photo%20of%20a%20young%20asian%20male%20software%20engineer%20confident%20smile%20modern%20style%20clean%20background&image_size=portrait_4_3"
                alt="子雅"
                loading="lazy"
                className={`w-72 h-72 object-cover rounded-2xl border-4 ${
                  isDark ? 'border-indigo-500/30' : 'border-indigo-200'
                }`}
              />
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold ${
                isDark ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-indigo-600 to-purple-600'
              } text-white shadow-lg`}>
                ZY
              </div>
            </div>
          </div>
          
          <div className={`lg:w-3/5 space-y-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              大家好，我是子雅，一名热爱技术的全栈工程师。拥有多年的软件开发经验，专注于构建高性能、优雅的 Web 应用。
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              我相信技术的力量可以改变世界，致力于将复杂的技术变得简单易懂。在工作中，我注重代码质量和用户体验，追求最佳实践。
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              除了编程，我还喜欢分享技术知识，在博客和社交媒体上发表技术文章，帮助更多人入门和成长。
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30' 
              : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
          }`}>
            <span className={`text-2xl font-bold tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              GEDI
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              / 格物致知，知行合一
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}