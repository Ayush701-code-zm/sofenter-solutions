import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-[rgba(0,0,0,0.6)] mb-8">
        Could not find the requested resource
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#FCC010] text-black rounded-lg hover:bg-[#f5cd4c]"
      >
        Return Home
      </Link>
    </div>
  );
}
