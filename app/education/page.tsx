import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import Navbar from "@/components/navbar";
export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
  <Navbar
        brandName="Home"
        links={[
          { href: "/education", label: "education" },
          { href: "/experience", label: "experience" },
        ]}
        socialLinks={[
          {
            href: "https://github.com",
            icon: <Github className="h-4 w-4" />,
            label: "GitHub",
          },
          {
            href: "https://linkedin.com",
            icon: <Linkedin className="h-4 w-4" />,
            label: "LinkedIn",
          },
          {
            href: "mailto:example@example.com",
            icon: <Mail className="h-4 w-4" />,
            label: "Email",
          },
        ]}
      />
      {/* Education Cards */}
      <section className="container mx-auto max-w-4xl py-16 px-6 space-y-10  rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-gray-700 pb-3">
          Education & Certifications
        </h2>

        <EducationCard
          institution="Wise Up"
          certificate="Certificate in Advanced English"
          period="Jan 2020 – Present"
          hasViewCertificate={true}
        />

        <EducationCard
          institution="Your Institution Name"
          certificate="Certificate in Advanced English"
          period="Jan 2020 – Present"
          hasViewCertificate={false}
        />

        <EducationCard
          institution="Another Institution"
          certificate="Certificate in Advanced English"
          period="Jan 2020 – Present"
          hasViewCertificate={false}
        />
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8">
        <div className="bg-zinc-900 rounded-full px-6 py-3 flex items-center justify-between max-w-md mx-auto">
          <span className="text-sm text-gray-400">Follow me</span>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:example@example.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface EducationCardProps {
  institution: string;
  certificate: string;
  period: string;
  hasViewCertificate: boolean;
}

function EducationCard({
  institution,
  certificate,
  period,
  hasViewCertificate,
}: EducationCardProps) {
  return (
    <div className="bg-gray-100 bg-opacity-95 rounded-3xl p-8 text-black">
      <div className="flex justify-between items-start">
        <div>
          {institution && (
            <h3 className="text-xl font-medium mb-2">{institution}</h3>
          )}
          <p className="text-purple-500">{certificate}</p>
          <p className="text-gray-500 text-sm mt-4">{period}</p>
        </div>
        {hasViewCertificate && (
          <Link href="#" className="text-teal-500 text-sm hover:underline">
            View certificate
          </Link>
        )}
      </div>
    </div>
  );
}
