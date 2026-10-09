import type { ArgumentItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Todos', icon: 'Sparkles' },
  { id: 'vivienda', label: 'Vivienda', icon: 'Home' },
  { id: 'laboral', label: 'Empleo & Trabajo', icon: 'Briefcase' },
  { id: 'sanidad', label: 'Sanidad', icon: 'HeartPulse' },
  { id: 'fiscalidad', label: 'Impuestos', icon: 'Receipt' },
  { id: 'precios', label: 'Precios & Mercado', icon: 'ShoppingBag' },
];

export const ARGUMENTS: ArgumentItem[] = [
  {
    id: 'control-alquiler',
    category: 'vivienda',
    categoryLabel: 'Vivienda',
    title: 'Topar el precio del alquiler soluciona la crisis habitacional',
    badge: 'Oferta y Demanda',
    impactVerdict: 'Destruye la oferta tradicional y expulsa a las familias de menores ingresos.',
    image: '/images/segundo-orden/housing.jpg',
    surfaceClaim: {
      title: 'El dogma simplista (Lo que se ve)',
      headline: '«Si los pisos están caros, pongamos un tope legal al precio para que la gente humilde pueda pagarlos.»',
      popularQuote: '«La vivienda es un derecho, no un negocio. Limitar los precios frena la especulación.»',
      whyItSoundsGood: 'A primera vista parece de sentido común: si una familia no puede pagar 1.000 € y la ley fija un máximo de 700 €, esa familia debería ahorrarse 300 € al mes al instante.',
      fallacy: 'Ignora la respuesta de la oferta. Asume que los propietarios seguirán alquilando exactamente el mismo piso, en las mismas condiciones, aunque la ley reduzca su rentabilidad o multiplique su riesgo.',
    },
    deepReality: {
      title: 'La mecánica de fondo (Lo que no se ve)',
      coreMechanism: 'El control de precios no crea ni un solo metro cuadrado nuevo de vivienda. Al limitar el precio por debajo del equilibrio de mercado, la demanda explota mientras la oferta se desploma.',
      explanation: [
        'Cuando el precio queda congelado artificialmente, los propietarios retiran sus inmuebles del mercado residencial habitual: los pasan a alquiler de temporada, por habitaciones, los ponen en venta o simplemente los dejan vacíos para evitar la inseguridad jurídica.',
        'Al haber menos pisos y el triple de personas compitiendo por cada uno, el propietario ya no compite por precio, sino por solvencia extrema: pide avales bancarios, nóminas blindadas, contratos indefinidos de altos directivos o meses por adelantado.',
        'La consecuencia perversa: los inquilinos jóvenes, autónomos, inmigrantes y familias vulnerables —precisamente a quienes se decía proteger— son descartados de inmediato en favor de los perfiles más adinerados.'
      ],
      unintendedConsequences: [
        'Desvío masivo hacia el alquiler de temporada y turístico (+56% en zonas tensionadas).',
        'Deterioro del parque inmobiliario: los propietarios dejan de invertir en reformas y mantenimiento.',
        'Aparición de cobros bajo manga (fianzas extraoficiales, traspasos ficticios) y mercado negro.'
      ],
      whoSuffersMost: 'Los jóvenes y las familias con rentas bajas, que ven esfumarse los pisos disponibles y son rechazados en cualquier proceso de selección.',
      lawPrinciple: {
        author: 'Assar Lindbeck (Socialdemócrata sueco y economista)',
        quote: '«Junto con el bombardeo militar, el control de alquileres es la forma más eficaz conocida para destruir una ciudad.»'
      }
    },
    empiricalEvidence: {
      headline: 'Evidencia en Cataluña (Ley 12/2023 y zonas tensionadas)',
      summary: 'El Banco de España y los portales inmobiliarios constatan el colapso de la oferta de alquiler habitual y la disparada del alquiler por habitaciones.',
      metrics: [
        { label: 'Oferta alquiler habitual en Barcelona', value: '-30.6%', trend: 'down', detail: 'Desde la declaración de zona tensionada', comparison: 'vs. periodo previo al tope de la Ley 12/2023', color: 'rose' },
        { label: 'Oferta alquiler de temporada / habitaciones', value: '+56.4%', trend: 'up', detail: 'Fuga hacia contratos excluidos de la ley', comparison: 'vs. oferta residencial tradicional', color: 'amber' },
        { label: 'Número de candidatos por piso anunciado', value: '115 pers.', trend: 'up', detail: 'Hipercompetencia por cada anuncio en 24h', comparison: 'vs. 28 candidatos en 2021 (+310% colapso)', color: 'rose' }
      ],
      chartData: {
        title: 'Evolución de Oferta vs Candidatos por Piso (Índice Base 100)',
        subtitle: 'Efecto del tope de precios sobre el inventario y la competencia entre inquilinos',
        chartType: 'area',
        dataKeys: [
          { key: 'ofertaHabitual', name: 'Oferta Alquiler Tradicional', color: '#f43f5e' },
          { key: 'candidatos', name: 'Candidatos promedio por anuncio', color: '#10b981' }
        ],
        data: [
          { name: '2021', ofertaHabitual: 100, candidatos: 28 },
          { name: '2022', ofertaHabitual: 88, candidatos: 42 },
          { name: '2023 (Ley)', ofertaHabitual: 74, candidatos: 68 },
          { name: '2024', ofertaHabitual: 62, candidatos: 98 },
          { name: '2025-26', ofertaHabitual: 51, candidatos: 115 },
        ]
      },
      verdict: 'El tope de precios reduce el precio teórico sobre el papel, pero elimina la posibilidad material de encontrar un piso en la realidad.'
    },
    sources: [
      { name: 'Banco de España', title: 'Informe trimestral de la economía española: Impacto de las medidas sobre el mercado del alquiler', type: 'Organismo Oficial' },
      { name: 'FEDEA', title: 'Análisis de los efectos del control de alquileres en Cataluña y Madrid', type: 'Informe Económico' },
      { name: 'NBER (Diamond, McQuade & Qian)', title: 'The Effects of Rent Control on Tenants and Housing Supply: Lessons from San Francisco', type: 'Estudio Académico' }
    ]
  },

  {
    id: 'coste-despido',
    category: 'laboral',
    categoryLabel: 'Empleo & Trabajo',
    title: 'Encarecer y dificultar el despido protege al trabajador',
    badge: 'Incentivos Laborales',
    impactVerdict: 'Genera un muro insalvable de entrada para jóvenes y cronifica el paro estructural.',
    image: '/images/segundo-orden/labor.jpg',
    surfaceClaim: {
      title: 'El dogma simplista (Lo que se ve)',
      headline: '«Si despedir cuesta 45 días por año y requiere autorización, las empresas no despedirán y el empleo será eterno y seguro.»',
      popularQuote: '«El despido barato solo sirve para que los empresarios exploten y reemplacen impunemente.»',
      whyItSoundsGood: 'Apela al miedo natural a perder el trabajo: a mayor penalización económica a quien despide, mayor sensación subjetiva de blindaje.',
      fallacy: 'Trata el despido como un acto aislado y olvida que la contratación es su reverso. Nadie asume un compromiso financiero indefinido si salir de él cuesta una fortuna en caso de crisis.'
    },
    deepReality: {
      title: 'La mecánica de fondo (Lo que no se ve)',
      coreMechanism: 'El coste de despido actúa exactamente como un arancel de entrada a la contratación. Las empresas se vuelven hiperprudentes antes de crear un puesto.',
      explanation: [
        'En una economía dinámica, las empresas compiten con incertidumbre (caída de pedidos, tecnología, inflación). Si contratar a un trabajador implica una hipoteca legal en caso de que las cosas vayan mal, la pyme preferirá no contratar, sobrecargar a la plantilla actual o automatizar.',
        'Esto crea una profunda dualidad: una casta de trabajadores "insiders" con altísima antigüedad superprotegidos, y una masa de "outsiders" (jóvenes, parados de larga duración) que no logran su primera oportunidad.',
        'Países como Dinamarca (modelo de *Flexiseguridad*) o Suiza tienen despidos muy baratos y rápidos, y precisamente por eso su desempleo juvenil ronda el 7-8% frente al 26-28% crónico de España: los empresarios contratan sin miedo porque saben que pueden reajustar si es necesario.'
      ],
      unintendedConsequences: [
        'Tasa de desempleo juvenil en España líder de la OCDE durante cuatro décadas.',
        'Uso masivo de figuras alternativas (falsos fijos discontinuos, rotación encubierta).',
        'Freno radical a que las microempresas crezcan y ganen tamaño y productividad.'
      ],
      whoSuffersMost: 'Los jóvenes menores de 30 años sin experiencia previa y las personas mayores de 50 años que pierden un empleo y se convierten en "contratables de alto riesgo".',
      lawPrinciple: {
        author: 'Milton Friedman (Premio Nobel de Economía)',
        quote: '«Uno de los grandes errores es juzgar las políticas por sus intenciones en lugar de por sus resultados.»'
      }
    },
    empiricalEvidence: {
      headline: 'Rigidez del Despido vs Paro Juvenil en Europa',
      summary: 'Los países de la UE con menor coste e indemnización por despido registran tasas de desempleo juvenil hasta 4 veces inferiores a las de España.',
      metrics: [
        { label: 'Paro juvenil en España (OCDE)', value: '26.8%', trend: 'up', detail: 'Líder histórico de la Unión Europea', comparison: 'vs. 14.4% media UE y 7.4% en Países Bajos', color: 'rose' },
        { label: 'Paro juvenil en Países Bajos', value: '7.4%', trend: 'neutral', detail: 'Mercado de alta flexibilidad y rápida contratación', comparison: 'vs. 26.8% en España (mercado de despido ágil)', color: 'emerald' },
        { label: 'Paro juvenil en Dinamarca (Flexisecurity)', value: '8.2%', trend: 'neutral', detail: 'Despido ágil combinado con recolocación activa', comparison: 'vs. modelo rígido español de 33 días/año', color: 'emerald' }
      ],
      chartData: {
        title: 'Tasa de Desempleo Juvenil (%) vs Flexibilidad de Contratación',
        subtitle: 'Comparativa Eurostat: a mayor coste de despido, mayor barrera para los jóvenes',
        chartType: 'bar',
        dataKeys: [
          { key: 'paroJuvenil', name: 'Tasa Paro Menores 25 años (%)', color: '#06b6d4' }
        ],
        data: [
          { name: 'Dinamarca', paroJuvenil: 8.2 },
          { name: 'Países Bajos', paroJuvenil: 7.4 },
          { name: 'Alemania', paroJuvenil: 5.9 },
          { name: 'Media UE', paroJuvenil: 14.4 },
          { name: 'España', paroJuvenil: 26.8 },
        ]
      },
      verdict: 'Hacer el despido prohibitivo no crea puestos de trabajo; los congela e impide que quienes están fuera puedan entrar.'
    },
    sources: [
      { name: 'Eurostat', title: 'Youth Unemployment Statistics across Member States (2024)', type: 'Organismo Oficial' },
      { name: 'OECD', title: 'Employment Protection Legislation Index (EPL)', type: 'Organismo Oficial' },
      { name: 'Banco de España', title: 'Dualidad laboral y barreras a la contratación en España', type: 'Informe Económico' }
    ]
  },

  {
    id: 'sanidad-privada',
    category: 'sanidad',
    categoryLabel: 'Sanidad',
    title: 'La sanidad privada busca ahorrar y por tanto cura menos y peor',
    badge: 'Competencia e Incentivos',
    impactVerdict: 'La competencia por reputación obliga a la privada a buscar excelencia, mientras desahoga al sistema público.',
    image: '/images/segundo-orden/health.jpg',
    surfaceClaim: {
      title: 'El dogma simplista (Lo que se ve)',
      headline: '«Como la empresa sanitaria privada quiere ganar dinero, regateará en pruebas, tratamientos y médicos para recortar gastos a costa del paciente.»',
      popularQuote: '«La salud no es un bien de consumo. El lucro en medicina es incompatible con la ética médica.»',
      whyItSoundsGood: 'Parece evidente que una entidad con ánimo de lucro intentará gastar lo mínimo posible en cada paciente para maximizar su margen neto.',
      fallacy: 'Ignora el mecanismo de mercado: un hospital privado no opera en régimen de monopolio cautivo. Si atiende mal, retrasa diagnósticos o sufre negligencias, pierde a sus pacientes, a las aseguradoras y su licencia.'
    },
    deepReality: {
      title: 'La mecánica de fondo (Lo que no se ve)',
      coreMechanism: 'En un mercado abierto, el beneficio no se obtiene racionando el servicio, sino atrayendo pacientes a través de rapidez, tecnología puntera y satisfacción.',
      explanation: [
        'En un hospital público, el presupuesto es anual y fijo: atender a un paciente adicional es un gasto que agota la partida presupuestaria, lo que genera incentivos no intencionados a las listas de espera como mecanismo de racionamiento temporal.',
        'En la sanidad privada, atender a un paciente adicional es un ingreso: el incentivo está alineado en invertir en resonancias magnéticas de última generación, quirófanos ágiles y médicos cualificados para que el usuario no elija a la clínica de enfrente.',
        'Además, los más de 12 millones de españoles que contratan un seguro privado o mutua pagan la sanidad pública dos veces (en sus impuestos) pero no consumen sus recursos, liberando miles de millones de euros y reduciendo la presión asistencial sobre los hospitales públicos.'
      ],
      unintendedConsequences: [
        'Si se penaliza o asfixia a la sanidad privada y mutualidades (ej. caso Muface), millones de pacientes son volcados de golpe al sistema público, colapsando las listas de espera.',
        'La falta de competencia elimina las referencias de eficiencia y gestión para los centros de titularidad estatal.',
        'Fuga de talento médico especializado a otros países por rigidez salarial y burocracia.'
      ],
      whoSuffersMost: 'Los usuarios del sistema público con rentas bajas, que sufren esperas de 120 días para una operación porque el sistema no da abasto sin el colchón privado.',
      lawPrinciple: {
        author: 'Adam Smith (La Riqueza de las Naciones)',
        quote: '«No es por la benevolencia del carnicero, del cervecero o del panadero que esperamos nuestra cena, sino por su preocupación por su propio interés.»'
      }
    },
    empiricalEvidence: {
      headline: 'Datos de Presión y Satisfacción Sanitaria en España',
      summary: 'El sector privado realiza el 30% de las intervenciones quirúrgicas del país con una valoración ciudadana superior al 80%.',
      metrics: [
        { label: 'Españoles con seguro privado / mutua', value: '12.4 M', trend: 'up', detail: 'Ahorro directo de recursos al SNS', comparison: 'vs. 8.7 M en 2014 (+42% de personas que desahogan la pública)', color: 'emerald' },
        { label: 'Tiempo medio de espera para cirugía en SNS', value: '121 días', trend: 'up', detail: 'Datos Ministerio de Sanidad (2024)', comparison: 'vs. menos de 30 días en centros de sanidad privada', color: 'rose' },
        { label: 'Ahorro estimado para las arcas públicas', value: '1.674 €/año', trend: 'neutral', detail: 'Por cada asegurado privado que no usa la pública', comparison: 'vs. gasto medio por paciente financiado con impuestos', color: 'cyan' }
      ],
      chartData: {
        title: 'Días de Espera Media para Cirugía: Sistema Público (SNS)',
        subtitle: 'Evolución del tiempo de espera oficial a pesar del incremento continuo de presupuesto',
        chartType: 'line',
        dataKeys: [
          { key: 'diasEspera', name: 'Días promedio de espera quirúrgica (SNS)', color: '#f59e0b' }
        ],
        data: [
          { name: '2019', diasEspera: 115 },
          { name: '2020', diasEspera: 155 },
          { name: '2021', diasEspera: 123 },
          { name: '2022', diasEspera: 120 },
          { name: '2023', diasEspera: 112 },
          { name: '2024', diasEspera: 121 },
        ]
      },
      verdict: 'La sanidad privada no compite recortando salud, sino ganando reputación y eficiencia; estrangularla colapsa al paciente público.'
    },
    sources: [
      { name: 'Ministerio de Sanidad', title: 'Sistema de Información sobre Listas de Espera en el SNS (SISLE)', type: 'Organismo Oficial' },
      { name: 'Instituto para el Desarrollo e Integración de la Sanidad (IDIS)', title: 'Sanidad privada, aportando valor: Análisis de eficiencia 2024', type: 'Informe Económico' },
      { name: 'OCDE', title: 'Health at a Glance: Waiting Times across Health Systems', type: 'Organismo Oficial' }
    ]
  },

  {
    id: 'salario-minimo',
    category: 'laboral',
    categoryLabel: 'Empleo & Trabajo',
    title: 'Subir el Salario Mínimo por ley siempre beneficia al trabajador',
    badge: 'Productividad Marginal',
    impactVerdict: 'Si la subida supera la productividad, destruye horas trabajadas y frena la inserción.',
    image: '/images/segundo-orden/smi.jpg',
    surfaceClaim: {
      title: 'El dogma simplista (Lo que se ve)',
      headline: '«Un decreto puede decretar la prosperidad: subamos el SMI a 1.500 € y los pobres tendrán más dinero para vivir.»',
      popularQuote: '«Nadie debería trabajar por menos de un sueldo digno. Si una empresa no lo paga, que cierre.»',
      whyItSoundsGood: '¿Quién puede oponerse a que los que menos ganan cobren más? Parece una transferencia directa de beneficios corporativos al bolsillo obrero.',
      fallacy: 'Confunde causa y efecto. El salario no es un capricho legislativo, sino el reflejo de la productividad marginal. Una ley puede prohibir pagar menos de X, pero no puede obligar a un empresario a contratar si el valor producido es inferior a X.'
    },
    deepReality: {
      title: 'La mecánica de fondo (Lo que no se ve)',
      coreMechanism: 'El SMI no garantiza un sueldo: fija un precio mínimo legal por debajo del cual queda prohibido trabajar legalmente.',
      explanation: [
        'Quienes ya eran productivos mantienen su empleo y reciben la subida (lo que se ve). Pero en sectores con escaso margen (campo, limpieza, comercio de barrio, hostelería rural) el coste laboral total no es solo el neto: incluye la cuota patronal a la Seguridad Social (más de un 30% adicional).',
        'El Banco de España demostró empíricamente que la fuerte subida del SMI en España frenó la creación de entre 100.000 y 180.000 empleos, principalmente recortando horas semanales (margen intensivo) y destruyendo puestos juveniles.',
        'Decir «si no puede pagar 1.500 €, que cierre» equivale a decir que las personas cuya productividad actual no alcance esa cifra no tienen derecho a trabajar, aprender un oficio ni empezar su carrera laboral.'
      ],
      unintendedConsequences: [
        'Reducción encubierta de jornadas laborales (contratos de 25-30 horas para compensar).',
        'Expulsión de trabajadores sin cualificación hacia la economía sumergida sin protección.',
        'Aceleración de sustitución de puestos por tótems de autoservicio y automatización en pymes.'
      ],
      whoSuffersMost: 'Los jóvenes sin formación reglada y los trabajadores del sector primario y servicios en regiones con menor renta per cápita (Extremadura, Andalucía).',
      lawPrinciple: {
        author: 'Thomas Sowell (Economista y filósofo social)',
        quote: '«El verdadero salario mínimo es siempre cero: el salario que recibe un trabajador cuando pierde su empleo tras una subida decretada.»'
      }
    },
    empiricalEvidence: {
      headline: 'Estudios del Banco de España e Isema sobre el SMI',
      summary: 'El impacto negativo no suele verse en despidos masivos inmediatos, sino en puestos no creados y reducción de horas efectivas.',
      metrics: [
        { label: 'Empleos no creados estimados (Banco de España)', value: '100k - 180k', trend: 'down', detail: 'Impacto acumulado en colectivos vulnerables', comparison: 'vs. escenario de creación de empleo sin alzas forzadas', color: 'rose' },
        { label: 'Tasa paro juvenil en regiones de menor renta', value: '> 35%', trend: 'up', detail: 'Donde el SMI supone >75% del salario medio', comparison: 'vs. 18% en regiones industriales donde el SMI no asfixia', color: 'rose' },
        { label: 'Coste empresa real por SMI (con cotizaciones)', value: '1.630 €/mes', trend: 'up', detail: 'Aunque el neto del trabajador ronde los 1.180 €', comparison: 'vs. 1.184 € nómina bruta (+32.5% cuota patronal a la SS)', color: 'amber' }
      ],
      chartData: {
        title: 'Evolución del SMI Bruto vs Coste Laboral Total Empresa (€/mes)',
        subtitle: 'La brecha fiscal oculta: lo que cuesta contratar al escalón más bajo',
        chartType: 'bar',
        dataKeys: [
          { key: 'salarioBruto', name: 'SMI Bruto Oficial', color: '#10b981' },
          { key: 'costeEmpresa', name: 'Coste Real Empresa (+Seg. Social)', color: '#f43f5e' }
        ],
        data: [
          { name: '2018', salarioBruto: 735, costeEmpresa: 970 },
          { name: '2020', salarioBruto: 950, costeEmpresa: 1254 },
          { name: '2022', salarioBruto: 1000, costeEmpresa: 1320 },
          { name: '2024', salarioBruto: 1134, costeEmpresa: 1510 },
          { name: '2025-26', salarioBruto: 1184, costeEmpresa: 1630 },
        ]
      },
      verdict: 'La prosperidad de los salarios nace del aumento de inversión y productividad, nunca de la firma de un decreto oficial en el BOE.'
    },
    sources: [
      { name: 'Banco de España', title: 'Documento Ocasional 2113: Los efectos del salario mínimo interprofesional en el empleo: evidencia del caso español', type: 'Organismo Oficial' },
      { name: 'BBVA Research', title: 'Impacto distributivo y laboral del incremento del SMI', type: 'Informe Económico' },
      { name: 'National Bureau of Economic Research (NBER)', title: 'Myth and Measurement: 25 Years of Minimum Wage Research (Neumark & Shirley)', type: 'Estudio Académico' }
    ]
  },

  {
    id: 'impuesto-ricos',
    category: 'fiscalidad',
    categoryLabel: 'Impuestos',
    title: 'Gravar a las grandes fortunas genera recaudación para repartir',
    badge: 'Movilidad de Capitales',
    impactVerdict: 'Provoca fuga de patrimonios, reduce la inversión agregada y acaba recaudando menos.',
    image: '/images/segundo-orden/taxes.jpg',
    surfaceClaim: {
      title: 'El dogma simplista (Lo que se ve)',
      headline: '«Los ricos acumulan demasiado dinero. Si les ponemos un impuesto a sus patrimonios, financiaremos los servicios de todos.»',
      popularQuote: '«Justicia fiscal: que pague más quien más tiene para que nadie se quede atrás.»',
      whyItSoundsGood: 'Genera un consenso emocional inmediato: nadie siente simpatía por multimillonarios, y parece dinero gratis para el Estado sin coste para el ciudadano de a pie.',
      fallacy: 'Supone que el capital es estático e inmóvil. En un mundo globalizado y digital, las personas con alto patrimonio y las empresas son las que mayor facilidad tienen para trasladar su residencia fiscal.'
    },
    deepReality: {
      title: 'La mecánica de fondo (Lo que no se ve)',
      coreMechanism: 'El capital es el factor de producción más móvil. Cuando el tipo marginal castiga la acumulación de inversión, el capital huye a jurisdicciones competitivas.',
      explanation: [
        'España es de los poquísimos países de Europa (junto con Noruega y Suiza, que lo tienen a tipos testimoniales) que mantiene un Impuesto sobre el Patrimonio y Grandes Fortunas. Francia lo eliminó en 2017 porque estimó que provocó la fuga de más de 60.000 millonarios y un coste neto negativo para el fisco.',
        'Cuando un inversor traslada su residencia a Portugal, Italia, Andorra o Suiza, el Estado no solo pierde el impuesto al patrimonio: pierde su IRPF del 45-50%, su IVA, sus inversiones directas en empresas locales y los puestos de trabajo que financiaba.',
        'Por eso, la inmensa mayoría de los países socialdemócratas nórdicos (Suecia, Dinamarca, Finlandia) abolieron este impuesto hace más de 15 años: entendieron que para financiar un estado de bienestar necesitas que el capital se quede e invierta, no que huya.'
      ],
      unintendedConsequences: [
        'Deslocalización de altos patrimonios y talentos digitales de alto valor añadido.',
        'Destrucción de incentivos para crear empresas que superen cierto tamaño en territorio nacional.',
        'Pérdida neta de recaudación en IRPF e IVA muy superior a lo recaudado por el tributo a la riqueza.'
      ],
      whoSuffersMost: 'La clase media y trabajadora, sobre cuyos sueldos y consumo acaba recayendo la presión fiscal al evaporarse las grandes bases imponibles.',
      lawPrinciple: {
        author: 'Arthur Laffer (Economista)',
        quote: '«Existen siempre dos tipos impositivos que producen exactamente la misma recaudación: uno bajo y otro prohibitivo.»'
      }
    },
    empiricalEvidence: {
      headline: 'El experimento europeo con el Impuesto al Patrimonio',
      summary: 'De los 12 países de la OCDE que gravaban el patrimonio en 1990, casi todos lo eliminaron tras constatar pérdidas fiscales netas.',
      metrics: [
        { label: 'Países de la OCDE con impuesto al patrimonio (1990)', value: '12 países', trend: 'neutral', detail: 'Suecia, Francia, Alemania, Austria, etc.', comparison: 'vs. la actualidad (la mayoría lo abolió por fuga de capital)', color: 'emerald' },
        { label: 'Países de la UE que lo mantienen hoy', value: '1 país', trend: 'down', detail: 'España (única excepción de la Unión Europea)', comparison: 'vs. 26 socios comunitarios que lo suprimieron (solo España)', color: 'rose' },
        { label: 'Millonarios fugados de Francia antes de suprimirlo', value: '> 60.000', trend: 'up', detail: 'Informe del Senado Francés (2017)', comparison: 'vs. recaudación neta (el fisco francés perdió el doble en IRPF e IVA)', color: 'amber' }
      ],
      chartData: {
        title: 'Países europeos con Impuesto sobre el Patrimonio Neto',
        subtitle: 'Abandono progresivo en Europa frente a la persistencia en España',
        chartType: 'bar',
        dataKeys: [
          { key: 'paises', name: 'Nº Países UE con Impuesto al Patrimonio', color: '#f43f5e' }
        ],
        data: [
          { name: '1995', paises: 10 },
          { name: '2005', paises: 5 },
          { name: '2015', paises: 2 },
          { name: '2024-26', paises: 1 },
        ]
      },
      verdict: 'Gravar el capital ahuyenta la base que sostiene la inversión real. Los países más ricos del mundo prefieren que el capital trabaje a que emigre.'
    },
    sources: [
      { name: 'Tax Foundation', title: 'Wealth Taxes in Europe: Why most countries abandoned them', type: 'Informe Económico' },
      { name: 'OECD', title: 'The Role and Design of Net Wealth Taxes in the OECD', type: 'Organismo Oficial' },
      { name: 'Fedea', title: 'Efectos económicos y recaudatorios de la imposición sobre la riqueza en España', type: 'Estudio Académico' }
    ]
  },

  {
    id: 'margenes-supermercados',
    category: 'precios',
    categoryLabel: 'Precios & Mercado',
    title: 'La inflación en los alimentos se debe a la avaricia de los supermercados',
    badge: 'Cadena de Valor',
    impactVerdict: 'Los márgenes de los supermercados rondan el 2-3%; culparlos oculta la inflación monetaria.',
    image: '/images/segundo-orden/market.jpg',
    surfaceClaim: {
      title: 'El dogma simplista (Lo que se ve)',
      headline: '«El aceite y los huevos han subido porque los grandes supermercados se están forrando a costa del pueblo.»',
      popularQuote: '«Especulan con la comida de la gente. El Estado debería crear un supermercado público o fijar precios máximos a la cesta básica.»',
      whyItSoundsGood: 'Cuando vas a la caja del súper y pagas un 30% más que hace dos años, la cara visible es la del supermercado. Es intuitivo e inmediato canalizar la rabia hacia la marca que te cobra.',
      fallacy: 'Confunde los ingresos totales brutos (facturación) con el margen neto de beneficio, e ignora el coste disparado de la energía, abonos, sequía y la emisión masiva de moneda por los bancos centrales.'
    },
    deepReality: {
      title: 'La mecánica de fondo (Lo que no se ve)',
      coreMechanism: 'La distribución alimentaria en España es uno de los mercados más ferozmente competitivos del continente (Mercadona, Lidl, Carrefour, Día, Aldi, Consum).',
      explanation: [
        'Los márgenes netos de beneficio de los supermercados en España se sitúan entre el 2% y el 3,5% de las ventas. Es decir: de cada 100 € que pagas en el supermercado, entre 96,5 y 98 € se van en pagar a proveedores, transportar la mercancía, luz para las cámaras frigoríficas y sueldos de cajeros y reponedores.',
        'Si un supermercado intentara especular o subir precios arbitrariamente, el consumidor cruza la calle y compra en el Lidl o Carrefour de al lado en 5 minutos.',
        'La verdadera causa de la inflación alimentaria fue una combinación de shock de costes de insumos (gasolina, fertilizantes por la guerra, sequía histórica en el olivar) sumado a la inyección masiva de masa monetaria por parte del Banco Central Europeo durante la pandemia.'
      ],
      unintendedConsequences: [
        'Topar la cesta de la compra obligaría a los distribuidores a vender a pérdidas, lo que provocaría desabastecimiento inmediato de productos básicos.',
        'La propuesta de un "supermercado público" crearía un pozo sin fondo de déficit financiado con los impuestos de todos los ciudadanos.',
        'Criminalizar al eslabón más eficiente de la cadena desincentiva la inversión logística que abarata costes a largo plazo.'
      ],
      whoSuffersMost: 'Los consumidores en caso de control de precios (desabastecimiento y cartillas de racionamiento como en cualquier economía intervenida).',
      lawPrinciple: {
        author: 'Milton Friedman',
        quote: '«La inflación es siempre y en todo lugar un fenómeno monetario, en el sentido de que solo es producida por un incremento más rápido de la cantidad de dinero que de la producción.»'
      }
    },
    empiricalEvidence: {
      headline: 'Datos Oficiales del Banco de España y CNMC',
      summary: 'El análisis de la cadena agroalimentaria confirma que los supermercados no ensancharon sus márgenes durante la crisis inflacionaria.',
      metrics: [
        { label: 'Margen neto medio de la distribución alimentaria', value: '2.5% - 3.1%', trend: 'neutral', detail: 'De cada 100€ vendidos, solo ~2.7€ son beneficio', comparison: 'vs. 15% - 25% de sectores industriales o tecnológicos', color: 'emerald' },
        { label: 'Subida media de costes de insumos en origen', value: '+42%', trend: 'up', detail: 'Electricidad, fertilizantes, piensos y carburante', comparison: 'vs. precios agrícolas previos al shock inflacionario de 2021', color: 'rose' },
        { label: 'Puestos de trabajo directos del sector', value: '> 350.000', trend: 'neutral', detail: 'Una de las mayores fuentes de empleo privado', comparison: 'vs. empleo público deficitario (empleo productivo de mercado)', color: 'cyan' }
      ],
      chartData: {
        title: 'Desglose Real de 100 € de Compra en el Supermercado',
        subtitle: 'Dónde va tu dinero: costes de aprovisionamiento vs beneficio neto empresarial',
        chartType: 'bar',
        dataKeys: [
          { key: 'euros', name: 'Distribución en Euros (€)', color: '#06b6d4' }
        ],
        data: [
          { name: 'Coste de Producto (Origen)', euros: 72.5 },
          { name: 'Personal y Salarios', euros: 14.8 },
          { name: 'Energía y Logística', euros: 7.2 },
          { name: 'Impuestos y Tasas', euros: 2.8 },
          { name: 'Beneficio Neto', euros: 2.7 },
        ]
      },
      verdict: 'Los supermercados no crearon la inflación; fueron el cortafuegos logístico que evitó que el shock de costes fuera aún más demoledor.'
    },
    sources: [
      { name: 'Banco de España', title: 'Boletín Económico: La evolución de los márgenes empresariales en la distribución alimentaria (2023-2024)', type: 'Organismo Oficial' },
      { name: 'CNMC', title: 'Estudio sobre la formación de precios y competencia en el sector de la distribución minorista', type: 'Organismo Oficial' },
      { name: 'Observatorio de Precios de Alimentos', title: 'Ministerio de Agricultura, Pesca y Alimentación', type: 'Organismo Oficial' }
    ]
  }
];
