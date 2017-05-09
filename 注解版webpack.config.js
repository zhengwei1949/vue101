var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js', //打包的源文件
    output: {
        path: '/dist/',     //表示所有图片都要在这个目录下
        filename: 'build.js'  //打包后输出的文件
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,         //vue组件
                loader: 'vue-loader'   //负责编译vue组件
            },
            {
                test: /\.css$/, //正则匹配
                loader: 'style-loader!css-loader!autoprefixer-loader'   //顺序不能变
            },
            {
                test: /\.js$/, //正则匹配
                loader: 'babel-loader',   //把es6语法转化成es5语法
                exclude: /node_modules/   //排除这个文件
            },
            {
                test: /\.less$/, //正则匹配
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'   //顺序不能变
            },
            {
                test: /\.scss$/, //正则匹配
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'   //顺序不能变
            },
            { 
                test: /\.(png|jpg|gif)$/,       //配置图片，这里还可以配置图标字体
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    // babel: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    // },
    plugins: [
        new htmlWebpackPlugin({
            title: 'index',     //生产页面的标题（虚拟）
            filename: 'index.html',     //生成文件的名称
            template: 'index.html'      //根据index.html这个模板生成的
        })
    ]
}
