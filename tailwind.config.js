const colors = require('tailwindcss/colors');
module.exports = {
  purge: process.env.NODE_ENV === 'production' && {
    content: ['./public/**/*.html', './src/**/*.svelte', './src/**/*.js', './src/**/*.ts'],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
        const matchedTokens = [];
        let match = regExp.exec(content);
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6));
          } else {
            matchedTokens.push(match[0]);
          }
          match = regExp.exec(content);
        }
        return matchedTokens;
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
  }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
