export function Card({ children }: { children: React.ReactNode }) {
  return <section className="w-full bg-white shadow-lg rounded-lg px-2 py-6 lg:p-16">{children}</section>;
}
