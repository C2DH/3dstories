import './Pages.css'
import useStore from '../GlobalState'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Background from '../Ui/Background'
import { useMediaQuery } from 'react-responsive'
import ZoomlandModel from '../modelComps/ZoomlandModel'
import GreekStyleDressModel from '../modelComps/GreekStyleDressModel'
import SpencerJacketModel from '../modelComps/SpencerJacketModel'
import * as THREE from 'three'
import InnerDoubletModel from '../modelComps/InnerDoubletModel'
import OuterDoubletModel from '../modelComps/OuterDoubletModel'
import ArmorModel from '../modelComps/ArmorModel'
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
        {pathname !== '/zoomland' ? (
          <>
            <OrbitControls autoRotate={false} autoRotateSpeed={0.5} enableDamping={true} />
            <Environment preset="studio" environmentIntensity={0.2} environmentRotation={[1, 1, 0]} />
          </>
        ) : null}
        {pathname === '/zoomland' && showFullscreenMode === true ? (
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
              intensity={1}
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
              backgroundBlurriness={0.1}
            />
            <fog attach="fog" color="#e9c98f" near={2} far={20} />
            <ZoomlandModel position={[0, -1, 0]} scale={0.3} rotation={[0, 0, 0]} />
            <Lumberjack scale={0.001} position={[-0.15, -0.93, 1.4]} />
            <Annotation id={11} position={[0, 1.15, -2.6]} />
            <Annotation id={6} position={[-0.15, -0.65, 1.55]} />
          </>
        ) : null}
        {pathname === '/armor' ? (
          <>
            <ArmorModel position={[0, 0.2, 0]} scale={5} rotation={0} />
            <Annotation id={6} position={[-0.11, 0.5, 0.8]} />
            <Annotation id={14} position={[-0.1, 0, 0.95]} />
          </>
        ) : null}
        {pathname === '/greek_style_dress' ? (
          <>
            <GreekStyleDressModel position={[0, -2.2, 0.5]} rotation={0} />
            <SpencerJacketModel position={[0, 1, -0.5]} rotation={1.4} />
            <Annotation id={6} position={[-0.11, 1.4, 1.4]} />
          </>
        ) : null}

        {pathname === '/doublet' ? (
          <>
            <InnerDoubletModel position={[0, -0.5, -1.2]} rotation={1.4} />
            <OuterDoubletModel position={[0, -0.5, 1.2]} rotation={0} />
            <Annotation id={9} position={[1.6, 0.5, 1.7]} />
            <Annotation id={10} position={[-0.1, 1, 0.5]} />
          </>
        ) : null}
      </Canvas>
      <Background showFullscreenMode={showFullscreenMode} />
    </a.div>
  )
}

export default FullscreenModelPage
