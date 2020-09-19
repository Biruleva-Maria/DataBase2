require('dotenv').config()
const{ Client }=require('pg')
const client =new Client(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATEBASE
    }
)

const name='1 or 1 = 1'

client.connect()

client.query(`
SELECT *
FROM test
WHERE name= $1`,
[name])
.then(result => console.log(result))
.catch(e => console.log(e.stack))
.then(()=>client.end())

// client.query(`
//     SELECT * 
//     FROM test 
//     WHERE name=$1
//     ` ,[name], function (err,res) {
//     console.log (err,res)
//     client.end()
// })

console.log(1)

/*query(query, cb){
    ...
    ...
    response=...
    er=...q
    cb(err, response)
}*/