<template>
  <v-container fluid fill-height>
    <v-row class='text-center'>
      <v-img
        :src="require('../assets/top_demo.jpg')"
        class='my-3'
        contain
        height='400'
      />
      <div class='scrolldown2'><span>Scroll</span></div>
      <v-col class='works-adjust mb-4'>
        <h1 class='display-2 font-weight-bold mb-3'>
          Works
        </h1>
        <p class='subheading font-weight-regular'>
          These are ulu create inc made works.
        </p>
        <v-row>
          <v-col cols='4'>
            <div class='zoomInText' @click="showModal('Mh-SC9aWdws')">
              <span class='mask'>
                <img src='../assets/pug.jpg' alt=''>
                <span class='title-name cap'>
                  pug
                </span>
                <span class='cap'>
                  はじまりの歌
                </span>
              </span>
            </div>
          </v-col>
          <v-col cols='4'>
            <div class='zoomInText' @click="showModal('NYhwDY01Zv8')">
              <span class='mask'>
                <img src='../assets/tenjou_tenge.jpg' alt=''>
                <span class='title-name cap'>
                  天上天下
                </span>
                <span class='cap'>
                  君に価値なんてないよ
                </span>
              </span>
            </div>
          </v-col>
          <v-col cols='4'>
            <div class='zoomInText' @click="showModal()">
              <span class='mask'>
                <img src='../assets/ibara_bluse.jpg' alt='wHamtmY6png'>
                <span class='title-name cap'>
                  パレットパレッツ
                </span>
                <span class='cap'>
                  イバラブルース
                </span>
              </span>
            </div>
          </v-col>
          <v-col cols='4'>
            <div class='zoomInText' @click="showModal('Mh-SC9aWdws')">
              <span class='mask'>
                <img src='../assets/pug.jpg' alt=''>
                <span class='title-name cap'>
                  pug
                </span>
                <span class='cap'>
                  はじまりの歌
                </span>
              </span>
            </div>
          </v-col>
          <v-col cols='4'>
            <div class='zoomInText' @click="showModal('NYhwDY01Zv8')">
              <span class='mask'>
                <img src='../assets/tenjou_tenge.jpg' alt=''>
                <span class='title-name cap'>
                  天上天下
                </span>
                <span class='cap'>
                  君に価値なんてないよ
                </span>
              </span>
            </div>
          </v-col>
          <v-col cols='4'>
            <div class='zoomInText' @click="showModal()">
              <span class='mask'>
                <img src='../assets/ibara_bluse.jpg' alt='wHamtmY6png'>
                <span class='title-name cap'>
                  パレットパレッツ
                </span>
                <span class='cap'>
                  イバラブルース
                </span>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class='mb-5' cols='12'>
        <h2 class='headline font-weight-bold mb-3'>
          Next Contents👉
        </h2>

        <v-row justify='center'>
          <a
            v-for='(next, i) in whatsNext'
            :key='i'
            :href='next.href'
            class='subheading mx-3'
            target='_blank'
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class='mb-5' cols='12'>
        <h2 class='headline font-weight-bold mb-3'>
         Next Contents👉
        </h2>

        <v-row justify='center'>
          <a
            v-for='(link, i) in importantLinks'
            :key='i'
            :href='link.href'
            class='subheading mx-3'
            target='_blank'
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class='mb-10' cols='12'>
        <h2 class='headline font-weight-bold mb-3'>
          Next Contents👉
        </h2>

        <v-row justify='center'>
          <a
            v-for='(eco, i) in ecosystem'
            :key='i'
            :href='eco.href'
            class='subheading mx-3'
            target='_blank'
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
    <MovieModal
      :videoId="videoId"
      v-show="movieModal"
      @close-method="closeMethod"
    ></MovieModal>
  </v-container>
</template>

<script>
import MovieModal from './MovieComponent.vue'

export default {
  name: 'TopPage',
  components: {
    MovieModal
  },
  data: () => ({
    videoId: '',
    movieModal: false,
    ecosystem: [
      {
        text: 'あ',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'い',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'う',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'あ',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'い',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'う',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'え',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'お',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'あ',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'い',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'う',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  }),
  methods: {
    showModal (val) {
      // ヘッダーを非表示に
      this.$emit('emit-change', true)
      this.videoId = val
      this.movieModal = true
    },
    closeMethod (yes) {
      // ヘッダーを表示に
      this.videoId = ''
      this.$emit('emit-change', false)
      this.movieModal = false
    }
  }
}
</script>
<style scoped>
.scrolldown2 {
  /*描画位置※位置は適宜調整してください*/
  position: fixed;
  bottom: 20vh;
  right: 3%;
}

.scrolldown2 span {
  /*描画位置*/
  position: absolute;
  left: 6px;
  bottom: 17px;
  /*テキストの形状*/
  color: rgba(0, 0, 0, 0.753);
  font-size: 1rem;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

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

@keyframes circlemove {
  0% {
    bottom: 70px;
  }
  100% {
    bottom: 0px;
  }
}

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

/* ここから画像制御 */
.zoomInText{/*テキストの基点となる位置を定義*/
  position: relative;
}

.zoomInText span.mask{
  position: relative;
  transition: .3s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
  display: block;/*画像をくくるspanタグをブロック要素にする*/
    line-height: 0;/*行の高さを0にする*/
    overflow:hidden;/*拡大してはみ出る要素を隠す*/
}

.zoomInText:hover span.mask::before{/*hoverした時の変化*/
  content:"";
  position: absolute;
  z-index:2;
  top:10px;
  left:10px;
  width: calc(100% - 20px);
    height: calc(100% - 20px);
  background:rgba(0,0,0,0.5);/*背景色*/
}

.zoomInText img{
  transform: scale(1);
  filter: blur(0);
  transition: .3s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
}

.zoomInText:hover img{/*hoverした時の変化*/
  transform: scale(1.2);/*拡大の値を変更したい場合はこの数値を変更*/
  filter: blur(2px);/*ぼかし具合を変更したい場合はこの数値を変更*/
}

.zoomInText span.cap{
  opacity:0;
  transition: .5s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
  position: absolute;
  z-index:3;/*テキストを前面に出す*/
  top: 50%;
    left: 50%;
  transform: translate(-50%,-50%);
  color: rgba(255, 255, 255, 0.637);/*テキストの色を変えたい場合はここを修正*/
    line-height: 1.5;/*行の高さを1.5にする*/
}

.zoomInText:hover span.cap{/*hoverした時の変化*/
  opacity:1;
}

a{
  color: #333;
  text-decoration: none;
}

.lead{
  text-align: center;
  padding: 50px 20px;
}

/*画像のレスポンシブ*/

img{
  width:100%;
  height: auto;
}

/* 横幅 */

.zoomInText{
  cursor: pointer;
  width: 100%;
    margin: 0 auto;/*中央揃え*/
}

.title-name{
  position: absolute;
  bottom: 0;
  right:0;
}

.works-adjust{
  max-width:95%;
  padding-left: 2.5%;
}

</style>
