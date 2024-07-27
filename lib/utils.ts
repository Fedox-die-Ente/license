import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {licenseKeyPrefix} from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result

}

export function generateLicenseKey() {
  return `${licenseKeyPrefix}${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(4)}`
}