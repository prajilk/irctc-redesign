"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDownCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex min-h-10 w-full items-center justify-between rounded-md bg-[#292C34] px-2 text-xs text-white">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-[#515151]" />
            {date ? format(date, "EEE, dd MMM") : <span>Pick a date</span>}
          </div>
          <ChevronDownCircle className="text-[#515151]" size={20} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-gray-800 p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="bg-[#181A1C] text-[#2475EE]"
          classNames={{
            cell: "bg-transparent",
            day_selected: "bg-[#2475EE] text-white",
            day_today: "bg-[#2475EE]/20",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
