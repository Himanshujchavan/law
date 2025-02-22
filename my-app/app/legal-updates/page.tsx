import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const mockUpdates = [
  {
    id: 1,
    title: "Supreme Court's Landmark Judgment on Privacy Rights",
    date: "2024-02-20",
    court: "Supreme Court",
    summary: "The Supreme Court delivered a significant judgment reinforcing digital privacy rights...",
    image: "/placeholder.svg?height=200&width=400",
  },
  // Add more mock updates...
]

export default function LegalUpdatesPage() {
  return (
    <div className="container py-8">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Supreme Court of India"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest Legal Updates from Indian Courts</h1>
              <p className="text-lg text-white/90">Stay informed about important judgments and ongoing cases</p>
            </div>
          </div>
        </div>

        {/* Updates Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="supreme" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="supreme">Supreme Court</TabsTrigger>
                <TabsTrigger value="high">High Courts</TabsTrigger>
                <TabsTrigger value="special">Special Courts</TabsTrigger>
              </TabsList>
              <TabsContent value="supreme" className="space-y-4">
                {mockUpdates.map((update) => (
                  <Card key={update.id}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative h-[200px]">
                        <Image
                          src={update.image || "/placeholder.svg"}
                          alt={update.title}
                          fill
                          className="object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {update.court}
                          </span>
                          <time className="text-sm text-muted-foreground">{update.date}</time>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                        <p className="text-muted-foreground">{update.summary}</p>
                      </div>
                    </div>
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

