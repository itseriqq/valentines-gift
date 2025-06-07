"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/components/ui/FloatingElement"
import { BalloonsButton } from "./BallonsButton"
import { TextWritter } from "./ui/TextWritter"

const exampleImages = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0154.JPG?alt=media&token=70926bef-3741-4984-ba82-67a81a1f3304",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG-20231021-WA0029.jpg?alt=media&token=a5cd1e2a-66cd-4a35-8325-415ea21eb7d3",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0489.JPG?alt=media&token=597a844d-a589-415d-8ad1-5d4f2e440fe0",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1403.JPG?alt=media&token=18b53303-43d2-470e-b0c4-6fc098961fef",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1500.jpg?alt=media&token=7ac17c46-ccb5-47f3-ac7a-60fc780d9929",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1580.jpg?alt=media&token=ff250bbe-14c0-4376-8aa3-8365d0bff2fe",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1736.JPG?alt=media&token=3a4469aa-488c-45d0-a7fb-76dd6cfc21de",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_3220.jpg?alt=media&token=1210e09b-a184-404e-bae7-cecc3c549a13",
    author: "Mathilde Langevin",
    title: "A table topped with two wine glasses and plates",
  },
]

const FloatingElementsHero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
      className="flex w-full h-full min-h-screen justify-center items-center bg-neutral-900 overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <div className="d-flex flex-row mb-7">
          <span className="text-5xl md:text-7xl z-50 text-white font-calendas italic ">{"for my "}</span>
          <TextWritter
            text={[
              "Valentine",
              "Sunshine",
              "Love",
              "Carolina",
              "Sweetheart",
            ]}
            speed={100}
            className="text-5xl md:text-7xl z-50 font-calendas italic text-yellow-500 font-bold"
            waitTime={1500}
            deleteSpeed={100}
            cursorChar={"_"}
          />
        </div>
        <BalloonsButton />
        <div className="d-flex flex-col gap-0">
          <p className="text-neutral-300 text-xs -mb-2 italic">Made with love,</p>
          <TextWritter
            text={[
              "by Erick",
            ]}
            speed={0}
            className="text-neutral-300 text-xs"
            waitTime={1500}
            deleteSpeed={100}
            cursorChar={"_"}
            cursorClassName=""
          />
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}

export { FloatingElementsHero }
