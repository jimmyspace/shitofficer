module.exports = {
    '/**/**.json': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/project_image/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/certificate_image/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/product_image/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/forum_image/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/head_image/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/forum_file/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/solution/**/**': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekMart': '/GeekMart'
        }
    },
    '/GeekManage/api': {
        target: 'http://www.geek-learning.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/GeekManage/api': '/GeekManage/api'
        }
    }
}