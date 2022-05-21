import { css } from '@emotion/react'
import { mq } from '../../utilities/styleUtilities'

const ContentContainer = ({ children }) => {
  return (
    <div css={styles.content}>
      {children}
    </div>
  )
}

export default ContentContainer

const styles = {
  content: css`
    font-size: 16px;
    margin: 64px 0;
    ${mq.mdUp} {
      padding: 0 16px;
    }
    >* {
      margin-bottom: 32px;
    }    
  `
}
