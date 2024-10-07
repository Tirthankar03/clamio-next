import GlobalError from '@/components/shared/error/GlobalError'
import React from 'react'
import { AlertTriangle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="max-w-md text-center">
      <AlertTriangle className="mx-auto h-24 w-24 text-red-500 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-xl mb-8">
          We're sorry, but it seems there was an error on our end. Our team has been notified and is working on fixing it.
        </p>
        <Button >
          <Link href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>

    </div>

  )
}

export default page