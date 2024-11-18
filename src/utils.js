export const getData = () => {
  return fetch("/mock.json")
    .then((res) => res.json())
    .then((result) => result);
};
// cells: (row, col, prop) => {
//   const cellProps = {};
//   const { name, dataType, type, lv } = this.$refs.hotTableRef.hotInstance.getSourceDataAtRow(row);
//   // 项目编码 renderer
//   if (prop == "lv") {
//     cellProps.renderer = function (instance, td, row, col, prop, value) {
//       if (value == 0) {
//         td.textContent = "";
//       } else {
//         td.textContent = "B" + value;
//         td.classList.add("bg-gray");
//       }
//     };
//   }
//   // 其他置灰
//   if (lv != 0 || name == "总价措施" || (dataType == 3 && type == 1) || dataType == 1) {
//     cellProps.readOnly = true;
//     cellProps.className = "bg-gray";
//   }
//   return cellProps;
// },
export const renderer = function (instance, td, row, col, prop, value, cellProps) {
  const rowData = instance.getSourceDataAtRow(row);
  if (rowData.lv != 0 || name == "总价措施" || (rowData.dataType == 3 && rowData.type == 1) || rowData.dataType == 1) {
    cellProps.readOnly = true;
    td.classList.add("bg-gray");
  }
  switch (prop) {
    // 项目编码
    case "lv": {
      if (value > 0) {
        td.textContent = "B" + value;
        td.classList.add("bg-gray");
      } else {
        td.textContent = "";
      }
      if (rowData.normType === "清" || rowData.normType === "定") {
        cellProps.readOnly = false;
        td.innerHTML = `${rowData.code}`;
        const icon = document.createElement("i");
        icon.className = "--icon el-icon-refresh-right";
        icon.addEventListener("click", () => {});
        td.appendChild(icon);
      } else {
        cellProps.readOnly = true;
      }

      break;
    }
    default: {
      td.textContent = value;
    }
  }
};

export const className = function () {};
