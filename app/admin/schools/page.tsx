import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { fetchSchools } from "@/lib/api"
import { schoolColumns } from "@/components/admin/columns"

export default async function SchoolsPage() {
  const data = await fetchSchools()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schools</CardTitle>
        <CardDescription>
          A list of all schools registered in your system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={schoolColumns} data={data} />
      </CardContent>
    </Card>
  )
}
