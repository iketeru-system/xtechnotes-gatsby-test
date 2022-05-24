import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import { mq } from '../utilities/styleUtilities'

const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.inner}>
        <div css={styles.logo}>
          <StaticImage
            src='../images/headerlogo.jpg'
            layout='fixed'
            width={178}
            height={40}
            alt='Xtechのーと'
            loading='eager'
            css={styles.logoImg}
          />
        </div>
      </div>
    </header>
  )
}

export default Header

const styles = {
  header: css`
    box-shadow: 0 1px 4px rgb(0 0 0 / 12%);
  `,

  inner: css`
    max-width: 1296px;
    margin: 0 auto;
    padding: 0 48px;
    ${mq.mdDown} {
      padding: 0;
      display: flex;
      justify-content: center;
    }
  `,

  logo: css`
    padding: 16px 0;
    ${mq.mdDown} {
      padding: 10px 0;
    }
  `,

  logoImg: css`
    img {
      opacity: 1 !important;
    }
  `
}
