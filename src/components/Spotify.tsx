import { SpotifyCard } from "@/components/ui/SpotifyCard";
import InfiniteSliderVertical from "./InfiniteSliderVertical";

export function Spotify() {
  const songs = [
    {
      title: "Coisa Boa",
      artists: "Lagum",
      duration: 139,
      albumArt:
        "/album/lagum_coisa_boa.png",
      music: "/musics/coisa_boa.mp3"
    },
    {
      title: "Toda Vez Que Tu Sorri",
      artists: "Doral",
      duration: 165,
      albumArt:
        "/album/doral_toda_vez_que_tu_sorri.png",
      music: "/musics/toda_vez_que_tu_sorri.mp3"
    },
    {
      title: "Deixa",
      artists: "Lagum",
      duration: 179,
      albumArt:
        "/album/deixa.png",
      music: "/musics/deixa.mp3"
    },
    {
      title: "Telephones",
      artists: "Vacations",
      duration: 212,
      albumArt:
        "/album/vacations.png",
      music: "/musics/vacations.mp3"
    },
    {
      title: "Dezembro",
      artists: "Arthur Diniz",
      duration: 121,
      albumArt:
        "/album/dezembro.png",
      music: "/musics/dezembro.mp3"
    },
    {
      title: "Lisboa",
      artists: "ANAVITÓRIA, Lenine",
      duration: 224,
      albumArt:
        "/album/lisboa.png",
      music: "/musics/lisboa.mp3"
    },
    {
      title: "Toque de Recolher",
      artists: "Sophi, Julia Avelin",
      duration: 173,
      albumArt:
        "/album/toque_de_recolher.png",
      music: "/musics/toque_de_recolher.mp3"
    },
  ];
  return (
    <div className="flex flex-row items-center px-20 justify-center min-h-screen bg-neutral-200 dark:bg-neutral-800 text-white">
      <InfiniteSliderVertical />
      <main className="w-screen h-screen flex justify-center items-center">
        <SpotifyCard songs={songs} />
      </main>
      <InfiniteSliderVertical />
    </div>
  );
}

export default {
  Spotify,
};
