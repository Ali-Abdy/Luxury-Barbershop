import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="grid gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-6">
          <Skeleton className="h-6 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full" />
        </Card>
      ))}
    </div>
  );
}
