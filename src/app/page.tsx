export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">Smoke and Algorithms</h1>
        <p className="text-gray-700 mb-6">
          Welcome! You can download our game for your operating system:
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <a
            href="https://example.com/windows-v1.0.zip"
            className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
            download
          >
            🔽 Download for Windows
          </a>
          <a
            href="https://example.com/mac-v1.0.zip"
            className="bg-gray-800 text-white py-2 px-4 rounded-xl hover:bg-gray-900"
            download
          >
            🍎 Download for macOS
          </a>
          <a
            href="https://example.com/linux-v1.0.zip"
            className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700"
            download
          >
            🐧 Download for Linux
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-3">🔧 Developer Version</h2>
        <p className="text-gray-600 mb-4">
          For those who want to contribute or modify the game's source code:
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://example.com/dev-windows-v1.0.zip"
            className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600"
            download
          >
            🧑‍💻 Windows Developer Version
          </a>
          <a
            href="https://example.com/dev-mac-v1.0.zip"
            className="bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800"
            download
          >
            🧑‍💻 macOS Developer Version
          </a>
          <a
            href="https://example.com/dev-linux-v1.0.zip"
            className="bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600"
            download
          >
            🧑‍💻 Linux Developer Version
          </a>
        </div>
      </div>
    </main>
  );
}
