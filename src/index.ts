export function isUrl(t: string) {
	let n = "^((https|http|ftp|rtsp|mms)?://)(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	return new RegExp(n, "ig").test(t)
}

export function openLink(url: string, n = "_blank") {
	let e = document.createElement("a");
	e.setAttribute("href", url)
	e.setAttribute("target", n)
	e.setAttribute("rel", "noreferrer noopener")
	e.setAttribute("id", "external");
	let r = document.getElementById("external");
	r && document.body.removeChild(r)
	document.body.appendChild(e)
	e.click()
	e.remove()
};