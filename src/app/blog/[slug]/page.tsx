import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogData';
import { SITE_CONFIG } from '@/data/siteData';
import { generateBreadcrumbJsonLd } from '@/lib/jsonLd';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Artículo no encontrado' };

  return {
    title: `${post.title} | Blog PowerDashboard`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="pt-32 pb-24 bg-transparent min-h-screen text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400">Blog</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium truncate max-w-xs">{post.title}</span>
          </div>

          <header className="space-y-4 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                GY
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{post.author}</div>
                <div className="text-[11px] text-amber-400">Especialista en Business Intelligence</div>
              </div>
            </div>
          </header>

          <div className="py-10 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            {post.content}
          </div>

          <div className="my-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Diagnóstico en 48 Horas
            </div>
            <h3 className="text-2xl font-bold text-white">
              ¿Quieres implementar un cuadro de mando a medida en tu empresa?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Analizamos tus datos actuales y te preparamos una propuesta con arquitectura recomendada y presupuesto cerrado.
            </p>
            <div className="pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
              >
                <span>Pedir Presupuesto / Consulta Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
            <Link href="/blog" className="text-slate-400 hover:text-amber-400 text-sm flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a todos los artículos</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
