import { useContext } from "@modern-js/runtime/server";
import xlsx from "node-xlsx";

export default async () => {
  const ctx = useContext();
  const data = [
    [1, 2, 3],
    [true, false, null, "sheetjs"],
    ["foo", "bar", new Date("2014-02-19T14:30Z"), "0.3"],
    ["baz", null, "qux"],
  ];
  let buffer = xlsx.build([{ name: "mySheetName", data: data }]);
  ctx.res.attachment("mySheetName.xlsx");
  ctx.res.send(buffer);
};
