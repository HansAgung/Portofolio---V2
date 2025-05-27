import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/project';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen py-25 px-0 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-200">
        {/* Judul dan deskripsi singkat */}
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
          {project.title}
        </h1>
        <p className="text-md text-gray-500 mb-16 max-w-3xl leading-relaxed">
          {project.subtitle}
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 shadow-inner border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-3">
              Detail Proyek
            </h2>
            <ul className="space-y-6 text-gray-700 text-lg leading-relaxed">
              {/* Tingkat Kesulitan */}
              <li>
                <span className="font-semibold text-gray-900 block mb-2">
                  Tingkat Kesulitan:
                </span>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-orange-500 h-4 rounded-full transition-all duration-500"
                    style={{
                      width:
                        project.difficulty === 'Beginner'
                          ? '33%'
                          : project.difficulty === 'Intermediate'
                          ? '66%'
                          : '100%',
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1 block">
                  {project.difficulty}
                </span>
              </li>

              {/* Tipe Proyek */}
              <li>
                <span className="font-semibold text-gray-900">Tipe Proyek:</span>{' '}
                {project.projectType}
              </li>

              {/* Bahasa / Teknologi */}
              <li>
                <span className="font-semibold text-gray-900 block mb-3">
                  Bahasa / Teknologi:
                </span>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.languages.map((lang) => (
                    <div key={lang} className="flex items-center space-x-3">
                      <img
                        src={`/skills/${lang.toLowerCase()}`}
                        className="w-full h-12 object-contain rounded-lg shadow-md"
                      />  
                    </div>
                  ))}
                </div>
              </li>

              {/* Lama Pengembangan */}
              <li>
                <span className="font-semibold text-gray-900">Lama Pengembangan:</span>{' '}
                {project.duration}
              </li>
            </ul>
          </div>

          
        </div>

        <div className="prose max-w-full text-gray-800 text-lg leading-relaxed">
          {project.description} <br />
          <button className="min-w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Lihat Proyek
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
