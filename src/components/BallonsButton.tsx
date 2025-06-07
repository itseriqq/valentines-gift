import { Balloons } from "@/components/ui/Balloons"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function BalloonsButton() {
  const balloonsRef = useRef<{ launchAnimation: () => void } | null>(null)

  const handleLaunch = () => {
    if (balloonsRef.current) {
      balloonsRef.current.launchAnimation()
    }
  }

  return (
    <>
      <Button
        onClick={handleLaunch}
        className="bg-white text-black rounded-md hover:border-1 hover:border-neutral-300 hover:bg-white hover:text-black hover:scale-110 transition-transform cursor-pointer font-calendas italic"
      >
        feliz dia dos namorados! 🎈
      </Button>
      <Balloons
        ref={balloonsRef}
        type="default"
      />
    </>
  )
}