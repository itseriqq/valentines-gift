import { SpotifyCard } from "@/components/ui/SpotifyCard";

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
      duration: 226,
      albumArt:
        "/album/doral_toda_vez_que_tu_sorri.png",
    },
    {
      title: "Heat Waves",
      artists: "Glass Animals",
      duration: 237,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
    },
    {
      title: "Perfect",
      artists: "Ed Sheeran",
      duration: 263,
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-200 dark:bg-neutral-800 text-white">
      <main className="w-screen h-screen flex justify-center items-center">
        <SpotifyCard songs={songs} />
      </main>
    </div>
  );
}

export default {
  Spotify,
};
