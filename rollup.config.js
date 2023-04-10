import multiEntry from 'rollup-plugin-multi-entry'
import {terser} from 'rollup-plugin-terser'
import {uglify} from 'rollup-plugin-uglify'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2' 
import pkg from'./package.json'
import path from 'path'

module.exports = {
    // input: ['src/**/*.ts'], //入口
    input: ['src/**/*.ts'], //入口
    // input: path.resolve(__dirname, 'src/index.ts'), 
    output: [// commonjs 
    { 
        // package.json 配置的 main 属性 
        file: pkg.main, 
        format: 'cjs'
    }, 
    // es module 
    { 
        // package.json 配置的 module 属性 
        file: pkg.module, 
        format: 'es'
    }, { 
        // package.json 配置的 module 属性
        name: 'denseLabs',
        file: './dist/index.js', 
        format: 'umd'
    }],
    // 声明它的外部依赖，可以不被打包进去。
    external: [],
    // 监听文件的变化，重新编译，只有在编译的时候开启 --watch 才生效。
    watch: {
        include: 'src/**',
    },
    plugins: [
        multiEntry(),
        terser(),
        commonjs(),
        typescript(),
        uglify()
    ]
}