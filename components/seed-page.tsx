'use client'

import { useState } from 'react'
import { FileSeeder } from '@/components/ui/file-seeder'
import { seedDatabase } from '@/lib/csv-processor'

export default function SeedPage() {
  const [message, setMessage] = useState<string>('')

  const handleSeed = async (file: File) => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const result = await seedDatabase(formData)
      setMessage(result.message)
    } catch (error) {
      setMessage(`Error: ${error}`)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-2xl font-bold">Database Seeder</h1>

      <div className="mx-auto max-w-md">
        <FileSeeder onSeedAction={handleSeed} />

        {message && (
          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {message}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 font-semibold">Expected CSV Format:</h2>
        <pre className="overflow-x-auto rounded bg-gray-100 p-4 dark:bg-gray-800">
          {`province,district_name,emis_number,centre_number,centre_name,quintile,progressed_number_2022,total_wrote_2022,total_achieved_2022,percent_achieved_2022,progressed_number_2023,total_wrote_2023,total_achieved_2023,percent_achieved_2023,progressed_number_2024,total_wrote_2024,total_achieved_2024,percent_achieved_2024
EASTERN CAPE,ALFRED NZO EAST,200500039,4241001,A D TSHAYINGCA SECONDARY SCHOOL,3,2,328,258,78.7,4,274,236,86.1,9,352,308,87.5`}
        </pre>
      </div>
    </div>
  )
}
