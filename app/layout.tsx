import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">StrataMate Committee</h1>
            <div className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-indigo-500">Home</a>
              <a href="/committee" className="text-gray-700 hover:text-indigo-500">Committee</a>
              <a href="/meetings" className="text-gray-700 hover:text-indigo-500">Meetings</a>
              <a href="/finance" className="text-gray-700 hover:text-indigo-500">Finance</a>
              <a href="/maintenance" className="text-gray-700 hover:text-indigo-500">Maintenance</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-500">Contact</a>
            </div>
          </nav>
        </header>
        <main className="flex-grow max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
          &copy; 2025 StrataMate Committee. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
