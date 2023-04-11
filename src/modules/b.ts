export function getMenus() {
    return [
        {
            path: "/login",
            name: "Login",
            meta: {
                title: '登录',
                showLink: false,
                rank: 101
            }
        },
        {
            path: "/redirect",
            meta: {
                icon: "homeFilled",
                title: 'homeFilled',
                showLink: false,
                rank: 102
            },
            children: [
                {
                    path: "/redirect/:path(.*)",
                    name: "Redirect",
                }
            ]
        },
        // 下面是一个无layout菜单的例子（一个全屏空白页面），因为这种情况极少发生，所以只需要在前端配置即可（配置路径：src/router/modules/remaining.ts）
        {
            path: "/empty",
            name: "Empty",
            meta: {
                title: 'ongly',
                showLink: false,
                rank: 103
            }
        }
    ]
    
}