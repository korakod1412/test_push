import * as fs from "fs";
import * as XLSX from "xlsx";

const workbook: XLSX.WorkBook = XLSX.readFile("./src/app/test.xlsx");

let worksheets: { [sheetName: string]: any[] } = {};
for (const sheetName of workbook.SheetNames) {
  if (workbook && workbook.Sheets[sheetName]) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  }
}

console.log("json:\n", JSON.stringify(worksheets.Sheet1), "\n\n");