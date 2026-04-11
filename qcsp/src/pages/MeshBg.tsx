import type { CSSProperties } from 'react'

interface MeshBackgroundProps {
  children?: React.ReactNode
}

export default function MeshBackground({ children }: MeshBackgroundProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.canvas} aria-hidden="true">

        <div style={{ ...styles.blob, ...styles.topAmber }} />
        <div style={{ ...styles.blob, ...styles.topOrange }} />

        <div style={{ ...styles.blob, ...styles.btmLeftBlue }} />
        <div style={{ ...styles.blob, ...styles.btmRightIndigo }} />

      </div>
      <div style={styles.content}>{children}</div>
    </div>
  )
}

const C = {
  bg:          '#131517',    
  topAmber:    '#D97706',    
  topOrange:   '#EA580C',    
  cornerBlue:  '#1E40AF',    
  cornerIndigo: '#312E81',    
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
    height: '13vh',
    background: C.topAmber,
    filter: 'blur(clamp(80px, 10vw, 160px))',
    opacity: 1,
  },
  topOrange: {
    top: '-5vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '12vh',
    background: C.topOrange,
    filter: 'blur(clamp(70px, 9vw, 140px))',
    opacity: 0.1,
  },


  btmLeftBlue: {
    bottom: '-25vh',
    left: '-20vw',
    width: '60vw',
    height: '60vh',
    background: C.cornerBlue,
    filter: 'blur(clamp(150px, 15vw, 300px))',
    opacity: 0.18,
  },

  btmRightIndigo: {
    bottom: '-25vh',
    right: '-20vw',
    width: '50vw',
    height: '50vh',
    background: C.cornerIndigo,
    filter: 'blur(clamp(150px, 15vw, 300px))',
    opacity: 0.18,
  },
}