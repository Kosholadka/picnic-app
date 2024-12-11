import { useEffect } from 'react'
import classNames from 'classnames'

import { Container } from './Container'

export namespace Backdrop {
  export interface Props {
    children: Children
    onClick: () => void
    isVisible: boolean
  }
}

export const Backdrop = ({ children, onClick, isVisible }: Backdrop.Props) => {
  useEffect(() => {
    if (isVisible) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isVisible])

  return (
    <Container
      onClick={onClick}
      className={classNames(
        'fixed inset-0 transition-colors z-50',
        isVisible ? 'visible bg-black/50' : 'invisible'
      )}
    >
      {children}
    </Container>
  )
}
