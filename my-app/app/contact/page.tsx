import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

