"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LuxuryBadge } from "@/components/ui/LuxuryBadge";

export function BookingInterface() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="mb-8">
        <LuxuryBadge>Booking</LuxuryBadge>
        <h2 className="text-3xl font-light">Schedule Your Ritual</h2>
      </div>

      <Card className="p-8">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl">Select Service</h3>
            {/* Service list to be populated from server action */}
            <Button onClick={() => setStep(2)}>Next</Button>
          </div>
        )}
        
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-xl">Confirm Details</h3>
            <Button onClick={() => setLoading(true)} disabled={loading}>
              {loading ? "Confirming..." : "Confirm Booking"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
