'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/shared/Dashboard/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/shared/Dashboard/PageTitle";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <Link href={'bookings/user-info'}>
           <Button 
            className="px-3 py-1 text-sm rounded-md bg-secondary text-white hover:bg-gray-800 sm:px-4 sm:py-2 sm:text-base"
          >
            View User Info
          </Button>
        </Link>
       
      );
    }
  }
];

const data: Payment[] = [
    {
      userId: "1", // Changed from order to userId
      status: "Pending",
      lastOrder: "2023-01-15",
      method: "Credit Card"
    },
    {
      userId: "2",
      status: "Processing",
      lastOrder: "2023-02-20",
      method: "PayPal"
    },
    {
      userId: "3",
      status: "Completed",
      lastOrder: "2023-03-10",
      method: "Stripe"
    },
    {
      userId: "4",
      status: "Pending",
      lastOrder: "2023-04-05",
      method: "Venmo"
    },
    {
      userId: "5",
      status: "Completed",
      lastOrder: "2023-05-12",
      method: "Bank Transfer"
    },
    {
      userId: "6",
      status: "Processing",
      lastOrder: "2023-06-18",
      method: "Apple Pay"
    },
    {
      userId: "7",
      status: "Completed",
      lastOrder: "2023-07-22",
      method: "Google Pay"
    },
    {
      userId: "8",
      status: "Pending",
      lastOrder: "2023-08-30",
      method: "Cryptocurrency"
    },
    {
      userId: "9",
      status: "Processing",
      lastOrder: "2023-09-05",
      method: "Alipay"
    },
    {
      userId: "10",
      status: "Completed",
      lastOrder: "2023-10-18",
      method: "WeChat Pay"
    },
    {
      userId: "11",
      status: "Pending",
      lastOrder: "2023-11-25",
      method: "Square Cash"
    },
    {
      userId: "12",
      status: "Completed",
      lastOrder: "2023-12-08",
      method: "Zelle"
    },
    {
      userId: "13",
      status: "Processing",
      lastOrder: "2024-01-15",
      method: "Stripe"
    },
    {
      userId: "14",
      status: "Completed",
      lastOrder: "2024-02-20",
      method: "PayPal"
    },
    {
      userId: "15",
      status: "Pending",
      lastOrder: "2024-03-30",
      method: "Credit Card"
    }
];

export default function BookingPage() {

  return (
    <div className="flex flex-col gap-5 w-full p-4 sm:p-6 lg:p-8">
    <PageTitle title="Bookings" />
    <div className="overflow-x-auto">
      <DataTable columns={columns} data={data} />
    </div>
  </div>
  );
}
