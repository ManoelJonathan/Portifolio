import type { GalleryItem } from "./WeuniteGalleryData";
import { galleryData as WeuniteGallery } from "./WeuniteGalleryData";

export const AllGalleries: Record<string, GalleryItem[]> = {
  "weunite": WeuniteGallery,
};
