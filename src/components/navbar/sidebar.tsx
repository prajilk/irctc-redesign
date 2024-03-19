import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="border-none bg-[#181A1C] text-white">
        <SheetHeader className="text-left">
          <SheetTitle className="mb-4 text-[#2475EE]">IRCTC</SheetTitle>
          <ul className="ms-3 space-y-3">
            <li>Train</li>
            <li>Food</li>
            <li>Ask Disha</li>
            <li>Rooms</li>
            <li>Other Services</li>
            <li>Contact us</li>
            <li>More</li>
          </ul>
          <div className="ms-3 flex gap-4 pt-7 md:hidden">
            <button>Register</button>
            <Button className="bg-[#2475EE] hover:bg-[#2475EE]/70">
              Login
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
