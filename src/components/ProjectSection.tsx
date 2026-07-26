import { useTheme } from '../context/ThemeContext'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    name: '智能笔记应用',
    description: '一款基于 AI 驱动的个人知识管理工具，支持 Markdown 编辑、智能搜索和知识图谱可视化。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20note-taking%20app%20interface%20with%20clean%20UI%20design%20dark%20theme%20AI%20features&image_size=landscape_16_9',
    githubUrl: 'https://github.com/example/smart-notes'
  },
  {
    id: 2,
    name: '数据可视化平台',
    description: '企业级数据可视化解决方案，支持多数据源接入、实时图表更新和交互式报表生成。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20graphs%20modern%20UI%20dark%20blue%20theme&image_size=landscape_16_9',
    githubUrl: 'https://github.com/example/data-viz'
  },
  {
    id: 3,
    name: '电商管理系统',
    description: '全栈电商后台管理系统，包含订单管理、商品管理、用户管理和数据分析功能。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20admin%20dashboard%20modern%20UI%20design%20clean%20interface%20product%20management&image_size=landscape_16_9',
    githubUrl: 'https://github.com/example/ecommerce-admin'
  },
  {
    id: 4,
    name: '个人博客系统',
    description: '轻量级个人博客平台，支持 Markdown 写作、代码高亮、评论系统和 SEO 优化。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20blog%20website%20modern%20minimalist%20design%20clean%20typography%20reading%20experience&image_size=landscape_16_9',
    githubUrl: 'https://github.com/example/personal-blog'
  }
]

export default function ProjectSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="projects" className={`py-24 transition-colors duration-500 ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我的项目</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            以下是我参与开发的部分项目，涵盖全栈开发、数据可视化和 AI 应用等领域。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}