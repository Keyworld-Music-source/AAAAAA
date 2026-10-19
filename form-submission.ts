import { z } from "zod";
import { siteConfig, siteCopy } from "@/data/site-content";
export const contactSchema = z.object({ name: z.string().trim().min(2, "Please enter your name.").max(100), country: z.string().trim().min(2, "Please enter your country.").max(100), email: z.string().trim().email("Please enter a valid email.").max(255), message: z.string().trim().min(5, "Please add your message.").max(2000), botcheck: z.string().max(0) });
export async function sendForm(data: Record<string, string>, subject: string) {
  if (!siteConfig.web3FormsAccessKey.trim() || siteConfig.web3FormsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY") throw new Error(siteCopy.unconfigured);
  // FormData avoids a CORS preflight, which Web3Forms handles most reliably from browsers.
  const body = new FormData();
  Object.entries({ ...data, access_key: siteConfig.web3FormsAccessKey, subject, from_name: siteConfig.brand }).forEach(([k, v]) => body.append(k, v));
  let result: { success?: boolean } = {};
  try {
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body });
    result = await response.json();
    if (!response.ok) throw new Error();
  } catch { throw new Error(siteCopy.deliveryError); }
  if (result.success !== true) throw new Error(siteCopy.deliveryError);
}
