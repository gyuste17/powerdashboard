export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  iconName: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: string[];
  deliverables: string[];
  tools: string[];
  idealFor: string[];
  expectedRoi: string;
}

export interface DashboardExample {
  id: string;
  title: string;
  category: 'Ventas' | 'Finanzas' | 'Operaciones' | 'Marketing' | 'RRHH';
  tool: 'Power BI' | 'Looker Studio' | 'Tableau';
  description: string;
  image: string;
  kpis: string[];
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SITE_CONFIG = {
  name: 'PowerDashboard.es',
  title: 'PowerDashboard | Consultoría Power BI y Business Intelligence en España',
  description: 'Especialista en Business Intelligence, Power BI y Looker Studio. Convertimos datos caóticos y hojas de Excel en cuadros de mando interactivos que multiplican tu rentabilidad.',
  url: 'https://powerdashboard.es',
  founder: {
    name: 'Guillermo Yuste',
    role: 'Consultor & Especialista en Business Intelligence',
    experienceYears: '+7 años',
    linkedin: 'https://www.linkedin.com/in/guillermoyuste/',
    email: 'hola@powerdashboard.es',
    phone: '+34 609 269 480',
    phoneClean: '34609269480',
    location: 'Madrid, España (Servicio nacional e internacional)',
  },
  gtmId: 'GTM-NGDKXLS',
  gaId: 'GT-5M35F6G',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'power-bi',
    slug: 'consultoria-power-bi',
    title: 'Consultoría Power BI & Microsoft Fabric',
    shortDesc: 'Diseño, modelado DAX y despliegue de cuadros de mando ejecutivos en el ecosistema Microsoft.',
    badge: 'Herramienta Líder Mundial',
    iconName: 'BarChart3',
    heroHeadline: 'Cuadros de Mando en Power BI: Decisiones en Tiempo Real con Datos 100% Fiables',
    heroSubheadline: 'Elimina reportes obsoletos. Centraliza ERP, CRM, contabilidad y almacén en un único panel interactivo bajo la seguridad del entorno Microsoft.',
    painPoints: [
      'Horas interminables copiando y pegando datos en Excel cada lunes o fin de mes.',
      'Discrepancia entre las cifras que muestra el departamento comercial y administración.',
      'Falta de visibilidad sobre los márgenes reales por producto, cliente o canal.',
      'Lentitud crítica a la hora de detectar desviaciones presupuestarias.',
    ],
    deliverables: [
      'Conexión segura y automatizada a bases de datos (SQL, PostgreSQL), ERP (SAP, Navision, Holded) y APIs.',
      'Modelo de datos relacional robusto (Esquema en Estrella) optimizado para grandes volúmenes.',
      'Medidas DAX complejas (Time Intelligence, YoY, márgenes dinámicos, cohorts).',
      'Informes con diseño UX/UI profesional, responsive para móvil y ordenador.',
      'Gobernanza de permisos RLS (Row-Level Security) para que cada usuario solo vea sus datos.',
      'Capacitación y traspaso del conocimiento a tu equipo.',
    ],
    tools: ['Power BI Desktop', 'Power BI Service', 'Power Query (M)', 'DAX', 'Microsoft Fabric', 'SQL'],
    idealFor: ['Directores Generales', 'CFOs & Responsables de Finanzas', 'Directores de Operaciones', 'Empresas con +1M€ de facturación'],
    expectedRoi: 'Ahorro medio de 15 a 30 horas mensuales por departamento y detección de fugas de margen del 4-12%.',
  },
  {
    id: 'looker-studio',
    slug: 'dashboards-looker-studio',
    title: 'Dashboards en Google Looker Studio',
    shortDesc: 'Informes ágiles y visuales para Marketing, eCommerce, Google Ads, Meta y Analítica Web.',
    badge: 'Ideal Marketing & eCommerce',
    iconName: 'PieChart',
    heroHeadline: 'Visualización Ágil y Conexión Directa con el Ecosistema Digital',
    heroSubheadline: 'Acceso instantáneo a tus métricas de adquisición, conversión, ROAS y facturación eCommerce sin costes de licencias caras.',
    painPoints: [
      'Dificultad para cruzar datos de Google Analytics 4, Shopify/WooCommerce y plataformas de Ads.',
      'Clientes o directivos que no entienden los informes complejos de las agencias.',
      'Imposibilidad de ver el ROAS real blended y el CAC en tiempo real.',
    ],
    deliverables: [
      'Conexión nativa con GA4, Google Search Console, Google Ads, Meta Ads y BigQuery.',
      'Filtros dinámicos por fecha, campaña, país, producto y canal de atribución.',
      'Diseño 100% personalizado con los colores y branding corporativo de tu marca.',
      'Alertas automatizadas y programación de envíos por correo a directivos.',
    ],
    tools: ['Google Looker Studio', 'GA4', 'BigQuery', 'Google Sheets', 'Supermetrics / Porter'],
    idealFor: ['eCommerce Managers', 'Directores de Marketing (CMO)', 'Agencias de Marketing', 'Startups'],
    expectedRoi: 'Visibilidad total del retorno publicitario y reducción a 0 minutos del tiempo de reporting semanal.',
  },
  {
    id: 'migracion-excel',
    slug: 'migracion-excel-a-power-bi',
    title: 'Migración y Automatización de Excel a BI',
    shortDesc: 'Modernizamos tus hojas de cálculo en sistemas analíticos automáticos y libres de fallos humanos.',
    badge: 'Máximo Ahorro de Tiempo',
    iconName: 'RefreshCw',
    heroHeadline: 'Despídete del infierno de los Excel con 50 pestañas y macros que se rompen',
    heroSubheadline: 'Auditamos tus hojas de cálculo actuales y las transformamos en un flujo automatizado que se actualiza solo con un clic o de forma programada.',
    painPoints: [
      'Archivos "Informe_Final_v3_DEFINITIVO.xlsx" que pesan cientos de megas y colapsan el ordenador.',
      'Una sola celda con fórmula rota arruina todo el balance del mes.',
      'Dependencia absoluta de una única persona que "sabe cómo funciona el Excel mágico".',
    ],
    deliverables: [
      'Auditoría y limpieza de las fórmulas y fuentes de datos actuales.',
      'Automatización de la ingesta de datos con Power Query / Python.',
      'Replicación exacta y mejora de las métricas clave en un panel visual e interactivo.',
      'Documentación técnica y formación para que tu empresa sea 100% autónoma.',
    ],
    tools: ['Power Query', 'Power BI', 'Python', 'Excel Avanzado', 'VBA Migration'],
    idealFor: ['PYMEs', 'Departamentos de Control de Gestión', 'Administración y Contabilidad'],
    expectedRoi: 'Eliminación del 95% de los errores humanos y actualización en minutos en lugar de días.',
  },
];

export const DASHBOARD_EXAMPLES: DashboardExample[] = [
  {
    id: 'pbi-ventas',
    title: 'Cuadro de Mando Comercial & Pipeline de Ventas',
    category: 'Ventas',
    tool: 'Power BI',
    description: 'Control integral del embudo comercial, conversión por comercial, ticket medio y proyección de cierre mensual.',
    image: '/images/dashboards/MAT.png',
    kpis: ['Facturación Acumulada', 'Win Rate %', 'Ticket Medio', 'Margen Bruto por Comercial'],
    highlight: '+22% de precisión en forecasts comerciales',
  },
  {
    id: 'pbi-financiero',
    title: 'Dashboard Financiero P&L y Control Presupuestario',
    category: 'Finanzas',
    tool: 'Power BI',
    description: 'Cuenta de pérdidas y ganancias dinámica, análisis de variaciones presupuestarias vs real y control de Cash Flow.',
    image: '/images/dashboards/Contabilidad.png',
    kpis: ['EBITDA', 'Margen Operativo', 'Cash Runway', 'Desviación vs Budget'],
    highlight: 'Cierre mensual en 1 día en vez de 12 días',
  },
  {
    id: 'looker-ecommerce',
    title: 'Panel Ejecutivo eCommerce & Attribution ROAS',
    category: 'Marketing',
    tool: 'Looker Studio',
    description: 'Integración en tiempo real de Shopify, GA4, Meta Ads y Google Ads para cálculo de CAC y ROAS Blended.',
    image: '/images/dashboards/Informe ventas.png',
    kpis: ['Blended ROAS', 'CAC por Canal', 'LTV Clientes', 'Ratio Devoluciones'],
    highlight: 'Optimización de inversión publicitaria en +18%',
  },
  {
    id: 'tableau-asistencia',
    title: 'Dashboard de Operaciones y Métricas de Rendimiento',
    category: 'Operaciones',
    tool: 'Tableau',
    description: 'Visualización avanzada de capacidades operativas, tiempos de entrega, cuellos de botella e incidencias.',
    image: '/images/dashboards/Asistencia.png',
    kpis: ['Tasa de Cumplimiento (OTIF)', 'Lead Time Medio', 'OEE', 'Coste Unitario'],
    highlight: 'Detección inmediata de cuellos de botella',
  },
  {
    id: 'pbi-rrhh',
    title: 'Cuadro de Mando de Personas & Absentismo',
    category: 'RRHH',
    tool: 'Power BI',
    description: 'Métricas de rotación, masa salarial, absentismo laboral y cumplimiento de objetivos por departamento.',
    image: '/images/dashboards/Gastos Viaje.png',
    kpis: ['Coste por Empleado', 'Ratio de Absentismo', 'Tasa de Rotación', 'eNPS'],
    highlight: 'Auditoría ágil de costes de personal',
  },
  {
    id: 'pbi-hospitality',
    title: 'Dashboard de Ocupación, Yield & Pricing Dinámico',
    category: 'Operaciones',
    tool: 'Power BI',
    description: 'Monitorización en tiempo real de ratios de ocupación, RevPAR, elasticidad de demanda y benchmarking competitivo.',
    image: '/images/dashboards/Airbnb.png',
    kpis: ['RevPAR', 'ADR (Tarifa Media)', 'Ocupación %', 'Margen Neto'],
    highlight: '+14% de optimización en margen medio por reserva',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Dashboard Inicial',
    subtitle: 'Ideal para PYMEs y autónomos que quieren empezar a ver sus métricas claras.',
    price: '490€',
    period: 'pago único',
    popular: false,
    features: [
      '1 Fuente de datos principal (Excel, Sheets, Google Analytics, CRM)',
      '1 Cuadro de mando interactivo a medida (hasta 3 vistas/pestañas)',
      'Diseño UX/UI responsive (ordenador y móvil)',
      'Modelado de datos y KPIs principales',
      'Configuración de actualización automática',
      'Sesión de entrega y formación grabada (1h)',
      '15 días de soporte y ajustes menores post-entrega',
    ],
    ctaText: 'Solicitar Dashboard Inicial',
    ctaLink: '/contacto?plan=starter',
  },
  {
    id: 'pro',
    name: 'Business Intelligence Pro',
    subtitle: 'Para empresas que necesitan cruzar múltiples fuentes y tomar decisiones estratégicas.',
    price: '1.250€',
    period: 'pago único',
    popular: true,
    features: [
      'Hasta 4 Fuentes de datos (ERP + CRM + Facturación + Web/Marketing)',
      'Cuadro de mando ejecutivo integral (hasta 6-8 páginas)',
      'Modelado relacional avanzado en Power BI / Fabric (DAX complejo)',
      'Alertas automáticas por correo de anomalías o caídas de margen',
      'Permisos por roles (RLS) para directores vs comerciales',
      'Optimización de tiempos de carga y gobernanza de datos',
      '2 Sesiones de formación al equipo de dirección y mandos intermedios',
      '30 días de garantía, soporte prioritario y refinamiento',
    ],
    ctaText: 'Empezar Proyecto Pro',
    ctaLink: '/contacto?plan=pro',
  },
  {
    id: 'enterprise',
    name: 'Partner BI Continuo',
    subtitle: 'Tu departamento de Business Intelligence externo, sin costes de contratación fija.',
    price: '790€',
    period: '/ mes',
    popular: false,
    features: [
      'Bolsa mensual de horas para desarrollo de nuevos informes y mejoras continuas',
      'Mantenimiento proactivo de pipelines de datos y conectores',
      'Reunión mensual de análisis de negocio y asesoramiento estratégico',
      'Soporte técnico preferente en menos de 24h laborables',
      'Sin permanencia mínima, cancela cuando quieras',
    ],
    ctaText: 'Hablar con Guillermo',
    ctaLink: '/contacto?plan=partner',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'General',
    question: '¿Por qué contratar a un especialista freelance en vez de una gran consultora?',
    answer: 'Conmigo tratas directamente con el profesional senior que programa tu modelo y diseña tus pantallas. No hay intermediarios, comerciales agresivos ni juniors a los que delegan tu proyecto. Obtienes mayor agilidad, precios 3 a 5 veces más competitivos y un compromiso total con tus resultados.',
  },
  {
    category: 'Herramientas',
    question: '¿Qué herramienta me conviene más: Power BI, Looker Studio o Tableau?',
    answer: 'Depende de tus fuentes y objetivos. Power BI es la opción reina para empresas con ERPs, entornos Microsoft y modelos de datos complejos. Looker Studio es ideal si tu foco es marketing digital y eCommerce por su coste cero de licencias y rapidez. Tableau destaca en visualizaciones científicas y grandes corporaciones. En la llamada inicial te asesoro con total honestidad sobre la opción óptima para tu caso.',
  },
  {
    category: 'Proceso',
    question: '¿Cuánto tiempo se tarda en tener el dashboard funcionando?',
    answer: 'Para un Dashboard Inicial el plazo habitual es de 5 a 10 días laborables tras recibir el acceso a los datos. Proyectos más complejos con múltiples integraciones suelen entregarse en 2 a 3 semanas con fases intermedias de validación.',
  },
  {
    category: 'Seguridad',
    question: '¿Mis datos confidenciales están seguros?',
    answer: 'Totalmente. Firmamos un Acuerdo de Confidencialidad (NDA) antes de iniciar cualquier trabajo. Tus datos se procesan en tus propios servidores, tenents de Microsoft 365 o cuentas corporativas; nunca almacenamos tus bases de datos en servidores externos.',
  },
  {
    category: 'Mantenimiento',
    question: '¿Qué pasa una vez entregado el cuadro de mando?',
    answer: 'Los dashboards quedan configurados con actualización automática programada. Además, entrego una guía y formación en vídeo para que tu equipo sea autónomo, junto con un periodo de garantía de soporte gratuito para solventar cualquier duda.',
  },
];
