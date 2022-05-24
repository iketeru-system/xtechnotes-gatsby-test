import { css } from '@emotion/react'

const Pencil = ({ children }) => {
  return (
    <p css={styles.pencil}>{children}</p>
  )
}

export default Pencil

const styles = {
  pencil: css`
    position: relative;
    padding: 16px 16px 16px 68px;
    background-color: #f7f7f7;
    &::before {
      font-family: icomoon;
      font-size: 24px;
      color: #7a7a7a;
      content: "\\e934";
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      content: '';
      position: absolute;
      top: 25%;
      left: 52px;
      height: 50%;
      width: 0;
      border-right: 1px dashed #7a7a7a;
      opacity: 0.5;
    }
  `
}
