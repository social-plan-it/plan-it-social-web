export function Card({ children }: { children: React.ReactNode }) {
  return <section className="w-full bg-white shadow-lg rounded-lg px-2 py-6 lg:p-16">{children}</section>;
}

export function DashboardHeader({ children }: { children: React.ReactNode }) {
  return <h1 className="text-black font-bold text-4xl">{children}</h1>;
}
