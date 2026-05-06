export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1f2937] bg-[#0B0F19] py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-[#9CA3AF]">
          © {currentYear} ALVentEXE. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/ALVentEXE26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9CA3AF] hover:text-[#3B82F6]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alvent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9CA3AF] hover:text-[#3B82F6]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}