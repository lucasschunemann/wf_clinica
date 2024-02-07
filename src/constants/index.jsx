import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Empresa",
    links: [
      { title: "Sobre", href: "/about" },
      { title: "Processos", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contatos", href: "/contact" },
    ],
  },
  {
    title: "Redes",
    links: SocialMediaProfiles,
  },
];
