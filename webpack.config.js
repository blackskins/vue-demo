const path = require('path')

// 导入 在内存中生成 html 页面的插件
// 只要是插件，都一定 放到 plugins 节点中去
// 这个插件的两个作用
// 1.自动在内存中根据指定的页面生成一个内存中的页面（拷贝一份到内存）
// 2.自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 这是一个配置文件  其实就是一个 JS文件 ，通过 Node.js 中的模块操作，向外暴露了一个配置文件
module.exports = {
  // 大家已经学会了 举一反三，大家觉得： 在配置文件中，需要手动指定 入口 和 出口
  entry:path.join(__dirname,'./src/main.js'),//入口 ，表示，要使用 webpack 打包那个文件
  output:{//输出文件的相关配置4
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  plugins:[//配置插件的节点
    new htmlWebpackPlugin({//创建一个 在内存中 生成HTML 页面的插件
      template:path.join(__dirname,'./src/index.html'),//指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename:'index.html'//指定生成的页面名称
    }), 
    new VueLoaderPlugin()
  ],
  module:{//这个节点，用于配制 所有第三方模块 加载器
    rules:[//所有第三方模块的 匹配规则
      {//配置处理 .css 文件的第三方loader规则
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {//配置处理 .less 文件的第三方loader规则
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {//配置处理 .less 文件的第三方loader规则
        test:/\.scss$/,
        use:['style-loader','css-loader','less-loader','sass-loader']
      },
      {//配置处理 图片路径 文件的第三方loader规则
        test:/\.jpg|png|gif|bmp|jpeg$/,
        use:'url-loader?limit=2048&name=[hash:8]-[name].[ext]'
        // limit 给定得值，是图片的大小，单位是byte，如果我们引用的图片大于或等于给定的limit值，则不会转化为base64格式的字符串，如果 图片小于给定的limit 值，则会被转为base64的 字符串
      },
      {//配置处理 字体文件 文件的第三方loader规则
        test:/\.ttf|woff|woff2|svg|eot$/,
        use:'url-loader'
      },
      {//配置babel来处理 高级语法的loader
        test:/\.js$/,
        use:'babel-loader',
        exclude:/node_modules/
      },
      {//处理.vue 文件的loader
        test:/\.vue$/,
        use:'vue-loader'
      },
    ]

  },
  resolve:{
    // alias:{//这是设置 vue 被导入的时候
    //   'vue$':'vue/dist/vue.js'
    // }
  }
}

