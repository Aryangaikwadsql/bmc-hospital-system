"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PatientDetailsProps {
  patientId: string
}

// Sample data - in a real application, this would come from your API
const patientData = {
  id: "P12345",
  name: "Rahul Sharma",
  aadhaar: "1234-5678-9012",
  dob: "1978-05-15",
  age: 45,
  gender: "Male",
  bloodGroup: "B+",
  mobile: "9876543210",
  email: "rahul.sharma@example.com",
  address: "123, Andheri East, Mumbai, Maharashtra - 400069",
  emergencyContact: "9876543211",
  emergencyRelation: "Spouse",
  registrationDate: "2022-01-10",
}

export function PatientDetails({ patientId }: PatientDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const { toast } = useToast()

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // In a real application, you would save the changes to your API
    setIsEditing(false)
    toast({
      title: "Changes saved",
      description: "Patient details have been updated",
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Patient Details</CardTitle>
          <CardDescription>Personal and contact information</CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={isEditing ? handleSave : handleEdit} className="no-print">
          {isEditing ? (
            "Save Changes"
          ) : (
            <>
              <Edit2 className="mr-2 h-4 w-4" />
              Edit
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Full Name</p>
            <p>{patientData.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Aadhaar Number</p>
            <p>{patientData.aadhaar}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
            <p>
              {patientData.dob} ({patientData.age} years)
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Gender</p>
            <p>{patientData.gender}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Blood Group</p>
            <p>{patientData.bloodGroup}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Mobile Number</p>
            <p>{patientData.mobile}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p>{patientData.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Registration Date</p>
            <p>{patientData.registrationDate}</p>
          </div>
          <div className="space-y-1 md:col-span-2">
            <p className="text-sm font-medium text-muted-foreground">Address</p>
            <p>{patientData.address}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
            <p>{patientData.emergencyContact}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Relation</p>
            <p>{patientData.emergencyRelation}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

