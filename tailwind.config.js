/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // ให้แน่ใจว่าไฟล์ HTML ถูกอ้างอิงที่นี่
    './src/**/*.{js,jsx,ts,tsx}', // และอ้างอิงไฟล์ใน src ที่ใช้ Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
