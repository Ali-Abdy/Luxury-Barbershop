import { ReactNode } from "react";

import { AnimatedPage } from "@/components/shared/animated-page";

export default function Template({ children }: { children: ReactNode }) {
  return <AnimatedPage>{children}</AnimatedPage>;
}
