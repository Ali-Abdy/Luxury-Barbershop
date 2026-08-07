import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getBarberAppointments } from "@/features/barber/barber-actions";
import { Card } from "@/components/ui/card";

export default async function BarberDashboardPage() {
  const appointments = await getBarberAppointments();

  return (
    <PageWrapper>
      <Section className="py-24">
        <Container>
          <h1 className="text-4xl font-light mb-12">Barber Dashboard</h1>
          <div className="grid gap-6">
            {appointments.map((apt) => (
              <Card key={apt.id} className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl">{apt.customer.name}</h3>
                    <p className="text-sm text-neutral-500">{apt.service.name}</p>
                  </div>
                  <div>
                    <p className="font-mono text-sm">{apt.startTime.toLocaleTimeString()}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
