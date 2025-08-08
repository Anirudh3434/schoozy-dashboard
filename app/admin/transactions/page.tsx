import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { fetchTransactions } from "@/lib/api"
import { transactionColumns } from "@/components/admin/columns"

export default async function TransactionsPage() {
  const data = await fetchTransactions()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          A list of all transactions in your system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={transactionColumns} data={data} />
      </CardContent>
    </Card>
  )
}
