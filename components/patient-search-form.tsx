"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { SearchResults } from "@/components/search-results"

// Sample data - in a real application, this would come from your API
const samplePatients = [
  {
    id: "P12345",
    name: "Rahul Sharma",
    aadhaar: "123456789012",
    age: 45,
    gender: "Male",
    mobile: "9876543210",
    lastVisit: "2023-03-15",
  },
  {
    id: "P12346",
    name: "Priya Patel",
    aadhaar: "234567890123",
    age: 32,
    gender: "Female",
    mobile: "8765432109",
    lastVisit: "2023-03-14",
  },
  {
    id: "P12347",
    name: "Amit Kumar",
    aadhaar: "345678901234",
    age: 28,
    gender: "Male",
    mobile: "7654321098",
    lastVisit: "2023-03-14",
  },
]

export function PatientSearchForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<typeof samplePatients | null>(null)
  const { toast } = useToast()

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real application, you would fetch results from your API
      setSearchResults(samplePatients)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Search failed",
        description: "An error occurred while searching for patients",
      })
      setSearchResults(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="aadhaar">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="aadhaar">Aadhaar</TabsTrigger>
          <TabsTrigger value="name">Name</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>
        <TabsContent value="aadhaar">
          <Card>
            <CardHeader>
              <CardTitle>Search by Aadhaar</CardTitle>
              <CardDescription>Enter the patient's 12-digit Aadhaar number</CardDescription>
            </CardHeader>
            <form onSubmit={handleSearch}>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="aadhaar-search">Aadhaar Number</Label>
                  <Input id="aadhaar-search" placeholder="XXXX-XXXX-XXXX" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="name">
          <Card>
            <CardHeader>
              <CardTitle>Search by Name</CardTitle>
              <CardDescription>Enter the patient's full name or partial name</CardDescription>
            </CardHeader>
            <form onSubmit={handleSearch}>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="name-search">Patient Name</Label>
                  <Input id="name-search" placeholder="Enter patient name" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="mobile">
          <Card>
            <CardHeader>
              <CardTitle>Search by Mobile</CardTitle>
              <CardDescription>Enter the patient's mobile number</CardDescription>
            </CardHeader>
            <form onSubmit={handleSearch}>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="mobile-search">Mobile Number</Label>
                  <Input id="mobile-search" placeholder="10-digit mobile number" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>

      {searchResults && <SearchResults results={searchResults} />}
    </div>
  )
}

