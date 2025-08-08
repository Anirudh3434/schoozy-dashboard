import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { fetchTransactions } from "@/lib/api"
import { transactionColumns } from "@/components/admin/columns"

export default async function TransactionsPage() {
  const data = await fetchTransactions()

  // Convert amount from paise/cents to rupees/dollars
  const datas = data.map(item => ({
    ...item,
    amount: Number(item.amount) / 100,
  }))

  // Calculate total payment
  const totalPayment = datas.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="space-y-4">
      {/* Total Payment Card */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-700">Total Payments</CardTitle>
          <CardDescription>Total amount from all transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-800">
            ₹{totalPayment.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </p>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>
            A list of all transactions in your system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={transactionColumns} data={datas} />
        </CardContent>
      </Card>
    </div>
  )
}