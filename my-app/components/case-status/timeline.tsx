import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

type TimelineEvent = {
  date: string
  title: string
  description: string
  status: "completed" | "pending" | "upcoming"
}

export function CaseTimeline({ events }: { events: TimelineEvent[] }) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6 text-green-500" />
      case "pending":
        return <Clock className="h-6 w-6 text-yellow-500" />
      case "upcoming":
        return <AlertCircle className="h-6 w-6 text-muted-foreground" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            {getStatusIcon(event.status)}
            {index !== events.length - 1 && <div className="w-px h-full bg-border mt-2" />}
          </div>
          <div className="space-y-2 pb-8">
            <div className="flex items-center gap-2">
              <time className="text-sm text-muted-foreground">{event.date}</time>
              <div
                className={`px-2 py-0.5 rounded-full text-xs ${
                  event.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : event.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {event.status}
              </div>
            </div>
            <h4 className="font-semibold">{event.title}</h4>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

