const db = require('../db/index')

exports.addHouse = (req, res) => {
  // 定义待执行的 SQL 语句
  const sql = `insert into house_info set ? `
  // 调用 db.query() 执行 SQL 语句并传递参数
  db.query(sql, req.body, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('添加房屋信息失败！')
    // 成功
    res.cc('添加房屋信息成功！', 0)
  })
}