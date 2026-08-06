export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background" role="status" aria-live="polite">
      <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
        <span>Preparing the experience</span>
      </div>
    </div>
  );
}
