// Форматирует число с пробелами между тысячами и точкой в качестве разделителя дробной части
function NumFrm(number) {
    return new Intl.NumberFormat('ru-RU', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2, 
        useGrouping: true 
    }).format(number).replace(',', '.');
}

// Пример использования
console.log(NumFrm(123899.34)); // "123 899.34"
