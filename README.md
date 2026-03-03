# esabic-impact-evaluation

Sitio web estatico del proyecto de investigacion sobre el impacto del programa ESA-BIC, financiado con la referencia `FCT-24-19933`.

Version en produccion: `https://esabic-impact-evaluation.unileon.es`

## Estado actual

La web esta planteada como una portada de una sola pagina con estetica institucional inspirada en ESA. El contenido principal vive en [index.html](/Users/enriqueacebo/Library/CloudStorage/GoogleDrive-eacem@unileon.es/Mi%20unidad/WEB/esabic-impact-evaluation/index.html) y la pagina auxiliar activa es [404.html](/Users/enriqueacebo/Library/CloudStorage/GoogleDrive-eacem@unileon.es/Mi%20unidad/WEB/esabic-impact-evaluation/404.html).

La home incluye estas secciones:

- `Inicio`
- `Objetivo`
- `Fases`
- `Resultados`
- `Equipo`

## Stack

- HTML estatico
- CSS vanilla en `assets/css/site.css`
- JavaScript vanilla en `assets/js/site.js`
- Hosting en GitHub Pages

No hay bundler, framework ni paso de build.

## Estructura

```text
index.html
404.html
assets/
  css/
    site.css
  js/
    site.js
  images/
    logo.png
    logo-fecyt.svg
    logo-ule.png
    logo-ice.png
    logo-jcyl.jpg
robots.txt
sitemap.xml
CNAME
```

## Diseno

- Fondo principal oscuro `#0b1f27`
- Header azul oscuro ESA `#003247`
- Acentos de marca:
  - rojo `#ed1b2f`
  - azul `#009bdb`
  - amarillo `#fbab18`
  - verde `#00ae9d`
- Hero editorial con logo lateral en escritorio y sin logo en movil
- Tipografia cargada con Inter, pero jerarquia principal resuelta visualmente con Arial/Helvetica

## Contenido

- `Objetivo y alcance` presenta el objetivo general y los objetivos especificos del proyecto
- `Fases` resume la secuencia analitica del trabajo
- `Resultados` integra buscador y listado de produccion cientifica, datos y documentos
- `Equipo` presenta al equipo investigador y los enlaces institucionales/académicos relevantes

## i18n

El sitio es bilingue ES/EN.

- Traducciones en `assets/js/site.js`
- Claves aplicadas con `data-i18n`, `data-i18n-html` y `data-i18n-placeholder`
- Idioma persistido en `localStorage`

## Desarrollo local

Puedes servir el sitio localmente con:

```bash
python3 -m http.server 8000
```

Despues abre `http://localhost:8000`.

## Notas

- El favicon usa `assets/images/logo.png`
- La navegacion de la home esta alineada con el contenido real de la pagina
- El footer usa logos institucionales locales desde `assets/images/`
- El catalogo de resultados se gestiona desde `assets/js/site.js`

## Pendientes

- Revisar y limpiar claves i18n heredadas que ya no se usan
