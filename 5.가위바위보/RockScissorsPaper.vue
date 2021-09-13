<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>

<script>
let interval = null
const rspCoords = {
  rock: '0',
  scisoors: '-142px',
  paper: '-284px',
}

export default {
  data() {
    return {
      imgCoord: rspCoords.rock,
      result: '',
      score: 0,
    }
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
      }
    }
  },
  methods: {
    onClickButton(choice) {

    }
  },
  mounted() {
    interval = setInterval(() => {
      if (this.imgCoord === rspCoords.rock) {
        this.imgCoord = rspCoords.scisoors
      } else if (this.imgCoord === rspCoords.scisoors) {
        this.imgCoord = rspCoords.paper
      } else if (this.imgCoord === rspCoords.paper) {
        this.imgCoord = rspCoords.rock
      }
    }, 100)
  },
  beforeDestroy() {
    clearTimeout(interval)
  }
}

</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
