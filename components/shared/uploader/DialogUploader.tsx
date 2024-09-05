"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileUploader } from "./file-uploader"

export function DialogUploaderDemo() {
  const [files, setFiles] = React.useState<File[]>([])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2 bg-secondary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7 4a1 1 0 00-1 1v4H3a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4h4a1 1 0 001-1V5a1 1 0 00-1-1H7zM4 8a1 1 0 011-1h3V5a1 1 0 011-1h4a1 1 0 011 1v2h3a1 1 0 011 1v4a1 1 0 01-1 1h-3v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3H2a1 1 0 01-1-1v-4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>Upload files {files.length > 0 && `(${files.length})`}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Upload Files</DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            Drag and drop your files here or click to browse.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <FileUploader
            maxFileCount={1}
            maxSize={8 * 1024 * 1024}
            onValueChange={setFiles}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            variant="primary"
            className="flex items-center space-x-2"
            onClick={() => setFiles([])} // Example action to clear files
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 5a1 1 0 01.293-.707L8.586 1.293a1 1 0 011.414 0L13.707 4.293A1 1 0 0114 5v10a1 1 0 01-.293.707L10.414 15.707a1 1 0 01-1.414 0L4.293 15.707A1 1 0 014 15V5zM5 5v10l5-5-5-5z"
                clipRule="evenodd"
              />
            </svg>
            <span>Clear</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
