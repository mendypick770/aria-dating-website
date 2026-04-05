import React from "react";
import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Aria | Terms of Use",
  description: "Terms of Use for Aria Dating App",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <TermsClient />
    </main>
  );
}
