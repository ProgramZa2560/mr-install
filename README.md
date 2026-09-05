# mr-install — หน้าติดตั้งแอป MR

หน้าเว็บสแตนด์อโลนสำหรับดาวน์โหลดแอป Android (APK) ของเจ้าของร้าน — deploy ผ่าน GitHub Pages

- `install.html` — หน้าหลัก (การ์ด Android APK เปิดผ่าน Chrome + การ์ดวิธีใช้ iOS ผ่าน Safari "เพิ่มไปยังหน้าจอโฮม")
- `app/index.html` — หน้าเข้าเบาๆ (redirect ไป web/) — แชร์ลิงก์นี้: `.../mr-install/app/`
- `app/web/` — ไฟล์แอปจริง จาก **`flutter build web --release --base-href /mr-install/app/web/`** (ใช้ตัวเดียวกับแอปมือถือ ไม่ใช่เว็บ vanilla ของ restaurant_customer)
- `index.html` — redirect ไป install.html

## อัปเดตเว็บแอป (app/web/)
1. build: `flutter build web --release --base-href /mr-install/app/web/` (ใน restaurant_app)
2. `rm -rf mr-install/app/web && cp -R restaurant_app/build/web mr-install/app/web` (ห้ามลบ app/index.html)
3. commit + push → Pages deploy เอง

หมายเหตุ: การสั่งอาหารต้องผูกกับร้าน/โต๊ะผ่าน token จาก QR — เว็บแอปใช้ API production โดยตรง (CORS เปิด `*` ที่ backend)

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
