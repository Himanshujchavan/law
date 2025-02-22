"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { caseTypes } from "@/lib/indian-languages"

export function CaseFilingForm() {
  const [step, setStep] = useState(1)

  return (
    <Card className="w-full max-w-[800px]">
      <CardHeader>
        <CardTitle>File New Case</CardTitle>
        <CardDescription>Please fill in the details for your legal case</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="case-type">Case Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent>
                  {caseTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Case Title</Label>
              <Input id="title" placeholder="Enter case title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Case Description</Label>
              <Textarea id="description" placeholder="Describe your case in detail" className="min-h-[150px]" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Upload Documents</Label>
              <div className="grid gap-4">
                <Input type="file" multiple />
                <p className="text-sm text-muted-foreground">Upload relevant documents (Aadhar, PAN, Evidence, etc.)</p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Filing Fees</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span>Base Fee</span>
                  <span>₹1000</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Charges</span>
                  <span>₹200</span>
                </div>
                <div className="border-t pt-2 font-medium flex justify-between">
                  <span>Total</span>
                  <span>₹1200</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        {step < 3 ? <Button onClick={() => setStep(step + 1)}>Next</Button> : <Button>Submit Case</Button>}
      </CardFooter>
    </Card>
  )
}

