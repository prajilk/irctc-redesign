import {
  ChevronDownCircle,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function ClassesDropdownMenu() {
  const [classes, setClasses] = useState("All Classes");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex min-h-10 w-full items-center justify-between rounded-md bg-[#292C34] px-2 text-xs text-white">
          {classes}
          <ChevronDownCircle className="text-[#515151]" size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-0 bg-[#292C34] text-white">
        <DropdownMenuLabel>Classes</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="hover:!bg-[#2475EE]/20 hover:!text-[#2475EE]"
            onClick={() => setClasses("All Classes")}
          >
            All Classes
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:!bg-[#2475EE]/20 hover:!text-[#2475EE]"
            onClick={() => setClasses("Sleeper")}
          >
            Sleeper
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:!bg-[#2475EE]/20 hover:!text-[#2475EE]"
            onClick={() => setClasses("First Class")}
          >
            First Class
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:!bg-[#2475EE]/20 hover:!text-[#2475EE]"
            onClick={() => setClasses("Economy")}
          >
            Economy
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
