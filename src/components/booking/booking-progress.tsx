"use client";


export function BookingProgress({ step }: { step: number }) {
  const steps = ["Service", "Barber", "Date", "Time", "Confirm"];
  return (
    <div className="flex gap-2 mb-8 justify-center">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center">
          <div className={`px-3 py-1 rounded-full text-xs uppercase tracking-widest ${i + 1 <= step ? 'bg-amber-600 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
            {label}
          </div>
          {i < steps.length - 1 && <div className="w-4 h-[1px] bg-neutral-300 ml-2" />}
        </div>
      ))}
    </div>
  );
}
