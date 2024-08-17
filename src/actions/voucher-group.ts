import { httpWifi, httpServer } from "@/lib/http";

import {
  TVoucherGroupRequest,
  TVoucherGroupResponse,
  TVoucherGroupMsgResponse,
} from "@/schema/voucher-group.schema";
import { TTableResponse } from "@/types/Table";
const voucherGroupApi = {
  getVoucherGroups: (accessToken: string, params?: any) =>
    httpWifi.get<TTableResponse<TVoucherGroupResponse>>("/voucher-groups", {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  createVoucherGroup: (data: TVoucherGroupRequest) => {
    return httpWifi.post<TVoucherGroupMsgResponse>("/voucher-groups", data);
  },
};

export default voucherGroupApi;
