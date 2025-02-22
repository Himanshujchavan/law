import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, ChevronRight, Globe, Scale, FileText, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { indianLanguages } from "@/lib/indian-languages"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6" />
            <span className="font-bold text-lg">LegalCase India</span>
          </Link>

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {indianLanguages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <span className="flex items-center gap-2">
                      {lang.local}
                      <span className="text-muted-foreground">({lang.name})</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container px-4 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm">
                <Scale className="w-4 h-4 mr-2" />
                Digital Legal Services
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  File Legal Cases Easily in Your Language
                </h1>
                <p className="text-xl text-muted-foreground">
                  Access justice in your preferred Indian language. Simple, guided, and accessible legal services for
                  everyone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/file-case">
                  <Button size="lg" className="w-full sm:w-auto">
                    File New Case
                    <FileText className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/track-case">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Track Case Status
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] w-full rounded-xl overflow-hidden border bg-muted">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Legal services illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t bg-muted/50">
          <div className="container px-4 py-12 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="mt-4 text-muted-foreground">Simplified legal processes in your language</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Multi-language Support",
                  description: "File cases in 12+ Indian languages",
                },
                {
                  icon: Mic,
                  title: "Voice Input",
                  description: "Speak to fill forms easily",
                },
                {
                  icon: Phone,
                  title: "24/7 Support",
                  description: "Get help anytime via phone or WhatsApp",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg border p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container px-4 py-12 md:py-24">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="text-muted-foreground">
                Join thousands of Indians who have successfully filed their cases through our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg">
                  Register Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container px-4 py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-foreground">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/civil" className="text-muted-foreground hover:text-foreground">
                    Civil Cases
                  </Link>
                </li>
                <li>
                  <Link href="/services/criminal" className="text-muted-foreground hover:text-foreground">
                    Criminal Cases
                  </Link>
                </li>
                <li>
                  <Link href="/services/family" className="text-muted-foreground hover:text-foreground">
                    Family Matters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Toll Free: 1800-XXX-XXXX</li>
                <li>WhatsApp: +91 XX-XXXX-XXXX</li>
                <li>Email: support@legalcase.in</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} LegalCase India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

