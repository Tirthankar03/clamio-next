'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/shared/Dashboard/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/shared/Dashboard/PageTitle";
import { cn } from "@/lib/utils";
import UserInfoPage from "../UserInfoDisplay";

type Payment = {
  userId: string; // Changed from order to userId
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "userId", // Updated key
    header: "User ID"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  },
  {
    id: "userInfo",
    header: "User Info",
    cell: ({ row }) => {
      const router = useRouter();
      const userId = row.original.userId; // Updated to use userId

      return (
        <button
          onClick={() => router.push(`/bookings/${userId}`)} // Updated URL path
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          View User Info
        </button>
      );
    }
  }
];

const data: Payment[] = [
    {
      userId: "USER001", // Changed from order to userId
      status: "Pending",
      lastOrder: "2023-01-15",
      method: "Credit Card"
    },
    {
      userId: "USER002",
      status: "Processing",
      lastOrder: "2023-02-20",
      method: "PayPal"
    },
    {
      userId: "USER003",
      status: "Completed",
      lastOrder: "2023-03-10",
      method: "Stripe"
    },
    {
      userId: "USER004",
      status: "Pending",
      lastOrder: "2023-04-05",
      method: "Venmo"
    },
    {
      userId: "USER005",
      status: "Completed",
      lastOrder: "2023-05-12",
      method: "Bank Transfer"
    },
    {
      userId: "USER006",
      status: "Processing",
      lastOrder: "2023-06-18",
      method: "Apple Pay"
    },
    {
      userId: "USER007",
      status: "Completed",
      lastOrder: "2023-07-22",
      method: "Google Pay"
    },
    {
      userId: "USER008",
      status: "Pending",
      lastOrder: "2023-08-30",
      method: "Cryptocurrency"
    },
    {
      userId: "USER009",
      status: "Processing",
      lastOrder: "2023-09-05",
      method: "Alipay"
    },
    {
      userId: "USER010",
      status: "Completed",
      lastOrder: "2023-10-18",
      method: "WeChat Pay"
    },
    {
      userId: "USER011",
      status: "Pending",
      lastOrder: "2023-11-25",
      method: "Square Cash"
    },
    {
      userId: "USER012",
      status: "Completed",
      lastOrder: "2023-12-08",
      method: "Zelle"
    },
    {
      userId: "USER013",
      status: "Processing",
      lastOrder: "2024-01-15",
      method: "Stripe"
    },
    {
      userId: "USER014",
      status: "Completed",
      lastOrder: "2024-02-20",
      method: "PayPal"
    },
    {
      userId: "USER015",
      status: "Pending",
      lastOrder: "2024-03-30",
      method: "Credit Card"
    }
];

export default function BookingPage() {

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Bookings" />
      <DataTable columns={columns} data={data} />
      <UserInfoPage/>
    </div>
  );
}
