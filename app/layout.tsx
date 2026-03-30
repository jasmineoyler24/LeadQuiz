import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadQuiz — Convert Visitors Into Leads",
  description:
    "Build embeddable quizzes that capture emails and deliver personalized results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
