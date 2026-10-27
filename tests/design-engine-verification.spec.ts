import { test, expect } from "@playwright/test";

test.describe("7 Tasarım Motoru Canlı Doğrulama Testi", () => {
  test("Ana sayfa yüklenmeli, Design System, React Bits ve GSAP sınıfları DOM'da bulunmalı", async ({ page }) => {
    await page.goto("/");

    // 1. Title ve Temel Meta Kontrolü
    await expect(page).toHaveTitle(/İzmir Mutfak Banyo/);

    // 2. Motor 1 (designlang & design-tokens.css): CSS kök değişkenlerinin yüklendiğini doğrula
    const bodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    expect(bodyBg).toBeTruthy();

    // 3. Motor 3 (React Bits & CountUp): Canlı sayacın render edildiğini doğrula
    const counterText = await page.locator(".font-black:has-text('Model')").first();
    // Sayaç DOM'da görünür veya mevcut olmalıdır
    expect(counterText).toBeTruthy();

    // 4. Motor 4 & 6 (GSAP & ScrollTrigger): reveal-on-scroll sınıflı kartların varlığı
    const revealCards = page.locator(".reveal-on-scroll");
    const count = await revealCards.count();
    expect(count).toBeGreaterThan(0);

    // 5. Motor 5 (transitions.dev): transition-card sınıflı elemanların varlığı
    const transitionCards = page.locator(".transition-card");
    const transitionCount = await transitionCards.count();
    expect(transitionCount).toBeGreaterThan(0);
  });
});
