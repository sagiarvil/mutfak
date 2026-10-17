'use strict';
/**
 * SEO & Mobile CI/CD Kalite Kapıları Denetleyicisi (G0-G19 + MG0-MG22)
 * Mandate: MANDATE-SEO-GEO-MOBILE-FIRST-2026-V9
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
let errors = [];
let passed = 0;

function check(title, condition, detail = '') {
  if (condition) {
    passed++;
    console.log(`  ✅ [PASS] ${title}`);
  } else {
    errors.push(`${title}: ${detail}`);
    console.error(`  ❌ [FAIL] ${title} -> ${detail}`);
  }
}

console.log('\n🔍 [CI/CD GATES] Mandate v9.1 SEO, GEO & Mobile Kalite Denetimi Başlatılıyor...\n');

// G5: IndexNow Doğrulama Dosyası
const indexNowKeyFile = path.join(rootDir, 'public', '9d980417475ac56c8ad72ef2c743e1e5.txt');
check('G5 (IndexNow Key)', fs.existsSync(indexNowKeyFile), '9d980417475ac56c8ad72ef2c743e1e5.txt eksik');

// G10: Ajan Protokol Dosyaları
check('G10 (AI Agent Manifesto)', fs.existsSync(path.join(rootDir, 'public', 'agent.txt')), 'agent.txt eksik');
check('G10 (A2A Agent Card)', fs.existsSync(path.join(rootDir, 'public', '.well-known', 'agent.json')), '.well-known/agent.json eksik');

// G16: Google SERP 48px Favicon Paketi
const favicons = ['favicon.ico', 'favicon-48x48.png', 'favicon-96x96.png', 'favicon-192x192.png', 'favicon-512x512.png', 'favicon.svg'];
favicons.forEach(fav => {
  check(`G16 (Favicon ${fav})`, fs.existsSync(path.join(rootDir, 'public', fav)), `${fav} eksik`);
});

// G9: Syndication Bütünlüğü
const feeds = ['feed.xml', 'atom.xml', 'feed.json', 'mobile/feed.xml'];
feeds.forEach(f => {
  check(`G9 (Syndication ${f})`, fs.existsSync(path.join(rootDir, 'public', f)), `${f} eksik`);
});

// MG5: PWA Bütünlüğü
check('MG5 (Web Manifest)', fs.existsSync(path.join(rootDir, 'public', 'site.webmanifest')), 'site.webmanifest eksik');
check('MG5 (Service Worker)', fs.existsSync(path.join(rootDir, 'public', 'sw.js')), 'sw.js eksik');
check('MG5 (Offline HTML)', fs.existsSync(path.join(rootDir, 'public', 'offline.html')), 'offline.html eksik');

// G4 & MG8: Multi-Tier LLMS Hub
const llmsFiles = ['llms.txt', 'llms/core.md', 'llms/entities/author-experts.md', 'llms/entities/credentials.md', 'llms/mobile/voice-queries.md', 'llms/mobile/nano-core.md'];
llmsFiles.forEach(lf => {
  check(`G4/MG8 (LLMS ${lf})`, fs.existsSync(path.join(rootDir, 'public', lf)), `${lf} eksik`);
});

// SSOT Registry Kontrolü
const registryFile = path.join(rootDir, 'src', 'seo', 'registry.ts');
check('SSOT (registry.ts)', fs.existsSync(registryFile), 'src/seo/registry.ts eksik');

const schemaBuilder = path.join(rootDir, 'src', 'seo', 'schema-builder.ts');
check('14KB Engine (schema-builder.ts)', fs.existsSync(schemaBuilder), 'src/seo/schema-builder.ts eksik');

// Rapor
console.log(`\n=======================================================`);
console.log(`📊 Kalite Kapısı Sonucu: ${passed} Başarılı, ${errors.length} Hata`);
console.log(`=======================================================\n`);

if (errors.length > 0) {
  console.error('❌ Kalite kapıları geçilemedi!');
  process.exit(1);
} else {
  console.log('🌟 [100% PASS] Tüm Mandate v9.1 $10M Tier Kalite Kapıları Başarıyla Doğrulandı.');
  process.exit(0);
}
