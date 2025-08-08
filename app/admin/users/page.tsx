import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { fetchUsers } from "@/lib/api"
import { userColumns } from "@/components/admin/columns"

export default async function UsersPage() {
  const data = await fetchUsers()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>
          A list of all users in your system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={userColumns} data={data} />
      </CardContent>
    </Card>
  )
}
