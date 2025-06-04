// colorUtils.js

const colorUtils = (function() {
  
  // Преобразование HEX в RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  // Преобразование RGB в HEX
  function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join('');
  }

  // Генерация случайного цвета
  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgbToHex(r, g, b);
  }


  function strr(name){
    return name.split('').reverse().join('');
  }

  // Публичный API
  return {
    hexToRgb,
    rgbToHex,
    randomColor,
    strr
  };

})();



const systems = (function() {

  function strr(name){
    return name+ 'Имя';
  }

   function strr2(name){
    return name.split('').reverse().join('');
  }

  // Публичный API
  return {
    strr,
    strr2 
  };

})();
