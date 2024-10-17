import '../styles/globals.css';

export const metadata = {
  title: 'Simple Next.js App',
  description: 'A simple Next.js project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4 text-center">
            <h1>My Simple Next.js App</h1>
          </header>
          <main className="flex-grow p-10">
            {children}
          </main>
          <footer className="bg-blue-600 text-white p-4 text-center">
            <p>&copy; 2024 My Simple Next.js App</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
