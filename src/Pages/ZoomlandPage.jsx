import { Canvas } from '@react-three/fiber'
import { SheetProvider } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import robeAnimation from '../Data/Animation/robeAnimation.json'
import { useEffect, useRef } from 'react'
import { Environment } from '@react-three/drei'
import { config, useSpring } from '@react-spring/web'
import { useCurrentSheet, PerspectiveCamera } from '@theatre/r3f'
import { useScrollStore } from '../components/ScrollManager'
import { val } from '@theatre/core'
import { useMediaQuery } from 'react-responsive'
import ZoomlandModel from '../modelComps/ZoomlandModel'
import { editable as e } from '@theatre/r3f'
import * as THREE from 'three'
import Transition from '../Ui/Transition'
import EffectComposerComp from '../Ui/EffectComposerComp'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import useStore from '../GlobalState'
import Lumberjack from '../modelComps/Lumberjack'
import FullscreenModelPage from './FullscreenModelPage'

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
        files={`${import.meta.env.BASE_URL || '/'}evening_road_01_puresky_1k.hdr`}
        near={1}
        far={1000}
        background
        blur={0.12}
        inte
      />

      <PerspectiveCamera theatreKey="Camera" makeDefault fov={45} near={0.1} far={70} />

      <group position={isBigScreen ? [0, -1.4, 0] : [0, -1.4, 0]} scale={isBigScreen ? 1 : 1}>
        <ZoomlandModel position={[0, 1, 0]} rotation={[0, 0, 0]} scale={0.4} />
        {showFullscreenMode === false ? <Lumberjack scale={0.001} position={[-0.3, 1.1, 2]} /> : null}
        {/* <Lumberjack scale={0.001} position={[-0.3, 1.1, 2]} rotation={[0, 0, 0]} /> */}
      </group>
    </>
  )
}

const ZoomlandPage = ({ pathname }) => {
  const project = getProject('Robe Francaise Animation', {
    state: robeAnimation
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
          intensity={1}
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
          // shadow-bias={-0.01}
        />
        <fog attach="fog" color="#e9c98f" near={5} far={30} />
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
