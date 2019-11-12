const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
imagemin(['./src/images/*.{jpg,png}'], {
    destination:  './src/images/converted/',
    plugins: [
        imageminWebp({
            quality: 10,
        })
    ]
}).then(() => {
    console.log('Images optimized');
});