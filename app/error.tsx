"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-[rgba(0,0,0,0.6)] mb-4">
        We&apos;re sorry for the inconvenience.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-[#FCC010] text-black rounded-lg hover:bg-[#f5cd4c]"
      >
        Try again
      </button>
    </div>
  );
}
