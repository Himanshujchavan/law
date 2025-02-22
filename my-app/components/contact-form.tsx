"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export function ContactForm() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Send us a message and we&apos;ll get back to you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message here" className="min-h-[150px]" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Send Message</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Reach out to us through any of these channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">Helpline Numbers</h4>
                <p className="text-sm text-muted-foreground">
                  1800-XXX-XXXX (Toll Free)
                  <br />
                  +91 XX-XXXX-XXXX
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-sm text-muted-foreground">
                  support@legalcase.in
                  <br />
                  info@legalcase.in
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">Office Address</h4>
                <p className="text-sm text-muted-foreground">
                  123, Legal Complex
                  <br />
                  New Delhi - 110001
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">WhatsApp Support</h4>
                <p className="text-sm text-muted-foreground">+91 XX-XXXX-XXXX</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h4 className="font-medium mb-2">Working Hours</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

