<template>
  <v-app>
    <div id="splash">
      <div id="splash_logo">
        <svg id="mask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 790">
          <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../src/assets/logo4.png" width="700" height="790" mask="url(#clipmask)"></image>
          <mask id="clipmask" maskUnits="objectBoundingBox">
            <polyline class="st0" points="21.6 406.56 201.76 265.25 89.16 430.69 269.32 285.92 172.81 441.95 381.93 290.74 278.98 429.08 468.79 279.48 330.45 469.3 560.48 265.25 439.84 469.3 650.56 265.25 541.18 457.25 747.08 265.25 639.3 457.25 821.07 265.25 736.34 469.3 896.68 265.25 829.12 457.25 988.37 273.05 938.5 457.25 1084.89 265.25 1028.58 457.25 1168.53 276.26 1120.27 445.17 1231.27 335.78 1166.92 469.3 1179.79 28.54 1168.53 678.41"/>
            <path class="st0" d="m21.6,406.56l171.51-134.52c4.76-3.73,5.87-2.7,2.47,2.3l-100.22,147.25c-3.4,5-2.33,5.99,2.39,2.2l163.01-130.99c4.72-3.79,5.97-2.68,2.79,2.46l-84.94,137.32c-3.18,5.15-1.78,6.45,3.13,2.91l191.29-138.32c4.9-3.54,5.96-2.47,2.35,2.38l-89.82,120.69c-3.61,4.85-2.68,5.76,2.07,2.02l172.54-135.98c4.75-3.74,5.72-2.81,2.16,2.08l-125.38,172.04c-3.56,4.89-2.78,5.6,1.75,1.59l213.57-189.44c4.53-4.01,5.71-3.04,2.63,2.17l-109.45,185.11c-3.08,5.21-2.04,6.03,2.3,1.82l194.92-188.74c4.35-4.21,5.45-3.35,2.46,1.91l-98.49,172.88c-2.99,5.26-1.82,6.18,2.6,2.06l189.81-177c4.42-4.13,5.62-3.19,2.66,2.09l-97.01,172.82c-2.96,5.28-1.98,6,2.18,1.6l166.65-176.02c4.16-4.39,5.66-3.42,3.34,2.17l-76.3,183.73c-2.32,5.59-1.16,6.27,2.58,1.51l146.75-186.75c3.74-4.76,5.15-3.98,3.15,1.73l-60.26,171.25c-2.01,5.71-.41,6.63,3.54,2.05l144.86-167.56c3.96-4.58,5.9-3.54,4.32,2.3l-44.12,162.97c-1.58,5.84.13,6.68,3.79,1.87l133.04-174.5c3.67-4.81,5.28-4,3.57,1.81l-50.11,170.89c-1.7,5.81-.07,6.64,3.63,1.85l126.49-163.58c3.7-4.79,5.37-3.94,3.71,1.87l-42.21,147.75c-1.66,5.82.5,7.1,4.81,2.86l95.32-93.94c4.31-4.25,5.69-3.26,3.06,2.19l-54.79,113.7c-2.63,5.45-4.63,4.96-4.45-1.09l12.23-418.77c.18-6.05.24-6.05.13,0l-11.07,638.88"/>
          </mask>
        </svg>
      </div>
    </div>
    <div id="splashbg"></div>
    <!---画面遷移用-->
    <div id="main-container">
      <Header class='back2' v-if="movieFlag===false" @changePage="changePage" />
      <v-main class="back">
        <TopPage v-if="pageId === 0" @emit-change="changeMovie"/>
        <Works v-if="pageId === 1"/>
        <Flow v-if="pageId === 2" @changePage="changePage"/>
        <Company v-if="pageId === 3"/>
        <Contact v-if="pageId === 4"/>
      </v-main>
      <FooterComponent class='mt-10 back2' style='bottom: -20px;'/>
    </div>
  </v-app>
</template>
<script>
import Header from './components/Header.vue'
import TopPage from './components/TopPage.vue'
import Works from './components/Works.vue'
import Flow from './components/Flow.vue'
import Company from './components/Company.vue'
import Contact from './components/Contact.vue'
import FooterComponent from './components/FooterComponent.vue'
import Vivus from 'vivus'

export default {
  name: 'App',

  components: {
    Header, FooterComponent, TopPage, Works, Flow, Company, Contact
  },
  data: () => ({
    pageId: 0,
    movieFlag: false,
    height: 0
  }),
  mounted () {
    const mask = document.getElementById('mask')
    if (mask) {
      const stroke = new Vivus('mask', {
        type: 'scenario-sync',
        duration: 600,
        forceRender: false,
        animTimingFunction: Vivus.EASE_OUT
      })
      setTimeout(() => this.openingEvent(), 4000)
      stroke.play() // SVGアニメーションの実行
    }
  },
  methods: {
    changePage (val) {
      this.pageId = val
    },
    changeMovie (val) {
      this.movieFlag = val
    },
    openingEvent () {
      const splash = document.getElementById('splash_logo')
      splash.classList.add('fadeout')
      setTimeout(() => this.changeDisplay(), 2000)
    },
    changeDisplay () {
      const text = document.getElementById('splash')
      const body = document.body
      body.classList.add('appear')
      const splash = document.getElementById('splashbg')
      splash.classList.add('new')
      text.style.display = 'none'
      text.classList.add('fadeout')
      window.scroll(
        {
          top: 0,
          behavior: 'smooth'
        }
      )
    }
  }
}
</script>
<style>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @media (min-width: 960px) {
    display: none !important;
  }
}
.v-tabs {
  display: none;

  @media (min-width: 960px) {
    display: block !important;
  }
}
/*========= LoadingのためのCSS ===============*/

/* Loading背景画面設定 */
#splash {
  /*fixedで全面に固定*/
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #2c2c2c25;
  text-align: center;
  color: #fff;
}

/* Loading画像中央配置 */
#splash_logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Loading アイコンの大きさ設定 */
@media screen and (min-width: 1024px) {
#splash_logo svg{
    width: 100vh;
  }
}
@media screen and (max-width: 1024px) {
#splash_logo svg{
    width: 60vh;
  }
}

/*========= SVG操作手書き風にするためのCSS ===============*/

#mask .st0{
    fill:none;
    stroke:#fff;
    stroke-width:90;/*線の太さを指定する*/
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:10;
    stroke-dasharray: 1500; /* 線の間隔を指定する */
    stroke-dashoffset:1500; /* 線の位置を指定する */
}

/*========= レイアウトのためのCSS ===============*/

#container{
    width:100%;
    height: 100vh;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

a{
    color: #333;
}

a:hover{
     text-decoration: none;
}

/*SVGのサイズ*/
svg{
  max-width:1300px;/*SVGタグの横幅*/
  width:100%;/* レスポンシブ対応にするため100%を指定*/
  height:auto;
}

/*========= 手書き風にするためのCSS ===============*/

/* マスクをするパスの設定*/
#mask .st0{
    fill:none;
    stroke:#FFFFFF;
    stroke-width:90;/*線の太さを指定する*/
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:10;
    stroke-dasharray: 1500; /* 線の間隔を指定する */
    stroke-dashoffset:1500; /* 線の位置を指定する */
}

.fadeout {
  animation : fadeOut 1s;
  animation-fill-mode: both;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/*画面遷移アニメーション*/

body.appear{
    background:rgba(255, 255, 255, 0.904);/*画面を開いた後の背景色を指定*/
}

#splashbg{
  position: fixed;
  top: 0;
  right:0;
  bottom:0;
  left: 0;
  border-width: 0px;/*開始はボーダーの太さは0*/
  border-style: solid;
  border-color: #666;/*拡大する四角の色*/
  animation-duration:.5s;
  animation-fill-mode:forwards;
}

.new {
  border-width: 760;
  animation-name: backBoxAnime;
}

@keyframes backBoxAnime{
  99.9% {/*アニメーション終了ぎりぎりまで*/
    z-index: 2;/*最前面に*/
    border-width: 0px;/*開始はボーダーの太さは0*/
  }
  100%{
    z-index: -1; /*最背面に*/
    border-width: 0px;/*終了はボーダーの太さは0*/
  }
}

/*画面遷移の後現れるコンテンツ設定*/
#main-container{
  position: relative;
  opacity: 0;/*はじめは透過0に*/
}

/*bodyにappearクラスがついたら出現*/
body.appear #main-container{
  animation-name:PageAnimeAppear;
  animation-duration:1s;
  animation-delay:0s;
  animation-fill-mode:forwards;
  opacity: 0;
}

@keyframes PageAnimeAppear{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.back {
  background-color:rgba(255, 187, 0, 0.055)
}
</style>
