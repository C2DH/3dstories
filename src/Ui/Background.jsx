import './Background.css'
import { useEffect, useRef, useState } from 'react'
import { useScrollStore } from '../components/ScrollManager'
import zoomlandRoute from '../Data/zoomland.json'

const Background = ({ pathname, showFullscreenMode }) => {
  const ratioRef = useRef(useScrollStore.getState().scrollRatio)
  const pageRef = useRef(useScrollStore.getState().page)
  const totalPagesRef = useRef(0)
  const [backgroundClass, setBackgroundClass] = useState('')

  const ZoomlandRoute = '/'

  const AvailableContents = {
    [ZoomlandRoute]: zoomlandRoute
  }
  const contents = AvailableContents[pathname]

  const backgroundValues = contents?.sections
    .filter(section => section.background)
    .map(section => ({ id: section.id, background: section.background }))
  console.info('Background values:', backgroundValues)

  useEffect(() => {
    return useScrollStore.subscribe(state => {
      ratioRef.current = state.scrollRatio * (totalPagesRef.current - 1)
      if (pageRef.current !== state.page) {
        pageRef.current = state.page
        const currentSection = backgroundValues?.find(section => section.id === pageRef.current + 1)
        if (currentSection) {
          setBackgroundClass(currentSection.background)
        } else {
          setBackgroundClass('')
        }
        console.info('[BG]', currentSection, pageRef.current, backgroundClass)
      }
    })
  }, [pageRef.current])

  return (
    <div className={`Background ${backgroundClass} pointer-events-none`}>
      {showFullscreenMode === true ? <div className="filled"></div> : null}
    </div>
  )
}

export default Background
