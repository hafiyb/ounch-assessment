import mysql from 'mysql2/promise';
import DataWindow from './components/DataWindow';

const fetchData = async (page = 0) => {
  // connection to local database
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: 'sample_db',
    });

    // query to select all items from the items table
    const [results, fields] = await connection.execute(
      `SELECT * FROM ${`items`}`
    );

    return results;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  // fetch data from the database
  let mockData = await fetchData();

  return (
    <main className='flex h-screen flex-col items-center justify-between py-12 md:px-24 sm:px-4'>
      <div className='flex flex-col max-h-full w-full'>
        <h1 className='mb-2 text-3xl'>Ounch</h1>
        <DataWindow mockData={mockData} />
      </div>
    </main>
  );
};

export default Page;
