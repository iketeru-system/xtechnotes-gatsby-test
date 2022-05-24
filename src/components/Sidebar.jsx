import { css } from '@emotion/react'
import { mq } from '../utilities/styleUtilities'
import ProfileBox from './ProfileBox'

const Sidebar = () => {
  return (
    <div css={styles.sidebar}>
      <ProfileBox />
    </div>
  )
}

export default Sidebar

const styles = {
  sidebar: css`
    ${mq.mdUp} {
      width: 304px;
    }
    ${mq.mdDown} {
      margin-top: 54px;
    }
  `
}
