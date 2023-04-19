const {isUrl, getWeekByDay, storageLocal} = require('../../dist/index.cjs')

console.log(isUrl('https://github.com/'))

console.log(getWeekByDay('https://github.com/'))
console.log(storageLocal())

console.log(storageLocal().setItem('qqq2222', [1, 233, 5]))
