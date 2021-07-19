 /* 存cookie */
 export function setCookie (cname, cvalue, exdays = 0) {
    let expires = cname + '=' + escape(cvalue)
    if (exdays > 0) {
        let d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        expires += 'expires=' + d.toUTCString()
    }
    document.cookie = cname + '=' + cvalue + '; ' + expires
}
/* 获取cookie */
export function getCookie (cname) {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1)
        if (c.indexOf(name) !== -1) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}
/* 清空cookie */
export function clearCookie (cname) {
    setCookie(cname, '', -1)
}