# mr-install — หน้าติดตั้งแอป MR

หน้าเว็บสแตนด์อโลนสำหรับดาวน์โหลดแอป Android (APK) ของเจ้าของร้าน — deploy ผ่าน GitHub Pages

- `install.html` — หน้าหลัก (การ์ด Android APK เปิดผ่าน Chrome + การ์ดวิธีใช้ iOS ผ่าน Safari "เพิ่มไปยังหน้าจอโฮม")
- `index.html` — redirect ไป install.html

หมายเหตุ: การสั่งอาหารต้องผูกกับร้าน/โต๊ะผ่าน token จาก QR — การ์ด "เปิดแอป MR ผ่านเว็บ" ใช้สำหรับเจ้าของร้านจัดการร้านผ่าน browser และเข้าถึงระบบ (การสั่งยังต้องสแกน QR ที่โต๊ะ)

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
