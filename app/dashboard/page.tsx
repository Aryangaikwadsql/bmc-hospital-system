import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ClipboardList, Users } from "lucide-react"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentPatients } from "@/components/recent-patients"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to BMC Hospital Patient Management System</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <DashboardStats title="Total Patients" value="12,345" description="+5% from last month" icon={Users} />
        <DashboardStats title="Today's Appointments" value="48" description="12 pending" icon={CalendarDays} />
        <DashboardStats title="Medical Records" value="8,271" description="Updated today" icon={ClipboardList} />
      </div>

      <Tabs defaultValue="recent">
        <TabsList>
          <TabsTrigger value="recent">Recent Patients</TabsTrigger>
          <TabsTrigger value="pending">Pending Appointments</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="border rounded-md">
          <RecentPatients />
        </TabsContent>
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Appointments</CardTitle>
              <CardDescription>Manage today's pending appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No pending appointments at the moment.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

