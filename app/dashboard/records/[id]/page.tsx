"use client"

import { PatientDetails } from "@/components/patient-details"
import { PatientMedicalHistory } from "@/components/patient-medical-history"
import { Button } from "@/components/ui/button"
import { ChevronLeft, FileText, Printer } from "lucide-react"
import Link from "next/link"

export default function PatientRecordPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/records">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Patient Record</h1>
            <p className="text-muted-foreground">ID: {params.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/generate-slip/${params.id}`}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Slip
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" />
            Print Record
          </Button>
        </div>
      </div>

      <PatientDetails patientId={params.id} />
      <PatientMedicalHistory patientId={params.id} />
    </div>
  )
}

