"use client";

import { Button } from "@/components/ui/button";

export function TimeSelector({ slots, onSelect, selected }: { slots: string[], onSelect: (t: string) => void, selected: string }) {
  if (slots.length === 0) return <p className="text-neutral-500">No slots available for this date.</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {slots.map((time) => (
        <Button
          key={time}
          variant={selected === time ? "gold" : "outline"}
          onClick={() => onSelect(time)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}
