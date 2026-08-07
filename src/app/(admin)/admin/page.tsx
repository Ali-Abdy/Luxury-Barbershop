import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";
import { getAdminDashboardStats, getAllBarbers, getServices } from "@/features/admin/admin-actions";
import { Card } from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const stats = await getAdminDashboardStats();
  const barbers = await getAllBarbers();
  const services = await getServices();

  return (
    <PageWrapper>
      <AnimatedPage>
        <Section className="py-24">
          <Container className="space-y-12">
            <h1 className="text-4xl font-light">Admin Dashboard</h1>
            
            <div className="grid grid-cols-3 gap-6">
              <Card className="p-6">
                <p className="text-neutral-500">Total Appointments</p>
                <p className="text-3xl">{stats.totalAppointments}</p>
              </Card>
              <Card className="p-6">
                <p className="text-neutral-500">Active Barbers</p>
                <p className="text-3xl">{stats.activeBarbers}</p>
              </Card>
              <Card className="p-6">
                <p className="text-neutral-500">Active Services</p>
                <p className="text-3xl">{stats.totalServices}</p>
              </Card>
            </div>

            <div className="grid gap-6">
              <h2 className="text-2xl">Barbers</h2>
              {barbers.map((b) => (
                <Card key={b.id} className="p-6 flex justify-between">
                  <span>{b.user.name}</span>
                  <span className={b.isActive ? "text-green-600" : "text-red-600"}>
                    {b.isActive ? "Active" : "Inactive"}
                  </span>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
