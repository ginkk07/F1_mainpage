#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CSV 轉 JavaScript 座位資料工具

使用方式：
  python3 scripts/csv-to-seat-data.py

這個腳本會讀取 seat-data.csv，轉換成 JavaScript 格式的 createSeat() 調用
"""

import csv
import json
from pathlib import Path

def csv_to_seat_data():
    # 找到 CSV 檔案
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    csv_path = project_root / "seat-data.csv"
    
    if not csv_path.exists():
        print(f"❌ 找不到 CSV 檔案：{csv_path}")
        return
    
    # 讀取 CSV（使用 utf-8-sig 以支持 Windows Excel）
    seats = []
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            seats.append(row)
    
    # 生成 JavaScript 代碼
    js_code = "/* 由 scripts/csv-to-seat-data.py 自動生成 */\n\n"
    js_code += "export const SEAT_DATA = [\n"
    
    for i, seat in enumerate(seats):
        js_code += "  createSeat({\n"
        js_code += f"    id: \"{seat.get('ID', '')}\",\n"
        js_code += f"    title: \"{seat.get('標題', '')}\",\n"
        js_code += f"    category: \"{seat.get('分類', 'grandstand')}\",\n"
        js_code += f"    zone: \"{seat.get('區域', '')}\",\n"
        js_code += f"    mapIds: [\"{seat.get('SVG Map ID', '')}\"],\n"
        js_code += f"    image: \"{seat.get('圖片路徑', './assets/images/photo_grandstand.png')}\",\n"
        js_code += f"    description: \"{seat.get('描述', '')}\"\n"
        js_code += "  })" + ("" if i == len(seats) - 1 else ",") + "\n"
    
    js_code += "];\n"
    
    # 輸出到文件
    output_path = project_root / "js" / "seat-data-generated.js"
    output_path.write_text(js_code, encoding='utf-8')
    
    print(f"✅ 轉換完成！")
    print(f"📁 輸出文件：{output_path}")
    print(f"📊 共轉換 {len(seats)} 個座位")
    print(f"\n--- 前 3 個座位 ---\n{js_code.split(']')[0].split('[')[1].strip()[:300]}...\n")


def csv_to_json():
    """轉換為 JSON 格式（方便前端動態加載）"""
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    csv_path = project_root / "seat-data.csv"
    
    if not csv_path.exists():
        print(f"❌ 找不到 CSV 檔案：{csv_path}")
        return
    
    # 讀取 CSV（使用 utf-8-sig 以支持 Windows Excel）
    seats = []
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            seats.append({
                "id": row.get('ID', ''),
                "title": row.get('標題', ''),
                "category": row.get('分類', 'grandstand'),
                "zone": row.get('區域', ''),
                "mapIds": [row.get('SVG Map ID', '')],
                "image": row.get('圖片路徑', './assets/images/photo_grandstand.png'),
                "description": row.get('描述', ''),
                "note": row.get('備註', '')
            })
    
    # 輸出 JSON
    output_dir = project_root / "data"
    output_dir.mkdir(exist_ok=True)
    output_path = output_dir / "seat-data.json"
    
    output_path.write_text(json.dumps(seats, ensure_ascii=False, indent=2), encoding='utf-8')
    
    print(f"✅ JSON 轉換完成！")
    print(f"📁 輸出文件：{output_path}")
    print(f"📊 共轉換 {len(seats)} 個座位")


if __name__ == "__main__":
    csv_to_seat_data()
    csv_to_json()
