//const BASE_URL = process.env.VUE_ENV === 'client' ? '' : ''

function BASE_URL() {
    let base_url = ''
    if (process.env.VUE_ENV !== 'client') {
        if (process.env.NODE_ENV === 'production') {
            base_url = 'https://www.fengke.club'
        } else if (process.env.NODE_ENV === 'test') {
            base_url = 'http://www.geek-learning.com'
        } else {
            base_url = 'http://www.geek-learning.com'
            // base_url = 'http://192.168.5.5'
        }
    }
    return base_url
}
export default BASE_URL()