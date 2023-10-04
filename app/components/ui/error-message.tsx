type ErrorProps = {
  children: React.ReactNode;
};

export function ErrorMessage({ children }: ErrorProps) {
  return (
    <div className="m-6 flex items-center justify-center">
      <div
        className="relative w-128 justify-center self-center rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700"
        role="alert"
      >
        <div className="block md:inline">{children}</div>
      </div>
    </div>
  );
}
