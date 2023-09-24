
У вас есть массив со множеством объектов, каждый из которых представляет отдельного человека. 
Тут может быть очень много данных: имя, возраст, цвет волос и любимый персонаж из кинематографа, 
но в данный момент всё это не требуется – вы хотите получить только массив паспортных номеров этих людей,
чтобы выдать им всем пропуска на конференцию.

```js
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```
В определенных случаях вам может понадобится отобразить массив объектов с выбранными ключами в виде строки :
```js
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```
