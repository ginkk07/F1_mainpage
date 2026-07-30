/**
 * CSV 轉 JSON 工具
 * 
 * 使用方式：
 *   node scripts/csv-to-json.js
 * 
 * 這個腳本會將 seat-data.csv 轉換為 seat-data.json，
 * 方便前端動態加載座位資料。
 */

const fs = require('fs');
const path = require('path');

// 簡單的 CSV 解析（不需要額外依賴）
function parseCSV(content) {
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const records = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    // 簡單的 CSV 解析（處理逗號在引號內的情況）
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const record = {};
    headers.forEach((header, idx) => {
      record[header] = values[idx] || '';
    });
    records.push(record);
  }
  
  return records;
}

// 讀取 CSV 檔案
const csvFilePath = path.join(__dirname, '../seat-data.csv');
const csvContent = fs.readFileSync(csvFilePath, 'utf-8');

// 解析
const records = parseCSV(csvContent);

// 轉換為 JSON
const seatData = records.map(record => ({
  id: record.ID,
  title: record['標題'],
  category: record['分類'],
  zone: record['區域'],
  mapIds: [record['SVG Map ID']],
  image: record['圖片路徑'] || './assets/images/photo_grandstand.png',
  description: record['描述'],
  note: record['備註'] || ''
}));

// 輸出到 JSON 文件
const outputPath = path.join(__dirname, '../data/seat-data.json');
const outputDir = path.dirname(outputPath);

// 確保目錄存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(seatData, null, 2), 'utf-8');

console.log(`✅ 轉換完成！`);
console.log(`📁 輸出文件：${outputPath}`);
console.log(`📊 共轉換 ${seatData.length} 個座位`);
console.log('\n--- 預覽前 3 個座位 ---\n');
console.log(JSON.stringify(seatData.slice(0, 3), null, 2));
