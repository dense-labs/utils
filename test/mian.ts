// commonjs
// const  {getNextDay, getWeekByDay} = require('@dense-labs/utils')
// es modules
import {getNextDay, getWeekByDay, isTimeInRange, isEmail} from '../dist/index.mjs'
console.log(getNextDay(10))
console.log(getWeekByDay('2023-04-10'))
console.log(isEmail('sds@sdsadsa.ccc'))
console.log(isEmail('sds@sdsadsa.ccc'))
console.log(isTimeInRange('2023-01-12 12:23:23', '2023-12-22 23:23:23', '2023-05-12'))
