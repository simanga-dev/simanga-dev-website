'use client'

import { useState, useRef } from 'react'
import { Upload, FileText, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileSeederProps {
  onSeedAction: (file: File) => Promise<void>
  accept?: string
  className?: string
}

export function FileSeeder({
  onSeedAction,
  accept = '.csv',
  className,
}: FileSeederProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSeeding, setIsSeeding] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleSeed = async () => {
    if (!selectedFile) return

    setIsSeeding(true)
    try {
      await onSeedAction(selectedFile)
      setSelectedFile(null)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Seeding failed:', error)
    } finally {
      setIsSeeding(false)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    if (file && file.name.endsWith('.csv')) {
      setSelectedFile(file)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* File Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={cn(
          'cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors',
          selectedFile
            ? 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20'
            : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500',
        )}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
        />

        {selectedFile ? (
          <div className="flex flex-col items-center space-y-2">
            <FileText className="h-12 w-12 text-green-600 dark:text-green-400" />
            <div>
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                {selectedFile.name}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Upload className="h-12 w-12 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Drop CSV file here or click to browse
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Supports CSV files up to 10MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Seed Button */}
      <button
        onClick={handleSeed}
        disabled={!selectedFile || isSeeding}
        className={cn(
          'flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 font-medium transition-colors',
          selectedFile && !isSeeding
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
        )}
      >
        {isSeeding ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>Seeding...</span>
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            <span>Seed Database</span>
          </>
        )}
      </button>

      {/* Status */}
      {selectedFile && !isSeeding && (
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          Ready to seed {selectedFile.name}
        </p>
      )}
    </div>
  )
}
