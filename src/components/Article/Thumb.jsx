import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const Thumb = () => {
  return (
    <figure css={styles.figure}>
      <StaticImage
        src='../../images/article-thumb.png'
        alt=''
        loading='eager'
        css={styles.img}
      />
    </figure>
  )
}

export default Thumb

const styles = {
  figure: css`
    margin: 32px 0;
    text-align: center;
    width: 100%;
  `,

  img: css`
    img {
      opacity: 1 !important;
    }
  `
}
