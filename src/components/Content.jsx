import { css } from '@emotion/react'
import { mq } from '../utilities/styleUtilities'
import Main from './Main'
import Sidebar from './Sidebar'

const Content = () => {
  return (
    <div css={styles.content}>
      <Main />
      <Sidebar />
    </div>
  )
}

export default Content

const styles = {
  content: css`
    max-width: 1296px;
    padding: 27px 15px 81px;
    margin-left: auto;
    margin-right: auto;
    ${mq.smUp} {
      padding: 64px 30px 96px;
    }
    ${mq.mdUp} {
      padding: 64px 48px 96px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `
}
