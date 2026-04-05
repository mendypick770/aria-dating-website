import Papa from "papaparse";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string;
  content: string;
  author: string;
  publish_date: string;
  status: "draft" | "published";
  seo_title?: string;
  seo_description?: string;
}

const PUBLISHED_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCKHEuVl80HhlqJ1Ou_xSKUSSt2I7y9wQg3edW316wxYlxUxCGHtJ3ioSU9o3ITBNbTY1-pfO-GaLa/pub?output=csv";

/**
 * Fetches all blog posts directly from the Google Sheet CSV output.
 * Ensures only `status === 'published'` records are returned.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Cache-bust Google's own 5-minute CDN cache using a timestamp query param
    const cacheBusterUrl = `${PUBLISHED_CSV_URL}&t=${Date.now()}`;
    
    // Force Next.js to NEVER cache this request
    const res = await fetch(cacheBusterUrl, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch CSV: ${res.statusText}`);
    }

    const rawCsvText = await res.text();

    // The Google Sheet has instruction rows at the top. We need to find where the actual headers start.
    const headerIndex = rawCsvText.indexOf("id,slug,title");
    
    let cleanCsvText = rawCsvText;
    if (headerIndex !== -1) {
      cleanCsvText = rawCsvText.slice(headerIndex);
    }

    const result = Papa.parse<BlogPost>(cleanCsvText, {
      header: true,
      skipEmptyLines: true,
    });

    if (result.errors.length) {
      console.error("CSV Parsing errors:", result.errors);
    }

    // Filter only published ones
    const allPosts: BlogPost[] = result.data;
    const publishedPosts = allPosts.filter(
      (post) => post.status?.trim().toLowerCase() === "published"
    );

    // Provide default sorting by date (newest first assuming standard date strings)
    publishedPosts.sort((a, b) => {
      return new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime();
    });

    return publishedPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

/**
 * Gets a single published blog post by its exact slug.
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
