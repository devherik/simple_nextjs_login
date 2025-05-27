export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Nav Bar</nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
