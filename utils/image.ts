export const getImageUrl = (url?: string | null) => {
  const FALLBACK_IMAGE = "/home/placeholder.jpg";

  // 1. Missing or invalid url
  if (!url || typeof url !== "string" || url.trim() === "") {
    if (process.env.NODE_ENV === "development") {
      console.warn("[getImageUrl] Missing or invalid url:", url);
    }
    return FALLBACK_IMAGE;
  }

  // 2. Absolute URL (http / https)
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  // 3. API base url safety check
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  if (!baseUrl) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "[getImageUrl] NEXT_PUBLIC_API_URL is not defined"
      );
    }
    return FALLBACK_IMAGE;
  }

  // 4. Normalize slashes
  const normalizedPath = url.startsWith("/") ? url : `/${url}`;

  // 5. Construct full URL
  const fullUrl = `${baseUrl.replace(/\/$/, "")}${normalizedPath}`;

  // 6. Dev-only log
  if (process.env.NODE_ENV === "development") {
    console.log("[getImageUrl] Resolved image url:", fullUrl);
  }

  return fullUrl;
};
