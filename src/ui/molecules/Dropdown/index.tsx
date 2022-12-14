import { useState } from 'react'

import * as S from './styles'
import * as T from './types'

export const Dropdown = ({
  header = 'Header',
  children = 'Content',
  direction = 'centerRight',
  isOpacity = false,
  priority = 'medium',
  isFull = true,
  ...props
}: T.Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper isOpen={isOpen} priority={priority}>
      <S.Header onClick={() => setIsOpen(!isOpen)}> {header} </S.Header>
      <S.Content
        aria-hidden={!isOpen}
        direction={direction}
        isFull={isFull}
        {...props}
      >
        {children}
      </S.Content>
      <S.Overlay
        isOpacity={isOpacity}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
    </S.Wrapper>
  )
}
