import { Global } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={{
        html: {
          overflowX: 'hidden'
        },
        body: {
          fontFamily: 'sans-serif',
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
