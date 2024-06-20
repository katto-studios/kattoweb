import { createHash } from "crypto";

export function buildGravatarUrl(email: string, size = 96) {
  const url = new URL("https://www.gravatar.com/avatar/");
  const hash = createHash("md5").update(email.toLowerCase()).digest("hex");
  url.searchParams.set("d", "404");
  url.searchParams.set("s", size.toString());
  url.pathname += hash;
  return url;
}
