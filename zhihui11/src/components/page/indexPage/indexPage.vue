<template>
  <div class="home" v-bind:style="{background: homePageStyle.bg}">
      <div class="bottom">
        <div class="bottom-sun">
          <div class="left">
            <vPackage class="package"></vPackage>
            <keep-alive>
              <v-packageCase class="packageCase"></v-packageCase>
            </keep-alive>
          </div>
          <div class="right">
            <transition name="bounce">
              <v-packageLine  v-if="personMessage"></v-packageLine>
            </transition>
          </div>
        </div>
      </div>
  </div>
</template>
<style scoped>
  .home{
    width: 100%;
    height: 100%;
    /*height:565px;*/
    position: relative;
  }
  .home-block-one{
    padding-left: 20px;
    padding-right: 20px;
    width: auto;
  }
  .home-block-one .top{
    clear: both;
    margin-top: 20px;
    height: 40px;
  }
  .home-block-one .bottom{
    margin-top: 20px;
    width: 100%;
  }
  .home-block-one .bottom .bottom-sun{
    display: flex;
    flex-direction: row;
  }
  .home-block-one .left{
    flex: 9;
  }
  .package{
    height: 180px;
  }
  .packageCase{
    width: 100%;
    height: 454px;
    float: left;
  }
  .home-block-one .right{
    flex: 2;
    margin-left: 10px;
  }
  @media screen and (min-height:699px){
    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 383px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;
      height:765px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      /*border: none;*/
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height:700px){

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 403px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;
      height:610px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height: 750px) {

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 433px;
      overflow: hidden;
    }

    .home-block{
      width: 100%;
      height:645px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height:800px){

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 473px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;

      height:685px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height:850px){

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 523px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;

      height:735px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height:900px){

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 573px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;

      height:785px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height:950px){

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 583px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;

      height:795px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
  @media screen and (min-height:1000px){

    .package-case-state-all{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      background: #ffffff;
      height: 593px;
      overflow: hidden;
    }
    .home-block{
      width: 100%;
      height:805px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: -10;
    }

    .home-block iframe{
      width: 100%;
      height: 100%;
      border: none;
    }
    .active{
      z-index: 10;
      opacity: 1;
    }
  }
</style>
<script>
  import { mapGetters } from 'vuex'
  import vPackage from '../../common/package.vue';
  import vPackageCase from '../../common/packageCase.vue';
  import vPackageLine from '../../packageLine/packageLine.vue';
  import vOperatingGuide from '../../common/operatingGuide.vue';
  export default {
    data() {
      return{
        pageIndex: false
      }
    },
    components:{
      vPackage,vPackageLine,vPackageCase,vOperatingGuide
    },
    computed:{
      ...mapGetters([
        'homePageStyle','ivrFollowData','iframeSrc','pageTitle','changePage','personMessage','lastCallDetail','ivrFlowListStr','channelContactSearch','getKdAccountByCallNum'
      ])
    }
  }
</script>
