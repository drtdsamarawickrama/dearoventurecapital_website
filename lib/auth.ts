import { SignJWT, jwtVerify } from "jose";

const secret = process.env.AUTH_SECRET;

if (!secret) {
  throw new Error("AUTH_SECRET is not defined in .env.local");
}

const secretKey = new TextEncoder().encode(secret);

export type AuthPayload = {
  userId: string;
  email: string;
  role: "customer" | "investor" | "admin";
};

export async function createAuthToken(payload: AuthPayload) {
  return await new SignJWT({
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function verifyAuthToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);

    return {
      userId: payload.userId as string,
      email: payload.email as string,
      role: payload.role as "customer" | "investor" | "admin",
    };
  } catch {
    return null;
  }
}