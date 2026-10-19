import { describe, expect, it, vi } from "vitest";
import { contactSchema, sendForm } from "@/lib/form-submission";
import { siteCopy } from "@/data/site-content";
vi.mock("@/data/site-content", async (importOriginal) => {
 const original = await importOriginal<typeof import("@/data/site-content")>();
 return { ...original, siteConfig: { ...original.siteConfig, web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY" } };
});
describe("Contact submission", () => {
 it("validates and trims the contact fields", () => {
  expect(contactSchema.parse({ name: " Jane Music ", country: " Nigeria ", email: "jane@example.com", message: "Piano lessons please", botcheck: "" }).name).toBe("Jane Music");
 });
 it("rejects invalid email and honeypot content", () => {
  expect(contactSchema.safeParse({ name: "Jane", country: "Nigeria", email: "invalid", message: "Hello there", botcheck: "spam" }).success).toBe(false);
 });
 it("does not fake delivery with a placeholder key", async () => {
  await expect(sendForm({ name: "Jane" }, "Enquiry")).rejects.toThrow(siteCopy.unconfigured);
 });
});
