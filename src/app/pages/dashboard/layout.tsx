export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>User Page</nav>
        <main>{children}</main>
        <footer>User Page</footer>
      </body>
    </html>
  );
}
