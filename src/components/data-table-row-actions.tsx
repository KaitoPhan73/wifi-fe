"use client";

import { MdOutlineVisibility } from "react-icons/md";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// import { VoucherGroupResponseSchema } from "@/schema/voucher-group.schema";

interface DataTableRowActionsProps<TData extends { id: any }> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends { id: any }>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const task = VoucherGroupResponseSchema.parse(row.original);
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={() => router.push(`/admin/voucher-groups/${row.original.id}`)}
    >
      <MdOutlineVisibility className="flex h-8 w-8 p-0" />
    </Button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant="ghost"
    //       className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
    //     >
    //       <DotsHorizontalIcon className="h-4 w-4" />
    //       <span className="sr-only">Open menu</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="w-[160px]">
    //     <DropdownMenuItem>Edit</DropdownMenuItem>
    //     <DropdownMenuItem>Make a copy</DropdownMenuItem>
    //     <DropdownMenuItem>Favorite</DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuSub>
    //       <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
    //       <DropdownMenuSubContent>
    //         <DropdownMenuRadioGroup value={task.name}>
    //           {labels.map((label) => (
    //             <DropdownMenuRadioItem key={label.value} value={label.value}>
    //               {label.label}
    //             </DropdownMenuRadioItem>
    //           ))}
    //         </DropdownMenuRadioGroup>
    //       </DropdownMenuSubContent>
    //     </DropdownMenuSub>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>
    //       Delete
    //       <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
