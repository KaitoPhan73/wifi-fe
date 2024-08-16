import { z } from "zod";

const EffectDurationMapSchema = z.object({
  d: z.coerce.string(),
  h: z.coerce.string(),
  m: z.coerce.string(),
});

export const VoucherGroupSchema = z.object({
  networkId: z.number(),
  name: z.string().min(1, "Name cannot be empty"),
  vocherNum: z.coerce.number().min(0, "Voucher Number is required"),
  deviceNum: z.coerce.number().min(0, "Device Number is required"),
  upRate: z.coerce.number().min(0, "Up Rate is required"),
  downRate: z.coerce.number().min(0, "Down Rate is required"),
  usageQuota: z.coerce.number().min(0, "Usage Quota is required"),
  expiration: z.coerce.number().min(0, "Expiration is required"),
  effectDurationMap: EffectDurationMapSchema,
  description: z.string().optional(),
  usageLimitType: z.coerce.number().min(0, "Usage Limit Type is required"),
  voucherType: z.coerce.number().min(0, "Voucher Type is required"),
  passwords: z
    .array(z.string().min(1, "Passwords cannot be empty"))
    .nonempty("Password array cannot be empty"),
});

export const VoucherGroupMsgResponseSchema = z.object({
  data: z.any(),
  msg: z.string().optional(),
  retCode: z.number(),
});

export const VoucherGroupResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  vocherNum: z.number(),
  usedVoucherNum: z.number(),
  effectDurationMap: EffectDurationMapSchema,
  createEmail: z.string(),
  upRate: z.number().nullable(),
  upRateUnit: z.number(),
  downRate: z.number().nullable(), // Cho phép null
  downRateUnit: z.number(),
  usageQuota: z.number().nullable(), // Cho phép null
  usageUnit: z.number(),
  description: z.string(), // Cho phép chuỗi rỗng
  createTimeStr: z.string(),
  expirationTimeStr: z.string(),
  availableVoucherNum: z.number(),
  usageLimitType: z.number(),
  inuseNum: z.number(),
});

export type TVoucherGroupRequest = z.infer<typeof VoucherGroupSchema>;
export type TVoucherGroupResponse = z.infer<typeof VoucherGroupResponseSchema>;
export type TVoucherGroupMsgResponse = z.infer<
  typeof VoucherGroupMsgResponseSchema
>;
