import './Pages.css'
import useStore from '../GlobalState'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Background from '../Ui/Background'
import { useMediaQuery } from 'react-responsive'
import ZoomlandModel from '../modelComps/ZoomlandModel'
import * as THREE from 'three'
import CloseButton from '../Ui/CloseButton'
import { useEffect } from 'react'
import { useSpring, a, config } from '@react-spring/web'
import InfoPanel from '../Ui/InfoPanel'
import Annotation from '../Ui/Annotation'
import Lumberjack from '../modelComps/Lumberjack'

const FullscreenModelPage = ({ pathname }) => {
  const showFullscreenMode = useStore(state => state.showFullscreenMode)
  const isBigScreen = useMediaQuery({ query: '(min-width: 640px)' })

  const fullscreenMode = () => {
    if (showFullscreenMode === false) {
      useStore.setState({ showFullscreenMode: true })
    } else {
      useStore.setState({ showFullscreenMode: false })
    }
  }

  const [styles, api] = useSpring(() => ({
    opacity: 0,
    config: config.slow
  }))

  useEffect(() => {
    console.debug('API', api.start)
    api.start({
      opacity: showFullscreenMode ? 1 : 0,
      config: { delay: showFullscreenMode === false ? 5000 : 5000, duration: showFullscreenMode === false ? 500 : 300 } // Added 500ms to the existing delay
    })
  }, [showFullscreenMode])

  return (
    <a.div
      style={styles}
      className={`FullscreenModelPage ${showFullscreenMode ? 'pointer-events-auto z-50' : 'pointer-events-none z-[-1]'}`}
    >
      <CloseButton
        onClick={fullscreenMode}
        className="mb-2"
        size={32}
        style={{ position: 'absolute', right: isBigScreen ? '3rem' : '1rem', top: isBigScreen ? '2rem' : '1rem' }}
      />
      {isBigScreen ? <InfoPanel /> : <InfoPanel mobile={true} />}
      <Canvas
        gl={{
          physicallyCorrectLights: true,
          preserveDrawingBuffer: true,
          antialias: false,
          toneMapping: THREE.LinearToneMapping
        }}
        shadows
      >
        {/* <ambientLight intensity={1} /> */}
        {pathname !== '/' ? (
          <>
            <OrbitControls autoRotate={false} autoRotateSpeed={0.5} enableDamping={true} />
            <Environment preset="studio" environmentIntensity={0.2} environmentRotation={[1, 1, 0]} />
          </>
        ) : null}
        {pathname === '/' && showFullscreenMode === true ? (
          <>
            <OrbitControls
              autoRotate={false}
              autoRotateSpeed={0.5}
              enableDamping={true}
              target={[0, 0, 0]}
              minAzimuthAngle={-Math.PI / 6}
              maxAzimuthAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 2}
            />
            <directionalLight
              intensity={2.5}
              castShadow
              color={'0xffe6b3'}
              position={[40, 40, 30]}
              shadow-mapSize={[1024, 1024]}
              // shadow-camera-near={0}
              // shadow-camera-far={80}
              // shadow-camera-top={80}
              // shadow-camera-right={80}
              // shadow-camera-bottom={-80}
              // shadow-camera-left={-50}
              // shadow-bias={-0.01}
            />
            <Environment
              files={`evening_road_01_puresky_1k.hdr`}
              near={50}
              far={200}
              background
              environmentIntensity={1.3}
              backgroundBlurriness={0.1}
              environmentRotation={[-1.3, 0, 0]}
              backgroundRotation={[0, 1, -2.5]}
            />
            <fog attach="fog" color="#e9c98f" near={2} far={20} />
            <ZoomlandModel position={[0, -1, 0]} scale={0.3} rotation={[0, 0, 0]} />
            <Lumberjack scale={0.001} position={[-0.15, -0.93, 1.4]} />
            <Annotation id={11} position={[0, 1.15, -2.6]} />
            <Annotation id={6} position={[-0.15, -0.65, 1.55]} />
          </>
        ) : null}
      </Canvas>
      <Background showFullscreenMode={showFullscreenMode} />
    </a.div>
  )
}

export default FullscreenModelPage
