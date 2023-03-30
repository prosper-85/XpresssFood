export const COLORS = {
  primary: '#001F2D',
  secondary: '#4D626C',
  white: '#FFF',
  gray: '#74858C',
  buttons: '#ff8c52',
  gray1: '#43484d',
  gray2: '#5e6977',
  gray3: '#86939e',
  gray4: '#bdc6cf',
  gray5: '#e1e8ee',
  cardcomment: '#86939e',
  cardbackground: '#bdc6cf',
  headerColor: '#ff8c52',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 22,
  headerHight: 40,
};

export const FONTS = {
  bold: 'InterBold',
  semiBold: 'InterSemiBold',
  medium: 'InterMedium',
  regular: 'InterRegular',
  light: 'InterLight',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
