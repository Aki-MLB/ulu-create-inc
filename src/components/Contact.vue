<template>
  <v-container fluid fill-height>
    <v-row class='text-center'>
      <div id="scrolldown1">
        <div id="point1" class="point -active"></div>
        <span>入</span><span style='top: 1px'>力</span>
      </div>
      <div id="scrolldown2">
        <span>確</span><span style='top: 1px'>認</span>
      </div>
      <div id="scrolldown3">
        <span>完</span><span style='top: 1px'>了</span>
      </div>
      <v-col cols='6'>
        <h1 class='mb-3 bahn' style="font-size: 250%; margin-top: 20px;">
          Contact
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <section class="get-in-touch" style="margin-bottom:50px;">
          <div v-if='!confirm'>
            <div style='margin-top: 20px;'>
              <p>お問い合わせ内容は下記フォームにご入力をお願いいたします。</p>
              <p>なお、内容によっては返信にお時間を頂く場合や回答できない場合がございます。</p>
            </div>
            <hr width='100%' class='hr1'>
            <v-text-field
              label="お名前(必須)"
              hint="入力中"
              color="green darken-5"
              v-model='name'
              placeholder="例) 岩崎拓也"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              style='margin-top: 15px;'
              label="会社名(任意)"
              hint="入力中"
              color="green darken-5"
              v-model='cumpanyName'
              placeholder="例) 株式会社 ulu create"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              style='margin-top: 15px;'
              label="電話番号"
              hint="入力中"
              color="green darken-5"
              v-model='phoneNumber'
              placeholder="例) 000-0000-0000"
              hide-details="auto"
           ></v-text-field>
            <v-text-field
              style='margin-top: 15px;'
              label="E-mail(必須)"
              hint="入力中"
              color="green darken-5"
              v-model='eMail'
              placeholder="例) sample_tarou@gmail.com"
              hide-details="auto"
            ></v-text-field>
            <v-textarea
              style='margin-top: 15px;'
              auto-grow
              label="お問い合わせ内容(必須)"
              hint="入力中"
              color="green darken-5"
              no-resize
              v-model='message'
              placeholder="例) 空撮費用がどれくらいかかるか教えて欲しい"
              rows="5"
              crearable
            ></v-textarea>
            <v-btn color='cyan' class='white--text' style="margin-top: 20px; left: 45%;" @click='checkInput("confirm")'>
              確認
            </v-btn>
          </div>
          <div v-else-if='submit' style='margin-top: 30px;'>
            <p>送信完了致しました。</p>
            <p></p>
            <p>弊社の担当者から内容を確認して３営業日以内にご返信させて頂きます。</p>
            <p></p>
            <p>返信が届かない場合はお手数ですがお電話にてお問い合わせいただくか</p>
            <p></p>
            <p>再度フォームよりご連絡いただくようお願いいたします。</p>
            <p></p>
            <p>電話番号: </p>
            <div style='margin-top: 60%'></div>
          </div>
          <div v-else>
            <div style='margin-top: 20px;'>
              <p>以下の内容で宜しければ「送信する」ボタンを押してください。</p>
              <p>修正が必要な場合は「修正する」ボタンを押してください。</p>
            </div>
            <hr width='100%' class='hr1'>
            <v-text-field
              label="お名前"
              color="green darken-5"
              no-resize
              readonly
              v-model='name'
            ></v-text-field>
            <v-text-field
              label="会社名"
              color="green darken-5"
              no-resize
              readonly
              v-model='cumpanyName'
            ></v-text-field>
            <v-text-field
              label="電話番号"
              color="green darken-5"
              no-resize
              readonly
              v-model='phoneNumber'
            ></v-text-field>
            <v-text-field
              label="E-mail"
              color="green darken-5"
              no-resize
              readonly
              v-model='eMail'
            ></v-text-field>
            <v-text-field
              color="green darken-5"
              label="お問い合わせ内容"
              no-resize
              readonly
              v-model='message'
            ></v-text-field>
            <v-btn color='secondary' style="margin-top: 20px; left: 35%;" @click='checkInput(false)'>
              修正する
            </v-btn>
            <v-btn color='success' style="margin-top: 20px; left: 45%;" @click='checkInput("submit")'>
              送信する
            </v-btn>
          </div>
          <!-- <div class="form-field col x-50">
            <input id="name" class="input-text js-input" type="text" @keyup="keyup(name, 'name')" v-model="name" required>
            <label class="label" for="name">Name</label>
          </div>
          <div class="form-field col x-50">
            <input id="email" class="input-text js-input" type="email" @keyup="keyup(eMail, 'email')" v-model="eMail" required>
            <label class="label" for="email">E-mail</label>
          </div>
          <div class="form-field col x-100">
            <input id="message" class="input-text js-input" type="text" @keyup="keyup(message, 'message')" v-model="message" required>
            <label class="label" for="message">Message</label>
          </div>
          <div class="form-field col x-100 align-center">
            <input class="submit-btn" type="submit" value="Submit">
          </div> -->
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',

  data: () => ({
    name: '',
    eMail: '',
    message: '',
    phoneNumber: '',
    companyName: '',
    confirm: false,
    submit: false
  }),
  methods: {
    checkInput (text) {
      const errors = []
      const pointDoc = document.getElementById('point1')
      if (text === 'confirm') {
        if (this.name === '') errors.push('お名前が未入力です。')
        if (this.eMail === '') errors.push('メールアドレスが未入力です。')
        if (this.message === '') errors.push('お問い合わせ内容が未入力です。')
        if (errors.length === 0) {
          this.confirm = true
          const doc1 = document.getElementById('scrolldown1')
          const doc2 = document.getElementById('scrolldown2')
          doc1.style.color = 'rgba(0, 0, 0, 0.329)'
          doc2.style.color = 'rgba(0, 0, 0)'
          pointDoc.style.bottom = '50vh'
        } else {
          let string = ''
          errors.forEach((e) => {
            string = string + e + '\n'
          })
          string = string.slice(0, -2)
          alert(string)
        }
      } else if (text === 'submit') {
        this.submit = true
        const doc1 = document.getElementById('scrolldown2')
        const doc2 = document.getElementById('scrolldown3')
        doc1.style.color = 'rgba(0, 0, 0, 0.329)'
        doc2.style.color = 'rgba(0, 0, 0)'
        pointDoc.style.bottom = '35vh'
      } else {
        this.confirm = false
        const doc2 = document.getElementById('scrolldown1')
        const doc1 = document.getElementById('scrolldown2')
        doc1.style.color = 'rgba(0, 0, 0, 0.329)'
        doc2.style.color = 'rgba(0, 0, 0)'
        pointDoc.style.bottom = '65vh'
      }
    }
  }
}
</script>
<style scoped>
/*=== 9-1-2 丸が動いてスクロールを促す ====*/
#scrolldown1 {
  position: fixed;
  bottom: 65vh;
  right: 8%;
  color: rgb(0, 0, 0);
}

/*Scrollテキストの描写*/
#scrolldown1 span {
  /*描画位置*/
  position: absolute;
  left: 10px;
  bottom: 12px;
  /*テキストの形状*/
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}
/*スクロールダウン全体の場所*/
#scrolldown2 {
  /*描画位置※位置は適宜調整してください*/
  position: fixed;
  bottom: 50vh;
  right: 8%;
  color: rgba(0, 0, 0, 0.329);
}

/*Scrollテキストの描写*/
#scrolldown2 span {
  /*描画位置*/
  position: absolute;
  left: 10px;
  bottom: 12px;
  /*テキストの形状*/
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}
/*スクロールダウン全体の場所*/
#scrolldown3 {
  /*描画位置※位置は適宜調整してください*/
  position: fixed;
  bottom: 35vh;
  right: 8%;
  color: rgba(0, 0, 0, 0.329);
}

/*Scrollテキストの描写*/
#scrolldown3 span {
  /*描画位置*/
  position: absolute;
  left: 10px;
  bottom: 12px;
  /*テキストの形状*/
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

.bahn {
  text-transform: none;
  font-family: Bahnschrift;
  font-size: 105%;
  letter-spacing: 0.08em;
}

@import url(https://fonts.googleapis.com/css?family=Raleway:300);
@import url(https://fonts.googleapis.com/css?family=Lusitana:400,700);

/* @mixin clearfix {
   &:after {
      content: "";
      display: table;
      clear: both;
  }
} */

.align-center {
   text-align: center;
}

.row {
  /* @include clearfix; */
  margin: -20px 0;
}
.row.col {
  padding: 0 20px;
  float: left;
  box-sizing: border-box;
}
.row.col.x-50 {
  width: 50%;
}
.row.col.x-100 {
  width: 100%;
}

.content-wrapper {
   min-height: 100%;
   position: relative;
}

.get-in-touch {
   max-width: 650px;
   margin: 0 auto;
}
.get-in-touch.title {
  text-align: center;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 48px;
}

.form-field {
  position: relative;
  margin: 32px 0;
}
.input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #000;
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.input.focus {
  outline: none;
}
.input.focus.not-empty {
  transform: translateY(-24px);
}

.label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #888;
  cursor: text;
  transition: transform .2s ease-in-out;
}
.submit-btn {
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

.note {
   position: absolute;
   left: 0;
   bottom: 10px;
   width: 100%;
   text-align: center;
   font-family: Lusitana, serif;
   font-size: 16px;
   line-height: 21px;
}
.note.link {
  color: #888;
  text-decoration: none;
}
.note.link.hover {
  text-decoration: underline;
}

.hr1 {
  border-top: 3px dashed black;
  margin: 20px 0;
}

@keyframes pulseMotion {
  0% {
    transform: translate(-50%, -50%) scale(1, 1);
    background-color: rgba(170, 143, 123, 0.4)
  }
  100% {
    transform: translate(-50%, -50%) scale(6.5, 6.5);
    background-color: rgba(170, 143, 123, 0)
  }
}

.inner {
  display: flex;
  justify-content: center;
}

.point {
  display: block;
  position: fixed;
  bottom: 65vh;
  width: 10px;
  height: 10px;
  background-color: rgba(216, 104, 104, 0);
  border-radius: 50%;
  transition: background-color cubic-bezier(0.215, 0.61, 0.355, 1) .4s;
  cursor: pointer;
}

.point:after {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10%;
  height: 100%;
  border-radius: 50%;
  transition: opacity linear 0.4s;
  content: '';
}

.point.-active:after {
  animation: pulseMotion 1.4s linear infinite;
}
</style>
