<template>
    <div class="wrapper">
        <vCalculatorContent :class="{calculatorDomActive: calculatorActive }" class="calculatorDom" v-drag></vCalculatorContent>
        <vHead class="head"></vHead>
        <div class="content">
            <div class="content-all">
                <div class="sidebar" v-bind:style="{background: sidebarPageStyle.sidebarBg}">
                  <vSidebar></vSidebar>
                </div>
                <div class="content-box" v-bind:style="{background: homePageStyle.bg}">
                    <div class="content-box-sun" v-bind:style="{background: homePageStyle.bg}">
                      <v-pageTitle class="header"></v-pageTitle>
                      <transition name="move" mode="out-in">
                        <keep-alive>
                          <router-view></router-view>
                        </keep-alive>
                      </transition>
                    </div>
                </div>
            </div>
        </div>
        <transition name="slide-fade">
            <div id="popoverAlive" class="popover-alive" v-if="popoverAlive.openOrClose" v-drag>
                <vPopover></vPopover>
            </div>
        </transition>
        <transition name="slide-fade">
            <div class="popover-alive" v-if="smallAlive.openOrClose" v-drag>
                <vSmallPopover></vSmallPopover>
            </div>
        </transition>
    </div>
</template>
<style scoped>
    .wrapper{
        position: relative;
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: column;
    }
    .calculatorDom{
      display: none;
    }
    .calculatorDomActive{
      z-index: 999;
      display: block;
    }
    .popover-alive{
        position: absolute;
        left: 50%;
        top: 50%;
    }
    .head{
        flex-shrink: 0;
        height: 60px;
    }
    .content{
        flex: 1;
    }
    .content-all{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        /*overflow: auto;*/
      /*background-color: rgb(69, 111, 144);*/

    }
    .content-all .sidebar{
        flex-shrink: 0;
        width: 250px;
    }
    .content-all .content-box{
        flex: 1;
    }
    .content-box-sun{
        width: 100%;
        /*height: 100%;*/
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: column;
    }
    .content-box-sun .header{
        height: 40px;
    }
    .content-box-sun .pageIndex{
        flex: 1;
    }
</style>
<style>

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
<script>
    import vPageTitle from '../common/pageTitle.vue';
    import vHomePage from '../page/homePage.vue';
    import vHead from './header.vue'
    import vSidebar from './../sidePage/sidebar.vue'
    import vCalculatorContent from '../tool/CalculatorContent.vue'
    import vPopover from '../popover/popover.vue'
    import vSmallPopover from '../smallPopover/popover.vue'
    import { mapGetters } from 'vuex'
    export default {
        components: {
          vHead, vSidebar, vCalculatorContent, vPageTitle, vPopover,vHomePage, vSmallPopover
        },
        methods: {
        },
        computed: {
          // 使用对象展开运算符将 getters 混入 computed 对象中
          ...mapGetters([
              'popoverAlive',
              'smallAlive',
            'sidebarPageStyle',
            'homePageStyle',
            'calculatorActive'
            ])
        }
    }
</script>
