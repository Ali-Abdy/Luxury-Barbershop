import { Card } from "@/components/ui/card";
export function LoadingSkeleton() {
  return (
    <div className="grid gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-6 h-24 animate-pulse bg-neutral-100 border-0" />
      ))}
    </div>
  );
}

