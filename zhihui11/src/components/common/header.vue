<template>
    <div class="header" v-bind:style="{background: headerPageStyle.headerBg}">
        <el-row>
            <!--Logo area-->
            <el-col :xs="12" :sm="5" :md="5" :lg="5">
                <div class="logo">
                    <img src="../../assets/img/logo.png">
                </div>
            </el-col>
            <!--call area-->
            <el-col :xs="12" :sm="14" :md="14" :lg="14">
              <vCenterFunction></vCenterFunction>
            </el-col>
            <!--myself area-->
            <el-col :xs="12" :sm="5" :md="5" :lg="5">
                <vHeaderMyself></vHeaderMyself>
            </el-col>
        </el-row>
        <vCountZero v-if="countZero.status" v-drag></vCountZero>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  import vCenterFunction from '../headerPage/centerFunction.vue'
  import vHeaderMyself from '../headerPage/headerMyself.vue'
  import vCountZero from '../headerPage/countZero.vue'

  export default {
    data() {
      return {

      };
    },
    components: {
      vCenterFunction,vHeaderMyself,vCountZero
    },
    methods: {
      ...mapActions([
      ])
    },
    computed: {
    ...mapGetters([
        'headerPageStyle','countZero'
      ])
    }
  };
</script>
<style scoped>
    .header {
        position: relative;
        width: 100%;
        height: 65px!important;
        font-size: 14px;
        background:#177CB0;
        z-index:1000;
    }
    .header .logo{
        width: 100%;
        height: 100%;
        cursor:pointer;
        font-size: 14px;
    }
    .header .logo img{
        margin-top: 12px;
        margin-left: 20px;
    }


    .myself-bottom-time span{
        color: #FF4949;
        font-size: 16px;
        line-height: 20px;
    }
</style>
