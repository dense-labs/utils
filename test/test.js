// commonjs
// const  {getNextDay, getWeekByDay} = require('@dense-labs/utils')
// es modules
import {getNextDay, getWeekByDay, signature} from '../dist/index.js'
console.log(getNextDay(10))
console.log(getWeekByDay('2023-04-10'))

new signature({
    ele: 'signature'
})
import {isEmail, isUrl} from '@pureadmin/utils'

console.log(isEmail('sds@sdsadsa.ccc'))