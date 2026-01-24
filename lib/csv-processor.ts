// Template for CSV seeding - adapt this to your Drizzle setup
// You'll need to install: npm install csv-parse @types/csv-parse

export interface CSVRecord {
  province: string
  district_name: string
  emis_number: string
  centre_number: string
  centre_name: string
  quintile: string
  progressed_number_2022: string
  total_wrote_2022: string
  total_achieved_2022: string
  percent_achieved_2022: string
  progressed_number_2023: string
  total_wrote_2023: string
  total_achieved_2023: string
  percent_achieved_2023: string
  progressed_number_2024: string
  total_wrote_2024: string
  total_achieved_2024: string
  percent_achieved_2024: string
}

export async function processCSVRecords(records: CSVRecord[]) {
  // Replace this with your actual database operations
  console.log(`Processing ${records.length} records...`)

  for (const record of records) {
    try {
      // Example structure - adapt to your schema
      console.log('Processing:', {
        school: {
          natemis: record.emis_number,
          quantile: record.quintile, // Note: CSV has "quintile" not "quantile"
          centre_number: record.centre_number,
          province: record.province.replace(/'/g, "''"),
          official_institution_name: record.centre_name.replace(/'/g, "''"),
          district_name: record.district_name.replace(/'/g, "''"),
        },
        marks_2022: {
          year: 2022,
          number_progressed: parseInt(record.progressed_number_2022) || 0,
          total_wrote: parseInt(record.total_wrote_2022) || 0,
          total_archived: parseInt(record.total_achieved_2022) || 0,
          percentage_archived: parseFloat(record.percent_achieved_2022) || 0,
        },
        marks_2023: {
          year: 2023,
          number_progressed: parseInt(record.progressed_number_2023) || 0,
          total_wrote: parseInt(record.total_wrote_2023) || 0,
          total_archived: parseInt(record.total_achieved_2023) || 0,
          percentage_archived: parseFloat(record.percent_achieved_2023) || 0,
        },
        marks_2024: {
          year: 2024,
          number_progressed: parseInt(record.progressed_number_2024) || 0,
          total_wrote: parseInt(record.total_wrote_2024) || 0,
          total_archived: parseInt(record.total_achieved_2024) || 0,
          percentage_archived: parseFloat(record.percent_achieved_2024) || 0,
        },
      })

      // Your database insert operations would go here
      // await db.insert(school).values(...)
      // await db.insert(marks).values(...)
    } catch (error) {
      console.error('Error processing record:', record, error)
    }
  }
}

// Server action for Next.js
export async function seedDatabase(formData: FormData) {
  'use server'

  const file = formData.get('file') as File
  if (!file) {
    throw new Error('No file provided')
  }

  try {
    const text = await file.text()
    const lines = text.split('\n').filter((line) => line.trim())

    if (lines.length < 2) {
      throw new Error('CSV file must have at least a header and one data row')
    }

    const headers = lines[0].split(',').map((h) => h.trim())
    const records: CSVRecord[] = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map((v) => v.trim())
      if (values.length === headers.length) {
        const record: any = {}
        headers.forEach((header, index) => {
          record[header] = values[index]
        })
        records.push(record as CSVRecord)
      }
    }

    await processCSVRecords(records)
    return {
      success: true,
      message: `Processed ${records.length} records successfully`,
    }
  } catch (error) {
    console.error('Seeding failed:', error)
    throw new Error(`Failed to seed database: ${error}`)
  }
}
