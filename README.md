# PRISMA — 3D Company Profile

Website Company Profile single-page dengan animasi 3D interaktif.
Dibangun dengan **React + TypeScript + Tailwind CSS + Three.js** (`@react-three/fiber` & `@react-three/drei`).

## ✨ Fitur
- Hero, About, Products, dan Footer dalam satu landing page.
- Model 3D (Rounded Bento Cube) sebagai fokus utama.
- **Mouse tracking**: model memiringkan diri mengikuti kursor di Hero.
- **Scroll interaction**: model berpindah posisi, skala, dan rotasi secara mulus saat scroll menuju Products (memakai `useFrame` + `THREE.MathUtils.damp`).
- Latar gradien beranimasi + glassmorphism (tema Bold Vibrant Gradient).

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan (biasanya http://localhost:5173).

## 🏗️ Build Produksi

```bash
npm run build
npm run preview
```

## 📁 Struktur

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Footer.tsx
│   └── three/
│       └── Scene.tsx
├── hooks/
│   ├── useMouse.ts
│   └── useScrollProgress.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🧠 Logika Interaksi
- **Kursor**: `useMouse` menyimpan posisi kursor ter-normalisasi ([-1,1]) di `ref`, dipakai sebagai offset rotasi yang memudar saat menjauh dari Hero.
- **Scroll**: `useScrollProgress` menghitung progress 0→1 dari atas halaman sampai Products Section. Progress memetakan position/scale/rotation lewat `lerp`, dihaluskan dengan `damp` di dalam `useFrame`.
