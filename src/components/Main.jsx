import { css } from '@emotion/react'
import { mq } from '../utilities/styleUtilities'
import Article from './Article'

const Main = () => {
  return (
    <div css={styles.main}>
      <Article />
    </div>
  )
}

export default Main

const styles = {
  main: css`
    ${mq.mdUp} {
      width: calc(100% - 356px);
    }
  `
}
