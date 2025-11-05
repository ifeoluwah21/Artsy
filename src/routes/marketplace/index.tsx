import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/marketplace/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h1>
        <span>Home/ Marketplace/</span> <span> Editorials</span>
      </h1>
    </section>
  );
}
