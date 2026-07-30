#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修復 CSV 編碼問題
將 CSV 轉換為 UTF-8 with BOM，支持 Windows Excel
"""

import csv
from pathlib import Path

csv_path = Path(__file__).parent / "seat-data.csv"

# 讀取現有 CSV
rows = []
try:
    # 先嘗試 utf-8-sig（可能已經有 BOM）
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        for row in reader:
            rows.append(row)
except:
    # 如果失敗，嘗試純 utf-8
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            rows.append(row)

# 重新寫入為 UTF-8 with BOM（Windows Excel 友好）
with open(csv_path, 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(rows)

print("✅ CSV 已重新編碼為 UTF-8 with BOM")
print(f"📁 文件位置：{csv_path}")
print("💡 現在用 Excel 打開應該可以正確顯示中文")
print(f"📊 總行數：{len(rows)}")
