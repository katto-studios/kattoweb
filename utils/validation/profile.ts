import { z } from "zod";

export const profileSchema = z.object({
  username: z.string().min(3).optional(),
  email: z.string().email().optional(),
  orgName: z.string().min(3).optional(),
  orgTitle: z.string().min(3).optional(),
});
