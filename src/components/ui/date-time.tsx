import * as React from "react";

import { Input } from "@/components/ui/input";

export function DateInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <Input type="date" {...props} />;
}

export function TimeInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <Input type="time" {...props} />;
}

export function NumberInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <Input type="number" {...props} />;
}

export function FileUploadPlaceholder(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <Input type="file" {...props} />;
}
