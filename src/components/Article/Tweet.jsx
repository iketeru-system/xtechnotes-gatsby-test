import { css } from '@emotion/react'

const Tweet = ({ children }) => {
  return (
    <figure css={styles.wrapper}>
      {children}
    </figure>
  )
}

export default Tweet

const styles = {
  wrapper: css`
    max-width: 500px;
    margin: 0 auto 32px;
  `
}
