import { cookies } from "next/headers";

const COOKIE_NAME = "dearo_admin_session";

export function createAdminToken() {
  return `admin:${Date.now()}`;
}

export function verifyAdminToken(token: string | undefined) {
  if (!token) return false;

  if (!token.startsWith("admin:")) {
    return false;
  }

  const timestamp = Number(token.replace("admin:", ""));

  if (!Number.isFinite(timestamp)) {
    return false;
  }

  // 8 hour session
  const age = Date.now() - timestamp;

  if (age < 0 || age > 8 * 60 * 60 * 1000) {
    return false;
  }

  return true;
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_NAME)?.value;

  return verifyAdminToken(token);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;