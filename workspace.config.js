exports.config = {
    name: 'fst_exams',
    mode: 'default',
    modes: {
        default: [
            {
                input: './ts/main.ts',
                output: './public/js/',
                compiler: 'fusebox'
            },
            {
                input: './sass/main.sass',
                output: './public/css/',
                compiler: 'sass'
            }
        ]
    }
}