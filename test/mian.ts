// commonjs
// const  {getNextDay, getWeekByDay} = require('@dense-labs/utils')
// es modules
import {isWatchMode} from 'vitest'
import {getNextDay, getWeekByDay, Signature, isNumber} from '../dist/index.mjs'
console.log(getNextDay(10))
console.log(getWeekByDay('2023-04-10'))

new Signature({
    ele: 'signature'
})
import {isEmail, isUrl} from '@pureadmin/utils'
console.log(isEmail('sds@sdsadsa.ccc'))