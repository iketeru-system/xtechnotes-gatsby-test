import { css } from '@emotion/react'
import { colors, mq } from '../../utilities/styleUtilities'

const Caution = ({ children }) => {
  return (
    <p css={styles.caution}>{children}</p>
  )
}

export default Caution

const styles = {
  caution: css`
    position: relative;
    border: 2px solid #f7da38;
    padding: 40px 32px 32px;
    ${mq.smDown} {
      padding: 34px 26px 26px;
    }
    &::before {
      background-color: #f7da38;
      content: '\\e916';
      font-family: icomoon;
      font-size: 20px;
      line-height: 1;
      color: #fff;
      border: 2px solid ${colors.bg};
      border-radius: 50%;
      padding: 8px;
      position: absolute;
      top: -1px;
      left: 15px;
      transform: translateY(-50%);
    }
  `
}
