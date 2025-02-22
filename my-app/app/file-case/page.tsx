import { CaseFilingForm } from "@/components/case-filing/case-form"

export default function FileCasePage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">File a New Case</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the steps below to file your case. Make sure you have all required documents ready.
          </p>
        </div>
        <CaseFilingForm />
      </div>
    </div>
  )
}

