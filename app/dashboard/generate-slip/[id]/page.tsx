import { MedicalSlipForm } from "@/components/medical-slip-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function GenerateSlipPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild className="no-print">
          <Link href="/dashboard/records">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Generate Medical Slip</h1>
          <p className="text-muted-foreground">Patient ID: {params.id}</p>
        </div>
      </div>

      <MedicalSlipForm patientId={params.id} />
    </div>
  )
}

