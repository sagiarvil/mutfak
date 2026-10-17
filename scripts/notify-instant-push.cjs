'use strict';
/**
 * Triple-Push Instant Discovery Motoru ($10M Mandate v9.1)
 * Hedef: Bing, Yandex, Seznam, Naver (IndexNow) + Google News / Feedly (WebSub)
 */
const https = require('https');

const CONFIG = {
  host: 'yesilaymutfak.com',
  indexNowKey: '9d980417475ac56c8ad72ef2c743e1e5',
  indexNowEndpoints: [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow'
  ],
  webSubHubs: [
    'https://pubsubhubbub.appspot.com/',
    'https://pubsubhubbub.superfeedr.com/'
  ],
  feeds: [
    'https://yesilaymutfak.com/feed.xml',
    'https://yesilaymutfak.com/mobile/feed.xml'
  ]
};

async function executeTriplePush(urls) {
  console.log(`🚀 [Triple-Push] ${urls.length} adet URL anlık dağıtıma iletiliyor...`);

  // 1. IndexNow Multi-Hub
  const payload = JSON.stringify({
    host: CONFIG.host,
    key: CONFIG.indexNowKey,
    keyLocation: `https://${CONFIG.host}/${CONFIG.indexNowKey}.txt`,
    urlList: urls
  });

  CONFIG.indexNowEndpoints.forEach(endpoint => {
    try {
      const u = new URL(endpoint);
      const req = https.request({
        hostname: u.hostname,
        path: u.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, res => {
        console.log(`  ✅ [IndexNow: ${u.hostname}] HTTP ${res.statusCode}`);
      });

      req.on('error', err => {
        console.error(`  ⚠️ [IndexNow: ${u.hostname}] Hata:`, err.message);
      });

      req.write(payload);
      req.end();
    } catch (e) {
      console.error(`  ⚠️ [IndexNow] İstek oluşturulamadı:`, e.message);
    }
  });

  // 2. WebSub Hubs Ping
  const params = CONFIG.feeds.map(f => `hub.url=${encodeURIComponent(f)}`).join('&') + '&hub.mode=publish';

  CONFIG.webSubHubs.forEach(hub => {
    try {
      const u = new URL(hub);
      const req = https.request({
        hostname: u.hostname,
        path: u.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(params)
        }
      }, res => {
        console.log(`  ✅ [WebSub: ${u.hostname}] HTTP ${res.statusCode}`);
      });

      req.on('error', err => {
        console.error(`  ⚠️ [WebSub: ${u.hostname}] Hata:`, err.message);
      });

      req.write(params);
      req.end();
    } catch (e) {
      console.error(`  ⚠️ [WebSub] İstek oluşturulamadı:`, e.message);
    }
  });
}

// Doğrudan çalıştırma
if (require.main === module) {
  const targetUrls = [
    'https://yesilaymutfak.com/',
    'https://yesilaymutfak.com/hakkimizda/',
    'https://yesilaymutfak.com/iletisim/',
    'https://yesilaymutfak.com/tasarimlar/',
    'https://yesilaymutfak.com/izmir-mutfak-dolabi-imalati/',
    'https://yesilaymutfak.com/izmir-komple-mutfak-tadilati/',
    'https://yesilaymutfak.com/izmir-banyo-yenileme-seramik/',
    'https://yesilaymutfak.com/izmir-anahtar-teslim-tadilat/',
    'https://yesilaymutfak.com/2026-mutfak-dolabi-fiyatlari/'
  ];
  executeTriplePush(targetUrls);
}

module.exports = { executeTriplePush };
