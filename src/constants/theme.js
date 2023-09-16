const breakpoints = ['320', '834', '1440'];

export const theme = Object.freeze({
  // Кольори, приклад background-color: ${theme.colors.gray};
  colors: {
    // Основні
    white: '#FFFFFF', // білий
    black: '#050505', // чорний
    violet: '#B6C3FF', // фіолетовий
    black2: '#0F0F0F', // чорний 2
    liteGreen: '#45FFBC', // світло зелений
    gray: '#B6B6B6', // сірий
    greenLite: '#E3FFA8', //зелений лайт
    // другорядні
    gray1: '#292928', // сірий 1
    pink: '#FFC4F7', // рожевий
    yellow: '#FFF3B7', // жовтий
    // допоміжні
    error: '#E74A3B', // червоний помилка
    correct: '#3CBC81', // зелений правильно
  },

  // Сімейство шрифтів, приклад font-family: ${theme.fontFamily.poppins};
  fontFamily: {
    poppins: "'Poppins', sans-serif",
  },

  // Ширина шрифта, приклад font-weight: ${p => p.theme.fontWeights.bold};
  fontWeight: {
    regular: 400, // нормальний
    medium: 500, // середній
    semiBold: 600, // напівжирний
    bold: 700, // жирний
  },

  // Розміри шрифту, приклад font-size: ${p => p.theme.fontSizes.l}px;
  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '22px',
    xl: '30px',
    xxl: '32px',
  },

  //Медіа запити, прклад
  // @media screen and(${ p => p.theme.mq.tablet}) {
  //    font-size: ${p => p.theme.fontSizes.l}px;
  // }
  mq: {
    mobile: `min-width: ${breakpoints[0]}px`, // Мобілка
    tablet: `min-width: ${breakpoints[1]}px`, // Планшет
    desktop: `min-width: ${breakpoints[2]}px`, // Дескстоп
  },

  //Бордери, приклад border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  borders: {
    none: 'none',
    normal: '1px solid',
  },

  //Радіус для бордера, приклад border-radius: ${p => p.theme.radii.normal};
  radii: {
    normal: '12px',
  },
});
