'use client'

import { FC, Ref, useCallback } from 'react'

type AnimationBaseButtonProps = {
  ref?: Ref<HTMLButtonElement>
  className?: string
}

export const AnimationBaseButton: FC<AnimationBaseButtonProps> = (props) => {
  const { ref, className } = props

  const onButtonClick = useCallback(() => {
    console.log('Button clicked!')
  }, [])

  return (
    <button ref={ref} onClick={onButtonClick} className={className}>
      Click Me!
    </button>
  )
}
