import CapBox from './CapBox'
import Caution from './Caution'
import ContentContainer from './ContentContainer'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import Pencil from './Pencil'
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
      <Pencil>職業訓練には掃除の時間があり、掃除のグループがつくられています。</Pencil>
      <p>これは飲み会でみんな言ってたことなんだけど、わたしたちの職業訓練がはじまった2022年の春はまだコロナ禍なので、訓練校での食事の時間は黙食が徹底されています。そのため、クラスメイトと気軽に話せる雰囲気がなかなかないんですよね。</p>
      <p>この日ようやくはじめていろんなクラスメイトとフランクに話すことができました。訓練校の感想とか、訓練校に通う前はなにやっていたのかとか、出身地はとか趣味はとかいろいろ。</p>
      <p>
        わたしの掃除グループでいうと、女性よりも男性のほうがちょっと多くて、年齢は20代前半から上は40代ぐらい（推測）まで、前職も本当にバラバラなんだけど、みんな話しやすいし、勉強もがんばってる様子だし、今となっては
        <a href='https://xtechnotes.com/hellotraining-exam/'>職業訓練校の選考試験</a>ってすごくちゃんとしていたんじゃないかと思います。
      </p>
      <Heading3 id='id3'>ゴールデンウィーク中</Heading3>
      <p>2022年の職業訓練校的なゴールデンウィークは、4月29日（祝）、4月30日（土）、5月1日（日）、5月3日（祝）、5月4日（祝）、5月5日（祝）、5月7日（土）、5月8日（日）でした。</p>
      <p>職業訓練校では基本的には授業時間外でやらなければいけない課題は出されないため、休みの日は自分のしたい勉強に当てることができます。</p>
      <p>このお休みあって本当によかったーーーーー！！！！！</p>
      <p>わたしの場合は、今まで勉強したことがない×今授業でやっている×将来的にも必要になるだろうという条件に当てはまるPHPを、Progateを使って集中的に勉強していました。</p>
      <Tweet>
        <blockquote class='twitter-tweet' data-width='500' data-dnt='true'>
          <p lang='ja' dir='ltr'>いろいろ中途半端になっちゃうと混乱しちゃうから、このゴールデンウィークはPHPにベットしてるんだけど、HTMLとかCSSとかJavaScript全然手つけてない。Javaも。<br /><br />この順番でよかったのかな？あとから追い上げれば問題ない？😂<a href='https://twitter.com/hashtag/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%88%9D%E5%BF%83%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw'>#プログラミング初心者</a><a href='https://twitter.com/hashtag/%E9%A7%86%E3%81%91%E5%87%BA%E3%81%97%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2?src=hash&amp;ref_src=twsrc%5Etfw'>#駆け出しエンジニア</a></p>&mdash; あん🔰プログラミング訓練中 (@333ACCC) <a href='https://twitter.com/333ACCC/status/1522198986404540417?ref_src=twsrc%5Etfw'>May 5, 2022</a>
        </blockquote>
      </Tweet>
      <p>クラスメイトの話を聞いていると、リフレッシュに使ったとか、家族との時間に使ったとか、本当にみんな好きな過ごし方をしていたようなので、休みを自由に使えるっていうのは職業訓練のメリットかなと思います。</p>
      <Heading2 id='id4'>今週の気づき</Heading2>
      <Caution>以下は体験に基づいたものなので、学校によって環境が違うこともあるかと思います。</Caution>
    </ContentContainer>
  )
}

export default Content
