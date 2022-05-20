import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <header
      css={{
        boxShadow: '0 1px 4px rgb(0 0 0 / 12%)'
      }}
    >
      <div
        css={{
          maxWidth: '1296px',
          margin: '0 auto',
          padding: '0 48px'
        }}
      >
        <div
          css={{
            padding: '16px 0'
          }}
        >
          <StaticImage
            src='../images/headerlogo.jpg'
            layout='fixed'
            width={178}
            height={40}
            alt='Xtechのーと'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
