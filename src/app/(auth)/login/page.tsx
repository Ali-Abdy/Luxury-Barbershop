import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";

export default function LoginPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section>
          <Container className="space-y-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm uppercase tracking-[0.34em] text-muted-foreground">Login</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Secure access placeholder.</h1>
              <p className="text-lg text-muted-foreground">
                Authentication flows will be developed in a later phase. This route provides the correct shell and entry point.
              </p>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
