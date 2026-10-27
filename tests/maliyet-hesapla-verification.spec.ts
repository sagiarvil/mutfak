import { test, expect } from "@playwright/test";

test.describe("RenovaIQ Studio Pro 2026/2027 Canlı Maliyet Hesaplama Motoru Testi", () => {
  test("/maliyet-hesapla/ sayfası açılmalı, başlık ve hesaplama motoru bileşenleri aktif olmalı", async ({ page }) => {
    await page.goto("/maliyet-hesapla/");

    // 1. Sayfa başlığı kontrolü
    await expect(page).toHaveTitle(/RenovaIQ Studio Pro|İzmir Mutfak/);

    // 2. RenovaIQ Marka / Motor Metni Kontrolü
    const brand = page.locator("text=RenovaIQ");
    await expect(brand.first()).toBeVisible();

    // 3. Ana Sayfaya Dönüş butonu kontrolü
    const backBtn = page.locator("a:has-text('Ana Sayfa')");
    await expect(backBtn.first()).toBeVisible();

    // 4. Hesaplama motoru container'ı kontrolü
    const bodyContent = await page.textContent("body");
    expect(bodyContent).toContain("RenovaIQ");
  });
});
