/**
 * Central repository for all the colors used in the application.
 * Ideally you should not need to manually define hex values outside of this file, unless a component requires
 * a specific color not present in the rest of the app (and that will not show anywhere else, as if that's the case
 * it would probably be better to just add it here under a custom name).
 */
const colors = {
  // Primary Colors
  madison: '#0D2E68',
  madison_light: '#174BA6',
  assa_blue: '#1749A0',
  blue_zodiac: '#0D2041',
  light_error: '#B80016',

  // Secondary Colors
  bright_turquoise: '#00C2FF',
  bright_turquoise_rgba: 'rgba(0, 194, 255, 1)',
  onahau: '#CEE8FF',
  cloud: '#F5FAFF',
  light_secondary: '#0193E5',
  light_blue_secondary: '#F1FAFF',

  // Complementary
  white: '#fff',
  gallery: '#EAEAEA',
  silver: '#A3A2A2',
  abbey: '#555659',

  // Status
  shamrock: '#43DD97',
  bright_pink: '#FF7182',
  lightning_yellow: '#FFB800',

  // Extra
  backgroundColor: '#FEFEFE',
  blue_text: '#0071BC',
  modal_background: 'rgba(13,32,65,0.8)',
  speedDial_background: 'rgba(13, 46, 104, 0.85)',
  bright_pink_background: 'rgba(255, 113, 130, 0.15)',
  eye_input: 'rgba(0,0,0,0.6)',
  search_grey_icon: '#979797',
  search_grey_text: '#828282',
  transparent: '#00000000',
  grey_separator: '#e5e5e5',
  disable: 'rgba(234, 234, 234, 1)',

  // Gradients
  madison_gradient_darkest: '#0D2E68',
  madison_gradient_mid: '#123E8A',
  madison_gradient_lightest: '#1E59C0',

  // snackbar
  warning: 'rgba(255, 246, 224, 1)',
  warning2: 'rgba(255, 241, 204, 1)',
  success: 'rgba(217, 248, 234, 1)',
  error: 'rgba(255, 226, 230, 1)',
  icon: 'rgba(13, 46, 104, 1)',
};

export default colors;
