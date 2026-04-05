import React from "react";
import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Aria | Privacy Policy",
  description: "Privacy Policy for Aria Dating App",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <PrivacyClient />
    </main>
  );
}
