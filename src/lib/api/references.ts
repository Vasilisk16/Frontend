import { apiFetch } from "@/lib/api/client";
import type { Category, Era } from "@/types/landmark";

export async function fetchEras(): Promise<Era[]> {
  return apiFetch<Era[]>("/api/eras");
}

export async function fetchCategories(): Promise<Category[]> {
  return apiFetch<Category[]>("/api/categories");
}
