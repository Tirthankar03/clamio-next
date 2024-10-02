"use client";

import React, { useState } from "react";
import { FileUploader } from "@/components/shared/uploader/file-uploader"; // Ensure this path is correct

interface FileSelectorProps {
  maxFileCount?: number;
  maxSize?: number;
  onFilesSelected: (files: File[]) => void;
}

const FileSelector: React.FC<FileSelectorProps> = ({ maxFileCount = 1, maxSize = 2 * 1024 * 1024, onFilesSelected }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (files: File[]) => {
    setSelectedFiles(files);
    onFilesSelected(files); // Pass the files to the parent component
  };

  return (
    <div className="space-y-6">
      <FileUploader
        value={selectedFiles}
        onValueChange={handleFileChange}
        maxFileCount={maxFileCount}
        maxSize={maxSize}
      />
    </div>
  );
};

export default FileSelector;
