import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>【体験談】プログラミング系の職業訓練校｜5週間目 | Xtechのーと</title>
        <link rel='icon' type='image/png' href={favicon} />
      </Helmet>
      <div>Xtechnotes Gatsby Test</div>
    </>
  )
}

export default IndexPage
