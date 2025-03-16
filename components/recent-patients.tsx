"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Search } from "lucide-react"
import Link from "next/link"

// Sample data - in a real application, this would come from your API
const recentPatients = [
  {
    id: "P12345",
    name: "Rahul Sharma",
    aadhaar: "XXXX-XXXX-1234",
    age: 45,
    gender: "Male",
    lastVisit: "2023-03-15",
    department: "Cardiology",
  },
  {
    id: "P12346",
    name: "Priya Patel",
    aadhaar: "XXXX-XXXX-5678",
    age: 32,
    gender: "Female",
    lastVisit: "2023-03-14",
    department: "Gynecology",
  },
  {
    id: "P12347",
    name: "Amit Kumar",
    aadhaar: "XXXX-XXXX-9012",
    age: 28,
    gender: "Male",
    lastVisit: "2023-03-14",
    department: "Orthopedics",
  },
  {
    id: "P12348",
    name: "Sunita Desai",
    aadhaar: "XXXX-XXXX-3456",
    age: 52,
    gender: "Female",
    lastVisit: "2023-03-13",
    department: "Neurology",
  },
  {
    id: "P12349",
    name: "Rajesh Gupta",
    aadhaar: "XXXX-XXXX-7890",
    age: 39,
    gender: "Male",
    lastVisit: "2023-03-13",
    department: "General Medicine",
  },
]

export function RecentPatients() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Aadhaar</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Last Visit</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentPatients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium">{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.aadhaar}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.lastVisit}</TableCell>
              <TableCell>{patient.department}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/dashboard/records/${patient.id}`}>
                      <Search className="h-4 w-4" />
                      <span className="sr-only">View details</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/dashboard/generate-slip/${patient.id}`}>
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Generate slip</span>
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

