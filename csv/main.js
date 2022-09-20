
/**
 *
 * @param data данные из файла CSV
 * @param delimiter разделитель, используемый в файле
 * @param firstRow пропускать или оставлять первую строку - заголовок
 */
function convertCSV2Array(data, delimiter = ',', firstRow = false)
{
  return data
    .slice(firstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(row => row.split(delimiter));
}

Пример использования

console.log(convertCSV2Array(
    '1, Название1, Значение1, Дата1\n' +
    '2, Название2, Значение2, Дата2\n' +
    '3, Название3, Значение3, Дата3\n'
));
