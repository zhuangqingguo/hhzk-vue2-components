const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //由于修改了src文件夹名称，所以启动vue项目后，会因找不到入口（main.js）而会报错，所以需要重新指定启动入口
  pages: {
    // 将 examples 目录添加为新的页面
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set('@$', resolve('packages')).set('@assets', resolve('packages/assets'))

    //配置svg
    const svgRule = config.module.rule('svg')
    svgRule.exclude.add(resolve('packages/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('packages/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
