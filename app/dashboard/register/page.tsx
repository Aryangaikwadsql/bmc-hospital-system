import { PatientRegistrationForm } from "@/components/patient-registration-form"

export default function RegisterPatientPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Register New Patient</h1>
        <p className="text-muted-foreground">Enter patient details to create a new record</p>
      </div>

      <PatientRegistrationForm />
    </div>
  )
}

