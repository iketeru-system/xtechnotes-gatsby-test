import { css } from '@emotion/react'
import { colors, mq } from '../../utilities/styleUtilities'

const Heading3 = ({ children, id }) => {
  return <h3 css={styles.h3} id={id}>{children}</h3>
}

export default Heading3

const styles = {
  h3: css`
    position: relative;
    margin-top: 62px;
    margin-bottom: 42px;
    padding: 0 10px 10px;
    font-size: 21px;
    ${mq.smDown} {
      margin-top: 56px;
      margin-bottom: 37px;
      padding: 0 9px 9px;
      font-size: 19px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(90deg, ${colors.htag} 29%, rgba(5, 70, 95, 0.2) 29%);
    }
  `
}
