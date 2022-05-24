import { css } from '@emotion/react'
import { colors, mq } from '../../utilities/styleUtilities'

const Heading2 = ({ children, id }) => {
  return <h2 css={styles.h2} id={id}>{children}</h2>
}

export default Heading2

const styles = {
  h2: css`
    position: relative;
    background-color: ${colors.htag};
    padding: 17px 22px;
    margin: 90px -16px 45px;
    color: #fff;
    font-size: 22px;
    ${mq.smDown} {
      padding: 14px 18px;
      margin: 72px -8px 36px;
      font-size: 18px;
    }
    &::before {
      position: absolute;
      content: "";
      top: -4px;
      left: 0;
      width: 100%;
      height: calc(100% + 4px);
      border-top: 2px solid ${colors.htag};
      border-bottom: 2px solid ${colors.htag};
    }
  `
}
