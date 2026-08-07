import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { getCustomerAppointments, cancelAppointment } from "@/features/dashboard/dashboard-actions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const appointments = await getCustomerAppointments();

  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24">
          <Container>
            <h1 className="text-4xl font-light mb-12">My Rituals</h1>
            {appointments.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-neutral-500 mb-6">No upcoming appointments found.</p>
                <Button asChild><a href="/booking">Book Your First Ritual</a></Button>
              </Card>
            ) : (
              <div className="grid gap-6">
                {appointments.map((apt) => (
                  <Card key={apt.id} className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium">{apt.service.name}</h3>
                      <p className="text-sm text-neutral-500">{apt.startTime.toDateString()} at {apt.startTime.toLocaleTimeString()}</p>
                    </div>
                    <form action={async () => { "use server"; await cancelAppointment(apt.id); }}>
                      <Button variant="destructive" type="submit">Cancel</Button>
                    </form>
                  </Card>
                ))}
              </div>
            )}
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
