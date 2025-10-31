/**
 * @fileoverview
 * Centralized Cloudinary configuration and helper functions for generating
 * both auto-optimized and explicit image URLs. Use this file to standardize
 * how all Cloudinary images are referenced throughout the site.
 */

/**
 * Base Cloudinary URL for manually referenced (non-optimized) assets.
 * Use this when you need pixel-perfect control, such as banners or cropped images.
 */
export const CLOUDINARY_BASE =
  "https://res.cloudinary.com/ds2oztufv/image/upload";

/**
 * Base Cloudinary URL for automatically optimized assets.
 * Includes `f_auto,q_auto` for automatic format and quality optimization.
 * Ideal for content images, thumbnails, and performance-sensitive assets.
 */
export const CLOUDINARY_BASE_AUTO =
  "https://res.cloudinary.com/ds2oztufv/image/upload/f_auto,q_auto";

/**
 * Generates an auto-optimized Cloudinary URL for a single image.
 *
 * @param file - The Cloudinary public ID (filename without extension)
 * @param ext - Optional file extension (defaults to `"png"`)
 * @param version - Optional Cloudinary version number (e.g. `"v1761063722"`)
 * @returns Fully-qualified Cloudinary URL with automatic optimization
 *
 * @example
 * ```ts
 * getCloudinarySrc("about-hero", "webp"); // f_auto,q_auto optimized URL
 * ```
 */
// export function getCloudinarySrc(
//   file: string,
//   ext: string = "png",
//   version: string = "",
// ): string {
//   return `${CLOUDINARY_BASE_AUTO}/${version}/${file}.${ext}`;
// }

// config/cloudinary.ts - MINIMAL FIX TO REMOVE EXTRA SLASH
export function getCloudinarySrc(
  file: string,
  ext: string = "png",
  version: string = "",
): string {
  // FIX: Only add version if it's not empty
  if (version) {
    return `${CLOUDINARY_BASE_AUTO}/${version}/${file}.${ext}`;
  } else {
    return `${CLOUDINARY_BASE_AUTO}/${file}.${ext}`;
  }
}

/**
 * Generates a set of four explicit Cloudinary URLs for a banner or hero section:
 * mobile.webp, mobile.png, desktop.webp, and desktop.png.
 * Useful for art-directed images that differ between devices.
 *
 * @param mobileWebp - The Cloudinary public ID for the mobile WebP file (excluding extension)
 * @param mobilePng - The Cloudinary public ID for the mobile PNG fallback (excluding extension)
 * @param desktopWebp - The Cloudinary public ID for the desktop WebP file (excluding extension)
 * @param desktopPng - The Cloudinary public ID for the desktop PNG fallback (excluding extension)
 * @param version - Optional Cloudinary version number (defaults to `"v1761063722"`)
 * @returns An object with `mobile` and `desktop` properties, each containing `webp` and `png` URLs
 *
 * @example
 * ```ts
 * getCloudinaryFourSet(
 *   "banner-sp-mbl_bvbbzg",
 *   "banner-sp-mbl_mbblxj",
 *   "banner-sp-dsk_ej4dov",
 *   "banner-sp-dsk_pllt9m"
 * )
 * ```
 */
export function getCloudinaryFourSet(
  mobileWebp: { id: string; version: string },
  mobilePng: { id: string; version: string },
  desktopWebp: { id: string; version: string },
  desktopPng: { id: string; version: string },
) {
  return {
    mobile: {
      webp: `${CLOUDINARY_BASE}/${mobileWebp.version}/${mobileWebp.id}.webp`,
      png: `${CLOUDINARY_BASE}/${mobilePng.version}/${mobilePng.id}.png`,
    },
    desktop: {
      webp: `${CLOUDINARY_BASE}/${desktopWebp.version}/${desktopWebp.id}.webp`,
      png: `${CLOUDINARY_BASE}/${desktopPng.version}/${desktopPng.id}.png`,
    },
  };
}
