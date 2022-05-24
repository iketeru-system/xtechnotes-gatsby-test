import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { colors } from '../utilities/styleUtilities'

const ProfileBox = () => {
  return (
    <div css={styles.profileBox}>
      <figure css={styles.figure}>
        <StaticImage
          src='../images/digital-apple-300x300.jpg'
          alt=''
          layout='fixed'
          width={120}
          height={120}
          css={styles.img}
        />
      </figure>
      <div css={styles.name}>あん</div>
      <div css={styles.occupation}>エンジニア</div>
      <div css={styles.text}>
        駆け出しエンジニアです。<br /><br />
        2022年4月から1年間、職業訓練校でHTML・CSS・JavaScript・PHP・Javaの勉強をしています。<br /><br />
        前職は、英語教材編集者×家庭教師でした。使いやすさ・理解のしやすさ・正確性を考慮した、良質なサービスを提供することを心がけています。
        <div>
          <a href='https://xtechnotes.com/profile/'>
            READ MORE
          </a>
        </div>
      </div>
      <ul>
        <li>
          <a href='https://twitter.com/333ACCC' target='_blank' rel='noopener noreferrer'>
            <i />
          </a>
        </li>
        <li>
          <a href='https://xtechnotes.com/feed/' target='_blank' rel='noopener noreferrer'>
            <i />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ProfileBox

const styles = {
  profileBox: css`
    border: 1px solid ${colors.border};
    padding: 4px;
  `,

  figure: css`
    margin-top: 14px;
  `,

  img: css`
    margin: 0 auto;
    img {
      border-radius: 50%;
    }
  `,

  name: css`
    margin-top: 8px;
    font-size: 15px;
    text-align: center;
  `,

  occupation: css`
    font-size: 12px;
    text-align: center;
  `,

  text: css`
    padding: 14px;
    font-size: 14px;
  `
}
