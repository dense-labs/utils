import {test, expect, expectTypeOf} from 'vitest'
import {dateFormat, isTimeInRange, formatNumber, formatDate, getWeekDay, getNextDay, getWeekByDay, getMonth} from '../dist/index.mjs'

test('dateFormat', () => {
    console.log(dateFormat(new Date(), 'yyyy'))
    expect(dateFormat(new Date(), 'yyyy') === '2023').toBe(true)
    /* expect(dateFormat(new Date(), 'yyyy-MM') === '2023-05').toBe(true)
    expect(dateFormat(new Date(), 'yyyy-MM-dd') === '2023-05-09').toBe(true)
    expect(dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') !== '2023-05-09 20:24:21').toBe(true) */
})