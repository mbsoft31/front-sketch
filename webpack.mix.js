let mix = require('laravel-mix');


mix.setPublicPath('public');


mix.js('src/js/app.js', 'public/js');
mix.postCss('src/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);

