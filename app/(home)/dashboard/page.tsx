import { DiamondsCounter } from "./_components/DiamondsCounter";

export default function DashboardPage() {
  return (
    <div className='flex justify-center items-center h-full px-2'>
      <h1 className="text-2xl font-bold">Your Diamonds</h1>
      <DiamondsCounter />
    </div>
  );
}
