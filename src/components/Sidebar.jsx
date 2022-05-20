import { css } from '@emotion/react'
import { mq } from '../utilities/styleUtilities'

const Sidebar = () => {
  return (
    <div css={styles.sidebar}>
      Sidebar
    </div>
  )
}

export default Sidebar

const styles = {
  sidebar: css`
    padding: 200px 0;
    background-color: #ccc;
    text-align: center;
    ${mq.mdUp} {
      width: 304px;
    }
    ${mq.mdDown} {
      margin-top: 54px;
    }
  `
}
