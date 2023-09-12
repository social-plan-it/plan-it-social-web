export function Card({ children }: { children: React.ReactNode }) {
  return <section className="w-full bg-white shadow-lg rounded-lg px-6 py-6 sm:p-16">{children}</section>;
}
