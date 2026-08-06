import * as React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  imageSrc?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ name, imageSrc, size = "md", className, ...props }: AvatarProps) {
  const sizeClasses = { sm: "h-9 w-9 text-sm", md: "h-12 w-12 text-base", lg: "h-16 w-16 text-lg" } as const;

  return (
    <div className={cn("flex items-center justify-center overflow-hidden rounded-full border border-border/70 bg-accent-gold/15 text-accent-gold", sizeClasses[size], className)} {...props}>
      {imageSrc ? <Image src={imageSrc} alt={name} width={96} height={96} className="h-full w-full object-cover" /> : <span className="font-medium">{name.slice(0, 2).toUpperCase()}</span>}
    </div>
  );
}

interface ImageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export function ImageWrapper({ src, alt, className, ...props }: ImageWrapperProps) {
  return <div className={cn("overflow-hidden rounded-3xl border border-border/70 bg-surface", className)} {...props}><Image src={src} alt={alt} width={1200} height={800} className="h-full w-full object-cover" /></div>;
}

interface GalleryTileProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export function GalleryTile({ src, alt, className, ...props }: GalleryTileProps) {
  return (
    <div className={cn("group overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-sm", className)} {...props}>
      <Image src={src} alt={alt} width={800} height={640} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
    </div>
  );
}

export function VideoPlaceholder({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex min-h-60 items-center justify-center rounded-[1.75rem] border border-dashed border-border bg-elevated", className)} {...props}>
      <div className="flex flex-col items-center gap-3 rounded-full border border-border/70 bg-surface/90 px-6 py-4 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/15 text-accent-gold"><Play className="h-4 w-4" /></div>
        <p className="text-sm text-muted-text">Video preview placeholder</p>
      </div>
    </div>
  );
}

export function UserAvatar({ name, imageSrc, className, ...props }: AvatarProps) {
  return <Avatar name={name} imageSrc={imageSrc} className={className} {...props} />;
}
