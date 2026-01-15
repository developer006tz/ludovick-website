import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ludovick Konyo - Software Architect & Technology Manager | Full-Stack Developer",
  description:
    "Professional resume of Ludovick Konyo - Software Architect, Technology Manager, and Government Officer with 4+ years of experience in full-stack development. Expert in React, Next.js, Vue.js, Java Spring Boot, Node.js, and cloud technologies. Based in Dar es Salaam, Tanzania.",
  keywords: [
    "Ludovick Konyo",
    "Software Architect",
    "Technology Manager",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Java Spring Boot",
    "Node.js Developer",
    "Software Engineer Tanzania",
    "Application Programmer",
    "Government Officer Tanzania",
    "DevOps Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Dar es Salaam Developer",
  ],
  authors: [{ name: "Ludovick Konyo", url: "https://www.linkedin.com/in/ludovick-konyo/" }],
  creator: "Ludovick Konyo",
  publisher: "Ludovick Konyo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ludovick.space",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://ludovick.space",
    title: "Ludovick Konyo - Software Architect & Technology Manager",
    description:
      "Professional resume of Ludovick Konyo - Software Architect and Technology Manager with 4+ years of experience in full-stack development, specializing in React, Next.js, Vue.js, and modern web technologies.",
    siteName: "Ludovick Konyo Resume",
    images: [
      {
        url: "https://assets.ludovick.space/uploads/ludovick-konyo.png",
        width: 1200,
        height: 630,
        alt: "Ludovick Konyo - Software Architect",
      },
    ],
    profile: {
      firstName: "Ludovick",
      lastName: "Konyo",
      username: "developer006tz",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludovick Konyo - Software Architect & Technology Manager",
    description:
      "Professional resume of Ludovick Konyo - Software Architect with 4+ years of experience in full-stack development",
    images: ["https://assets.ludovick.space/uploads/ludovick-konyo.png"],
    creator: "@ludovickkonyo",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Technology",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ludovick.space" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ludovick Konyo",
              url: "https://ludovick.space",
              image: "https://assets.ludovick.space/uploads/ludovick-konyo.png",
              jobTitle: "Software Architect & Technology Manager",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Government of Tanzania",
                },
                {
                  "@type": "Organization",
                  name: "Evmak Tanzania",
                },
              ],
              alumniOf: {
                "@type": "Organization",
                name: "University of Dar es Salaam",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dar es Salaam",
                addressCountry: "Tanzania",
              },
              email: "developer.ludovic@gmail.com",
              telephone: "+255746828843",
              sameAs: ["https://www.linkedin.com/in/ludovick-konyo/", "https://github.com/developer006tz"],
              knowsAbout: [
                "Software Architecture",
                "Full-Stack Development",
                "React.js",
                "Next.js",
                "Vue.js",
                "Java Spring Boot",
                "Node.js",
                "TypeScript",
                "DevOps",
                "Cloud Computing",
                "Database Design",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
