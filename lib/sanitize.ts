import DOMPurify from "isomorphic-dompurify";

export function sanitizeUrl(url: string): string {
  if (url.startsWith("javascript:") || url.startsWith("data:")) {
    return "#";
  }
  return url;
}

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html);
}
