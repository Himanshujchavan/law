import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CaseTimeline } from "@/components/case-status/timeline"
import { FileText, Calendar, AlertCircle, Clock } from "lucide-react"

const mockCases = [
  {
    id: "CASE123",
    title: "Property Dispute",
    status: "In Progress",
    nextHearing: "2024-03-15",
    court: "Delhi High Court",
    events: [
      {
        date: "2024-02-20",
        title: "Case Filed",
        description: "Initial case documents submitted",
        status: "completed",
      },
      {
        date: "2024-03-01",
        title: "Document Verification",
        description: "Court reviewing submitted documents",
        status: "pending",
      },
      {
        date: "2024-03-15",
        title: "First Hearing",
        description: "Scheduled court appearance",
        status: "upcoming",
      },
    ],
  },
]

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Active and resolved cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Hearings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Next 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Required documents/responses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45d</div>
              <p className="text-xs text-muted-foreground">Per case resolution</p>
            </CardContent>
          </Card>
        </div>

        {/* Case Details */}
        <Card>
          <CardHeader>
            <CardTitle>Your Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="space-y-4">
              <TabsList>
                <TabsTrigger value="active">Active Cases</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
                <TabsTrigger value="all">All Cases</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="space-y-4">
                {mockCases.map((case_) => (
                  <Card key={case_.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-muted-foreground">Case ID: {case_.id}</p>
                          <h3 className="font-semibold text-lg">{case_.title}</h3>
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                          {case_.status}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-medium mb-2">Case Timeline</h4>
                          <CaseTimeline events={case_.events} />
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Case Details</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Court</span>
                              <span className="font-medium">{case_.court}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Next Hearing</span>
                              <span className="font-medium">{case_.nextHearing}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

