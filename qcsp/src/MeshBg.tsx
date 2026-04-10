import React from 'react'
import type { CSSProperties } from 'react'

interface MeshBackgroundProps {
  children?: React.ReactNode
}

export default function MeshBackground({ children }: MeshBackgroundProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.canvas} aria-hidden="true">

        {/* TOP: Warm amber/orange light leak */}
        <div style={{ ...styles.blob, ...styles.topAmber }} />
        <div style={{ ...styles.blob, ...styles.topOrange }} />

        {/* BOTTOM CORNERS: Cool blue/indigo glows */}
        <div style={{ ...styles.blob, ...styles.btmLeftBlue }} />
        <div style={{ ...styles.blob, ...styles.btmRightIndigo }} />

      </div>
      <div style={styles.content}>{children}</div>
    </div>
  )
}

const C = {
  bg:          '#131517',     // Very deep, near-black
  topAmber:    '#D97706',     // Warm amber
  topOrange:   '#EA580C',     // Rich orange
  cornerBlue:  '#1E40AF',     // Cool blue for corners
  cornerIndigo: '#312E81',    // Deep indigo for corners
} as const

const styles: Record<string, CSSProperties> = {
  wrapper: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: C.bg,
    overflow: 'visible',
    overflowX: 'hidden',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    display: 'block',
  },
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
  },


  topAmber: {
    top: '-8vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200%',
    height: '15vh',
    background: C.topAmber,
    filter: 'blur(clamp(80px, 10vw, 160px))',
    opacity: 0.35,
  },
  topOrange: {
    top: '-5vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '180%',
    height: '12vh',
    background: C.topOrange,
    filter: 'blur(clamp(70px, 9vw, 140px))',
    opacity: 0.3,
  },


  btmLeftBlue: {
    bottom: '-25vh',
    left: '-20vw',
    width: '60vw',
    height: '60vh',
    background: C.cornerBlue,
    filter: 'blur(clamp(100px, 12vw, 200px))',
    opacity: 0.35,
  },
  // Bottom-right corner: soft indigo glow
  btmRightIndigo: {
    bottom: '-25vh',
    right: '-20vw',
    width: '60vw',
    height: '60vh',
    background: C.cornerIndigo,
    filter: 'blur(clamp(100px, 12vw, 200px))',
    opacity: 0.35,
  },
}