import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "dearo_admin_token";

const secret = process.env.AUTH_SECRET;

if (!secret) {
  throw new Error("AUTH_SECRET is not defined");
}

const secretKey = new TextEncoder().encode(secret);

/**
 * Create admin JWT token
 */
export async function createAdminToken() {
  return await new SignJWT({
    role: "admin",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secretKey);
}

/**
 * Verify admin JWT token
 */
export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      secretKey
    );

    if (payload.role !== "admin") {
      return null;
    }

    return {
      role: "admin",
    };
  } catch {
    return null;
  }
}

/**
 * Check whether admin is logged in
 */
export async function isAdminAuthenticated() {
  const cookieStore = await cookies();

  const token = cookieStore.get(
    ADMIN_COOKIE_NAME
  )?.value;

  if (!token) {
    return false;
  }

  const admin = await verifyAdminToken(token);

  return !!admin;
}

/**
 * Get admin authentication
 */
export async function getAdminAuth() {
  const cookieStore = await cookies();

  const token = cookieStore.get(
    ADMIN_COOKIE_NAME
  )?.value;

  if (!token) {
    return null;
  }

  return await verifyAdminToken(token);
}

/**
 * Logout admin
 */
export async function logoutAdmin() {
  const cookieStore = await cookies();

  cookieStore.delete(ADMIN_COOKIE_NAME);
}