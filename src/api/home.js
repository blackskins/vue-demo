const baseUrl = 'https://social-client.weishangshouji.cn'
const token = '89b1496a071e42bdba986a44dd20eaad'

// 基础模板
function temp(url){
  return `${baseUrl}${url}?${token}`
}

// const querySlide = `${baseUrl}/comm/queryshlow${token}` //查询首页轮播图
const querySlide = temp(`/comm/queryshlow`) //查询首页轮播图

module.exports= {
  querySlide
} 