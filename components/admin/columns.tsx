"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { OlympiadRegistration, School, User } from "@/lib/api"

// Helper to format dates
const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch (e) {
    return dateString // Return original if invalid
  }
}

// Helper for URL links
const renderUrlCell = (url: string | null | undefined) => {
  if (!url) return "N/A"
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline truncate max-w-[150px] block">
      {url.split('/').pop()}
    </Link>
  )
}

export const registrationColumns: ColumnDef<OlympiadRegistration>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "school_name",
    header: "School Name",
  },
  {
    accessorKey: "class",
    header: "Class",
  },
  {
    accessorKey: "subjects",
    header: "Subjects",
  },
  {
    accessorKey: "passport_photo_url",
    header: "Passport Photo",
    cell: ({ row }) => renderUrlCell(row.original.passport_photo_url),
  },
  {
    accessorKey: "uid_aadhaar_url",
    header: "Aadhaar/UID",
    cell: ({ row }) => renderUrlCell(row.original.uid_aadhaar_url),
  },
  {
    accessorKey: "school_id_url",
    header: "School ID",
    cell: ({ row }) => renderUrlCell(row.original.school_id_url),
  },
  {
    accessorKey: "created_at",
    header: "Registered On",
    cell: ({ row }) => formatDate(row.original.created_at),
  },
]

export const schoolColumns: ColumnDef<School>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile_number",
    header: "Mobile",
  },
  {
    accessorKey: "school_name",
    header: "School Name",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "created_at",
    header: "Created On",
    cell: ({ row }) => formatDate(row.original.created_at),
  },
]

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
  },
  {
    accessorKey: "created_at",
    header: "Created On",
    cell: ({ row }) => formatDate(row.original.created_at),
  },
  {
    accessorKey: "updated_at",
    header: "Last Updated",
    cell: ({ row }) => formatDate(row.original.updated_at),
  },
]
