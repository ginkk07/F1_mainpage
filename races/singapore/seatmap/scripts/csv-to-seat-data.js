/**
 * CSV 轉換工具
 * 
 * 使用方式：
 *   node scripts/csv-to-seat-data.js
 * 
 * 這個腳本會讀取 seat-data.csv，轉換成 JavaScript 格式，
 * 然後輸出到 console 或文件。
 */

const fs = require('fs');
const path = require('path');
const csv = require('csv-parse/sync');

// 讀取 CSV 檔案
const csvFilePath = path.join(__dirname, '../seat-data.csv');
const csvContent = fs.readFileSync(csvFilePath, 'utf-8');

// 解析 CSV
const records = csv.parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true
});

// 轉換為 JavaScript createSeat() 調用
let jsCode = '/* 由 scripts/csv-to-seat-data.js 自動生成 */\n\n';
jsCode += 'export const SEAT_DATA = [\n';

records.forEach((record, index) => {
  const {
    ID,
    標題,
    分類,
    區域,
    'SVG Map ID': svgMapId,
    圖片路徑: imagePath,
    描述,
    備註
  } = record;

  jsCode += `  createSeat({\n`;
  jsCode += `    id: "${ID}",\n`;
  jsCode += `    title: "${標題}",\n`;
  jsCode += `    category: "${分類}",\n`;
  jsCode += `    zone: "${區域}",\n`;
  jsCode += `    mapIds: ["${svgMapId}"],\n`;
  jsCode += `    image: "${imagePath}",\n`;
  jsCode += `    description: "${描述}"\n`;
  jsCode += `  })${index < records.length - 1 ? ',' : ''}\n`;
});

jsCode += '];\n';

// 輸出到文件
const outputPath = path.join(__dirname, '../seat-data-generated.js');
fs.writeFileSync(outputPath, jsCode, 'utf-8');

console.log(`✅ 轉換完成！`);
console.log(`📁 輸出文件：${outputPath}`);
console.log(`📊 共轉換 ${records.length} 個座位`);
console.log('\n--- 預覽輸出 ---\n');
console.log(jsCode);
