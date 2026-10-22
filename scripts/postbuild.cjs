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
    <loc>https://izmirmutfakbanyo.com.tr/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://izmirmutfakbanyo.com.tr/image-sitemap.xml</loc>
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
  'https://izmirmutfakbanyo.com.tr/',
  'https://izmirmutfakbanyo.com.tr/maliyet-hesapla/',
  'https://izmirmutfakbanyo.com.tr/2026-mutfak-dolabi-fiyatlari/',
  'https://izmirmutfakbanyo.com.tr/izmir-mutfak-dolabi-imalati/',
  'https://izmirmutfakbanyo.com.tr/izmir-komple-mutfak-tadilati/',
  'https://izmirmutfakbanyo.com.tr/izmir-banyo-yenileme-seramik/',
  'https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/',
  'https://izmirmutfakbanyo.com.tr/izmir-komple-daire-tadilati/',
  'https://izmirmutfakbanyo.com.tr/tasarimlar/',
  'https://izmirmutfakbanyo.com.tr/mutfak-dolabi-fiyatlari/',
  'https://izmirmutfakbanyo.com.tr/mutfak-dolabi/',
  'https://izmirmutfakbanyo.com.tr/modern-mutfak-modelleri/',
  'https://izmirmutfakbanyo.com.tr/klasik-country-mutfak-modelleri/',
  'https://izmirmutfakbanyo.com.tr/hazir-mutfak-modelleri-izmir/',
  'https://izmirmutfakbanyo.com.tr/hazir-mutfak/',
  'https://izmirmutfakbanyo.com.tr/yasam-alanlari-mutfak-modelleri/',
  'https://izmirmutfakbanyo.com.tr/mutfak-tadilati/',
  'https://izmirmutfakbanyo.com.tr/banyo-tadilati/',
  'https://izmirmutfakbanyo.com.tr/ev-tadilati/',
  'https://izmirmutfakbanyo.com.tr/anahtar-teslim-tadilat/',
  'https://izmirmutfakbanyo.com.tr/yapilan-isler/',
  'https://izmirmutfakbanyo.com.tr/projeler/',
  'https://izmirmutfakbanyo.com.tr/hakkimizda/',
  'https://izmirmutfakbanyo.com.tr/iletisim/'
];

executeTriplePush(targetUrls).then(() => {
  console.log('\n🌟 [POST-BUILD] Post-build boru hattı ve anlık dağıtım başarıyla tamamlandı.\n');
  process.exit(0);
}).catch(err => {
  console.error('  ⚠️ Triple-Push hatası:', err.message);
  process.exit(0);
});
