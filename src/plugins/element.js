import Vue from 'vue';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.prototype.$message1000 = (message, type) => { // 默认消息提示持续1S
  Element.Message({
    message: message,
    type: type,
    duration: 1000
  });
};
