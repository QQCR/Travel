const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias.set('styles', resolve('src/assets/styles'))
  },
  devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:8080", //设置调用的接口域名和端口
				pathRewrite: {
					"^/api": "/mock"
				}
			}
		}
	}
};
