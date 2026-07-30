#!/usr/bin/env python3
# 為 CSV 添加 BOM

with open(r'c:\Users\Jimmy.chin\Desktop\測試站\座位\seat-map\seat-data.csv', 'rb') as f:
    raw = f.read()

# 移除舊 BOM
if raw.startswith(b'\xef\xbb\xbf'):
    raw = raw[3:]

# 添加新 BOM
new_content = b'\xef\xbb\xbf' + raw

# 寫回
with open(r'c:\Users\Jimmy.chin\Desktop\測試站\座位\seat-map\seat-data.csv', 'wb') as f:
    f.write(new_content)

print('✅ CSV BOM 修復完成')
print(f'新文件大小: {len(new_content)} bytes')
