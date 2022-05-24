import { css } from '@emotion/react'
import { colors } from '../utilities/styleUtilities'

const TwitterLink = ({ href }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      css={styles.link}
    >
      <i css={styles.icon} />
    </a>
  )
}

export default TwitterLink

const styles = {
  link: css`
    display: block;
    padding: 5px;
    box-sizing: content-box;
    width: 1em;
    border: 1px solid ${colors.text};
    border-radius: 50%;
    color: ${colors.text};
    text-decoration: none;
    line-height: 1;
    transition: box-shadow 0.25s;
    &:hover {
      box-shadow: 0 2px 8px rgba(0,0,0,.25);
    }
  `,

  icon: css`
    line-height: 1;
    &::before {
      font-family: icomoon;
      content: '\\e90d';
      font-style: normal;
    }
  `
}
