import { atom } from 'jotai'
import { create } from 'zustand'

export const currentPageAtom = atom(0)
export const scene1Atom = atom(false)
export const currentSceneAtom = atom(1)
export const watchLoadedAtom = atom(false)

export const showFullscreenMode = atom(false)

export const buttonClickCounterAtom = atom(0)

export const scrollOffset = atom(0)
export const currentPage = atom(0)

const useStore = create(set => ({
  isMenuOpen: false,
  toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
  showFullscreenMode: false,
  toggleShowFullscreenMode: () => set(state => ({ showFullscreenMode: !state.showFullscreenMode }))
}))

export default useStore
