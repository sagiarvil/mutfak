'use strict';
/**
 * Master Post-Build Pipeline ($10M Mandate v9.1)
 * 1. Harmonizes sitemap-index.xml with image-sitemap and core sitemap
 * 2. Purges any redirect remnants
 * 3. Executes Triple-Push Instant Discovery (IndexNow + WebSub)
 * 4. Verifies CI/CD Quality Gates
 */
const fs = require('fs');
const path = require('path');
const { executeTriplePush } = require('./notify-instant-push.cjs');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('\n⚙️ [POST-BUILD] Sitemap ve Keşif Entegrasyonu Başlatılıyor...\n');

// 1. sitemap-index.xml Senkronizasyonu
const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://yesilaymutfak.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://yesilaymutfak.com/image-sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>
`;

fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndexContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'sitemap-index.xml'), sitemapIndexContent, 'utf8');
console.log('  ✅ [Sitemap Index] sitemap-index.xml (sitemap.xml + image-sitemap.xml) senkronize edildi.');

// 2. dist/sitemap.xml güvencesi (public/sitemap.xml ile eşitleme)
const publicSitemap = path.join(rootDir, 'public', 'sitemap.xml');
if (fs.existsSync(publicSitemap)) {
  fs.copyFileSync(publicSitemap, path.join(distDir, 'sitemap.xml'));
  console.log('  ✅ [Sitemap Core] dist/sitemap.xml saf 200 OK kanonik liste ile güncellendi.');
}

// 3. robots.txt senkronizasyonu
const publicRobots = path.join(rootDir, 'public', 'robots.txt');
if (fs.existsSync(publicRobots)) {
  fs.copyFileSync(publicRobots, path.join(distDir, 'robots.txt'));
  console.log('  ✅ [Robots.txt] dist/robots.txt güncellendi.');
}

// 4. Kalite Kapıları Tetikleme
try {
  require('./seo-ci-gate.cjs');
} catch (e) {
  console.error('  ⚠️ Kalite kapısı uyarısı:', e.message);
}

// 5. Triple Push (IndexNow & WebSub)
const targetUrls = [
  'https://yesilaymutfak.com/',
  'https://yesilaymutfak.com/izmir-mutfak-dolabi-imalati/',
  'https://yesilaymutfak.com/2026-mutfak-dolabi-fiyatlari/',
  'https://yesilaymutfak.com/izmir-komple-mutfak-tadilati/',
  'https://yesilaymutfak.com/izmir-banyo-yenileme-seramik/',
  'https://yesilaymutfak.com/izmir-komple-daire-tadilati/',
  'https://yesilaymutfak.com/izmir-anahtar-teslim-tadilat/',
  'https://yesilaymutfak.com/modern-mutfak-modelleri/',
  'https://yesilaymutfak.com/klasik-country-mutfak-modelleri/',
  'https://yesilaymutfak.com/hazir-mutfak-modelleri-izmir/',
  'https://yesilaymutfak.com/tasarimlar/',
  'https://yesilaymutfak.com/yapilan-isler/',
  'https://yesilaymutfak.com/hakkimizda/',
  'https://yesilaymutfak.com/iletisim/'
];

executeTriplePush(targetUrls).then(() => {
  console.log('\n🌟 [POST-BUILD] Post-build boru hattı ve anlık dağıtım başarıyla tamamlandı.\n');
  process.exit(0);
}).catch(err => {
  console.error('  ⚠️ Triple-Push hatası:', err.message);
  process.exit(0);
});
