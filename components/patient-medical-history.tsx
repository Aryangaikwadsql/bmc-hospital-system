"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PatientMedicalHistoryProps {
  patientId: string
}

// Sample data - in a real application, this would come from your API
const medicalHistory = [
  {
    id: "V12345",
    date: "2023-03-15",
    doctor: "Dr. Patel",
    department: "Cardiology",
    diagnosis: "Hypertension",
    prescription: "Amlodipine 5mg daily",
    notes: "Blood pressure slightly elevated. Follow-up in 2 weeks.",
  },
  {
    id: "V12346",
    date: "2023-02-10",
    doctor: "Dr. Gupta",
    department: "General Medicine",
    diagnosis: "Seasonal Flu",
    prescription: "Paracetamol, Cetirizine",
    notes: "Rest advised for 3 days. Increase fluid intake.",
  },
  {
    id: "V12347",
    date: "2023-01-05",
    doctor: "Dr. Shah",
    department: "Orthopedics",
    diagnosis: "Mild Sprain",
    prescription: "Pain relief gel, Rest",
    notes: "Avoid strenuous activities for a week.",
  },
]

export function PatientMedicalHistory({ patientId }: PatientMedicalHistoryProps) {
  const [isAddingRecord, setIsAddingRecord] = useState(false)
  const { toast } = useToast()

  const handleAddRecord = () => {
    setIsAddingRecord(true)
  }

  const handleSaveRecord = () => {
    // In a real application, you would save the new record to your API
    setIsAddingRecord(false)
    toast({
      title: "Record added",
      description: "Medical record has been added successfully",
    })
  }

  const handleCancel = () => {
    setIsAddingRecord(false)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Medical History</CardTitle>
          <CardDescription>Past visits and treatments</CardDescription>
        </div>
        {!isAddingRecord && (
          <Button onClick={handleAddRecord} className="no-print">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Record
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isAddingRecord ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="doctor">Doctor</Label>
                <Input id="doctor" placeholder="Doctor's name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Department" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="diagnosis">Diagnosis</Label>
              <Input id="diagnosis" placeholder="Patient diagnosis" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prescription">Prescription</Label>
              <Textarea id="prescription" placeholder="Prescribed medications" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Additional notes" />
            </div>
          </div>
        ) : (
          <div className="w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Prescription</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicalHistory.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.doctor}</TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.diagnosis}</TableCell>
                    <TableCell>{record.prescription}</TableCell>
                    <TableCell>{record.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
      {isAddingRecord && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSaveRecord}>Save Record</Button>
        </CardFooter>
      )}
    </Card>
  )
}

