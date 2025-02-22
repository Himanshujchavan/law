"use client"

import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"
import { indianLanguages } from "@/lib/indian-languages"

export function LanguageSwitcher() {
  const router = useRouter()

  const handleLanguageChange = (value: string) => {
    // Update the language in localStorage
    localStorage.setItem("preferred_language", value)
    // Refresh the page to apply new language
    router.refresh()
  }

  return (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <Globe className="w-4 h-4 mr-2" />
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
  )
}

