/* Manifesto tipado do acervo VISION.MOVV. */
export type PortfolioMediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  width: number;
  height: number;
  alt: { pt: string; en: string };
  original: string;
};

export type PortfolioProject = {
  id: string;
  number: string;
  title: string;
  year: string;
  category: { pt: string; en: string };
  eyebrow: { pt: string; en: string };
  services: { pt: string[]; en: string[] };
  alt: { pt: string; en: string };
  intro: { pt: string; en: string };
  body: { pt: string; en: string };
  tone: string;
  image: string;
  video?: string;
  media: PortfolioMediaItem[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    "id": "ia-generativa",
    "number": "01",
    "title": "IA GENERATIVA",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "DIREÇÃO E IMAGEM COM IA",
      "en": "AI IMAGE DIRECTION"
    },
    "eyebrow": {
      "pt": "DIREÇÃO E IMAGEM COM IA",
      "en": "AI IMAGE DIRECTION"
    },
    "services": {
      "pt": [
        "DIREÇÃO COM IA",
        "DESENVOLVIMENTO VISUAL",
        "FILME GENERATIVO"
      ],
      "en": [
        "AI DIRECTION",
        "VISUAL DEVELOPMENT",
        "GENERATIVE FILM"
      ]
    },
    "alt": {
      "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
      "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
    },
    "intro": {
      "pt": "Narrativas, personagens e atmosferas construídos com direção visual consistente.",
      "en": "Narratives, characters and atmospheres built through consistent visual direction."
    },
    "body": {
      "pt": "Arquivo completo de criação generativa da VISION.MOVV. Todas as imagens e o filme desta página vêm exclusivamente da pasta IA.",
      "en": "The complete VISION.MOVV generative archive. Every image and film on this page comes exclusively from the AI folder."
    },
    "tone": "natural",
    "image": "/portfolio/projects/ia-generativa/video-01-poster.jpg",
    "video": "/portfolio/projects/ia-generativa/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/ia-generativa/video-01.mp4",
        "poster": "/portfolio/projects/ia-generativa/video-01-poster.jpg",
        "width": 1280,
        "height": 720,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/video-output-C1254DAA-1284-474F-9C32-AC094D187DF3-1.mov"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-001.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/close_supreme_patch_laranja_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-002.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/Design sem nome_Original 2.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-003.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/Design sem nome_Original 3.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-004.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/Design sem nome_Original 4.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-005.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/Design sem nome_Original 5.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-006.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/Design sem nome_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-007.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_5591_Original.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-008.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_5726_Original.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-009.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_5733_Original.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-010.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_6429.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-011.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_6430.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-012.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_6482.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-013.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7256_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-014.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7261_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-015.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7300_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-016.jpg",
        "width": 891,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7306_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-017.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7318_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-018.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7321_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-019.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7322_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-020.jpg",
        "width": 1600,
        "height": 1160,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7369_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-021.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7376_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-022.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7377_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-023.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7378_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-024.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7380_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-025.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7517.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-026.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7518.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-027.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7521.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-028.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7522.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-029.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7523.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-030.jpg",
        "width": 1600,
        "height": 914,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7524.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-031.jpg",
        "width": 1600,
        "height": 914,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7526.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-032.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7528.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-033.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7529.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-034.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7530.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-035.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7531.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-036.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7534.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-037.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7537.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-038.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7538.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-039.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7539.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-040.jpg",
        "width": 1600,
        "height": 781,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7615.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-041.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7616.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-042.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7617.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-043.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7618.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-044.jpg",
        "width": 1600,
        "height": 678,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7619.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-045.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7620.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-046.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7621.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-047.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7622.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-048.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7623.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-049.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7626.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-050.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7627.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-051.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7628.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-052.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7629.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-053.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7630.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-054.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7631.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-055.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7632.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-056.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7634.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-057.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7635.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-058.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7636.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-059.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7637.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-060.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7638.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-061.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7639.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-062.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7640.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-063.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7642.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-064.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7643.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-065.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7644.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-066.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7645.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-067.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7646.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-068.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7647.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-069.jpg",
        "width": 1195,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7648.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-070.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7649.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-071.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7650.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-072.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7651.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-073.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7736.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-074.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7739.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-075.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7740.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-076.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7742.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-077.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7744.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-078.jpg",
        "width": 1600,
        "height": 893,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/IMG_7749.JPG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-079.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/magnific_camera-arri-alexa-35-at-i_74ukZgLJAL.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-080.jpg",
        "width": 1600,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/nlogo_04_halo_envolvente_Original.PNG"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-081.jpg",
        "width": 899,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/photo-output_Original 2.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-082.jpg",
        "width": 898,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/photo-output_Original.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-083.jpg",
        "width": 898,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/photo-output.HEIC"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/ia-generativa/image-084.jpg",
        "width": 893,
        "height": 1600,
        "alt": {
          "pt": "Criação visual do arquivo de inteligência artificial da VISION.MOVV",
          "en": "Visual work from the VISION.MOVV artificial-intelligence archive"
        },
        "original": "IA/quatro_flat_Original.PNG"
      }
    ]
  },
  {
    "id": "sensation-label",
    "number": "02",
    "title": "SENSATION LABEL",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA DE EVENTO",
      "en": "EVENT PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA DE EVENTO",
      "en": "EVENT PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "COBERTURA",
        "TRATAMENTO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "EVENT COVERAGE",
        "RETOUCHING"
      ]
    },
    "alt": {
      "pt": "Fotografia do projeto Sensation Label",
      "en": "Photograph from the Sensation Label project"
    },
    "intro": {
      "pt": "A noite registrada de dentro: cabine, pista, gesto e luz.",
      "en": "The night documented from within: booth, floor, gesture and light."
    },
    "body": {
      "pt": "Série fotográfica completa da Sensation Label. As 17 fotografias desta página pertencem somente a este projeto.",
      "en": "The complete Sensation Label photo series. All 17 photographs on this page belong only to this project."
    },
    "tone": "natural",
    "image": "/portfolio/projects/sensation-label/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-001.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-01.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-002.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-02.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-003.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-03.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-004.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-04.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-005.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-05.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-006.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-06.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-007.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-07.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-008.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-08.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-009.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-09.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-010.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-10.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-011.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-11.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-012.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-12.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-013.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-13.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-014.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-14.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-015.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-15.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-016.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-16.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/sensation-label/image-017.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sensation Label",
          "en": "Photograph from the Sensation Label project"
        },
        "original": "FOTOGRAFIAS/SENSATION LABEL/SENSATION-17.jpeg"
      }
    ]
  },
  {
    "id": "to-no-after",
    "number": "03",
    "title": "TO NO AFTER",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA DE EVENTO",
      "en": "EVENT PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA DE EVENTO",
      "en": "EVENT PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "COBERTURA",
        "EDIÇÃO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "EVENT COVERAGE",
        "EDIT"
      ]
    },
    "alt": {
      "pt": "Fotografia do projeto TO NO AFTER",
      "en": "Photograph from the TO NO AFTER project"
    },
    "intro": {
      "pt": "Cor, presença e movimento em uma série documental da pista.",
      "en": "Color, presence and motion in a documentary dance-floor series."
    },
    "body": {
      "pt": "Seleção completa organizada na pasta TO NO AFTER, sem imagens de outros eventos.",
      "en": "The complete selection from the TO NO AFTER folder, with no images from other events."
    },
    "tone": "natural",
    "image": "/portfolio/projects/to-no-after/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-001.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-01.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-002.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-02.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-003.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-03.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-004.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-04.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-005.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-05.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-006.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-06.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-007.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-07.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-008.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-08.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-009.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-09.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-010.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-10.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-011.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-11.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-012.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-12.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-013.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-13.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-014.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-14.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-015.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-15.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-016.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-16.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-017.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-17.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-018.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-18.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-019.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-19.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-020.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-20.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-021.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-21.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-022.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-22.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-023.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-23.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/to-no-after/image-024.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto TO NO AFTER",
          "en": "Photograph from the TO NO AFTER project"
        },
        "original": "FOTOGRAFIAS/TO NO AFTER/TO NO AFTER-24.jpeg"
      }
    ]
  },
  {
    "id": "dj-denali",
    "number": "04",
    "title": "DJ DENALI",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FILME DE PERFORMANCE",
      "en": "PERFORMANCE FILM"
    },
    "eyebrow": {
      "pt": "FILME DE PERFORMANCE",
      "en": "PERFORMANCE FILM"
    },
    "services": {
      "pt": [
        "FILMMAKING",
        "EDIÇÃO",
        "FINALIZAÇÃO"
      ],
      "en": [
        "FILMMAKING",
        "EDITING",
        "FINISHING"
      ]
    },
    "alt": {
      "pt": "DJ Denali durante uma performance ao ar livre",
      "en": "DJ Denali performing outdoors"
    },
    "intro": {
      "pt": "Performance, gesto e ritmo em um retrato audiovisual de DJ Denali.",
      "en": "Performance, gesture and rhythm in an audiovisual portrait of DJ Denali."
    },
    "body": {
      "pt": "Este projeto usa exclusivamente o vídeo de DJ Denali, separado dos demais filmes e das séries fotográficas.",
      "en": "This project exclusively uses the DJ Denali film, kept separate from the other films and photo series."
    },
    "tone": "natural",
    "image": "/portfolio/projects/dj-denali/video-01-poster.jpg",
    "video": "/portfolio/projects/dj-denali/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/dj-denali/video-01.mp4",
        "poster": "/portfolio/projects/dj-denali/video-01-poster.jpg",
        "width": 1280,
        "height": 720,
        "alt": {
          "pt": "DJ Denali durante uma performance ao ar livre",
          "en": "DJ Denali performing outdoors"
        },
        "original": "VIDEOS/GIF 2.mp4"
      }
    ]
  },
  {
    "id": "nitro-skate-shop",
    "number": "05",
    "title": "NITRO SKATE SHOP",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA",
      "en": "PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA",
      "en": "PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "DIREÇÃO DE IMAGEM",
        "TRATAMENTO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "IMAGE DIRECTION",
        "RETOUCHING"
      ]
    },
    "alt": {
      "pt": "Fotografia do projeto Nitro Skate Shop",
      "en": "Photograph from the Nitro Skate Shop project"
    },
    "intro": {
      "pt": "Retratos e detalhes com linguagem urbana e presença direta.",
      "en": "Portraits and details shaped by an urban, direct visual language."
    },
    "body": {
      "pt": "Série completa da Nitro Skate Shop, mantendo todas as imagens dentro do mesmo projeto.",
      "en": "The complete Nitro Skate Shop series, keeping every image within the same project."
    },
    "tone": "natural",
    "image": "/portfolio/projects/nitro-skate-shop/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-001.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (1).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-002.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (2).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-003.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (3).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-004.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (4).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-005.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (5).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-006.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (6).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-007.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (7).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/nitro-skate-shop/image-008.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Nitro Skate Shop",
          "en": "Photograph from the Nitro Skate Shop project"
        },
        "original": "FOTOGRAFIAS/NITRO SKATE SHOP/NITRO (8).jpeg"
      }
    ]
  },
  {
    "id": "barber",
    "number": "06",
    "title": "BARBER",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA",
      "en": "PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA",
      "en": "PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "DIREÇÃO DE IMAGEM",
        "EDIÇÃO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "IMAGE DIRECTION",
        "EDIT"
      ]
    },
    "alt": {
      "pt": "Fotografia do ensaio Barber",
      "en": "Photograph from the Barber essay"
    },
    "intro": {
      "pt": "Ofício, textura e retrato observados de perto.",
      "en": "Craft, texture and portraiture observed up close."
    },
    "body": {
      "pt": "As nove fotografias do ensaio Barber reunidas sem interferência de outras séries.",
      "en": "All nine photographs from the Barber essay, with no media from other series."
    },
    "tone": "natural",
    "image": "/portfolio/projects/barber/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-001.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-1(4).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-002.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-2(1).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-003.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-3(1).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-004.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-4.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-005.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-5(1).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-006.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-6(1).jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-007.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-7.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-008.jpg",
        "width": 1067,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-8.jpeg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/barber/image-009.jpg",
        "width": 1600,
        "height": 1067,
        "alt": {
          "pt": "Fotografia do ensaio Barber",
          "en": "Photograph from the Barber essay"
        },
        "original": "FOTOGRAFIAS/BARBER/BARBER-9(1).jpeg"
      }
    ]
  },
  {
    "id": "dragao-de-tinta",
    "number": "07",
    "title": "DRAGÃO DE TINTA",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA AUTORAL",
      "en": "AUTHORIAL PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA AUTORAL",
      "en": "AUTHORIAL PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "RETRATO",
        "TRATAMENTO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "PORTRAIT",
        "RETOUCHING"
      ]
    },
    "alt": {
      "pt": "Fotografia do projeto Dragão de Tinta",
      "en": "Photograph from the Dragão de Tinta project"
    },
    "intro": {
      "pt": "Retrato autoral guiado por gesto, pele e atmosfera.",
      "en": "An authorial portrait series guided by gesture, skin and atmosphere."
    },
    "body": {
      "pt": "Conjunto completo de quatro fotografias do projeto Dragão de Tinta.",
      "en": "The complete four-photograph Dragão de Tinta series."
    },
    "tone": "natural",
    "image": "/portfolio/projects/dragao-de-tinta/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/dragao-de-tinta/image-001.jpg",
        "width": 1600,
        "height": 1066,
        "alt": {
          "pt": "Fotografia do projeto Dragão de Tinta",
          "en": "Photograph from the Dragão de Tinta project"
        },
        "original": "FOTOGRAFIAS/DRAGAO DE TINTA/NAUHUANA  (1).jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/dragao-de-tinta/image-002.jpg",
        "width": 1066,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Dragão de Tinta",
          "en": "Photograph from the Dragão de Tinta project"
        },
        "original": "FOTOGRAFIAS/DRAGAO DE TINTA/NAUHUANA  (2).jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/dragao-de-tinta/image-003.jpg",
        "width": 1066,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Dragão de Tinta",
          "en": "Photograph from the Dragão de Tinta project"
        },
        "original": "FOTOGRAFIAS/DRAGAO DE TINTA/NAUHUANA  (3).jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/dragao-de-tinta/image-004.jpg",
        "width": 1600,
        "height": 1066,
        "alt": {
          "pt": "Fotografia do projeto Dragão de Tinta",
          "en": "Photograph from the Dragão de Tinta project"
        },
        "original": "FOTOGRAFIAS/DRAGAO DE TINTA/NAUHUANA  (4).jpg"
      }
    ]
  },
  {
    "id": "chilli-beans",
    "number": "08",
    "title": "CHILLI BEANS",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA DE PRODUTO",
      "en": "PRODUCT PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA DE PRODUTO",
      "en": "PRODUCT PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "DIREÇÃO DE IMAGEM",
        "TRATAMENTO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "IMAGE DIRECTION",
        "RETOUCHING"
      ]
    },
    "alt": {
      "pt": "Fotografia do projeto Chilli Beans",
      "en": "Photograph from the Chilli Beans project"
    },
    "intro": {
      "pt": "Produto e personalidade construídos em três imagens diretas.",
      "en": "Product and personality shaped through three direct images."
    },
    "body": {
      "pt": "Série completa da Chilli Beans, isolada dos demais trabalhos fotográficos.",
      "en": "The complete Chilli Beans series, kept separate from the other photography work."
    },
    "tone": "natural",
    "image": "/portfolio/projects/chilli-beans/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/chilli-beans/image-001.jpg",
        "width": 923,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Chilli Beans",
          "en": "Photograph from the Chilli Beans project"
        },
        "original": "FOTOGRAFIAS/CHILLI BEANS/CHILLI BEANS (1).jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/chilli-beans/image-002.jpg",
        "width": 915,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Chilli Beans",
          "en": "Photograph from the Chilli Beans project"
        },
        "original": "FOTOGRAFIAS/CHILLI BEANS/CHILLI BEANS (2).jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/chilli-beans/image-003.jpg",
        "width": 917,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Chilli Beans",
          "en": "Photograph from the Chilli Beans project"
        },
        "original": "FOTOGRAFIAS/CHILLI BEANS/CHILLI BEANS (3).jpg"
      }
    ]
  },
  {
    "id": "abel",
    "number": "09",
    "title": "ABEL",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "RETRATO",
      "en": "PORTRAIT"
    },
    "eyebrow": {
      "pt": "RETRATO",
      "en": "PORTRAIT"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "RETRATO",
        "TRATAMENTO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "PORTRAIT",
        "RETOUCHING"
      ]
    },
    "alt": {
      "pt": "Retrato do projeto Abel",
      "en": "Portrait from the Abel project"
    },
    "intro": {
      "pt": "Um retrato concentrado em presença e expressão.",
      "en": "A portrait focused on presence and expression."
    },
    "body": {
      "pt": "Imagem única do projeto Abel, apresentada sem mídia externa ao ensaio.",
      "en": "The single image from the Abel project, presented without unrelated media."
    },
    "tone": "natural",
    "image": "/portfolio/projects/abel/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/abel/image-001.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Retrato do projeto Abel",
          "en": "Portrait from the Abel project"
        },
        "original": "FOTOGRAFIAS/ABEL/40AEC2AF-98EE-46EE-84AB-10C85BBA8F1F.jpg"
      }
    ]
  },
  {
    "id": "sibote-music",
    "number": "10",
    "title": "SIBOTE MUSIC",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FOTOGRAFIA MUSICAL",
      "en": "MUSIC PHOTOGRAPHY"
    },
    "eyebrow": {
      "pt": "FOTOGRAFIA MUSICAL",
      "en": "MUSIC PHOTOGRAPHY"
    },
    "services": {
      "pt": [
        "FOTOGRAFIA",
        "RETRATO",
        "TRATAMENTO"
      ],
      "en": [
        "PHOTOGRAPHY",
        "PORTRAIT",
        "RETOUCHING"
      ]
    },
    "alt": {
      "pt": "Fotografia do projeto Sibote Music",
      "en": "Photograph from the Sibote Music project"
    },
    "intro": {
      "pt": "Imagem musical de presença gráfica e leitura imediata.",
      "en": "A music image with graphic presence and immediate impact."
    },
    "body": {
      "pt": "Fotografia do projeto Sibote Music mantida em seu próprio núcleo.",
      "en": "The Sibote Music photograph kept within its own project."
    },
    "tone": "natural",
    "image": "/portfolio/projects/sibote-music/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/sibote-music/image-001.jpg",
        "width": 912,
        "height": 1600,
        "alt": {
          "pt": "Fotografia do projeto Sibote Music",
          "en": "Photograph from the Sibote Music project"
        },
        "original": "FOTOGRAFIAS/SIBOTE MUSIC/ZSIBOTE.jpeg"
      }
    ]
  },
  {
    "id": "color-studies",
    "number": "11",
    "title": "COLOR STUDIES",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "COLOR GRADING",
      "en": "COLOR GRADING"
    },
    "eyebrow": {
      "pt": "COLOR GRADING",
      "en": "COLOR GRADING"
    },
    "services": {
      "pt": [
        "COLOR GRADING",
        "LOOK DEVELOPMENT",
        "FINALIZAÇÃO"
      ],
      "en": [
        "COLOR GRADING",
        "LOOK DEVELOPMENT",
        "FINISHING"
      ]
    },
    "alt": {
      "pt": "Imagem do arquivo de estudos de color grading",
      "en": "Image from the color-grading studies archive"
    },
    "intro": {
      "pt": "Contraste, temperatura e densidade usados para organizar cada imagem.",
      "en": "Contrast, temperature and density used to organize each image."
    },
    "body": {
      "pt": "Arquivo completo da pasta COLOR: 22 estudos reunidos exclusivamente nesta página.",
      "en": "The complete COLOR folder: 22 studies gathered exclusively on this page."
    },
    "tone": "natural",
    "image": "/portfolio/projects/color-studies/image-001.jpg",
    "media": [
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-001.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/1C604035-8CAE-4FEC-9790-45810461F8B2.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-002.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/2A539C8E-033B-466B-AA27-4AF74DFB3BDF.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-003.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/3FE87ED1-E6F2-4835-B914-52859C64C5E7.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-004.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/5B214EB4-3D92-443E-8AF9-0D462FA8855F.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-005.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/91C999F8-F10F-4C9B-86B3-6960E66815DA.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-006.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/1118C658-8C2D-4C66-9A79-2FF737EB3491.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-007.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/A8C86EF2-D7D4-491B-92C3-E0F0746E04B7.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-008.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/C7747398-764B-443B-9E5F-0C82DC19753D.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-009.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/D11F9704-1459-49D1-8CEB-487EDA01FCED.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-010.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/D6700951-BC1C-4C5B-B44E-A955FA8475FA.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-011.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/F2E0BD09-02BF-41A4-9A45-4B89C5C0A762.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-012.jpg",
        "width": 900,
        "height": 1600,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/F050965D-8115-45D0-8238-60E10615C468.jpg"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-013.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/IMG_5412.WEBP"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-014.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-20 201328_1.1.2.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-015.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-20 201328_1.2.1.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-016.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-20 201328_1.3.3.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-017.jpg",
        "width": 1600,
        "height": 837,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-25 200851_1.4.1.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-018.jpg",
        "width": 1600,
        "height": 816,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-25 200926_1.5.1.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-019.jpg",
        "width": 1600,
        "height": 836,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-25 201001_1.6.1.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-020.jpg",
        "width": 1600,
        "height": 900,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-25 201029_1.7.1.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-021.jpg",
        "width": 1600,
        "height": 838,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-25 201139_1.8.1.png"
      },
      {
        "type": "image",
        "src": "/portfolio/projects/color-studies/image-022.jpg",
        "width": 1600,
        "height": 662,
        "alt": {
          "pt": "Imagem do arquivo de estudos de color grading",
          "en": "Image from the color-grading studies archive"
        },
        "original": "COLOR/Still 2026-05-25 201211_1.9.2.png"
      }
    ]
  },
  {
    "id": "reel-color",
    "number": "12",
    "title": "REEL DE COLOR",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "COLOR GRADING / FILME",
      "en": "COLOR GRADING / FILM"
    },
    "eyebrow": {
      "pt": "COLOR GRADING / FILME",
      "en": "COLOR GRADING / FILM"
    },
    "services": {
      "pt": [
        "COLOR GRADING",
        "EDIÇÃO",
        "FINALIZAÇÃO"
      ],
      "en": [
        "COLOR GRADING",
        "EDITING",
        "FINISHING"
      ]
    },
    "alt": {
      "pt": "Reel cinematográfico de color grading",
      "en": "Cinematic color-grading reel"
    },
    "intro": {
      "pt": "Movimento e cor organizados como uma peça cinematográfica contínua.",
      "en": "Motion and color organized as a continuous cinematic piece."
    },
    "body": {
      "pt": "Projeto apresentado exclusivamente com o seu filme original, sem mídia de outros trabalhos.",
      "en": "This project is presented exclusively through its original film, without media from other work."
    },
    "tone": "natural",
    "image": "/portfolio/projects/reel-color/video-01-poster.jpg",
    "video": "/portfolio/projects/reel-color/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/reel-color/video-01.mp4",
        "poster": "/portfolio/projects/reel-color/video-01-poster.jpg",
        "width": 1280,
        "height": 670,
        "alt": {
          "pt": "Reel cinematográfico de color grading",
          "en": "Cinematic color-grading reel"
        },
        "original": "VIDEOS/video-output-B2502261-4CCA-46F6-8067-2557E6E384A2-1.mov"
      }
    ]
  },
  {
    "id": "lamborghini",
    "number": "13",
    "title": "LAMBORGHINI",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FILME AUTOMOTIVO",
      "en": "AUTOMOTIVE FILM"
    },
    "eyebrow": {
      "pt": "FILME AUTOMOTIVO",
      "en": "AUTOMOTIVE FILM"
    },
    "services": {
      "pt": [
        "FILMMAKING",
        "EDIÇÃO",
        "FINALIZAÇÃO"
      ],
      "en": [
        "FILMMAKING",
        "EDITING",
        "FINISHING"
      ]
    },
    "alt": {
      "pt": "Filme automotivo Lamborghini",
      "en": "Lamborghini automotive film"
    },
    "intro": {
      "pt": "Detalhe, velocidade e desenho industrial em movimento.",
      "en": "Detail, speed and industrial design in motion."
    },
    "body": {
      "pt": "Peça automotiva apresentada somente com o vídeo Lamborghini da pasta VIDEOS.",
      "en": "An automotive piece presented only with the Lamborghini film from the VIDEOS folder."
    },
    "tone": "natural",
    "image": "/portfolio/projects/lamborghini/video-01-poster.jpg",
    "video": "/portfolio/projects/lamborghini/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/lamborghini/video-01.mp4",
        "poster": "/portfolio/projects/lamborghini/video-01-poster.jpg",
        "width": 720,
        "height": 1280,
        "alt": {
          "pt": "Filme automotivo Lamborghini",
          "en": "Lamborghini automotive film"
        },
        "original": "VIDEOS/7342cbcf7bd04444833647c79e8d4550.mov"
      }
    ]
  },
  {
    "id": "food-visual",
    "number": "14",
    "title": "FOOD VISUAL",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FILME DE PRODUTO",
      "en": "PRODUCT FILM"
    },
    "eyebrow": {
      "pt": "FILME DE PRODUTO",
      "en": "PRODUCT FILM"
    },
    "services": {
      "pt": [
        "FILMMAKING",
        "EDIÇÃO",
        "MOTION"
      ],
      "en": [
        "FILMMAKING",
        "EDITING",
        "MOTION"
      ]
    },
    "alt": {
      "pt": "Filme de produto e gastronomia",
      "en": "Food and product film"
    },
    "intro": {
      "pt": "Textura, gesto e apetite construídos em um filme vertical.",
      "en": "Texture, gesture and appetite shaped in a vertical film."
    },
    "body": {
      "pt": "Peça apresentada somente com o seu arquivo de origem, sem material de outros projetos.",
      "en": "This piece is presented only with its source file, without material from other projects."
    },
    "tone": "natural",
    "image": "/portfolio/projects/food-visual/video-01-poster.jpg",
    "video": "/portfolio/projects/food-visual/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/food-visual/video-01.mp4",
        "poster": "/portfolio/projects/food-visual/video-01-poster.jpg",
        "width": 720,
        "height": 1280,
        "alt": {
          "pt": "Filme de produto e gastronomia",
          "en": "Food and product film"
        },
        "original": "VIDEOS/copy_07890860-3131-442B-A1FB-79572ADABBE7.mov"
      }
    ]
  },
  {
    "id": "aurion",
    "number": "15",
    "title": "AURION / ALFA STOFELLI",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "CONTEÚDO AUDIOVISUAL",
      "en": "AUDIOVISUAL CONTENT"
    },
    "eyebrow": {
      "pt": "CONTEÚDO AUDIOVISUAL",
      "en": "AUDIOVISUAL CONTENT"
    },
    "services": {
      "pt": [
        "EDIÇÃO",
        "MOTION",
        "FINALIZAÇÃO"
      ],
      "en": [
        "EDITING",
        "MOTION",
        "FINISHING"
      ]
    },
    "alt": {
      "pt": "Conteúdo audiovisual Aurion com Alfa Stofelli",
      "en": "Aurion audiovisual content with Alfa Stofelli"
    },
    "intro": {
      "pt": "Conteúdo direto, gráfico e guiado pela fala.",
      "en": "Direct, graphic content driven by speech."
    },
    "body": {
      "pt": "Filme Aurion / Alfa Stofelli mantido como projeto individual.",
      "en": "The Aurion / Alfa Stofelli film kept as an individual project."
    },
    "tone": "natural",
    "image": "/portfolio/projects/aurion/video-01-poster.jpg",
    "video": "/portfolio/projects/aurion/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/aurion/video-01.mp4",
        "poster": "/portfolio/projects/aurion/video-01-poster.jpg",
        "width": 1280,
        "height": 720,
        "alt": {
          "pt": "Conteúdo audiovisual Aurion com Alfa Stofelli",
          "en": "Aurion audiovisual content with Alfa Stofelli"
        },
        "original": "VIDEOS/f3ddb77c-c99f-45be-914d-313afcbac244.mp4"
      }
    ]
  },
  {
    "id": "power-of-color-grading",
    "number": "16",
    "title": "POWER OF COLOR GRADING",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "EDIÇÃO E COR",
      "en": "EDIT & COLOR"
    },
    "eyebrow": {
      "pt": "EDIÇÃO E COR",
      "en": "EDIT & COLOR"
    },
    "services": {
      "pt": [
        "COLOR GRADING",
        "EDIÇÃO",
        "MOTION"
      ],
      "en": [
        "COLOR GRADING",
        "EDITING",
        "MOTION"
      ]
    },
    "alt": {
      "pt": "Processo de edição e color grading",
      "en": "Editing and color-grading process"
    },
    "intro": {
      "pt": "Processo de pós-produção transformado em narrativa visual.",
      "en": "A post-production process transformed into a visual narrative."
    },
    "body": {
      "pt": "Peça de processo apresentada exclusivamente com o arquivo Timeline 1.",
      "en": "A process piece presented exclusively through the Timeline 1 file."
    },
    "tone": "natural",
    "image": "/portfolio/projects/power-of-color-grading/video-01-poster.jpg",
    "video": "/portfolio/projects/power-of-color-grading/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/power-of-color-grading/video-01.mp4",
        "poster": "/portfolio/projects/power-of-color-grading/video-01-poster.jpg",
        "width": 1280,
        "height": 720,
        "alt": {
          "pt": "Processo de edição e color grading",
          "en": "Editing and color-grading process"
        },
        "original": "VIDEOS/Timeline 1.mov"
      }
    ]
  },
  {
    "id": "vision-movv-ident",
    "number": "17",
    "title": "VISION.MOVV IDENT",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "IDENTIDADE EM MOTION",
      "en": "MOTION IDENTITY"
    },
    "eyebrow": {
      "pt": "IDENTIDADE EM MOTION",
      "en": "MOTION IDENTITY"
    },
    "services": {
      "pt": [
        "MOTION DESIGN",
        "IDENTIDADE",
        "EDIÇÃO"
      ],
      "en": [
        "MOTION DESIGN",
        "IDENTITY",
        "EDITING"
      ]
    },
    "alt": {
      "pt": "Identidade animada da VISION.MOVV",
      "en": "Animated VISION.MOVV identity"
    },
    "intro": {
      "pt": "Tipografia, recorte e ritmo em uma assinatura curta.",
      "en": "Typography, collage and rhythm in a short signature."
    },
    "body": {
      "pt": "Identidade animada VISION.MOVV apresentada isoladamente, sem sobrepor os projetos.",
      "en": "The VISION.MOVV animated identity presented on its own, without overlaying the projects."
    },
    "tone": "natural",
    "image": "/portfolio/projects/vision-movv-ident/video-01-poster.jpg",
    "video": "/portfolio/projects/vision-movv-ident/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/vision-movv-ident/video-01.mp4",
        "poster": "/portfolio/projects/vision-movv-ident/video-01-poster.jpg",
        "width": 1280,
        "height": 394,
        "alt": {
          "pt": "Identidade animada da VISION.MOVV",
          "en": "Animated VISION.MOVV identity"
        },
        "original": "VIDEOS/IMG_6467.GIF"
      }
    ]
  },
  {
    "id": "ciclo-zero",
    "number": "18",
    "title": "CICLO:ZERO",
    "year": "PORTFÓLIO",
    "category": {
      "pt": "FILME / EDIÇÃO",
      "en": "FILM / EDIT"
    },
    "eyebrow": {
      "pt": "FILME / EDIÇÃO",
      "en": "FILM / EDIT"
    },
    "services": {
      "pt": [
        "FILMMAKING",
        "EDIÇÃO",
        "FINALIZAÇÃO"
      ],
      "en": [
        "FILMMAKING",
        "EDITING",
        "FINISHING"
      ]
    },
    "alt": {
      "pt": "Filme vertical CICLO:ZERO",
      "en": "CICLO:ZERO vertical film"
    },
    "intro": {
      "pt": "Um filme vertical construído por ritmo, contraste e progressão.",
      "en": "A vertical film built through rhythm, contrast and progression."
    },
    "body": {
      "pt": "CICLO:ZERO aparece como projeto próprio, com somente o seu vídeo.",
      "en": "CICLO:ZERO appears as its own project, using only its film."
    },
    "tone": "natural",
    "image": "/portfolio/projects/ciclo-zero/video-01-poster.jpg",
    "video": "/portfolio/projects/ciclo-zero/video-01.mp4",
    "media": [
      {
        "type": "video",
        "src": "/portfolio/projects/ciclo-zero/video-01.mp4",
        "poster": "/portfolio/projects/ciclo-zero/video-01-poster.jpg",
        "width": 720,
        "height": 1280,
        "alt": {
          "pt": "Filme vertical CICLO:ZERO",
          "en": "CICLO:ZERO vertical film"
        },
        "original": "VIDEOS/video-output-5E1A7D3A-DF97-4C1D-A495-7844A8F7905A-1.mov"
      }
    ]
  }
];
