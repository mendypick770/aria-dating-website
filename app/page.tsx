import HomeClient from "./HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Dating App for Serious Relationships",
  alternates: {
    canonical: "https://www.ariadating.com/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
