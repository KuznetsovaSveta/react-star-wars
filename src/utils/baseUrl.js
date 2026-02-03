export const getBaseUrl = () => {
  if (window.location.hostname === 'localhost') {
    return '';
  }
  // Для GitHub Pages
  return '/react-star-wars/';
};