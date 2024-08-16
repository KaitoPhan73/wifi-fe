"use server";
import { Metadata } from "next";

import { DataTable } from "@/components/data-table";
import { columns } from "./components/columns";
import CardVoucher from "./components/card";
import voucherGroupApi from "@/actions/voucher-group";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { httpWifi } from "@/lib/http";
import { TVoucherGroupMsgResponse } from "@/schema/voucher-group.schema";
import { revalidateTag } from "next/cache";
import CardReports from "./components/card-report";

const deleteRangeVoucherGroup = async (ids: any[]) => {
  "use server";
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log("ids", ids);
  const result = httpWifi.delete<TVoucherGroupMsgResponse>(
    "/voucher-groups",
    {
      groupIds: ids,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  revalidateTag("/admin/voucher-groups");

  return result;
};

export default async function GroupVouchers() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await voucherGroupApi.getVoucherGroups(accessToken!);
  return (
    <>
      <div className="flex h-full flex-1 flex-col">
        <CardReports data={response.payload} />
        <DataTable
          data={response.payload.result}
          columns={columns}
          deleteAction={deleteRangeVoucherGroup}
        />
      </div>
    </>
  );
}
