import { css } from '@emotion/react'
import { colors, mq } from '../../utilities/styleUtilities'

const Head = () => {
  return (
    <div css={styles.head}>
      <h1 css={styles.title}>【体験談】プログラミング系の職業訓練校｜5週間目</h1>
      <time datetime='2022-05-07' css={styles.date}>
        <span css={styles.year}>2022</span>
        <span css={styles.md}>5/07</span>
      </time>
    </div>
  )
}

export default Head

const styles = {
  head: css`
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
  `,

  title: css`
    font-size: 5vw;
    line-height: 1.4;
    width: 100%;
    ${mq.smUp} {
      font-size: 24px;
    }
  `,

  date: css`
    border-right: 1px solid ${colors.border};
    line-height: 1;
    margin-right: 12px;
    padding: 8px 12px 8px 0;
    text-align: center;
  `,

  year: css`
    display: block;
    font-size: 3vw;
    line-height: 1;
    margin-bottom: 4px;
    ${mq.smUp} {
      font-size: 14px;
    }
  `,

  md: css`
    display: block;
    font-size: 4.2vw;
    ${mq.smUp} {
      font-size: 24px;
    }
  `
}
