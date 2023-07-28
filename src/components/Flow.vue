<template>
  <v-container fluid fill-height style='margin-bottom: 50px;'>
    <v-row class='text-center'>
      <div class="scrolldown2"><span>Scroll</span></div>
      <v-col cols='12'>
        <h1 class='mb-3 bahn' style="font-size: 390%;">
          <span style="font-size: 90%">F</span><span class="bahn">low</span>
          <p style="font-size: 10%; margin-top: -15px; letter-spacing:0;">制作から納品までの流れ</p>
        </h1>
      </v-col>
      <v-col cols='1'></v-col>
      <v-col cols='10'>
        <div class='gray-back'>
          <v-img
            :src="require('../assets/flow.png')"
            class='my-3'
            contain
            height='120'
          />
        </div>
        <div class='explain' style="margin-top: -10px;">
          <p>会社紹介、商品紹介、Webサービス紹介、採用、イベント・展示会、テレビCMなど、目的に合わせた様々なプロモーション映像を提供しております。</p>
          <p style="margin-top: -20px;">幅広い撮影機材を駆使して、空撮などのインパクトのある撮影も可能です。目的やご要望に適した効果の高い、動画制作を企画から制作までトータルプロデュースいたします。</p>
        </div>
      </v-col>
      <v-col cols='1'></v-col>
      <v-col cols='1'></v-col>
      <v-col cols='10'>
        <div style='text-align:left;'>
          <hr width='100%'>
          <v-row style='height:200px;'>
            <v-col cols='2' align-items: center>
              <div class="step bahn">▶︎STEP1</div>
            </v-col>
            <v-col cols='7' style='font-weight: bold;'>
              <p class='h-step'>お打ち合わせ</p>
              <p class='step-contents'>お打ち合わせで決まった内容でお見積もりを提出させていただきます。</p>
            </v-col>
            <v-col cols='3' align='center'>
              <img style='margin-top: 3.5%;' src="../assets/top_demo.jpg" width='90%' height='90%' alt="パンダ">
            </v-col>
          </v-row>
          <hr width='100%'>
          <v-row style='height:200px;'>
            <v-col cols='2' display: flex align-items: center>
              <div class="step bahn">▶︎STEP2</div>
            </v-col>
            <v-col cols='7' style='font-weight: bold;'>
              <p class='h-step'>企画提案</p>
              <p class='step-contents'>お打ち合わせで決まった内容を元に絵コンテ・企画構成・タイムスケジュールなどを決定します。</p>
            </v-col>
            <v-col cols='3' align='center'>
              <img style='margin-top: 3.5%;' src="../assets/top_demo.jpg" width='90%' height='90%' alt="パンダ">
            </v-col>
          </v-row>
          <hr width='100%'>
          <v-row style='height:200px;'>
            <v-col cols='2' display: flex align-items: center>
              <div class="step bahn">▶︎STEP3</div>
            </v-col>
            <v-col cols='7' style='font-weight: bold;'>
              <p class='h-step'>撮影</p>
              <p class='step-contents'>完成した絵コンテに沿って撮影していきます。</p>
            </v-col>
            <v-col cols='3' align='center'>
              <img style='margin-top: 3.5%;' src="../assets/top_demo.jpg" width='90%' height='90%' alt="パンダ">
            </v-col>
          </v-row>
          <hr width='100%'>
          <v-row style='height:200px;'>
            <v-col cols='2' display: flex align-items: center>
              <div class="step bahn">▶︎STEP4</div>
            </v-col>
            <v-col cols='7' style='font-weight: bold;'>
              <p class='h-step'>編集</p>
              <p class='step-contents'>撮影から約2週間ほどで第一稿を提出致します。</p>
              <p class='step-contents'>*修正回数の制限は設けておりませんのでクライアント様が満足頂くまで修正致します。</p>
            </v-col>
            <v-col cols='3' align='center'>
              <img style='margin-top: 3.5%;' src="../assets/top_demo.jpg" width='90%' height='90%' alt="パンダ">
            </v-col>
          </v-row>
          <hr width='100%'>
          <v-row style='height:200px;'>
            <v-col cols='2' display: flex align-items: center>
              <div class="step bahn">▶︎STEP5</div>
            </v-col>
            <v-col cols='7' style='font-weight: bold;'>
              <p class='h-step'>納品</p>
              <p class='step-contents'>撮影から１ヵ月程度を目安に納品させて頂きます。</p>
            </v-col>
            <v-col cols='3' align='center'>
              <img style='margin-top: 3.5%;' src="../assets/top_demo.jpg" width='90%' height='90%' alt="パンダ">
            </v-col>
          </v-row>
          <hr width='100%'>
        </div>
      </v-col>
      <div class='line-container'><span>Contact</span></div>
      <v-col cols='12'>
        <div style='position: relative; height:200px; background: white;'>
          <hr style='margin-top: 100px;' color='black' width='100%'>
          <div style='margin-top: 30px;'>
            <v-row class='footer-card'>
              <v-col>
                <p style='font-weight: bold;'>映像制作の依頼・お見積もり・ご相談はulu_create_inc.にお任せください。</p>
              </v-col>
            </v-row>
            <v-row class='footer-card' style='font-weight: bold; font-size: 80%'>
              <v-col cols='1'></v-col>
              <v-col cols='3'>メールでのお問い合わせ</v-col>
              <v-col cols='4'></v-col>
              <v-col cols='3'>お電話でのお問い合わせ</v-col>
            </v-row>
            <v-row style='margin-top: -15px; font-size: 30%;'>
              <v-col cols='1'></v-col>
              <v-col cols='3'>
                <p>24時間受け付けております。</p>
              </v-col>
              <v-col cols='4'></v-col>
              <v-col cols='3'>
                <p>【受付時間】 10:00〜19:00 【定休日】 日曜日</p>
              </v-col>
            </v-row>
            <v-row class='footer-card'>
              <v-col cols='1'></v-col>
              <v-col cols='3'>
                <v-btn color='cyan' class='white--text' width='80%' @click="toContact('changePage', 4)">お問い合わせフォームへ</v-btn>
              </v-col>
              <v-col cols='4'></v-col>
              <v-col cols='3'>
                <p style='font-size: 130%;'>☎︎ 000-0000-0000</p>
              </v-col>
            </v-row>
            <v-row>
             <v-col>
                <div></div>
              </v-col>
            </v-row>
          </div>
          <hr style='position: absolute; bottom: 0px;' color='black' width='100%'>
        </div>
      </v-col>
      <v-col cols='1'></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FlowPage',

  data: () => ({}),
  methods: {
    toContact (name, e) {
      window.scroll(
        {
          top: 0,
          behavior: 'smooth'
        }
      )
      this.$emit(name, e)
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/bahnschrift');
/*=== 9-1-2 丸が動いてスクロールを促す ====*/

/*スクロールダウン全体の場所*/
.scrolldown2 {
  /*描画位置※位置は適宜調整してください*/
  position: fixed;
  bottom: 20vh;
  right: 8%;
}

/*Scrollテキストの描写*/
.scrolldown2 span {
  /*描画位置*/
  position: absolute;
  left: 10px;
  bottom: 12px;
  /*テキストの形状*/
  color: rgba(0, 0, 0, 0.753);
  font-size: 1rem;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

/* 丸の描写 */
.scrolldown2:before {
  content: '';
  /*描画位置*/
  position: absolute;
  bottom: 0;
  left: -2px;
  /*丸の形状*/
  width: 6px;
  height: 3px;
  border-radius: 0%;
  background: rgb(0, 0, 0);
  /*丸の動き1.6秒かけて透過し、永遠にループ*/
  animation: circlemove 1.6s ease-in-out infinite,
    cirlemovehide 1.6s ease-out infinite;
}

/*下からの距離が変化して丸の全体が上から下に動く*/
@keyframes circlemove {
  0% {
    bottom: 70px;
  }
  100% {
    bottom: 0px;
  }
}

/*上から下にかけて丸が透過→不透明→透過する*/
@keyframes cirlemovehide {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

/* 線の描写 */
.scrolldown2:after {
  content: '';
  /*描画位置*/
  position: absolute;
  bottom: 0;
  left: 0;
  /*線の形状*/
  width: 2px;
  height: 70px;
  background: rgba(0, 0, 0, 0.377);
}

.bahn {
  text-transform: none;
  font-family: Bahnschrift;
  font-size: 105%;
  letter-spacing: 0.08em;
}

.gray-back {
  background-color: rgba(128, 128, 128, 0.418);
  margin-right: 2%;
  margin-left: 2%;
}

.explain {
  font-size: 50%;
  text-align: left;
  margin-right: 2%;
  margin-left: 2%;
  font-weight: 800;
  -moz-transform: scale(0.95) translate(-2.5%, -2.5%);
  -webkit-transform: scale(0.95) translate(-2.5%, -2.5%);
}

.step {
  margin-left: 20px;
  margin-top: 70px;
  font-size: 120%;
}

.h-step {
  padding-top: 35px;
  font-size: 140%;
}

.step-contents {
  font-size: 80%;
  margin-top: -10px;
}

/*スクロールダウン全体の場所*/
.line-container{
    /*描画位置※位置は適宜調整してください*/
  position:absolute;
  bottom: 1%;
  right: 50%;
    /*矢印の動き1秒かけて永遠にループ*/
  animation: arrowmove 3s ease-in-out infinite;
}

/*下からの距離が変化して全体が下→上→下に動く*/
@keyframes arrowmove{
      0%{bottom:300px;}
      50%{bottom:270px;}
     100%{bottom:300px;}
 }

/*Scrollテキストの描写*/
.line-container span{
    /*描画位置*/
  position: absolute;
  left:-20px;
  bottom:10px;
    /*テキストの形状*/
  color: rgb(80, 8, 8);
  font-size: 1rem;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
}

/* 矢印の描写 */
.line-container:before {
    content: "";
    /*描画位置*/
    position: absolute;
    bottom: 0;
    right: -6px;
    /*矢印の形状*/
    width: 1px;
    height: 20px;
    background: rgba(0, 0, 0, 0.815);
    transform: skewX(-31deg);
}

.line-container:after{
  content:"";
    /*描画位置*/
  position: absolute;
  bottom:0;
  right:0;
    /*矢印の形状*/
  width:1px;
  height: 50px;
  background:rgb(0, 0, 0, 0.815);
}

.footer-card {
  margin-top: -30px;
}
</style>
