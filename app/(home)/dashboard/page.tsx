import { DiamondsCounter } from "./_components/DiamondsCounter";
import { DASHBOARD_DIAMONDS_TITLE } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <div className='flex flex-col md:flex-row gap-2 justify-center items-center h-full px-2'>
      <h1 className="text-2xl font-bold">{DASHBOARD_DIAMONDS_TITLE}</h1>
      <DiamondsCounter />
    </div>
  );
}
