import React, { useState } from 'react'
import ParallaxCard from '../../components/parallaxCard'

const defaultParallax = { rX: 0, rY: 0, bX: 80, bY: 50 }

interface Parallax {
  rX: number
  rY: number
  bX: number
  bY: number
}

const ParallaxCardActions = () => {
  const [parallax, setParallax] = useState<Parallax>(defaultParallax)
  const [mouseOn, setMouseOn] = useState(false)

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (mouseOn) {
      const { offsetX, offsetY } = event.nativeEvent
      const { offsetWidth, offsetHeight } = event.target as HTMLElement
      const [w, h] = [offsetWidth, offsetHeight]
      const X = -(offsetX - w / 2) / 9
      const Y = (offsetY - h / 2) / 9

      setParallax({
        rX: Number(X.toFixed(2)),
        rY: Number(Y.toFixed(2)),
        bX: 80 - Number(X.toFixed(2)),
        bY: 80 - Number(Y.toFixed(2))
      })
    }
  }

  const turnOffParallax = () => {
    setMouseOn(false)
    setParallax(defaultParallax)
  }

  return (
    <ParallaxCard
      parallax={parallax}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => turnOffParallax}
    />
  )
}

export default ParallaxCardActions
