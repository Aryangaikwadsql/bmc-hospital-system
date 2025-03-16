import { PatientSearchForm } from "@/components/patient-search-form"

export default function SearchPatientPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Search Patient</h1>
        <p className="text-muted-foreground">Find patient records using Aadhaar number or other details</p>
      </div>

      <PatientSearchForm />
    </div>
  )
}

