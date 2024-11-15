const dbNames = [
  "cs_name",
  "cs_type",
  "cs_industry",
  "cs_industry_code",
  "cs_product",
  "cs_income",
  "cs_total_assets",
  "cs_profit",
  "cs_net_asset",
  "cs_is_require_city",
  "cs_require_city",
  "cs_require_migration",
  "cs_require_projects",
  "cs_require_ipo",
  "cs_require_plate",
  "cs_value",
  "cs_is_require_control",
  "cs_shares_ratio",
  "cs_negative_list",
  "cs_budget",
  "cs_remark",
];

/** 
 * @abstract 把数据库的字段名，转换为前端需要的CamelCase
 * @author liubin
 * @param {string} dbName 数据库字段
 * @param {string} prefix 数据库字段的前缀
 **/
const dbNameToJsName = (dbName, prefix) => {
  const reg = new RegExp(prefix, "g");
  return dbName
    .replace(reg, "")
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

dbNames.forEach((dbName) => {
  console.log(dbNameToJsName(dbName, "cs_"));
});
