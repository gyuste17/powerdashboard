import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogData';
import { SITE_CONFIG } from '@/data/siteData';
import { generateBreadcrumbJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Blog de Business Intelligence, Power BI y Analítica de Negocio',
  description: 'Guías, comparativas y estrategias prácticas sobre Power BI, Looker Studio, modelado DAX y cuadros de mando empresariales.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="pt-32 pb-20 bg-slate-950 min-h-screen text-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              Recursos & Guías
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Blog de Business Intelligence & Analítica
            </h1>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              Artículos prácticos sobre cuadros de mando, automatización de datos y mejores prácticas para empresas.
            </p>
          </div>

          <div className="space-y-6">
            {BLOG_POSTS.map((art) => (
              <article
                key={art.slug}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 transition-all group"
              >
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20">
                    {art.category}
                  </span>
                  <span>•</span>
                  <span>{art.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                </h2>

                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-amber-400 text-xs font-semibold flex items-center gap-1 group-hover:underline"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
