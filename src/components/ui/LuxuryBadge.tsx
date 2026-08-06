export function LuxuryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs uppercase tracking-widest font-medium rounded-full mb-4">
      {children}
    </span>
  );
}
