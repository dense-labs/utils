import { defineConfig } from 'vitepress'
import { getSidebarItems } from '../shared/'
import pkg from '../../package.json'

export default defineConfig({
    title: '@dense-labs/utils',
    description: 'Commonly used utility functions',
    lang: "zh",
    lastUpdated: true,
    base: '/utils',
    head: [
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
            }
        ],
        ["link", { rel: "icon", href: "/logo3.svg", type: "image/svg+xml" }],
        ["meta", { name: "keywords", content: "@dense-labs/utils" }]
    ],
    themeConfig: {
        lastUpdatedText: '最近更新时间',
        outlineTitle: "目录",
        outline: [2, 2],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/dense-labs/utils' }
        ],
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/dense-labs/utils/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        nav: [
            { text: '指引', link: '/guide/guide' },
            {
                text: pkg.version,
                items: [
                    {
                        text: '变更日志',
                        link: 'https://github.com/dense-labs/utils'
                    }
                ]
            }
        ],
        sidebar: [
            {
                text: '介绍',
                items: [{ text: "快速开始", link: "/guide/guide" }]
            },
            {
                text: `Utils（${getSidebarItems("utils").length}）`,
                items: getSidebarItems("utils")
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present @dense-labs'
        }
    },
    vite: {
        server: {
            host: "0.0.0.0",
        },
        optimizeDeps: {
            include: [
                "axios"
            ],
            exclude: ["@dense-labs/utils"]
        },
        build: {
            chunkSizeWarningLimit: 10000
        }
    },
    vue: {
        // reactivityTransform: true
    }
})
