import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookingData {
  serviceName: string;
  barberName: string;
  date: string;
  time: string;
}

export function BookingSummary({ booking, onConfirm, loading }: { booking: BookingData, onConfirm: () => void, loading: boolean }) {
  return (
    <div className="space-y-6">
      <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
        <div className="flex justify-between">
          <span className="text-neutral-500">Service:</span>
          <span className="font-medium">{booking.serviceName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Barber:</span>
          <span className="font-medium">{booking.barberName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Date/Time:</span>
          <span className="font-medium">{booking.date} at {booking.time}</span>
        </div>
      </div>
      <Button className="w-full" size="lg" onClick={onConfirm} disabled={loading}>
        {loading ? "Confirming..." : "Confirm Ritual"}
      </Button>
    </div>
  );
}
