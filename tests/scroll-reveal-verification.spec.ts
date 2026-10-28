import { test, expect } from "@playwright/test";

test.describe("Apple Motion - Scroll-Driven Reveal with Staggered Fade-Up Testi", () => {
  test("Sayfa açıldığında ve scroll yapıldığında elemanlar kademeli (staggered) fade-up ile belirmeli", async ({ page }) => {
    await page.goto("/");

    // 1. scroll-reveal sınıflı elemanların varlığı
    const revealItems = page.locator(".scroll-reveal");
    const count = await revealItems.count();
    expect(count).toBeGreaterThan(0);

    // 2. İlk viewport'taki elemanların is-revealed alması
    await page.waitForTimeout(500);
    const revealedCount = await page.locator(".scroll-reveal.is-revealed").count();
    expect(revealedCount).toBeGreaterThan(0);

    // 3. Stagger index CSS değişkeninin atanmış olduğunu doğrula
    const firstItem = revealItems.first();
    const staggerIndex = await firstItem.evaluate((el) => {
      return el.style.getPropertyValue("--stagger-index");
    });
    // Stagger index tanımlı olmalı (örn: '0', '1' vb.)
    expect(staggerIndex !== "").toBeTruthy();

    // 4. Aşağı kaydırma testi: Sayfayı 600px kaydır
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(600);

    // Kaydırılan alandaki kartların da is-revealed aldığını doğrula
    const afterScrollRevealed = await page.locator(".scroll-reveal.is-revealed").count();
    expect(afterScrollRevealed).toBeGreaterThanOrEqual(revealedCount);
  });
});
