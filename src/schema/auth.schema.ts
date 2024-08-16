import z from "zod";

export const LoginSchema = z
  .object({
    clientId: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    clientSecret: z.string().min(1, {
      message: "Password not empty.",
    }),
  })
  .strict();

export type TLoginRequest = z.TypeOf<typeof LoginSchema>;

export type TLoginResponse = {
  message: string;
  accessToken: string;
  expireTime: number;
};
