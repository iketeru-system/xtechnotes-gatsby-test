import { Global } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={{
        html: {
          overflowX: 'hidden'
        },
        body: {
          fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", sans-serif',
          lineHeight: 1.75,
          boxSizing: 'border-box'
        },
        '*': {
          margin: 0,
          padding: 0,
          fontSize: 'inherit',
          fontWeight: 'inherit'
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit'
        }
      }}
    />
  )
}

export default GlobalStyles
