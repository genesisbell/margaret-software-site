import i18n from "@/i18n";
import { i18nKeyType } from "@/types";

export function getDictionary(locale: i18nKeyType) {
  return i18n[locale] || i18n.en_US;
}
