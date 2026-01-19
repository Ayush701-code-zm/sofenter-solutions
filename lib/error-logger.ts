export function logErrorToService(error: {
  message: string;
  stack?: string;
  digest?: string;
  url: string;
  userAgent: string;
  timestamp: string;
}) {
  if (process.env.NODE_ENV === "production") {
    fetch("/api/log-error", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(error),
    }).catch(() => {
      // Silently fail - don't break app if logging fails
    });
  }
}
