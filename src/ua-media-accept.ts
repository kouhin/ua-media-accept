import { getSupport, detectBrowser } from "@kouhin/caniuse-support";

export function generateAcceptHeaderForImage(ua: string): string | null {
  if (!ua) return null;
  const browser = detectBrowser(ua);
  if (!browser) return null;
  const accepts: string[] = [];

  if (getSupport("avif", browser).level === "full") {
    accepts.push("image/avif");
  }

  if (getSupport("webp", browser).level === "full") {
    accepts.push("image/webp");
  }

  if (getSupport("apng", browser).level === "full") {
    accepts.push("image/apng");
  }

  if (getSupport("svg", browser).level === "full") {
    accepts.push("image/svg+xml");
  }

  accepts.push("image/*;q=0.8", "*/*;q=0.5");

  return accepts.join(",");
}
