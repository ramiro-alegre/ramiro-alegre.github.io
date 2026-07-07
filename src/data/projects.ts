import type { ImageMetadata } from "astro";
import spotifyImage from "../assets/Spotify.png";
import batallaNavalImage from "../assets/BatallaNaval.png";
import crmImage from "../assets/CRM-crud-con-rest.png";
import climaImage from "../assets/climaEnTuPais.png";
import cellPhoneFinderImage from "../assets/CellPhoneFinder.png";
import portfolioImage from "../assets/Portfolio.png";

export type Technology =
  | "JavaScript"
  | "TypeScript"
  | "HTML"
  | "CSS"
  | "Sass"
  | "Angular"
  | "C#"
  | "ASP.NET MVC"
  | "SQL Server"
  | "Backend"
  | "REST"
  | "Async/Await"
  | "Fetch"
  | "APIs";

export interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  image: ImageMetadata;
  repo?: string;
  demo?: string;
  backend?: string;
}

export const projects: Project[] = [
  {
    name: "Spotify",
    description:
      "Clon de Spotify con front en Angular y un backend propio que expone la API.",
    technologies: ["Angular", "TypeScript", "Backend"],
    image: spotifyImage,
    repo: "https://github.com/ramiro-alegre/spotify-clon",
    backend: "https://github.com/ramiro-alegre/spotify-clon-backend",
  },
  {
    name: "Batalla Naval",
    description:
      "Juego multijugador de batalla naval en ASP.NET MVC. Turnos, salas y partidas resueltos en el servidor.",
    technologies: ["C#", "ASP.NET MVC", "SQL Server"],
    image: batallaNavalImage,
    repo: "https://github.com/ramiro-alegre/salvo_compra_gamer",
  },
  {
    name: "CRM con CRUD sobre REST",
    description:
      "CRM de clientes con operaciones CRUD completas contra una API REST usando async/await.",
    technologies: ["JavaScript", "REST", "Async/Await"],
    image: crmImage,
    repo: "https://github.com/ramiro-alegre/CRM-crud-con-REST",
  },
  {
    name: "Clima en tu país",
    description:
      "Consulta el clima de un país combinando dos APIs externas con fetch.",
    technologies: ["JavaScript", "Fetch", "APIs"],
    image: climaImage,
    repo: "https://github.com/ramiro-alegre/Clima-en-tu-pais",
    demo: "https://boring-darwin-5ef182.netlify.app/",
  },
  {
    name: "Cell Phone Finder",
    description:
      "Buscador de celulares con filtros, en JavaScript y manipulación del DOM.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: cellPhoneFinderImage,
    repo: "https://github.com/ramiro-alegre/Cell-phone-finder",
    demo: "https://suspicious-brown-92c305.netlify.app/",
  },
  {
    name: "Este portfolio",
    description:
      "Versión anterior de este sitio, hecha a mano con HTML y Sass, sin frameworks.",
    technologies: ["HTML", "Sass", "JavaScript"],
    image: portfolioImage,
    repo: "https://github.com/ramiro-alegre/ramiro-alegre.github.io",
  },
];
