'use client'

import { FC, useCallback } from 'react'

type CopyButtonProps = {
  text?: string
}

export const CopyButton: FC<CopyButtonProps> = (props) => {
  const { text } = props

  const onCopyButtonClick = useCallback(async () => {
    if (text) {
      try {
        await navigator.clipboard.writeText(text)
        //TODO: success toast
        console.log('copied!')
      } catch (error) {
        // TODO: error toast
        console.error(error)
      }
    } else {
      throw new Error('requested copying empty text to clipboard!')
    }
  }, [text])

  return <button onClick={onCopyButtonClick}>copy</button>
}
