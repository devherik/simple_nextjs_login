export default async function Dashboard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <div>Dashboard {(await params).id} </div>;
}
