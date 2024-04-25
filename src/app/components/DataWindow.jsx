'use client';
import { Button, Card, Pagination } from '@nextui-org/react';
import CustomPagination from './CustomPagination';
import DataCard from './DataCard';
import { useEffect, useState } from 'react';

const DataWindow = ({ mockData }) => {

  const [page, setPage] = useState(1);

  return (
    <div className='flex flex-col max-h-full w-full'>
      <div className='overflow-auto mb-4 border-2 rounded-xl p-2'>
        {mockData ? (
          mockData.map(
            (data, index) =>
              index >= (page - 1) * 10 && index < page * 10 && <DataCard data={data} />
              // handling for DataCard pagination
          )
        ) : (
          // if mockData is empty, render this message as a form of error handling
          <DataCard
            data={{
              id: 'N/A',
              name: 'No data found',
              description: 'Please reload page',
            }}
          />
        )}
      </div>
      {mockData ? (
        // if mockData is not empty, render the pagination component
        <CustomPagination total={mockData.length} handleChangePage={setPage} />
      ) : (
        // if mockData is empty, render a refresh button
        <Button href='.'>Refresh</Button>
      )}
    </div>
  );
};
export default DataWindow;
