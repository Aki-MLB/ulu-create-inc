<template>
  <v-container fluid fill-height>
    <v-row class='text-center'>
      <div class="scrolldown2"><span>Scroll</span></div>
      <v-col cols='12'>
        <h1 class='display-2 font-weight-bold mb-3' style="font-size: 150%;">
          Works
        </h1>
        <v-img
          :src="require('../assets/top_demo.jpg')"
          class='my-3'
          contain
          height='400'
        />
      </v-col>
      <v-col class='mb-4'>
        <p class='subheading font-weight-regular'>
          ulu create inc made works.
          <a href='https://community.vuetifyjs.com' target='_blank'
            >Discord Community</a
          >
        </p>
        <v-col cols='12'>
          <div col='4'>
            aaa
          </div>
          <div col='4'>
            aaa
          </div>
        </v-col>
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
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>
<style scoped>
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
</style>
