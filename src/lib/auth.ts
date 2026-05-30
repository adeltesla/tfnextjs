import { CompactSign, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret"
);
const COOKIE_NAME = "tf-admin-token";

export async function createToken(username: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    username,
    iat: now,
    exp: now + 24 * 60 * 60,
  };
  const payload = new TextEncoder().encode(JSON.stringify(claims));

  return new CompactSign(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(SECRET);
}

export async function verifyToken(
  token: string
): Promise<{ username: string } | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as { username: string };
  } catch {
    return null;
  }
}

export async function getSession(): Promise<{ username: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export function validateCredentials(
  username: string,
  password: string
): boolean {
  return (
    username === (process.env.ADMIN_USERNAME || "admin") &&
    password === (process.env.ADMIN_PASSWORD || "admin123")
  );
}

export { COOKIE_NAME };
