import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

function Magnetic({ children, strength = 0.22, className = '' }) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 18,
  })

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 18,
  })

  const handleMove = (event) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)

    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
