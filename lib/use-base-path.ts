"use client"

export function useBasePath(): string {
  if (typeof window === "undefined") {
    return process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/intelli-edge" : ""
  }
  return process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/intelli-edge" : ""
}

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/intelli-edge" : ""
}
