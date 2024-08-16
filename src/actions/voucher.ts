import { httpWifi } from "@/lib/http";
import { TVoucherResponse } from "@/schema/voucher.schema";
const voucherApi = {
  getVoucher: (accessToken: string, params: any) =>
    httpWifi.get<TVoucherResponse>("/vouchers", {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default voucherApi;
