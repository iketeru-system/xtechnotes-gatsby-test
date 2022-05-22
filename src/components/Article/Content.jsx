import CapBox from './CapBox'
import ContentContainer from './ContentContainer'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import Tweet from './Tweet'
import { useTwitter } from './useTwitter'

const Content = () => {
  useTwitter()

  return (
    <ContentContainer>
      <p>職業訓練校の5週間目はゴールデンウィークの間に実施されました。</p>
      <p>クラスメイトのうちの何人かともはじめて飲みに行ったので、ゴールデンウィークになにをして過ごしたのかや、クラスメイトについて感じたことなどをまとめておきたいと思います。</p>
      <CapBox />
      <Heading2 id='id0'>今週の記録</Heading2>
      <p>職業訓練は基本的にカレンダー通りに行われるので、カレンダーが祝日の日は休み、世間では大型連休となっている期間もカレンダーが平日だと訓練が実施されます。</p>
      <p>2022年のゴールデンウィークは飛び石連休だったので、19日目の訓練は5月2日（月）、20日目の訓練は5月6日（金）に実施されました。</p>
      <Heading3 id='id1'>19日目</Heading3>
      <Tweet>
        <blockquote className='twitter-tweet' data-width='500' data-dnt='true'>
          <p lang='ja' dir='ltr'>職業訓練19日目（2022/5/2）<br /><br />職業訓練はカレンダー通りに行われるので、今年のGWは飛び石になってます。<br /><br />昨日の授業はこれ。<br /><br />🍏午前：PHP（変数とは、型の変換、var_dump関数、ヒアドキュメント）<br />🍏午後：Web概論（ググってまとめてみよう）<a href='https://twitter.com/hashtag/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%88%9D%E5%BF%83%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw'>#プログラミング初心者</a><a href='https://twitter.com/hashtag/%E9%A7%86%E3%81%91%E5%87%BA%E3%81%97%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2?src=hash&amp;ref_src=twsrc%5Etfw'>#駆け出しエンジニア</a></p>&mdash; あん🔰プログラミング訓練中 (@333ACCC) <a href='https://twitter.com/333ACCC/status/1521354713861877761?ref_src=twsrc%5Etfw'>May 3, 2022</a>
        </blockquote>
      </Tweet>
      <Heading3 id='id1'>20日目</Heading3>
      <Tweet>
        <blockquote class='twitter-tweet' data-width='500' data-dnt='true'>
          <p lang='ja' dir='ltr'>職業訓練20日目（2022/5/6）<br /><br />午前午後通して、これまでのアルゴリズムの復習と簡単なJava。<br /><br />Javaは今のところ本腰入れてないんだけど、GWに必死にPHPやったおかげでif文とかwhile文とか困らなかったのラッキーだった😂<a href='https://twitter.com/hashtag/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%88%9D%E5%BF%83%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw'>#プログラミング初心者</a><a href='https://twitter.com/hashtag/%E9%A7%86%E3%81%91%E5%87%BA%E3%81%97%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2?src=hash&amp;ref_src=twsrc%5Etfw'>#駆け出しエンジニア</a></p>&mdash; あん🔰プログラミング訓練中 (@333ACCC) <a href='https://twitter.com/333ACCC/status/1522547149548167169?ref_src=twsrc%5Etfw'>May 6, 2022</a>
        </blockquote>
      </Tweet>
      <p>この日にはじめて、同じ掃除グループのクラスメイトと飲みに行きました。（もちろん感染対策済み）</p>
    </ContentContainer>
  )
}

export default Content
