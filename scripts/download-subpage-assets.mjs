import https from "https";
import fs from "fs";
import path from "path";

const BASE = "https://framerusercontent.com/images/";

const assets = [
  // Services page
  { id: "iwAG1GAVTJb6EgIbwppdmKay0E.jpg", name: "service-hero.jpg" },
  { id: "capIEidxRsMbRSQLrSNJ2BStck.jpg", name: "service-branding.jpg" },
  { id: "EBjOwxe6fhxAceEwmxqaGolByw.jpg", name: "service-analytics.jpg" },
  { id: "1eCphmAaXrkWMLL2qcD9ZvS8Gw.jpg", name: "service-webdev.jpg" },
  { id: "7hLLdrK0tksSSpF0eH4ZrOhH2E.jpg", name: "service-email.jpg" },
  { id: "CddOWAtA3sLY9pL4Q5cNnUmJyzg.jpg", name: "service-ppc.jpg" },
  { id: "721Kk393LBBsSOoAXXs1FRjxHBQ.jpg", name: "service-content.jpg" },
  { id: "646S4NMjCV7Y9zISXLNccHdxdk.jpg", name: "service-social.jpg" },
  { id: "tPIEGfFYCx26rHAByAWFjcNhw.jpg", name: "service-seo.jpg" },
  { id: "IVsAVQs0FNXr15vNWWtY5tgIc.png", name: "testimonial-daniel.png" },
  { id: "NinvlYssqzrUMhd6PyE0zzj5M.png", name: "testimonial-rachel.png" },
  { id: "lIZLUdflqwFtVbQZClH9L0oUzk.png", name: "testimonial-john.png" },
  // About page
  { id: "m38UL9Tw5sO88dHbj1c3QK3b1pI.jpg", name: "about-hero.jpg" },
  { id: "uhCCHZ04fu9WiPWGbLonWoslM.jpg", name: "about-quote-portrait.jpg" },
  { id: "TxO5XpnQsavpNTgr2AJAYLoKLc.jpg", name: "about-quote-bg.jpg" },
  { id: "w97VjVZi5sfMh3689AOYRHrC0M.jpg", name: "team-jane-mills.jpg" },
  { id: "F4lZ7yalGrGQ6QH3p8OgWFAEKU.jpg", name: "team-julio-bricks.jpg" },
  { id: "F6bfabhFmBUvadmV2XBcG5rix0.jpg", name: "team-klara.jpg" },
  { id: "2GjMi2fQSfkPsL6TIMno9ZoE84A.jpg", name: "team-ichiro.jpg" },
  { id: "uXuKKD2oMuWF46orFkSDTQq9FM.jpg", name: "team-jane-jimenez.jpg" },
  { id: "vnot3goXG148LVKblS0yLcuFps.jpg", name: "team-simon.jpg" },
  { id: "4mOthJg4m0sbhUXeAfJG1eHnUiI.svg", name: "client-logo-1.svg" },
  { id: "tu4NeIVXCBp926I3eCN0I9u9ns.svg", name: "client-logo-2.svg" },
  { id: "Hl8sTKlCl3hQ0LD59Mj0tYJ6Gek.svg", name: "client-logo-3.svg" },
  { id: "LHI5ATpV7pccL4UI2lkau5ZmkBc.svg", name: "client-logo-4.svg" },
  { id: "yZ0uvoW6w9BjwtWlgxTDuPeVolw.svg", name: "client-logo-5.svg" },
  { id: "3vzTPeTnjzZNqcV6loVC2XUfc.svg", name: "client-logo-6.svg" },
  // Blog page (new posts)
  { id: "jFj0phrjEPp3eFF25V9qTDwy8Bw.jpg", name: "blog-webdesign.jpg" },
  { id: "lhoHMdTticNqDZXQbLc1TIfM3M.jpg", name: "blog-responsive.jpg" },
];

const outDir = path.resolve("public/images");

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve, reject);
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function main() {
  const batch = 4;
  for (let i = 0; i < assets.length; i += batch) {
    const chunk = assets.slice(i, i + batch);
    await Promise.all(chunk.map(async (a) => {
      const dest = path.join(outDir, a.name);
      if (fs.existsSync(dest)) { console.log(`SKIP ${a.name}`); return; }
      const url = BASE + a.id;
      console.log(`GET  ${a.name}`);
      await download(url, dest);
      console.log(`DONE ${a.name}`);
    }));
  }
  console.log("All downloads complete.");
}

main().catch(console.error);
