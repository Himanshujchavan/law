import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, ChevronRight, Globe } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Language Selector */}
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <Globe className="w-4 h-4 mr-2" />
              <Select>
                <SelectTrigger className="w-[180px] border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="hi">हिंदी</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Hero Content */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                File Legal Applications Easily in Your Language
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
                Use speech recognition to complete your legal documents in your preferred language. Simple, guided, and
                accessible.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Mic className="mr-2 h-5 w-5" />
                Start Speaking
              </Button>
            </div>

            {/* Steps */}
            <div className="grid gap-4 mt-8">
              <h2 className="text-xl font-semibold">How It Works</h2>
              <div className="grid gap-4">
                {[
                  {
                    step: "1",
                    title: "Choose Your Language",
                    description: "Select from multiple regional languages",
                  },
                  {
                    step: "2",
                    title: "Speak or Type",
                    description: "Use voice input or keyboard to enter information",
                  },
                  {
                    step: "3",
                    title: "Review & Submit",
                    description: "Verify your information and submit application",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Illustration of a person speaking into a microphone with legal documents floating around"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

