import { css } from '@emotion/react'

const Pencil = ({ children }) => {
  return (
    <p css={styles.pencil}>{children}</p>
  )
}

export default Pencil

const styles = {
  pencil: css`
    padding: 16px;
    background-color: #f7f7f7;
  `
}
