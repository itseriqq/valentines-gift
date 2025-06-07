import { SpotifyCard } from "@/components/ui/SpotifyCard";
import InfiniteSliderVertical from "./InfiniteSliderVertical";

export function Spotify() {
  const songs = [
    {
      title: "Coisa Boa",
      artists: "Lagum",
      duration: 207,
      albumArt:
        "/album/lagum_coisa_boa.png",
    },
    {
      title: "Toda Vez Que Tu Sorri",
      artists: "Doral",
      duration: 165,
      albumArt:
        "/album/doral_toda_vez_que_tu_sorri.png",
    },
    {
      title: "Deixa",
      artists: "Lagum",
      duration: 212,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
    },
    {
      title: "Telephones",
      artists: "Vacations",
      duration: 212,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
    {
      title: "Dezembro",
      artists: "Arthur Diniz",
      duration: 120,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
    {
      title: "Lisboa",
      artists: "ANAVITÓRIA, Lenine",
      duration: 219,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
    {
      title: "Toque de Recolher",
      artists: "Sophi, Julia Avelin",
      duration: 173,
      albumArt:
        "/album/toque_de_recolher.png",
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
