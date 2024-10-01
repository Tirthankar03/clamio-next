// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { toast } from "sonner"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { useState } from "react"
// import { FileUploader } from "@/components/shared/uploader/file-uploader"

// const schema = z.object({
//     images: z.array(z.instanceof(File)),
//   })

  
// type Schema = z.infer<typeof schema>


// const page = () => {
//     const [loading, setLoading] = useState(false)
//     const form = useForm<Schema>({
//       resolver: zodResolver(schema),
//       defaultValues: {
//         images: [],
//       },
//     })



//     async function onSubmit(data: Schema) {
//       setLoading(true)
//       try {
    
//         // Create formData to append the images field
//         const formData = new FormData()
//         data.images.forEach((file, index) => {
//           formData.append(`images[${index}]`, file)
//         })


    
//           // Send the formData to your API endpoint
//           // const response = await fetch("/api/your-endpoint", {
//           //   method: "POST",
//           //   body: formData,
//           // })
//           for (let pair of formData.entries()) {
//             console.log(pair[0] + ': ' + pair[1]);
//           }
    
//           // if (!response.ok) {
//           //   throw new Error("Failed to submit images")
//           // }
    
//           // form.reset()
//           toast.success("Images uploaded successfully")
//         } catch (err) {
//           toast.error("Error uploading images")
//         } finally {
//           setLoading(false)
//         }
//       }
//       return (
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="flex w-full flex-col gap-6"
//           >
//             <FormField
//               control={form.control}
//               name="images"
//               render={({ field }) => (
//                 <div className="space-y-6">
//                   <FormItem className="w-full">
//                     <FormLabel>Images</FormLabel>
//                     <FormControl>
//                       <FileUploader
//                         value={field.value}
//                         onValueChange={field.onChange}
//                         maxFileCount={4}
//                         maxSize={4 * 1024 * 1024} // 4MB per file
//                         disabled={loading}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 </div>
//               )}
//             />
//             <Button className="w-fit" disabled={loading}>
//               Save
//             </Button>
//           </form>
//         </Form>
//       )
// }

// export default page


"use client"

import { FileForm } from "@/components/shared/uploader/FileForm"
import { toast } from "sonner"
import { z } from "zod"

const Page = () => {
  const handleFileSubmit = async (data: { images: File[] }) => {
    // Create the FormData and append files here
    const formData = new FormData()
    data.images.forEach((file, index) => {
      formData.append(`images[${index}]`, file)
    })

    // Example: Handle formData submission to an API endpoint
    try {
      // const response = await fetch("/api/upload", {
      //   method: "POST",
      //   body: formData,
      // })

      // if (!response.ok) {
      //   throw new Error("Failed to upload images")
      // }




      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      toast.success("Images uploaded to the server")
    } catch (error) {
      toast.error("Failed to upload images")
    }
  }

  return (
    <div>
      <h1>Upload Images</h1>
      <FileForm onSubmit={handleFileSubmit} maxFileCount={4} maxSize={4 * 1024 * 1024} />
    </div>
  )
}

export default Page
