const mysql = require('mysql2')

const pool = mysql.createPool( 
	{
		// MySql Connection Info
		// rds
	 	//host="database-1.cz3zo4yskaei.ap-northeast-2.rds.amazonaws.com",
		// ec2 ubuntu
		host : "3.38.26.169",
		user : "mysql",
		password : "1234",
		database : "testdb"
	}
)
const promisePool = pool.promise()

module.exports = promisePool;
