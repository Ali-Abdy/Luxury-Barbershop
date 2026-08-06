import { Card } from "@/components/ui/card";
interface ServiceProps {
  title: string;
  description: string;
  price: string;
}

const services: ServiceProps[] = [
  { title: "Signature Cut", description: "Precision tailored to your unique features.", price: "From $85" },
  { title: "Hot Towel Shave", description: "The classic experience redefined.", price: "From $60" },
  { title: "Beard Sculpting", description: "Expert grooming for the modern gentleman.", price: "From $45" },
];

export function ServiceHighlight() {
  return (
    <div className="grid md:grid-cols-3 gap-8 py-16">
      {services.map((service) => (
        <Card key={service.title} className="p-8 h-full bg-neutral-50 border-neutral-200">
            <h3 className="text-xl font-medium mb-3">{service.title}</h3>
            <p className="text-neutral-600 mb-6">{service.description}</p>
            <span className="text-amber-700 font-semibold">{service.price}</span>
          </Card>
      ))}
    </div>
  );
}

