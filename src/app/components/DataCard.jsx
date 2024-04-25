import { Card } from '@nextui-org/card';

const DataCard = ({data }) => {
  // This component is used to render the data in a card format
  return (
    <Card key={data.id} className='p-4 min-w-full gap-4 mb-2'>
      <div className='flex items-center gap-2'>
        <div>{data.id}</div>
        <div>{data.name}</div>
      </div>
      <div>{data.description}</div>
    </Card>
  );
};

export default DataCard