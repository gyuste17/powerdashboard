# HANDOFF

## 2026-10-11 · Claude · rama `claude-redesign`

**Hecho:** rediseño completo de la home (`src/app/page.tsx` + `src/components/home/`), según `CLAUDE_TASK.md`.
- Nuevo `src/components/ui/BrowserFrame.tsx`: ventana tipo macOS (3 puntos, barra de dirección, sombras en capas) para mostrar los dashboards.
- Nuevo `SectionHeader.tsx` (cabecera compartida: eyebrow + h2 + descripción) para que todas las secciones tengan el mismo ritmo.
- Flujo: Hero (MAT.png enmarcado) → `TechLogos` (banda estática: Power BI, Looker Studio, Tableau, Fabric, SQL) → `ChaosToControl` (antes/después + 3 cifras) → `ShowcaseSection` (galería por pestañas con los 6 dashboards de `siteData.ts`) → `HowItWorks` (3 pasos + tarjetas de servicios con `id="servicios"`) → Fundador → Precios → FAQ → CTA.
- `ShowcaseSection` acepta `showPortfolioLink` (en `/portfolio` se pasa `false`).
- `npm run build` compila sin errores ni avisos.

**Decisiones:**
- Se quitan de la home `InteractiveDashboardDemo`, `RoiCalculator` y `ServiceMatrix` (sencillez). Los archivos siguen existiendo; `RoiCalculator` se usa en `/precios`. `InteractiveDashboardDemo` y `ServiceMatrix` quedan sin uso.
- El ancla `/#servicios` (breadcrumbs de las páginas de servicios) apunta ahora al bloque de servicios dentro de `HowItWorks`.
- Marquee de logos sustituido por una banda estática y sobria (pedido explícito de la tarea).

**Pendiente:**
- Revisión visual en navegador (claro/oscuro, móvil) — buena tarea para Antigravity.
- Decidir si borrar `InteractiveDashboardDemo.tsx` y `ServiceMatrix.tsx`.
- No existe `AGENTS.md`; conviene crearlo.
