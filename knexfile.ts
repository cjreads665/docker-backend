export default{
    client : 'pg',
    connection : process.env.DATABASE_URL,
    migrations:{
        extensions : 'ts'
    }
}