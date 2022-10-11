// 导入数据库操作模块
const db = require('../db/index')

// 用户搜索,返回房屋列表的处理函数
exports.getHouseList = (req, res) => {

  // 获取客户端提交到服务器的用户信息
  console.log(Object.keys(req.body)[0]);
  // 定义 SQL 语句
  const sql = `select * from house_info`
  // 模糊搜索的语句

  const mz = "%" + Object.keys(req.body)[0] + "%";
  const sql1 = `select * from house_info where place like ? `
  // db.query(sql1, mz, (err, results) => {
  //   // 执行 SQL 语句失败
  //   if (err) return res.cc(err)
  //   // if (results.length !== 1) return res.cc('获取列表失败！')
  //   const results1 = results
   
    db.query(sql, (err, results) => {
      // 执行 SQL 语句失败
      if (err) return res.cc(err)
      // let results2 = results


      // let obj = {};
      // results2.forEach((item, index) => {
      //   if (item.id === results1[0].id) {
      //     obj = item;
      //      results2.splice(index, 1)
      //     return;
      //   }
        
      //   results2.unshift(obj);
      //   console.log(results2);
      // })
      res.send({
        status: 0,
        message: '列表获取成功',
        list: results,
      })

    })
    // console.log(results);
  
}