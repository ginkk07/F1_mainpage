#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
強制 CSV 添加 BOM 並驗證
"""

import os

csv_path = r"c:\Users\Jimmy.chin\Desktop\測試站\座位\seat-map\seat-data.csv"

# 1. 讀取現有內容
with open(csv_path, 'rb') as f:
    raw_content = f.read()

# 2. 移除舊的 BOM（如果存在）
if raw_content.startswith(b'\xef\xbb\xbf'):
    content_without_bom = raw_content[3:]
    print("✅ 找到舊 BOM，已移除")
else:
    content_without_bom = raw_content
    print("ℹ️  原文件無 BOM")

# 3. 添加新的 BOM
new_content = b'\xef\xbb\xbf' + content_without_bom

# 4. 保存回文件
with open(csv_path, 'wb') as f:
    f.write(new_content)

print("✅ CSV 已重新保存，包含 UTF-8 BOM")

# 5. 驗證
with open(csv_path, 'rb') as f:
    check = f.read(10)

if check.startswith(b'\xef\xbb\xbf'):
    print("✅ 驗證成功：BOM 標記已添加")
    print(f"   BOM 標記: {check[:3].hex()}")
    print(f"   文件大小: {os.path.getsize(csv_path)} bytes")
    print("\n💡 現在用 Excel 打開應該可以正常顯示中文")
else:
    print("❌ 驗證失敗")
