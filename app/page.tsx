"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { portfolioProjects } from "./portfolio-data";

type Locale = "pt" | "en";
type Theme = "light" | "dark";

type Project = (typeof portfolioProjects)[number];

const projects = portfolioProjects;

const copy = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: { work: "Trabalhos", lab: "Processo", studio: "Estúdio", contact: "Contato" },
    theme: "Tema",
    light: "Claro",
    dark: "Escuro",
    language: "Idioma",
    role: "DIREÇÃO COM IA · FILMMAKING · COR",
    location: "JOINVILLE, BRASIL · TRABALHANDO GLOBALMENTE",
    scroll: "ROLE PARA EXPLORAR",
    workEyebrow: "TRABALHOS SELECIONADOS / PORTFÓLIO",
    workIntro:
      "IMAGENS AUTORAIS, FILMES E PÓS-PRODUÇÃO CONSTRUÍDOS ENTRE OFÍCIO E TECNOLOGIA.",
    openProject: "Abrir projeto",
    processEyebrow: "PROCESSO / VISION.MOVV",
    processTitle: "A IDEIA VEM PRIMEIRO. A TECNOLOGIA ENTRA ONDE ELA TORNA A IMAGEM MAIS FORTE.",
    processBody:
      "Da pesquisa visual à finalização, cada projeto é tratado como um sistema único de lente, luz, movimento, ritmo e cor.",
    studioEyebrow: "ESTÚDIO INDEPENDENTE",
    studioTitle: "VISION.MOVV É A PRÁTICA AUDIOVISUAL DE ALEXANDRE MACHADO.",
    studioBody:
      "Direção com IA, filmmaking, edição e color grading para marcas, artistas e projetos que precisam de uma linguagem visual própria.",
    capabilities: "CAPACIDADES",
    availability: "DISPONÍVEL PARA PROJETOS SELECIONADOS E COLABORAÇÕES REMOTAS.",
    project: "O PROJETO",
    close: "Fechar projeto",
    next: "PRÓXIMO PROJETO",
    contactEyebrow: "TEM UMA IDEIA EM MOVIMENTO?",
    contactTitle: "VAMOS CRIAR ALGO QUE AINDA NÃO TEM FORMA.",
    instagram: "INSTAGRAM",
    email: "E-MAIL",
    loading: "CARREGANDO",
  },
  en: {
    skip: "Skip to content",
    nav: { work: "Work", lab: "Process", studio: "Studio", contact: "Contact" },
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    language: "Language",
    role: "AI DIRECTION · FILMMAKING · COLOR",
    location: "JOINVILLE, BRAZIL · WORKING WORLDWIDE",
    scroll: "SCROLL TO EXPLORE",
    workEyebrow: "SELECTED WORK / PORTFOLIO",
    workIntro:
      "AUTHORIAL IMAGES, FILMS AND POST-PRODUCTION BUILT BETWEEN CRAFT AND TECHNOLOGY.",
    openProject: "Open project",
    processEyebrow: "PROCESS / VISION.MOVV",
    processTitle: "THE IDEA COMES FIRST. TECHNOLOGY ENTERS WHERE IT MAKES THE IMAGE STRONGER.",
    processBody:
      "From visual research to finishing, every project is treated as a unique system of lens, light, movement, rhythm and color.",
    studioEyebrow: "INDEPENDENT STUDIO",
    studioTitle: "VISION.MOVV IS THE AUDIOVISUAL PRACTICE OF ALEXANDRE MACHADO.",
    studioBody:
      "AI direction, filmmaking, editing and color grading for brands, artists and projects that need a visual language of their own.",
    capabilities: "CAPABILITIES",
    availability: "AVAILABLE FOR SELECTED PROJECTS AND REMOTE COLLABORATIONS.",
    project: "THE PROJECT",
    close: "Close project",
    next: "NEXT PROJECT",
    contactEyebrow: "HAVE AN IDEA IN MOTION?",
    contactTitle: "LET’S CREATE SOMETHING THAT DOESN’T HAVE A SHAPE YET.",
    instagram: "INSTAGRAM",
    email: "E-MAIL",
    loading: "LOADING",
  },
} as const;

function Header({
  locale,
  theme,
  onThemeChange,
  onLocaleChange,
}: {
  locale: Locale;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  onLocaleChange: (locale: Locale) => void;
}) {
  const text = copy[locale];

  return (
    <header className="floating-header">
      <nav className="nav-chip" aria-label="Primary navigation">
        <a className="nav-brand" href="#" aria-label="vision.movv home">
          ©VISION.MOVV
        </a>
        <a href="#projects">{text.nav.work}</a>
        <a href="#process">{text.nav.lab}</a>
        <a href="#studio">{text.nav.studio}</a>
        <a href="#contact">{text.nav.contact}</a>
      </nav>

      <div className="preference-chip">
        <div className="theme-options" role="group" aria-label={text.theme}>
          <button
            type="button"
            className={theme === "light" ? "is-active" : ""}
            aria-pressed={theme === "light"}
            title={text.light}
            onClick={() => onThemeChange("light")}
          >
            <span aria-hidden="true">☀</span>
            <span className="control-label">{text.light}</span>
          </button>
          <button
            type="button"
            className={theme === "dark" ? "is-active" : ""}
            aria-pressed={theme === "dark"}
            title={text.dark}
            onClick={() => onThemeChange("dark")}
          >
            <span aria-hidden="true">◐</span>
            <span className="control-label">{text.dark}</span>
          </button>
        </div>
        <span className="chip-divider" aria-hidden="true" />
        <div className="locale-options" role="group" aria-label={text.language}>
          <button
            type="button"
            className={locale === "pt" ? "is-active" : ""}
            aria-pressed={locale === "pt"}
            onClick={() => onLocaleChange("pt")}
          >
            PT-BR
          </button>
          <button
            type="button"
            className={locale === "en" ? "is-active" : ""}
            aria-pressed={locale === "en"}
            onClick={() => onLocaleChange("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

function PortfolioMedia({
  project,
  locale,
  eager = false,
  decorative = false,
  className = "",
  interactive = false,
}: {
  project: Project;
  locale: Locale;
  eager?: boolean;
  decorative?: boolean;
  className?: string;
  interactive?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroMedia = project.media[0];
  const isPageHero = className.split(" ").includes("hero-asset");

  useEffect(() => {
    if (!project.video || interactive) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPreference = () => {
      if (preference.matches || !visible) {
        videoRef.current?.pause();
      } else {
        void videoRef.current?.play().catch(() => undefined);
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncPreference();
      },
      { threshold: 0.05, rootMargin: "120px 0px" },
    );

    if (videoRef.current) observer.observe(videoRef.current);
    preference.addEventListener("change", syncPreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPreference);
    };
  }, [interactive, project.video]);

  if (project.video) {
    return (
      <video
        ref={videoRef}
        className={`project-asset ${className}`.trim()}
        src={project.video}
        poster={project.image}
        width={heroMedia.width}
        height={heroMedia.height}
        muted
        loop={!interactive}
        controls={interactive}
        playsInline
        preload={interactive ? "metadata" : isPageHero && eager ? "auto" : "none"}
        aria-hidden={decorative || undefined}
        aria-label={decorative ? undefined : project.alt[locale]}
      />
    );
  }

  return (
    <img
      className={`project-asset ${className}`.trim()}
      src={project.image}
      alt={decorative ? "" : project.alt[locale]}
      width={heroMedia.width}
      height={heroMedia.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}

function ProjectCard({
  project,
  index,
  locale,
  onOpen,
}: {
  project: Project;
  index: number;
  locale: Locale;
  onOpen: (project: Project) => void;
}) {
  const text = copy[locale];

  return (
    <article className={`project-card project-card-${(index % 4) + 1}`} data-reveal>
      <button
        className="project-media"
        type="button"
        aria-label={`${text.openProject}: ${project.title}`}
        onClick={() => onOpen(project)}
      >
        <PortfolioMedia
          project={project}
          locale={locale}
          eager={index < 2}
          decorative
        />
        <span className="project-tint" aria-hidden="true" />
      </button>
      <button className="project-caption" type="button" onClick={() => onOpen(project)}>
        <span>
          {project.title}
          <small>{project.category[locale]}</small>
        </span>
        <span className="project-caption-meta">
          <span>{project.year}</span>
          <span className="caption-arrow" aria-hidden="true">↗</span>
        </span>
      </button>
    </article>
  );
}

function ProjectView({
  project,
  locale,
  onClose,
  onNext,
}: {
  project: Project;
  locale: Locale;
  onClose: () => void;
  onNext: (project: Project) => void;
}) {
  const text = copy[locale];
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <section
      className="project-view"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <button className="project-close" type="button" onClick={onClose} autoFocus>
        <span>{text.close}</span>
        <span aria-hidden="true">×</span>
      </button>

      <div className={`project-view-hero tone-${project.tone}`}>
        <PortfolioMedia project={project} locale={locale} eager interactive />
        <div className="project-view-title">
          <p>{project.category[locale]}</p>
          <h1>{project.title}</h1>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-view-copy">
        <p className="eyebrow">{text.project} / {project.number}</p>
        <h2>{project.intro[locale]}</h2>
        <div>
          <p>{project.body[locale]}</p>
          <ul>
            {project.services[locale].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {project.media.length > 1 && (
        <div
          className="project-view-gallery"
          aria-label={
            locale === "pt"
              ? `Galeria completa de ${project.title}`
              : `Complete ${project.title} gallery`
          }
        >
          {project.media.slice(1).map((media, index) => (
            <figure className="project-view-gallery-item" key={media.src}>
              {media.type === "video" ? (
                <video
                  src={media.src}
                  poster={"poster" in media ? media.poster : undefined}
                  width={media.width}
                  height={media.height}
                  aria-label={`${project.alt[locale]} ${index + 2}`}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={media.src}
                  alt={`${project.alt[locale]} ${index + 2}`}
                  width={media.width}
                  height={media.height}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </figure>
          ))}
        </div>
      )}

      <button className="next-project" type="button" onClick={() => onNext(nextProject)}>
        <span>{text.next}</span>
        <strong>{nextProject.title}</strong>
        <span aria-hidden="true">↗</span>
      </button>
    </section>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [locale, setLocale] = useState<Locale>("pt");
  const [ready, setReady] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("vision-theme");
    const savedLocale = window.localStorage.getItem("vision-language");
    const initialTheme: Theme = savedTheme === "light" ? "light" : "dark";
    const initialLocale: Locale = savedLocale === "en" ? "en" : "pt";

    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.lang = initialLocale === "pt" ? "pt-BR" : "en";

    const preferenceFrame = window.requestAnimationFrame(() => {
      setTheme(initialTheme);
      setLocale(initialLocale);
    });
    const timer = window.setTimeout(() => setReady(true), 900);
    return () => {
      window.cancelAnimationFrame(preferenceFrame);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("vision-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem("vision-language", locale);
  }, [locale, activeProjectId]);

  useEffect(() => {
    const syncHash = () => {
      const value = window.location.hash.replace(/^#/, "");
      setActiveProjectId(value.startsWith("project/") ? value.replace("project/", "") : null);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("project-is-open", Boolean(activeProject));
    const backgroundVideos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("main video"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    backgroundVideos.forEach((video) => {
      if (activeProject || reducedMotion) {
        video.pause();
        return;
      }
      const rect = video.getBoundingClientRect();
      if (rect.bottom > -120 && rect.top < window.innerHeight + 120) {
        void video.play().catch(() => undefined);
      }
    });

    return () => document.body.classList.remove("project-is-open");
  }, [activeProject]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  useEffect(() => {
    const aura = document.querySelector<HTMLElement>(".pointer-aura");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!aura || !hero) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const normalizedX = event.clientX / window.innerWidth - 0.5;
        const normalizedY = event.clientY / window.innerHeight - 0.5;
        aura.style.setProperty("--pointer-x", `${event.clientX}px`);
        aura.style.setProperty("--pointer-y", `${event.clientY}px`);
        hero.style.setProperty("--cursor-x-shift", `${normalizedX * 18}px`);
        hero.style.setProperty("--cursor-y-shift", `${normalizedY * 18}px`);
        hero.style.setProperty("--cursor-pan-x", `${normalizedX * -12}px`);
        hero.style.setProperty("--cursor-pan-y", `${normalizedY * -10}px`);
        hero.style.setProperty("--cursor-rotate", `${normalizedX * 0.3}deg`);
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const aura = document.querySelector<HTMLElement>(".pointer-aura");
    if (!hero || !aura) return;

    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>(".project-media, .process-visual, .studio-image"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      hero.style.setProperty("--hero-slide", "0px");
      hero.style.setProperty("--hero-lift", "0px");
      hero.style.setProperty("--hero-opacity", "1");
      aura.style.setProperty("--pointer-aura-opacity", "0");
      parallaxItems.forEach((element) => element.style.setProperty("--parallax-y", "0px"));
      return;
    }
    let frame = 0;

    const renderMotion = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const heroProgress = Math.min(Math.max(window.scrollY / viewportHeight, 0), 1.25);

      hero.style.setProperty("--hero-slide", `${heroProgress * 92}px`);
      hero.style.setProperty("--hero-lift", `${heroProgress * -90}px`);
      hero.style.setProperty("--hero-opacity", `${Math.max(1 - heroProgress * 0.72, 0.18)}`);
      aura.style.setProperty(
        "--pointer-aura-opacity",
        `${Math.max(1 - heroProgress * 1.45, 0)}`,
      );

      parallaxItems.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -180 || rect.top > viewportHeight + 180) return;
        const rawCenterDelta =
          (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const centerDelta = Math.max(-1, Math.min(1, rawCenterDelta));
        const motionScale = window.matchMedia("(max-width: 820px)").matches ? 0.38 : 1;
        const depths = [28, -22, 30, -24, 18, -14];
        const depth = (depths[index] ?? (index % 2 === 0 ? 24 : -20)) * motionScale;
        element.style.setProperty("--parallax-y", `${centerDelta * depth}px`);
      });
    };

    const scheduleMotion = () => {
      if (!frame) frame = window.requestAnimationFrame(renderMotion);
    };

    renderMotion();
    window.addEventListener("scroll", scheduleMotion, { passive: true });
    window.addEventListener("resize", scheduleMotion);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", scheduleMotion);
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project-media"));
    const cleanups = cards.map((card) => {
      const handleMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.setProperty("--card-rotate-x", `${y * -1.4}deg`);
        card.style.setProperty("--card-rotate-y", `${x * 1.6}deg`);
        card.style.setProperty("--image-shift-x", `${x * -5}px`);
        card.style.setProperty("--image-shift-y", `${y * -4}px`);
      };

      const handleLeave = () => {
        card.style.setProperty("--card-rotate-x", "0deg");
        card.style.setProperty("--card-rotate-y", "0deg");
        card.style.setProperty("--image-shift-x", "0px");
        card.style.setProperty("--image-shift-y", "0px");
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);
      return () => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  const openProject = (project: Project) => {
    if (!activeProject) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
    }
    window.location.hash = `project/${project.id}`;
    setActiveProjectId(project.id);
  };

  const closeProject = () => {
    const previousFocus = previousFocusRef.current;
    window.location.hash = "projects";
    setActiveProjectId(null);
    window.requestAnimationFrame(() => previousFocus?.focus());
  };

  useEffect(() => {
    if (!activeProject) return;
    const background = [
      document.querySelector<HTMLElement>("main"),
      document.querySelector<HTMLElement>(".floating-header"),
    ].filter((element): element is HTMLElement => Boolean(element));
    background.forEach((element) => {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>(".project-view");
      const focusable = Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      background.forEach((element) => {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      });
    };
  }, [activeProject]);

  const text = copy[locale];
  const processProject =
    projects.find((project) => project.id === "power-of-color-grading") ??
    projects[0];

  return (
    <>
      <a className="skip-link" href="#main-content">
        {text.skip}
      </a>

      <div className={`intro-loader ${ready ? "is-complete" : ""}`} aria-hidden={ready}>
        <span>VISION.MOVV</span>
        <div>
          <span>{text.loading}</span>
          <span>©2026</span>
        </div>
      </div>

      <div className="pointer-aura" aria-hidden="true" />
      <Header
        locale={locale}
        theme={theme}
        onThemeChange={setTheme}
        onLocaleChange={setLocale}
      />

      <main
        id="main-content"
        className={`portfolio-main ${activeProject ? "is-obscured" : ""}`}
        aria-hidden={activeProject ? true : undefined}
      >
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <PortfolioMedia
              project={projects[0]}
              locale={locale}
              eager
              decorative
              className="hero-asset"
            />
            <span />
          </div>
          <p className="hero-role">{text.role}</p>
          <h1 id="hero-title">
            <span>VISION</span>
            <span>MOVV</span>
          </h1>
          <div className="hero-footer">
            <p>{text.location}</p>
            <a href="#projects">
              {text.scroll}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="work-section" id="projects">
          <header className="section-intro" data-reveal>
            <p className="eyebrow">{text.workEyebrow}</p>
            <h2>{text.workIntro}</h2>
          </header>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                locale={locale}
                onOpen={openProject}
              />
            ))}
          </div>
        </section>

        <div className="motion-ticker" aria-hidden="true">
          <div>
            <span>AI DIRECTION / FILM / EDIT / COLOR / </span>
            <span>AI DIRECTION / FILM / EDIT / COLOR / </span>
            <span>AI DIRECTION / FILM / EDIT / COLOR / </span>
          </div>
        </div>

        <section className="process-section" id="process">
          <div className="process-visual" data-reveal>
            <PortfolioMedia
              project={processProject}
              locale={locale}
              decorative
              className="process-asset"
            />
          </div>
          <div className="process-copy" data-reveal>
            <p className="eyebrow">{text.processEyebrow}</p>
            <h2>{text.processTitle}</h2>
            <p>{text.processBody}</p>
          </div>
        </section>

        <section className="studio-section" id="studio">
          <div className="studio-image" data-reveal>
            <img
              src="/portfolio/studio-portrait.jpg"
              alt={
                locale === "pt"
                  ? "Retrato de Alexandre Machado com câmera"
                  : "Portrait of Alexandre Machado holding a camera"
              }
              loading="lazy"
              decoding="async"
            />
            <span>© VISION.MOVV / JOINVILLE</span>
          </div>
          <div className="studio-copy" data-reveal>
            <p className="eyebrow">{text.studioEyebrow}</p>
            <h2>{text.studioTitle}</h2>
            <p>{text.studioBody}</p>
            <div className="capabilities">
              <p>{text.capabilities}</p>
              <ul>
                {projects[0].services[locale].concat(projects[1].services[locale].slice(0, 2)).map((item, index) => (
                  <li key={`${item}-${index}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="availability">{text.availability}</p>
          </div>
        </section>

        <footer className="contact-section" id="contact">
          <p className="eyebrow">{text.contactEyebrow}</p>
          <h2>{text.contactTitle}</h2>
          <div className="contact-links">
            <a href="mailto:hello@visionmovv.com">
              {text.email}
              <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.instagram.com/vision.movv/" target="_blank" rel="noreferrer">
              {text.instagram}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-wordmark" aria-hidden="true">
            <span>VISION</span>
            <span>MOVV</span>
          </div>
          <div className="footer-meta">
            <span>©2026 VISION.MOVV</span>
            <a href="#">BACK TO TOP ↑</a>
          </div>
        </footer>
      </main>

      {activeProject && (
        <ProjectView
          key={activeProject.id}
          project={activeProject}
          locale={locale}
          onClose={closeProject}
          onNext={openProject}
        />
      )}
    </>
  );
}
