# Let's inspect all 72 projects in yapilan-isler
import re

with open('src/pages/yapilan-isler/index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's separate projects:
# 1-52 had some banyo (id 4, 17, 24, 31, 38, 45...) and komple (id 5, 18, 25, 32...)
# We now have:
# proje-01 to proje-35: 35 adet yüksek kaliteli tekil MUTFAK modelleri (Modern, Country, Life)
# proje-53 to proje-62: 10 adet yüksek kaliteli gerçek BANYO & SERAMİK modelleri
# proje-63 to proje-72: 10 adet yüksek kaliteli gerçek KOMPLE EV TADİLATI modelleri

# Let's also download 5 more banyos and 5 more tadilats to give each early banyo/tadilat card its own real photo!
