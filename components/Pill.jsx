export function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-[15px] font-medium text-sky-200 ${className}`}
    >
      {children}
    </span>
  );
}
