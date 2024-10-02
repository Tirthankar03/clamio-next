"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { FileUploader } from "@/components/shared/uploader/file-uploader"

const schema = z.object({
  images: z.array(z.instanceof(File)),
})

type Schema = z.infer<typeof schema>

interface FileFormProps {
  onSubmit: (data: Schema) => Promise<void>
  maxFileCount?: number
  maxSize?: number
}

export const FileForm = ({
  onSubmit,
  maxFileCount = 1,
  maxSize = 1024 * 1024 * 2, // default 2MB
}: FileFormProps) => {
  const [loading, setLoading] = useState(false)

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  })

  const handleSubmit = async (data: Schema) => {
    setLoading(true)
    try {
      // Call the custom onSubmit passed as a prop with raw form data
      await onSubmit(data)

    //   form.reset()
    //   toast.success("Images uploaded successfully")
    } catch (err) {
    //   toast.error("Error uploading images")
      console.error("err in uploading images>>>>", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-full flex-col gap-6">
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem className="w-full">
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    maxFileCount={maxFileCount}
                    maxSize={maxSize}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <Button className="w-fit" disabled={loading}>
          Save
        </Button>
      </form>
    </Form>
  )
}
