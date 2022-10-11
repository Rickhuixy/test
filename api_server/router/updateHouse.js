const express = require('express')
const router = express.Router()

// 导入搜索处理函数对应的模块
const updateHouse = require('../router_handler/updateHouse')

// 获取房屋列表的路由
router.post('/addhouse', updateHouse.addHouse)

module.exports = router