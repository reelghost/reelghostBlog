/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "primary": ['SUSE', 'sans-serif'],
        "content":['Poppins']
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'h2': {
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '6px',
          marginBottom: '6px',
        },
        'p>img':{
          width: '100%',
          marginTop: '12px',
          marginBottom: '12px',
        },
        'pre': {
          marginBottom: '12px',
          marginTop: '12px',
          borderRadius: '10px',
          height: '25rem',
          width: '50rem',
          padding: '10px',
          overflowX: 'scroll',
        },
      });
    },
  ],
};
