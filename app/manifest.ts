import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "agriwise global",
    short_name: "agriwise",
    description:
      "bangladesh-based agri-trade and agricultural export company connecting farmers with global markets.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5ef",
    theme_color: "#1f5c37",
    icons: [
      {
        src: "/brand/agriwise_logo.png",
        sizes: "215x212",
        type: "image/png",
      },
    ],
  };
}
