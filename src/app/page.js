import { Button } from '@nextui-org/react';
import CustomButton from './components/CustomButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomButton >Test Custom Button</CustomButton>
    </main>
  );
}
