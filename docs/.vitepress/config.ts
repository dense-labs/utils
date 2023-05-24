import {defineConfig, type DefaultTheme} from 'vitepress'
// import {sync} from 'fast-glob'
export default defineConfig({
    title: '@dense-labs/utils',
    description: 'Commonly used utility functions',
    lang: "zh",
    lastUpdated: true,
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
            { text: '指引', link: '/guide' },
            {
                text: '菜单',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: [
            {
                text: '介绍',
                items: [{text: "快速开始", link: "/guide/guide"}]
            },
            {
                // text: `Utils（${getItems("utils").length}）`,
                text: `Utils（2）`,
                // collapsible: true,
                items:  [{text: "color", link: "/utils/color/color"}, {text: "is", link: "/utils/is/is"}]
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present movecss'
        }
    },
})
/* function getItems(path: string) {
    const links: DefaultTheme.SidebarItem[] = [];
    sync(`docs/${path}/*`, {onlyDirectories: true, objectMode: true}).forEach(({ name }) => {
        links.push({text: name, link: `/${path}/${name}/${name}`})
    })
    return links;
} */