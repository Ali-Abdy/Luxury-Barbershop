"use client";
import { useState } from "react";
import { signUp } from "@/features/auth/auth-actions";
import { Button } from "@/components/ui/button";
import { PasswordStrength } from "@/components/auth/password-strength";

export function SignupForm() {
  const [password, setPassword] = useState("");
  
  return (
    <form action={signUp} className="space-y-4">
      <input name="name" placeholder="Name" autoComplete="name" required className="w-full p-3 border rounded" />
      <input name="email" type="email" placeholder="Email" autoComplete="email" required className="w-full p-3 border rounded" />
      <input name="password" type="password" placeholder="Password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 border rounded" />
      <PasswordStrength password={password} />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
