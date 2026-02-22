import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "stackd - Your Tech Stack",
        short_name: "stackd",
        description: "Build your professional tech identity and generate a stunning portfolio in minutes.",
        start_url: "/",
        display: "standalone",
        background_color: "#05050A",
        theme_color: "#05050A",
        icons: [
            {
                src: "/logo.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
