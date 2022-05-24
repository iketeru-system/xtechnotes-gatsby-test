import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { colors, mq } from '../../utilities/styleUtilities'

const CapBox = () => {
  return (
    <div>
      <div css={styles.title}>
        この記事を書いたときの状況
      </div>
      <div css={styles.content}>
        <div css={styles.columns}>
          <div css={styles.col1}>
            <figure css={styles.figure}>
              <StaticImage
                src='../../images/digital-apple-300x300.jpg'
                alt=''
                layout='fixed'
                width={129}
                height={129}
                css={styles.img}
              />
              <figurecaption css={styles.figurecaption}>
                あん
              </figurecaption>
            </figure>
          </div>
          <div css={styles.col2}>
            <ul css={styles.list}>
              <li css={styles.listItem}>2022年から職業訓練校に通っています</li>
              <li css={styles.listItem}>最近はPHPとJavaScriptをがんばって勉強したい欲が上昇中</li>
              <li css={styles.listItem}>クラスの雰囲気が好き</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapBox

const styles = {
  title: css`
    background-color: ${colors.bg};
    color: ${colors.main};
    padding: 7px 10px;
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    position: relative;
    text-align: center;
    top: 1em;
    left: 1em;
    z-index: 1;
  `,

  content: css`
    border: 1px solid ${colors.main};
    margin-top: -2px;
    padding: 23px 19px 19px;
    position: relative;
    z-index: 0;
    ${mq.smUp} {
      padding: 32px 24px 24px;
    }
  `,

  columns: css`
    ${mq.smUp} {
      display: flex;
    }
  `,

  col1: css`
    ${mq.smUp} {
      flex-basis: 33.33%;
    }
  `,

  figure: css`
    text-align: center;
  `,

  img: css`
    margin: 0 auto;
    img {
      border-radius: 50%;
    }
  `,

  figurecaption: css`
    display: block;
    font-size: 13px;
    margin-top: 10px;
  `,

  col2: css`
    ${mq.smUp} {
      flex-basis: 66.66%;
      margin-left: 24px;
    }
    ${mq.smDown} {
      margin-top: 23px;
    }
  `,

  list: css`
    padding-left: 8px;
    list-style-type: none;
  `,

  listItem: css`
    position: relative;
    margin: 4px 0 12px;
    padding: 0 0 12px 20px;
    border-bottom: 1px dashed rgba(199, 199, 199, 0.5);
    &::before {
      position: absolute;
      top: calc(0.75em - 3px);
      left: 2px;
      background-color: currentColor;
      border-radius: 50%;
      color: inherit;
      content: "";
      display: block;
      height: 6px;
      width: 6px;
    }
  `
}
