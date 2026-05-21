import { vi } from "vitest";

export const usePathname = vi.fn().mockReturnValue("/");
export const useRouter = vi.fn().mockReturnValue({
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
});
