import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drops/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/drops/"!</div>
}
