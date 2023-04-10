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

export function debounce(func: { apply: (arg0: any, arg1: any[]) => any; }, wait: number, options: { leading: any; }) {
	let timeout: number, result: any;

	const later = (context: any, args: any) => {
		timeout = null;
		if (args) result = func.apply(context, args);
	};

	const debounced = function (this: any, ...args: any[]) {
		if (timeout) clearTimeout(timeout);
		const callNow = !timeout && options.leading;
		timeout = setTimeout(later, wait, this, args);
		if (callNow) result = func.apply(this, args);
		return result;
	};

	debounced.cancel = function () {
		clearTimeout(timeout);
		timeout = null;
	};

	return debounced;
}

export function throttle(func: { apply: (arg0: any, arg1: any[]) => any; }, wait: number, options: { leading: boolean; trailing: boolean; }) {
	let timeout: number, context: any, args: any[], result: any;
	let previous = 0;

	const later = () => {
		previous = options.leading === false ? 0 : Date.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};

	const throttled = function (this: any, ..._args: any[]) {
		const now = Date.now();
		if (!previous && options.leading === false) previous = now;
		const remaining = wait - (now - previous);
		context = this;
		args = _args;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};

	throttled.cancel = function () {
		clearTimeout(timeout);
		previous = 0;
		timeout = context = args = null;
	};

	return throttled;
}
export function _formatNumber(n: any) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
export function formatDate(date: Date) {
	
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return [year, month, day].map(_formatNumber).join('-')
}

// 最近7(n - 1)天 
export function getWeekDay(n: number) {
	let nowDate = new Date().getTime()
	return new Date(nowDate - 1000 * 60 * 60 * 24 * n)
}
// 获取当天后n天
export function getNextDay(n: number) {
	let nextDate = formatDate(new Date(new Date().getTime() + n * 24 * 60 * 60 * 1000))// 后一天
	return nextDate
}

// 根据日期字符串获取星期几
export function getWeekByDay(dateString: string) {
	if (!dateString) return
	let [year, month, day] = dateString!.split('-').map(Number)
	let date = new Date(year, month - 1, day)
	return '周' + '日一二三四五六'.charAt(date.getDay())
}
// 最近xxx个月
export function getMonth(monthNumber: number) {
	let number = monthNumber || 1
	let end = new Date()
	end.setMonth(end.getMonth() - number)
	return (end.getFullYear()) + '-' + ((end.getMonth() + 1) < 10 ? '0' : '') + (end.getMonth() + 1) + '-' + (end.getDate() < 10 ? '0' : '') + end.getDate()
}