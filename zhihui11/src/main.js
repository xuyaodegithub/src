// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import $ from 'jquery'
//引入element-ui的默认CSS样式
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  $,
  template: '<App/>',
  components: { App }
});

//流量保留小数点后面两位
Vue.filter('flowLL', function(val) {
  if(val==''||val==null){

  }else {
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
      val = "0";
    }
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
      cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
      val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }

    return (((sign)?'':'-') + val + '.' + cents);
  }
});

//身份证过滤
Vue.filter('idCard', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else {
    let num = val.substring(0,6)+'******'+ val.substring(14,val.length)
    return num;
  }
});

//全过滤 电话号码 保留数字 后面4为过滤
Vue.filter('fourNum', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else {
    let num ='*******'+ val.substring(val.length-4,val.length);
    return num;
  }
});

//全过滤 为＊
Vue.filter('zeroNum', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else {
    return '***********';
  }
});

//字数超过20个过滤

Vue.filter('wordLimit', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else if(val.length>20){
    return val.substring(0,20)+'...';
  }else{
    return val;
  }
});
//字数超过14个过滤

Vue.filter('wordLimitFourteen', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else if(val.length>14){
    return val.substring(0,15)+'...';
  }else{
    return val;
  }
});

//字数超过4个过滤

Vue.filter('wordLimitFour', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else if(val.length>4){
    return val.substring(0,4)+'...';
  }else{
    return val;
  }
});

//字数超过6个过滤

Vue.filter('wordLimitSix', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){
  }else if(val.length>10){
    let valName = val.split('#')[0];
    return valName.substring(0,10)+'...';
  }else{
    let valName = val.split('#')[0];
    return valName;
  }
});
//字数超过7个过滤

Vue.filter('wordLimitSeven', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){
  }else if(val.length>7){
    let valName = val.split('#')[0];
    return valName.substring(0,7)+'...';
  }else{
    let valName = val.split('#')[0];
    return valName;
  }
});

//姓名过滤

Vue.filter('nameLimit', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){

  }else if(val.length==2){
    return val.substring(0,1)+'＊'+val.substring(1,2);
  }else{
    return val.substring(0,1)+'＊'+val.substring(val.length-1,val.length);
  }
});

//地址过滤

Vue.filter('addressLimit', function (val) {
  if(val !='' && val !=null){
    return val.replace(/[\d]+/g, "*");
  }else{
  }
})

//时间过滤

Vue.filter('timeLimit', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val==''|| val==null){
    return '';
  }else{
    let num =val.split(' ')[0].split('-');
    return num[0]+'.'+num[1]+'.'+num[2];
  }
});
//ivr数据一盘

Vue.filter('numToString', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val){
    let ary = ['账务查询','故障专区','故障申告','咨询受理','投诉建议','账务专区和营销专区','营销专区','推送解锁','宽带新装','ITV故障专区','同步服务状态','密码验证和故障专区','派故障单和宽带故障专区','一键修复和宽带故障专区'];
    if( val >= 0 && val <ary.length){
      return ary[val - 1]
    }else{
      return val
    }
  }
});
//预判处理

Vue.filter('wordIndexChange', function (val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val.indexOf('(已结/未结)')){
    let num = val.split('(已结/未结)')[1].split('，')[0];
    let numOne = '<a>'+num[0]+'</a>';
    let numTwo = '<a>'+num[2]+'</a>';
    let numAll = numOne + '/' + numTwo;
    return val.replace(num,numAll);
  }
  // return val;
});
//拖动
Vue.directive('drag',function(event){
  var oDiv = event;
  oDiv.onmousedown = function(ev){
    if(ev.target.className=='popover-head'){
      var disX = ev.clientX -oDiv.offsetLeft;
      var disY = ev.clientY - oDiv.offsetTop;
      document.onmousemove = function(ev){
        var l = ev.clientX-disX;
        var t = ev.clientY-disY;
        oDiv.style.left =  l+'px';
        oDiv.style.top = t+'px';
      };
      document.onmouseup = function(){
        document.onmousemove=null;
        document.onmouseup=null;
      };
    }
  };

});


export default vm;
