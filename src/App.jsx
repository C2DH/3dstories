import Background from './Ui/Background'
import Header from './Ui/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Ui/Footer'
import { modalVisible, modalImage } from './GlobalState'
import { useAtom } from 'jotai'
import FullscreenModelPage from './Pages/FullscreenModelPage'
import ContentManager from './components/ContentManager'
import ViewportManager from './components/ViewportManager'
import MenuFullPage from './Ui/MenuFullPage'
import ZoomlandPage from './Pages/ZoomlandPage'
import { useLocation } from 'react-router-dom'
import ModalWindow from './Ui/ModalWindow'
import Images from './Data/images.json'
import { AnimatePresence } from 'framer-motion'
import Preloader from './Ui/Preloader'
import { useEffect, useRef } from 'react'
import useStore from './GlobalState'
import VideoBackground from './Ui/VideoBackground'

function App() {
  const location = useLocation()
  const pathname = location.pathname
  const [isModalVisible, setModalVisible] = useAtom(modalVisible)
  const [isModalImage, setModalImage] = useAtom(modalImage) // Use an empty object as the key
  const scrollToTopRef = useRef(null)
  const scrollToTopEf = useStore(state => state.scrollToTopEf)
  const setScrollToTopEf = useStore(state => state.setScrollToTopEf)

  const scrollToTop = () => {
    window.scrollTo({
      top: window.top,
      behavior: 'smooth' // Optional: for smooth scrolling§
    })
    setScrollToTopEf(true)
    console.debug('scrollToTopEf', scrollToTopEf)
    scrollToTopRef.current = setTimeout(() => {
      setScrollToTopEf(false)
    }, 2000)
  }

  const openModal = imageId => {
    setModalVisible(true)
    setModalImage(Images.images[imageId])
  }

  const closeModal = () => {
    setModalVisible(false)
    setTimeout(() => {
      setModalImage(null)
    }, 500)
  }

  useEffect(() => {
    scrollToTop
  }, [pathname])

  return (
    <>
      <ModalWindow closeModal={closeModal} isModalImage={isModalImage} isModalVisible={isModalVisible} />
      <Header scrollToTop={scrollToTop} />
      <MenuFullPage />
      <Preloader pathname={pathname} />
      <FullscreenModelPage pathname={pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={pathname} pathname={pathname}>
          <Route path="/" element={<ZoomlandPage pathname={pathname} scrollToTopEf={scrollToTopEf} />}></Route>
        </Routes>
        <ContentManager openModal={openModal} isModalVisible={isModalVisible} key="zoomland" />
        <ViewportManager />
      </AnimatePresence>
      <Footer scrollToTop={scrollToTop} pathname={pathname} />
      <Background pathname={pathname} showFullscreenMode={true} />
    </>
  )
}

export default App
