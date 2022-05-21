import CapBox from './CapBox'
import ContentContainer from './ContentContainer'
import Heading2 from './Heading2'

const Content = () => {
  return (
    <ContentContainer>
      <p>職業訓練校の5週間目はゴールデンウィークの間に実施されました。</p>
      <p>クラスメイトのうちの何人かともはじめて飲みに行ったので、ゴールデンウィークになにをして過ごしたのかや、クラスメイトについて感じたことなどをまとめておきたいと思います。</p>
      <CapBox />
      <Heading2 id='id0'>今週の記録</Heading2>
      <p>職業訓練は基本的にカレンダー通りに行われるので、カレンダーが祝日の日は休み、世間では大型連休となっている期間もカレンダーが平日だと訓練が実施されます。</p>
      <p>2022年のゴールデンウィークは飛び石連休だったので、19日目の訓練は5月2日（月）、20日目の訓練は5月6日（金）に実施されました。</p>
    </ContentContainer>
  )
}

export default Content
