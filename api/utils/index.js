export const cloneDeep = (data) => {
    return JSON.parse(JSON.stringify(data))
}
export const getWsClientIp = (request) => {
    let ip = ''
    if (request.headers['x-forwarded-for']) {
        ip = request.headers['x-forwarded-for'].split(/\s*, \s*/)[0]
    } else if (request.connection.remoteAddress) {
        ip = request.connection.remoteAddress.split(':').pop()
    }
    return ip
}
export const getQueryStr = (url) => {
    let index = url.indexOf('?')
    if (index >= 0) return url.slice(index + 1)
    return ''
}
