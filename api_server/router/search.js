const express = require('express')
const router = express.Router()

// 导入搜索处理函数对应的模块
const search = require('../router_handler/search')

// 获取房屋列表的路由
router.post('/houselist', search.getHouseList)

module.exports = router