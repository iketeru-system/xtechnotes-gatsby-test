import Helmet from 'react-helmet'
import '../fonts/icomoon.css'
import Content from '../components/Content'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import favicon from '../images/favicon.png'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>【体験談】プログラミング系の職業訓練校｜5週間目 | Xtechのーと</title>
        <link rel='icon' type='image/png' href={favicon} />
        <meta name='robots' content='noindex' />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Content />
    </>
  )
}

export default IndexPage
