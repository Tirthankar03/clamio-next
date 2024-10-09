'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function page() {
  const [orderNumber, setOrderNumber] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    // In a real application, you would fetch these details from your backend
    setOrderNumber('ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase())
    setAmount('₹' + (Math.random() * 100).toFixed(2))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex justify-center"
          >
            <CheckCircle className="w-24 h-24 text-green-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-6"
          >
            <h1 className="text-2xl font-bold text-gray-900">Payment Successful!</h1>
            <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-semibold text-gray-900">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="font-semibold text-gray-900">{amount}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Link href="/" passHref>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}