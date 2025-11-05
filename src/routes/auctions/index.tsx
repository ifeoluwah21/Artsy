import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auctions/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auctions/"!</div>
}
