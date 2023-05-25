import {type DefaultTheme} from 'vitepress'
import fg from 'fast-glob'

export function getSidebarItems(path: string) {
	const links: DefaultTheme.SidebarItem[] = []
	fg.sync(`docs/${path}/*`, {onlyDirectories: true, objectMode: true}).forEach(({name}) => {
		links.push({text: name, link: `/${path}/${name}/${name}`})
	})
	return links
}
