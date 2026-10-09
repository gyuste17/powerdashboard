export type CategoryId = 'all' | 'vivienda' | 'laboral' | 'sanidad' | 'fiscalidad' | 'pensiones' | 'precios';

export interface Category {
  id: CategoryId;
  label: string;
  icon: string;
  count?: number;
}

export interface DataPoint {
  label: string;
  value: string;
  detail?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: string;
}

export interface ChartItem {
  name: string;
  [key: string]: string | number;
}

export interface ArgumentSource {
  name: string;
  title: string;
  url?: string;
  type: 'Organismo Oficial' | 'Estudio Académico' | 'Informe Económico' | 'Dato Estadístico';
}

export interface ArgumentItem {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  title: string;
  badge: string;
  impactVerdict: string;
  
  // Nivel 1: Lo que se ve
  surfaceClaim: {
    title: string;
    headline: string;
    whyItSoundsGood: string;
    fallacy: string;
    popularQuote: string;
  };

  // Nivel 2: Lo que no se ve
  deepReality: {
    title: string;
    coreMechanism: string;
    explanation: string[];
    unintendedConsequences: string[];
    whoSuffersMost: string;
    lawPrinciple: {
      author: string;
      quote: string;
    };
  };

  // Nivel 3: La evidencia empírica
  empiricalEvidence: {
    headline: string;
    summary: string;
    metrics: DataPoint[];
    chartData: {
      title: string;
      subtitle: string;
      data: ChartItem[];
      dataKeys: { key: string; name: string; color: string }[];
      chartType: 'bar' | 'line' | 'area';
    };
    verdict: string;
  };

  // Fuentes y papers
  sources: ArgumentSource[];
}
