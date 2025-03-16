"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Printer } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

interface MedicalSlipFormProps {
  patientId: string
}

// Sample data - in a real application, this would come from your API
const patientData = {
  id: "P12345",
  name: "Rahul Sharma",
  age: 45,
  gender: "Male",
  aadhaar: "1234-5678-9012",
}

export function MedicalSlipForm({ patientId }: MedicalSlipFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [slipGenerated, setSlipGenerated] = useState(false)
  const { toast } = useToast()

  const handleGenerateSlip = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSlipGenerated(true)
      toast({
        title: "Slip generated",
        description: "Medical slip has been generated successfully",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to generate slip",
        description: "An error occurred while generating the medical slip",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className={`no-print ${slipGenerated ? "hidden" : "block"}`}>
        <form onSubmit={handleGenerateSlip}>
          <Card>
            <CardHeader>
              <CardTitle>Medical Slip Details</CardTitle>
              <CardDescription>Enter treatment details to generate a medical slip</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="doctor">Doctor Name</Label>
                  <Input id="doctor" placeholder="Enter doctor's name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select required>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-medicine">General Medicine</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="gynecology">Gynecology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                      <SelectItem value="ent">ENT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosis">Diagnosis</Label>
                <Input id="diagnosis" placeholder="Enter diagnosis" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prescription">Prescription</Label>
                <Textarea id="prescription" placeholder="Enter prescribed medications" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Enter any additional notes" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="consultation-fee">Consultation Fee (₹)</Label>
                  <Input id="consultation-fee" type="number" placeholder="0.00" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicine-charges">Medicine Charges (₹)</Label>
                  <Input id="medicine-charges" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="test-charges">Test Charges (₹)</Label>
                  <Input id="test-charges" type="number" placeholder="0.00" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="follow-up">Follow-up Date</Label>
                <Input id="follow-up" type="date" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Generating..." : "Generate Slip"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>

      {slipGenerated && (
        <>
          <div className="no-print mb-4 flex justify-end">
            <Button onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print Slip
            </Button>
          </div>

          <div className="print-container border rounded-lg p-8 bg-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Image src="/bmc-logo.svg" alt="BMC Hospital Logo" width={80} height={80} />
                <div>
                  <h2 className="text-2xl font-bold">BMC Hospital</h2>
                  <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Slip No: MS-{Math.floor(Math.random() * 10000)}</p>
                <p className="text-muted-foreground">Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="border-t border-b py-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Patient Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>
                    <span className="font-medium">Name:</span> {patientData.name}
                  </p>
                  <p>
                    <span className="font-medium">Patient ID:</span> {patientData.id}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium">Age/Gender:</span> {patientData.age} / {patientData.gender}
                  </p>
                  <p>
                    <span className="font-medium">Aadhaar:</span> {patientData.aadhaar}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Medical Details</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <p>
                  <span className="font-medium">Doctor:</span> Dr. Sunil Patel
                </p>
                <p>
                  <span className="font-medium">Department:</span> Cardiology
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Diagnosis:</p>
                <p>Hypertension</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Prescription:</p>
                <p>
                  1. Amlodipine 5mg - 1 tablet daily
                  <br />
                  2. Aspirin 75mg - 1 tablet daily
                  <br />
                  3. Atorvastatin 10mg - 1 tablet at night
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Additional Notes:</p>
                <p>Reduce salt intake. Regular exercise recommended. Follow-up in 2 weeks.</p>
              </div>
              <div>
                <p className="font-medium">Follow-up Date:</p>
                <p>{new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Charges</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Description</th>
                    <th className="text-right py-2">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Consultation Fee</td>
                    <td className="text-right py-2">500.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Medicine Charges</td>
                    <td className="text-right py-2">750.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Test Charges</td>
                    <td className="text-right py-2">1,200.00</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-2">Total</td>
                    <td className="text-right py-2">2,450.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="border-t border-dashed pt-2">
                  <p className="text-center">Doctor's Signature</p>
                </div>
              </div>
              <div>
                <div className="border-t border-dashed pt-2">
                  <p className="text-center">Authorized Signature</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>This is a computer-generated slip and does not require a physical signature.</p>
              <p>Developed by Aryan Gaikwad</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

