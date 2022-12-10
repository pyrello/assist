const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['jquery', 'bootstrap-sass', 'vue', 'selectize', 'moment', 'lodash', 'vuelidate'])
    .autoload({
        jquery: ['$', 'jQuery', 'jquery'],
    })
    .webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/app.[name].js',
            publicPath: '/'
        },
    })
    .copy('./node_modules/font-awesome/fonts', 'public/fonts')
    .copy('./node_modules/bootstrap-sass/assets/fonts', 'public/fonts')
    .copy('./node_modules/@fortawesome/fontawesome-free/webfonts', 'public/fonts')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .browserSync({ proxy: 'assist.test' })
    // .version()

if (mix.inProduction()) {
    mix.version();
}
