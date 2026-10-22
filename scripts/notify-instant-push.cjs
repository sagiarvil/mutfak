'use strict';
/**
 * Triple-Push Instant Discovery Motoru ($10M Mandate v9.1)
 * Hedef: Bing, Yandex, Seznam, Naver (IndexNow) + Google News / Feedly (WebSub)
 */
const https = require('https');

const CONFIG = {
  host: 'izmirmutfakbanyo.com.tr',
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
    'https://izmirmutfakbanyo.com.tr/feed.xml',
    'https://izmirmutfakbanyo.com.tr/mobile/feed.xml'
  ]
};

function executeTriplePush(urls) {
  return new Promise((resolve) => {
    console.log(`🚀 [Triple-Push] ${urls.length} adet URL anlık dağıtıma iletiliyor...`);

    const payload = JSON.stringify({
      host: CONFIG.host,
      key: CONFIG.indexNowKey,
      keyLocation: `https://${CONFIG.host}/${CONFIG.indexNowKey}.txt`,
      urlList: urls
    });

    const promises = [];

    // 1. IndexNow Multi-Hub
    CONFIG.indexNowEndpoints.forEach(endpoint => {
      promises.push(new Promise(resDone => {
        try {
          const u = new URL(endpoint);
          const req = https.request({
            hostname: u.hostname,
            path: u.pathname,
            method: 'POST',
            timeout: 5000,
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload)
            }
          }, res => {
            console.log(`  ✅ [IndexNow: ${u.hostname}] HTTP ${res.statusCode}`);
            res.resume();
            resDone();
          });

          req.on('error', err => {
            console.error(`  ⚠️ [IndexNow: ${u.hostname}] Hata:`, err.message);
            resDone();
          });
          req.on('timeout', () => {
            req.destroy();
            resDone();
          });

          req.write(payload);
          req.end();
        } catch (e) {
          console.error(`  ⚠️ [IndexNow] İstek oluşturulamadı:`, e.message);
          resDone();
        }
      }));
    });

    // 2. WebSub Hubs Ping
    const params = CONFIG.feeds.map(f => `hub.url=${encodeURIComponent(f)}`).join('&') + '&hub.mode=publish';

    CONFIG.webSubHubs.forEach(hub => {
      promises.push(new Promise(resDone => {
        try {
          const u = new URL(hub);
          const req = https.request({
            hostname: u.hostname,
            path: u.pathname,
            method: 'POST',
            timeout: 5000,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Content-Length': Buffer.byteLength(params)
            }
          }, res => {
            console.log(`  ✅ [WebSub: ${u.hostname}] HTTP ${res.statusCode}`);
            res.resume();
            resDone();
          });

          req.on('error', err => {
            console.error(`  ⚠️ [WebSub: ${u.hostname}] Hata:`, err.message);
            resDone();
          });
          req.on('timeout', () => {
            req.destroy();
            resDone();
          });

          req.write(params);
          req.end();
        } catch (e) {
          console.error(`  ⚠️ [WebSub] İstek oluşturulamadı:`, e.message);
          resDone();
        }
      }));
    });

    Promise.all(promises).then(() => resolve());
  });
}

// Doğrudan çalıştırma
if (require.main === module) {
  const targetUrls = [
    'https://izmirmutfakbanyo.com.tr/',
    'https://izmirmutfakbanyo.com.tr/hakkimizda/',
    'https://izmirmutfakbanyo.com.tr/iletisim/',
    'https://izmirmutfakbanyo.com.tr/tasarimlar/',
    'https://izmirmutfakbanyo.com.tr/izmir-mutfak-dolabi-imalati/',
    'https://izmirmutfakbanyo.com.tr/izmir-komple-mutfak-tadilati/',
    'https://izmirmutfakbanyo.com.tr/izmir-banyo-yenileme-seramik/',
    'https://izmirmutfakbanyo.com.tr/izmir-anahtar-teslim-tadilat/',
    'https://izmirmutfakbanyo.com.tr/2027-mutfak-dolabi-fiyatlari/'
  ];
  executeTriplePush(targetUrls).then(() => {
    process.exit(0);
  });
}

module.exports = { executeTriplePush };
