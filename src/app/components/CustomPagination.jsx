'use client';

const { Pagination } = require('@nextui-org/pagination');

const CustomPagination = ({ total, handleChangePage }) => {
  // This component is used to render the pagination component, open to enhancement
  return (
    <div className='min-w-full flex justify-center'>
      <Pagination
        total={Math.ceil(total / 10)}
        initialPage={1}
        onChange={(e) => handleChangePage(e)}
      />
    </div>
  );
};

export default CustomPagination;
