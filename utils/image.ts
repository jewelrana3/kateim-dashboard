export const getImageUrl = (url: string | undefined) => {
    if (url?.startsWith("https")) return url;
    if (!url) return "/home/placeholder.jpg";
    return `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
};