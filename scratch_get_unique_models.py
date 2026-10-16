import urllib.request
import ssl
import re
import os
from PIL import Image
import io

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

sources = [
    # Lineadecor farklı modeller
    "https://lineadecor.com.tr/mutfak-modelleri/",
    "https://lineadecor.com.tr/koleksiyonlar/",
    "https://lineadecor.com.tr/filo/",
    "https://lineadecor.com.tr/vento/",
    "https://lineadecor.com.tr/mondo/",
    "https://lineadecor.com.tr/kepler/",
    "https://lineadecor.com.tr/arte/",
    "https://lineadecor.com.tr/sotto/",
    "https://lineadecor.com.tr/terzo/",
    "https://lineadecor.com.tr/lago/",
    "https://lineadecor.com.tr/eolis/",
    "https://lineadecor.com.tr/materia/",
    "https://lineadecor.com.tr/filo-l/",
    "https://lineadecor.com.tr/nola/",
    "https://lineadecor.com.tr/dona/",
    # Feza Mutfak farklı modeller
    "https://www.fezamutfak.com/lake-mutfak-modelleri",
    "https://www.fezamutfak.com/akrilik-mutfak-modelleri",
    "https://www.fezamutfak.com/country-mutfak-modelleri",
    "https://www.fezamutfak.com/modern-mutfak-modelleri",
    "https://www.fezamutfak.com/ahsap-mutfak-modelleri",
    "https://www.fezamutfak.com/ada-mutfak-modelleri",
    "https://www.fezamutfak.com/banyo-dolabi-modelleri",
    # Mutfak Mobilyası
    "https://www.mutfakmobilyasi.net/galeri/",
    # İntema
    "https://www.intema.com.tr/"
]

all_candidate_urls = []

for s in sources:
    try:
        req = urllib.request.Request(s, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=8) as r:
            html = r.read().decode('utf-8', errors='ignore')
            found = re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html, re.IGNORECASE)
            print(f"{s} -> {len(found)} link bulundu")
            for u in found:
                # filter out small icons, logos, banners
                u_clean = re.sub(r'-\d+x\d+(\.(?:jpg|jpeg|png|webp))', r'\1', u, flags=re.IGNORECASE)
                low = u_clean.lower()
                if any(k in low for k in ['logo', 'icon', 'favicon', 'avatar', 'banner', 'footer', 'arrow', 'placeholder']):
                    continue
                if u_clean not in all_candidate_urls:
                    all_candidate_urls.append(u_clean)
    except Exception as e:
        print(f"Hata ({s}): {e}")

print(f"Toplam aday görsel: {len(all_candidate_urls)}")
with open('scratch_candidates.txt', 'w', encoding='utf-8') as f:
    for u in all_candidate_urls:
        f.write(u + '\n')
