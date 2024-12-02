/** @type {import('tailwindcss').Config} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': 'linear-gradient(180deg, #5AA2FF 0%, #003D8C 100%)',
        'rolling-img': `url('${basePath}/images/rolling-img.png')`,
      },
      animation: {
        rolling: 'rolling 10s linear infinite',
      },
      keyframes: {
        rolling: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      willChange: {
        transform: 'transform',
      },
      fontFamily: {
        jalnan: ['Jalnan2', 'sans-serif'], // Jalnan2 폰트 추가
        pretendard: ['Pretendard', 'sans-serif'], // Jalnan2 폰트 추가
      },
    },
  },
  plugins: [],
};
