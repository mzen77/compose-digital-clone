import { writeFile, mkdir } from "fs/promises";
import { dirname, join } from "path";
import { existsSync } from "fs";

const BASE_DIR = join(import.meta.dirname, "..", "public");

const assets = [
  // Logo
  {
    url: "https://framerusercontent.com/images/1GuJRQ3FJG4YVsxeYjgN0D3sHEE.svg",
    path: "images/logo.svg",
  },
  // Favicon
  {
    url: "https://framerusercontent.com/images/W9hkPEVhb73DRyN5eslvSYW5MM.png",
    path: "seo/favicon.png",
  },
  // Hero marquee card images
  {
    url: "https://framerusercontent.com/images/qwTKRxrhuJ0Jp7FcgutnbCd1Ys.jpg",
    path: "images/project-ecosolutions.jpg",
  },
  {
    url: "https://framerusercontent.com/images/9OieI1qQRIyO83s2W0BSEwnWs.jpg",
    path: "images/project-travelista.jpg",
  },
  {
    url: "https://framerusercontent.com/images/MMNjB4wFJqQ9tvVhmSWq2nVAtlU.jpg",
    path: "images/project-fitlife.jpg",
  },
  {
    url: "https://framerusercontent.com/images/VFwKdqS1n9i7HwO9yhU6Payuzk.jpg",
    path: "images/project-freshnest.jpg",
  },
  // About section images
  {
    url: "https://framerusercontent.com/images/m38UL9Tw5sO88dHbj1c3QK3b1pI.jpg",
    path: "images/about-landscape.jpg",
  },
  {
    url: "https://framerusercontent.com/images/uhCCHZ04fu9WiPWGbLonWoslM.jpg",
    path: "images/about-portrait.jpg",
  },
  // Quotes background
  {
    url: "https://framerusercontent.com/images/27ztwZ9gzFI44r6nNeAxWSbR5c.jpg",
    path: "images/quotes-bg.jpg",
  },
  // Projects section images
  {
    url: "https://framerusercontent.com/images/oKJGsTy7hvpEkTQLbon9HUMesI.jpg",
    path: "images/project-luxefit.jpg",
  },
  {
    url: "https://framerusercontent.com/images/OBnJkre1fCL4md6rJTJ6YqbhdA8.jpg",
    path: "images/project-techinnovators.jpg",
  },
  {
    url: "https://framerusercontent.com/images/5hJjohrojnDelnATi89ljS1q9w.jpg",
    path: "images/project-greenleaf.jpg",
  },
  {
    url: "https://framerusercontent.com/images/UK07liPWMrdpk9DyCAofAGQ8Tec.jpg",
    path: "images/project-brighthorizons.jpg",
  },
  // Blog images
  {
    url: "https://framerusercontent.com/images/t7ZGNtBnjEJRJd8eZF4kCw0jw.jpg",
    path: "images/blog-prototyping.jpg",
  },
  {
    url: "https://framerusercontent.com/images/LUGHUqtnMC2cxYt3G1zRx8s6zh4.jpg",
    path: "images/blog-ux.jpg",
  },
  {
    url: "https://framerusercontent.com/images/se6L5EeDqcgbbFHN21I1r0Zwxg.jpg",
    path: "images/blog-future.jpg",
  },
  // Nav icons (SVGs used as images)
  {
    url: "https://framerusercontent.com/images/lMDBrC7KeO4pzPJudnY4iX67Y.svg",
    path: "images/user-avatar-1.svg",
  },
  {
    url: "https://framerusercontent.com/images/OcyPvBf3EVyuXQ1vxN8VAVMMG3w.svg",
    path: "images/user-avatar-2.svg",
  },
  {
    url: "https://framerusercontent.com/images/7c4EaCBaxTvCSTX5PtM6basU.svg",
    path: "images/user-avatar-3.svg",
  },
  {
    url: "https://framerusercontent.com/images/6OIRUUD4YytzI1Qp0LdOcrdOa8s.svg",
    path: "images/user-avatar-4.svg",
  },
];

async function download(url, localPath) {
  const fullPath = join(BASE_DIR, localPath);
  const dir = dirname(fullPath);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(fullPath, buffer);
    console.log(`✓ ${localPath} (${(buffer.length / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`✗ ${localPath}: ${err.message}`);
  }
}

// Download in batches of 4
async function main() {
  console.log(`Downloading ${assets.length} assets to ${BASE_DIR}...\n`);
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map((a) => download(a.url, a.path)));
  }
  console.log("\nDone!");
}

main();
