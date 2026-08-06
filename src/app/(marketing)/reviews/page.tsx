import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedPage } from "@/components/shared/animated-page";

export default function ReviewsPage() {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Section>
          <Container className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.34em] text-muted-foreground">Reviews</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Client experiences, thoughtfully presented.</h1>
              <p className="text-lg text-muted-foreground">
                Reviews and testimonials will be layered into this section once the content strategy is finalized.
              </p>
            </div>
          </Container>
        </Section>
      </AnimatedPage>
    </PageWrapper>
  );
}
