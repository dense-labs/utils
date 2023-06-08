import multiEntry from '@rollup/plugin-multi-entry'
import terser from '@rollup/plugin-terser'
import {uglify} from 'rollup-plugin-uglify'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import clear from 'rollup-plugin-clear'
import fs from 'fs'
import path from 'path'
const pkg = JSON.parse(await fs.readFileSync(path.resolve(process.cwd(), './package.json'), {encoding: 'utf-8'}))

export default [
	{
		input: 'src/index.ts', //入口
		output: [
			{
				file: pkg.main,
				format: 'cjs'
			},
			{
				file: pkg.module,
				format: 'es'
			},
			{
				name: 'denseLabs',
				file: './dist/index.umd.js',
				format: 'umd'
			}
		],
		// 声明它的外部依赖，可以不被打包进去。
		external: [],
		// 监听文件的变化，重新编译，只有在编译的时候开启 --watch 才生效。
		watch: {
			include: 'src/**'
		},
		plugins: [
			clear({
				targets: ['dist']
			}),
			resolve(),
			typescript(/* { declaration: true, declarationDir: '/', removeComments: false } 比tsonfig 中配置优先级高 */),
			multiEntry(),
			commonjs(),
			terser(),
			uglify()
		]
	}
]
