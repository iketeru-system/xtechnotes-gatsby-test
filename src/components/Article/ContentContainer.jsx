import { css } from '@emotion/react'

const ContentContainer = () => {
  return (
    <div css={styles.content}>
      Content
    </div>
  )
}

export default ContentContainer

const styles = {
  content: css`
    >* {
      margin-bottom: 32px;
    }    
  `
}
