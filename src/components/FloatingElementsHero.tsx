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
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8322.jpg?alt=media&token=8d04d5a3-8765-40ff-932b-f0110b72a0b3",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG-20231021-WA0029.jpg?alt=media&token=d77775d9-6256-4a6a-9ef1-a34e15c2061e",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0154.JPG?alt=media&token=c7b73864-8522-4677-93bb-42f9134d28f9",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0489.JPG?alt=media&token=cd7d3d16-a6c2-4b07-aa27-b675d325e1b4",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1736.JPG?alt=media&token=377d4a68-efbc-4088-bb7a-bd8e4a76305c",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1403.JPG?alt=media&token=d1733b3c-7635-4ed7-b5e7-890291702051",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1018.JPG?alt=media&token=62221940-fafe-4fa4-ab60-9edc9458ffde",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1586.jpg?alt=media&token=1bc619df-5077-44b5-820b-2a48ec54cd5b",
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
      className="flex w-full h-full min-h-[800px] justify-center items-center bg-neutral-900 overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <div className="d-flex flex-row mb-7">
          <span className="text-5xl md:text-7xl z-50 text-white font-calendas italic">{"for my "}</span>
          <TextWritter
            text={[
              "Valentine",
              "Sunshine",
              "Love",
              "Carolina",
              "Sweetheart",
            ]}
            speed={100}
            className="text-5xl md:text-7xl z-50 font-calendas italic text-yellow-500"
            waitTime={1500}
            deleteSpeed={100}
            cursorChar={"_"}
          />
        </div>
        <BalloonsButton />
        <div className="d-flex flex-col gap-0">
          <p className="text-neutral-300 text-xs -mb-2 italic">Created with love,</p>
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
