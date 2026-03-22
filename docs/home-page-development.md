# Home Page Development

Documentación del proceso de desarrollo de la página home del sitio SpiroCode.

## Arquitectura de Componentes

### Estructura de Carpetas

```
app/
├── components/
│   ├── layout/
│   │   ├── Container.vue      # Wrapper responsive
│   │   ├── Section.vue        # Secciones con padding
│   │   └── Stack.vue         # Flex layout
│   ├── nav/
│   │   └── Navbar.vue        # Navegación principal
│   ├── sections/
│   │   ├── BigTextSection.vue # Big text con imagen de fondo
│   │   ├── HeroSection.vue   # Hero principal
│   │   ├── BrandsSection.vue # Logos de tecnologías
│   │   ├── ProblemSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── HowWeDoSection.vue
│   │   ├── TechSection.vue
│   │   ├── CloseSection.vue
│   │   └── FooterSection.vue
│   └── ui/
│       ├── BigText.vue       # Texto grande reutilizable
│       ├── Button.vue        # Botones (primary, secondary, ghost)
│       └── Card.vue         # Cards (service, process, feature)
├── assets/
│   └── css/
│       └── main.css         # Reset + Variables CSS
├── layouts/
│   └── default.vue          # Layout principal
└── pages/
    └── index.vue           # Home page
```

## Secciones de la Página

| # | Sección | Componente | Descripción |
|---|---------|------------|-------------|
| 1 | Hero | `HeroSection` | Título principal + CTAs |
| 2 | Brands | `BrandsSection` | Logos PostgreSQL, VSCode, Figma, Docker, Vue, Nuxt, Node, TypeScript |
| 3 | Problem | `ProblemSection` | "El crecimiento sin arquitectura genera fricción" |
| 4 | About | `AboutSection` + `BigTextSection` | "Diseñamos sistemas para crecer" |
| 5 | Services | `ServicesSection` | 3 cards: Construcción, Arquitectura, Evolución |
| 6 | How We Do | `HowWeDoSection` + `BigTextSection` | "Cómo lo hacemos" + 4 pasos |
| 7 | Tech | `TechSection` + `BigTextSection` | "Tecnología" + 4 cards clientes |
| 8 | Close | `CloseSection` | CTA final |
| 9 | Footer | `FooterSection` | Logo + Copyright |

## Componentes UI

### BigTextSection

Componente reutilizable para big text con imagen de fondo.

```vue
<SectionsBigTextSection
  text="Como lo hacemos"
  text-color="dark"
  background-image="/svg/world-svg.svg"
/>
```

**Props:**
- `text`: string - Texto a mostrar
- `text-color`: "dark" | "light" | "accent"
- `background-image`: string - Ruta de imagen de fondo

### Button

```vue
<UiButton variant="primary" size="lg">
  Texto
</UiButton>
```

**Props:**
- `variant`: "primary" | "secondary" | "ghost"
- `size`: "sm" | "md" | "lg"
- `loading`: boolean
- `disabled`: boolean
- `href`: string

### Card

```vue
<UiCard
  variant="service"
  icon="i-ph-construction"
  title="Título"
  description="Descripción"
/>
```

**Props:**
- `variant`: "service" | "process" | "feature"
- `title`: string
- `description`: string
- `icon`: string (clase Iconify)
- `number`: string | number
- `link`: string

## Tokens de Diseño

### Colores

```css
--color-bg: #0f151f
--color-bg-secondary: #192537
--color-accent: #cefc00
--color-text: #8497a4
--color-text-light: #ffffff
```

### Fuentes

- **Qualy**: Headings
- **Work Sans**: Body, botones
- **Lato**: Descripciones

### Espaciado

```css
--section-py-sm: 3rem
--section-py-md: 4rem
--section-py-lg: 5rem
--section-py-xl: 6rem
```

## Assets

### Imágenes

| Ruta | Uso |
|------|-----|
| `/svg/logo-spiro.svg` | Logo |
| `/svg/world-svg.svg` | BigText background |
| `/image/bg-hero-img.png` | Hero background |
| `/image/svg-world-tech-icons.svg` | About section |

### Iconos

Usamos [Iconify](https://icon-sets.iconify.design/) con prefijo `i-`:

```vue
<i class="i-ph-construction" />
<i class="i-simple-icons-postgresql" />
```

## Convenciones

### Nombrado de Archivos

**OBLIGATORIO**: PascalCase para todos los componentes Vue.

```bash
# ✅ Correcto
HeroSection.vue
AboutSection.vue
BigTextSection.vue

# ❌ Incorrecto
hero-section.vue
about-section.vue
big-text.vue
```

### Nuxt Auto-import

Los componentes se auto-importan con prefijo de carpeta:

```vue
<LayoutContainer />   <!-- components/layout/Container.vue -->
<NavNavbar />        <!-- components/nav/Navbar.vue -->
<SectionsHeroSection />  <!-- components/sections/HeroSection.vue -->
<UiButton />        <!-- components/ui/Button.vue -->
```

## Próximos Pasos

- [ ] Agregar animaciones GSAP a BigTextSection
- [ ] Implementar mobile menu en Navbar
- [ ] Crear página About
- [ ] Crear página Pricing
- [ ] Crear página Features
- [ ] Agregar tests E2E con Playwright

## Figma Reference

Archivo: `spiro-web-site`
Link: https://www.figma.com/design/se6JNAobzPFRRzhkPTra7W/spiro-web-site

Secciones principales:
- Hero: node 95:2
- Brands: node 4373:52
- Problem: node 4231:7
- About: node 4287:585
- Services: node 4298:911
- How We Do: node 4330:160
- Tech: node 4298:931
- Close: node 4287:461
- Footer: node 95:8
