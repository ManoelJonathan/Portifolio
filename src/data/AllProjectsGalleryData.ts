import type { GalleryItem } from "../types";
import { galleryData as WeuniteGallery } from "./WeuniteGalleryData";

export const AllGalleries: Record<string, GalleryItem[]> = {
  "weunite": WeuniteGallery,
};
