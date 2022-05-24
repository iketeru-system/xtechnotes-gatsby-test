import { css } from '@emotion/react'

const Button = ({ children, ...props }) => {
  return (
    <a {...props} css={styles.btn}>
      {children}
    </a>
  )
}

export default Button

const styles = {
  btn: css`
    padding: 11px 21px;
    background-color: #666;
    color: #fff;
    box-shadow: 0 2px 2px rgba(0,0,0,.1), 0 4px 8px -4px rgba(0,0,0,.2);
    border-radius: 80px;
    font-weight: bold;
    display: inline-block;
    letter-spacing: 1px;
    line-height: 1.5;
    text-decoration: none;
    transition: box-shadow 0.25s;
    &:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,.1), 0 12px 24px -12px rgba(0,0,0,.2);
    }
  `
}
