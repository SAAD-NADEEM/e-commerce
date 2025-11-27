'use client'
import { useEffect } from 'react'

export function TestHydration() {
  useEffect(() => {
    console.log('Hydrated components:')
    // This runs only after hydration
  }, [])
  return null
}