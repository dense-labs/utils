// commonjs
// const  {getNextDay, getWeekByDay} = require('@dense-labs/utils')
// es modules
import {getNextDay, getWeekByDay, signature} from '@dense-labs/utils'
console.log(getNextDay(10))
console.log(getWeekByDay('2023-04-10'))

new signature()