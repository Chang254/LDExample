import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="p-2 bg-background">
      <h3 className="text-primary">Welcome Home!</h3>
    </div>
  )
}
