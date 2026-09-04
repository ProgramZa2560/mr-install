# mr-install — หน้าติดตั้งแอป MR

หน้าเว็บสแตนด์อโลนสำหรับดาวน์โหลดแอป Android (APK) ของเจ้าของร้าน — deploy ผ่าน GitHub Pages

- `install.html` — หน้าหลัก (การ์ด Android APK + การ์ดเว็บสำหรับลูกค้า)
- `index.html` — redirect ไป install.html

## APK ดึงจากไหน
GitHub Releases ของ repo `ProgramZa2560/restaurant_app` (ต้องเป็น **public**)
- ลิงก์ล่าสุดเสมอ: `https://github.com/ProgramZa2560/restaurant_app/releases/latest/download/app-release.apk`
- หน้าเว็บดึงเวอร์ชัน/ขนาดไฟล์จาก GitHub API อัตโนมัติ

## อัปเดตแอปรุ่นใหม่
1. build APK: `flutter build apk --release` (ใน restaurant_app)
2. `gh release create vX.Y.Z build/app/outputs/flutter-apk/app-release.apk --target Develop`
3. หน้าเว็บอัปเดตเอง — ไม่ต้องแก้ไฟล์นี้

## Deploy
GitHub Pages จาก branch `main` — push แล้วขึ้นเองที่
`https://programza2560.github.io/mr-install/`
