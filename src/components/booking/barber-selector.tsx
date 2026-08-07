"use client";

import { Card } from "@/components/ui/card";

export function BarberSelector({ barbers, onSelect, selected }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {barbers.map((b: any) => (
        <Card 
          key={b.id}
          onClick={() => onSelect(b.id)}
          className={`p-6 cursor-pointer hover:border-amber-600 transition-all ${selected === b.id ? 'border-amber-600 bg-amber-50' : ''}`}
        >
          <h3 className="font-medium">{b.user.name}</h3>
          <p className="text-sm text-neutral-500 mt-2">{b.bio}</p>
        </Card>
      ))}
    </div>
  );
}
