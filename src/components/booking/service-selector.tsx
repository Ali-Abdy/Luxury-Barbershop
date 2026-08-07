import { Card } from "@/components/ui/card";

interface ServiceProps {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: number;
}

export function ServiceSelector({ services, onSelect, selected }: { services: ServiceProps[], onSelect: (id: string) => void, selected: string }) {
  return (
    <div className="grid gap-4">
      {services.map((s) => (
        <Card 
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`p-6 cursor-pointer hover:border-amber-600 transition-all ${selected === s.id ? 'border-amber-600 bg-amber-50' : ''}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">{s.name}</h3>
              <p className="text-neutral-500 mt-1">{s.description}</p>
            </div>
            <div className="text-right">
              <span className="block font-semibold text-amber-700">{s.price.toString()}€</span>
              <span className="text-sm text-neutral-400">{s.duration} min</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

