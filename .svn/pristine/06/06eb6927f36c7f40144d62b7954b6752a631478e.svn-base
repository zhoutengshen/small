const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/',

    chainWebpack: config => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
    },

    productionSourceMap: false,

    devServer: {
        disableHostCheck: true,
        before(app) {
            app.all("/*", (req, res, next) => {
                //res？带点什么给后端？
                const path = req.path;
                const staticeResouceReg = /(.+\..+$)/;
                if (!staticeResouceReg.test(path)) {
                    console.log(`${req.method}：${req.path}`);
                }

                next();
            })
        },
        proxy: {
            '/api': {
                target: 'http://192.168.2.206:8088/',
                secure: false,
                changeOrigin: true
            },
            '/wx': {
                target: 'http://192.168.2.206:8088/',
                secure: false,
                changeOrigin: true
            }

        },
        port: 4000
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                resolve('src/assets/less/common.less')
            ]
        }
    }
}

