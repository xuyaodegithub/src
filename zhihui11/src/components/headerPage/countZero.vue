<template>
  <div class="count-zero">
      <div class="left">
        <div class="head">{{countZero.countZeroHead}}</div>
        <div class="time">{{countZero.countZeroTime}}</div>
      </div>
      <div class="right" v-html="countZero.countZeroHtmlText"></div>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      };
    },
    methods: {
      ...mapActions([
        'popoverAlert','showMsgReadWinTurn'
      ])
    },
    computed: {
      ...mapGetters([
          'countZero'
      ])
    }
  };
</script>
<style scoped>
  .count-zero{
    min-width: 200px;
    z-index: 999;
    height: 80px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px #666666;
    position: absolute;
    left: 460px;
    top: 80px;
  }
  .count-zero .left{
    width: 80px;
    height: 100%;
    float: left;
    border-radius: 5px;
  }
  .count-zero .left .head{
    font-size: 12px;
    text-align: center;
    color: #333333;
    width: 100%;
    margin-top: 10px;
    line-height: 16px;
    height: 16px;
  }
  .count-zero .left .time{
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #DE2E2E;
    font-size: 40px;
  }
  .count-zero .right{
    width: auto;
    max-width: 230px;
    height: auto;
    padding: 10px;
    border-radius: 5px;
    float: left;
  }
</style>
