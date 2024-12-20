import { Canvas } from '@react-three/fiber'
import { SheetProvider } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import zoomlandAnimation from '../Data/Animation/zoomlandAnimation.json'
import { useEffect, useRef } from 'react'
import { Environment, Float } from '@react-three/drei'
import { config, useSpring } from '@react-spring/web'
import { useCurrentSheet, PerspectiveCamera } from '@theatre/r3f'
import { useScrollStore } from '../components/ScrollManager'
import { val } from '@theatre/core'
import { useMediaQuery } from 'react-responsive'
import ZoomlandModel from '../modelComps/ZoomlandModel'
// import { editable as e } from '@theatre/r3f'
import * as THREE from 'three'
import Transition from '../Ui/Transition'
import EffectComposerComp from '../Ui/EffectComposerComp'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import useStore from '../GlobalState'
import Lumberjack from '../modelComps/Lumberjack'
import Daniele from '../modelComps/Daniele'
import Florentina from '../modelComps/Florentina'
import Lars from '../modelComps/Lars'
import Butterfly from '../modelComps/Butterfly'

const Zoomland = () => {
  const ratioRef = useRef(useScrollStore.getState().scrollRatio)
  const menuLinkRef = useRef(useScrollStore.getState().menuLinkPosition)
  const isBigScreen = useMediaQuery({ query: '(min-width: 640px)' })
  const sheet = useCurrentSheet()
  const sequenceLength = val(sheet.sequence.pointer.length)
  const showFullscreenMode = useStore(state => state.showFullscreenMode)

  const [, apiTheatre] = useSpring(() => ({
    position: 0,
    config: config.molasses,
    onChange: ({ value }) => {
      sheet.sequence.position = value.position
    }
  }))

  useEffect(() => {
    return useScrollStore.subscribe(state => {
      ratioRef.current = state.scrollRatio
      let ratioMenuLinkPosition = window.scrollY / state.menuLinkPosition
      console.debug(
        '[RobeFrancaise] @useEffect @useScrollStore.subscribe',
        state.menuLinkPosition,
        window.scrollY,
        state.scrollRatio,
        ratioMenuLinkPosition
      )
      if (menuLinkRef.current !== state.menuLinkPosition) {
        menuLinkRef.current = state.menuLinkPosition
      }
      apiTheatre.start({
        position: ratioRef.current * sequenceLength
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequenceLength, sheet.address.sheetId])

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <Environment preset="studio" environmentIntensity={0.2} environmentRotation={[2.5, 1.3, 1.3]} background={true} /> */}
      <Environment
        files={`evening_road_01_puresky_1k.hdr`}
        near={50}
        far={200}
        background
        backgroundBlurriness={0.1}
        environmentIntensity={1}
        environmentRotation={[-1.3, 0, 0]}
        backgroundRotation={[0, 1.2, -2.6]}
      />

      <PerspectiveCamera theatreKey="Camera" makeDefault fov={45} near={0.1} far={70} />

      <group position={isBigScreen ? [0, -1.4, 0] : [0, -1.4, 0]} scale={isBigScreen ? 1 : 1}>
        <ZoomlandModel position={[0, 1, 0]} rotation={[0, 0, 0]} scale={0.4} />
        {showFullscreenMode === false ? (
          <>
            <Lumberjack scale={0.001} position={[-0.3, 1.1, 2]} />
            <Daniele scale={0.01} position={[2.5, 1.515, -0.65]} rotation={[0, 1.3, 0]} />
            <Florentina scale={0.19} position={[-2.1, 2.15, -2.1]} rotation={[0, 1, 0]} />
            <Lars scale={0.015} position={[2.1, 1.845, -3]} rotation={[0, 1, 0]} />
            <Float
              position={[3.5, 1.1, -0.6]}
              speed={10}
              rotationIntensity={7}
              floatIntensity={0.3}
              floatingRange={[0, 0.5]}
            >
              <Butterfly scale={0.008} />
            </Float>
          </>
        ) : null}
      </group>
    </>
  )
}

const ZoomlandPage = ({ pathname }) => {
  const project = getProject('Robe Francaise Animation', {
    state: zoomlandAnimation
  })
  const sheet = project.sheet('Scene')

  return (
    <div className="Scene fixed h-screen w-full top-0">
      <HelmetProvider>
        <Helmet>
          <title>3D Stories · A luxurious Robe à la francaise</title>
          <meta name="description" content="Telling stories about historical dress." data-rh="true" />
          <meta name="keywords" content="Robe, UCLAB, C²DH" />
        </Helmet>
      </HelmetProvider>
      <Canvas
        gl={{
          physicallyCorrectLights: true,
          preserveDrawingBuffer: true,
          antialias: false,
          toneMapping: THREE.LinearToneMapping
        }}
        shadows
      >
        <directionalLight
          intensity={2}
          castShadow
          color={'0xffe6b3'}
          position={[5, 5, 10]}
          shadow-mapSize={[1024, 1024]}
          shadow-opacity={1}
          // shadow-camera-near={0}
          // shadow-camera-far={80}
          // shadow-camera-top={50}
          // shadow-camera-right={50}
          // shadow-camera-bottom={-50}
          // shadow-camera-left={-50}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" color="#e9c98f" near={3.5} far={28} />
        <EffectComposerComp />
        <SheetProvider sheet={sheet}>
          <>
            <Zoomland pathname={pathname} />
          </>
        </SheetProvider>
      </Canvas>
    </div>
  )
}

export default Transition(ZoomlandPage)
