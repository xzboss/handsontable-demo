import Vue from "vue";
import App from "./App.vue";

import { HotTable } from "@handsontable/vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import "handsontable/dist/handsontable.full.css";
import "handsontable/languages";

Vue.config.productionTip = false;
Vue.component("hot-table", HotTable);
Vue.use(ElementUI);

const app = new Vue({
  render: (h) => h(App),
});
app.$mount("#app");
