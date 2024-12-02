/** @type {import('tailwindcss').Config} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-quiz-1',
    'bg-quiz-2',
    'bg-quiz-3',
    'bg-quiz-4',
    'bg-quiz-5',
    'bg-quiz-6',
    'bg-quiz-7',
    'bg-quiz-8',
    'bg-quiz-10',
    'bg-quiz-11',
    'bg-quiz-12',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': 'linear-gradient(180deg, #176796 61%, #072130 100%)',
        'result-bg': 'linear-gradient(180deg, #FFDBEC 0%, #FF7D93 100%)',
        'result-box-bg': 'linear-gradient(180deg, #FDE4F0 0%, #FEB0C9 100%)',
        'rolling-img': `url('${basePath}/images/rolling-img.png')`,
        'quiz-1': `url('${basePath}/images/quiz-1.png')`,
        'quiz-2': `url('${basePath}/images/quiz-2.png')`,
        'quiz-3': `url('${basePath}/images/quiz-3.png')`,
        'quiz-4': `url('${basePath}/images/quiz-4.png')`,
        'quiz-5': `url('${basePath}/images/quiz-5.png')`,
        'quiz-6': `url('${basePath}/images/quiz-6.png')`,
        'quiz-7': `url('${basePath}/images/quiz-7.png')`,
        'quiz-8': `url('${basePath}/images/quiz-8.png')`,
        'quiz-10': `url('${basePath}/images/quiz-10.png')`,
        'quiz-11': `url('${basePath}/images/quiz-11.png')`,
        'quiz-12': `url('${basePath}/images/quiz-12.png')`,
        'text-bg' : `url('${basePath}/images/text-img.png')`,
        'ring-img' : `url('${basePath}/images/ring-img.png')`,
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
      boxShadow: {
        'custom': '0px 0px 12px 0px #0000000D',
      },
    },
  },
  plugins: [],
};
