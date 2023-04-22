<template>
  <div id="modal">
    <div id="modal-content" class="modal">
      <button class="modal__btn" @click="close()">閉じる</button>
      <youtube
        :video-id="videoId"
        :fitparent="true"
        width=960
        height=540
        :resize='true'
        :playerVars="playerVars"
      />
    </div>
    <div id="modal-overlay"></div>
  </div>
</template>
<script>
export default {
  name: 'movieModal',
  props: ['videoId'],
  data: () => ({
    playerVars: {
      autoplay: 1,
      color: 'white',
      controls: 0,
      iv_load_policy: 3
    }
  }),
  methods: {
    close () {
      this.$emit('close-method', true)
    }
  }
}
</script>
<style scoped>
.modal {
  padding: 10px 20px;
  background: #ffffffe1;
  z-index: 2;
  display: block;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal__message {
  margin-top: 10px;
}

.modal__cancel {
  margin-right: 30px;
  font-size: 15px;
}

.modal__cancel:hover {
  cursor: pointer;
  color: rgb(14, 48, 240);
  font-weight: bold;
}

.modal__btn {
  display: inline-block;
  margin: 30px auto;
  text-decoration: none;
  width: 80px;
  height: 30px;
  text-decoration: none;
  color: #000000;
  border: solid 2px #a5272a;
  border-radius: 3px;
  transition: 0.4s;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  background-color: #faebd7;
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: -80px;
}

.modal__btn:hover {
  background: #a5272a;
  color: white;
  cursor: pointer;
}

#modal-overlay {
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
