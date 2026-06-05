import { auth } from "../../auth";

export async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function requireTeacher() {
  const session = await requireAuth();
  if (session.user.role !== "teacher") throw new Error("Forbidden");
  return session;
}
