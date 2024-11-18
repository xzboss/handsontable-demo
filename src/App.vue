<template>
  <div id="app">
    <hot-table ref="hotTableRef" :settings="settings" :data="[{ __children: {} }]"></hot-table>
    <br />
  </div>
</template>

<script>
import { getData, renderer } from "./utils.js";
export default {
  name: "App",
  data() {
    return {
      isShow: false,
      settings: {
        language: "zh-CN",
        licenseKey: "non-commercial-and-evaluation",
        width: "auto",
        height: "500px",
        nestedRows: true,
        rowHeaders: true,
        rowHeaderWidth: 80,
        columns: [
          { data: "lv", title: "项目编码", type: "text", renderer, width: 120 },
          { data: "name", title: "项目名称", type: "text", renderer },
          { data: "normType", title: "类别", type: "text", renderer },
          { data: "unit", title: "计量单位", type: "text", renderer },
          { data: "specification", title: "项目特征/方案描述", type: "text", renderer },
          { data: "radix", title: "计算基数/单价", type: "text", renderer },
          { data: "rate", title: "费率（%）", type: "numeric", renderer },
          { data: "formula", title: "计算式", type: "text", renderer },
          { data: "quantity", title: "工程量", type: "numeric", renderer },
          { data: "lowLimitPrice", title: "最低限价", type: "numeric", renderer },
          { data: "zhPrice", title: "综合单价", type: "numeric", renderer },
          { data: "zhTotal", title: "综合合价", type: "numeric", renderer },
        ],
      },
      data: [],
      flatData: [],
    };
  },

  watch: {
    data(newData) {
      console.log(newData);
      const hot = this.$refs.hotTableRef.hotInstance;
      hot?.loadData([newData]);
    },
  },

  mounted() {
    getData().then((data) => {
      this.$set(this, "data", data);
    });
  },
};
</script>

<style>
.bg-gray.bg-gray.bg-gray {
  background-color: rgb(222, 222, 222);
  color: black;
}

.--icon {
  color: blue;
  float: right;
  margin-top: 5px;
  cursor: pointer;
}

th[role="columnheader"] {
  background-color: rgb(245, 247, 250) !important;
}
th[role="rowheader"] {
  background-color: rgb(245, 247, 250) !important;
}
th[role="row"] {
  background-color: rgb(245, 247, 250) !important;
}
</style>
