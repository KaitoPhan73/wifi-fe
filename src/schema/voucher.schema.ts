import { z } from "zod";

const effectDurationMapSchema = z.object({
  d: z.number(),
  h: z.number(),
  m: z.number(),
});

const VoucherSchema = z.object({
  deviceNum: z.number(),
  downRate: z.number(),
  downRateUnit: z.number(),
  effectDurationMap: effectDurationMapSchema,
  endUseTimeStr: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-((19|20)\d\d) (\d|[01]\d|2[0-3]):([0-5]\d)(AM|PM)$/,
      "Invalid date format, expected DD-MM-YYYY HH:MMAM/PM"
    ),
  id: z.number(),
  isCanRenew: z.number(),
  password: z.string(),
  state: z.number(),
  upRate: z.number(),
  upRateUnit: z.number(),
  usageLimitType: z.number(),
  usageUnit: z.number(),
  usedDeviceNum: z.number(),
});

export type TVoucherResponse = z.infer<typeof VoucherSchema> & {
  message?: string;
};
