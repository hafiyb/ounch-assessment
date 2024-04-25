import mysql from 'mysql2/promise';

export const fetchData = async (page = 0) => {
  const connection = await mysql.createConnection({
    //host: 'databases.000webhost.com',
    //database: 'id22085626_sample_db',
    //user: 'id22085626_admin',
    //password: 'Mb45!b162'
    host: 'localhost',
    user: 'root',
    database: 'sample_db',
  });

  const [results, fields] = await connection.execute(
    `SELECT * FROM ${`items`}`
  );

  return results;
};
