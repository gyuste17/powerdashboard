import type { Metadata } from 'next';
import { SegundoOrdenClient } from '@/components/segundo-orden/SegundoOrdenClient';

export const metadata: Metadata = {
  title: 'SEGUNDO ORDEN | Pensar más allá del titular',
  description: 'Análisis empírico y de libre mercado sobre mitos económicos y políticos en España. Lo que se ve frente a lo que no se ve.',
  openGraph: {
    title: 'SEGUNDO ORDEN | Pensar más allá del titular',
    description: 'Análisis empírico y de incentivos sobre mitos de vivienda, empleo, sanidad e impuestos en España.',
    type: 'website',
  },
};

export default function SegundoOrdenPage() {
  return <SegundoOrdenClient />;
}
