import { logout } from "@/app/posts/actions";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          Nav Bar
          <button onClick={logout} className={`m-1`} type="button">
            Logout
          </button>
        </nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
