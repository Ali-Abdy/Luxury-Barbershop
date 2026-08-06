import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";

export default function LoginPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section>
          <Container className="max-w-md py-12">
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.34em] text-muted-foreground mb-2">Access</p>
                <h1 className="text-4xl font-light tracking-tight">Sign In</h1>
              </div>

              <form
                action={async (formData) => {
                  "use server";
                  await signIn("credentials", formData);
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-neutral-500">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="e.g., james@example.com" 
                    className="w-full p-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-neutral-500">Password</label>
                  <input 
                    name="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full p-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all" 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-neutral-900 text-white hover:bg-neutral-800 py-7 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Sign In
                </Button>
              </form>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
