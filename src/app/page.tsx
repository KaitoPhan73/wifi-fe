import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen rounded-none overflow-hidden mx-auto px-24">
      <div className="absolute inset-0">
        <Image
          src="/nvh-background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-20 z-10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className=" max-w-xl opacity-80 w-full text-center flex flex-col items-center">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className="p-2">Okkk</Button>
        </div>
      </div>
    </div>
  );
}
