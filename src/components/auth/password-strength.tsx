"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PasswordStrength({ password }: { password: string }) {
  const strength = password.length > 8 ? (password.match(/[A-Z]/) && password.match(/[0-9]/) ? "Strong" : "Medium") : "Weak";
  const color = strength === "Strong" ? "text-green-600" : strength === "Medium" ? "text-yellow-600" : "text-red-600";
  
  return <p className={`text-sm font-medium ${color}`}>Strength: {strength}</p>;
}

