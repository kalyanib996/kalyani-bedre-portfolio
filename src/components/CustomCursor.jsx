import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const ringX = useSpring(mouseX, {
    stiffness: 250,
    damping: 28,
    mass: 0.35,
  })

  const ringY = useSpring(mouseY, {
    stiffness: 250,
    damping: 28,
    mass: 0.35,
  })

  const glowX = useSpring(mouseX, {
    stiffness: 55,
    damping: 20,
    mass: 0.7,
  })

  const glowY = useSpring(mouseY, {
    stiffness: 55,
    damping: 20,
    mass: 0.7,
  })

  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
      setVisible(true)

      const interactive = event.target.closest('[data-cursor]')
      setLabel(interactive?.dataset.cursor || '')
    }

    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="cursor-glow"
        style={{
          left: glowX,
          top: glowY,
          opacity: visible ? 1 : 0,
        }}
      />

      <motion.div
        className="cursor-dot"
        style={{
          left: mouseX,
          top: mouseY,
          opacity: visible ? 1 : 0,
        }}
      />

      <motion.div
        className="cursor-ring"
        style={{
          left: ringX,
          top: ringY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: label ? 84 : 34,
          height: label ? 84 : 34,
          backgroundColor: label
            ? 'rgba(167, 255, 90, 0.92)'
            : 'rgba(167, 255, 90, 0.03)',
          borderColor: label
            ? 'rgba(167, 255, 90, 0)'
            : 'rgba(167, 255, 90, 0.55)',
        }}
        transition={{
          width: { duration: 0.18 },
          height: { duration: 0.18 },
          backgroundColor: { duration: 0.18 },
        }}
      >
        <motion.span
          className="cursor-label"
          animate={{
            opacity: label ? 1 : 0,
            scale: label ? 1 : 0.75,
          }}
        >
          {label}
        </motion.span>
      </motion.div>
    </>
  )
}

export default CustomCursor
