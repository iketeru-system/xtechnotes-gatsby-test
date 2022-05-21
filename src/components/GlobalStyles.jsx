import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global styles={styles} />
  )
}

export default GlobalStyles

const styles = css`
  html {
    overflow-x: hidden;
  }

  body {
    font-family: "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", sans-serif;
    line-height: 1.6;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    line-height: inherit;
  }
`
