export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <header className="bg-gray-100 p-4 shadow">
          <nav className="max-w-4xl mx-auto flex gap-6">
            <a href="/" className="font-semibold">Home</a>
            <a href="/committee">Committee</a>
            <a href="/meetings">Meetings</a>
            <a href="/finance">Finance</a>
            <a href="/maintenance">Maintenance</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
