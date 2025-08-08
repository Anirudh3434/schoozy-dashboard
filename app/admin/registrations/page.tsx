import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { fetchRegistrations } from "@/lib/api"
import { registrationColumns } from "@/components/admin/columns"

export default async function RegistrationsPage() {
  const data = await fetchRegistrations()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Olympiad Registrations</CardTitle>
        <CardDescription>
          A list of all olympiad registrations in your system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={registrationColumns} data={data} />
      </CardContent>
    </Card>
  )
}
