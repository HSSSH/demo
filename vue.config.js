module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/sass/_variables.scss";`
            }
        }
    },
    runtimeCompiler: true,
    devServer: {
        proxy: 'http://localhost:8080',
        //host: 'localhost',
        port: 8080,
    }
}