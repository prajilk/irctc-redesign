"use client";

import Image from "next/image";
import { ChevronDownCircle } from "lucide-react";
import { DatePicker } from "../ui/date-picker";
import { QuotaDropdownMenu } from "../dropdown/quota";
import { ClassesDropdownMenu } from "../dropdown/classes";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const SearchTrain = () => {
  return (
    <motion.div
      initial={{
        y: 200,
      }}
      whileInView={{
        y: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="absolute -bottom-2/3 flex flex-col items-center justify-center gap-5 px-5 md:-bottom-[15%] md:px-0"
    >
      <h1 className="text-2xl text-white md:text-5xl">
        Welcome to Indian Railways
      </h1>
      <div className="max-w-3xl space-y-5 rounded-2xl bg-[#181A1C] px-4 py-10 md:rounded-3xl md:px-16">
        <h3 className="text-[#C5C5C5]">Search for trains!</h3>
        <div className="space-y-6">
          {/* From - To */}
          <div className="flex flex-col items-center md:flex-row md:gap-5">
            <div className="flex w-full flex-1 flex-col gap-1">
              <label htmlFor="from" className="text-xs text-[#676767]">
                From
              </label>
              <div className="flex min-h-10 items-center rounded-md bg-[#292C34] px-2">
                <input
                  type="text"
                  id="from"
                  className="flex-1 bg-transparent text-white outline-none"
                />
                <ChevronDownCircle className="text-[#515151]" size={20} />
              </div>
            </div>
            <div className="relative mt-5 size-7">
              <Image
                src="/double-sided-arrow.png"
                alt="swap icon"
                fill
                priority
                className="h-auto w-auto cursor-pointer"
                sizes="(max-width: 768px) 48px, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex w-full flex-1 flex-col gap-1">
              <label htmlFor="to" className="text-xs text-[#676767]">
                To
              </label>
              <div className="flex min-h-10 items-center rounded-md bg-[#292C34] px-2">
                <input
                  type="text"
                  id="to"
                  className="flex-1 bg-transparent text-white outline-none"
                />
                <ChevronDownCircle className="text-[#515151]" size={20} />
              </div>
            </div>
          </div>

          {/* Departure, Return, Quota and classes */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="from" className="text-xs text-[#676767]">
                Departure date
              </label>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="from" className="text-xs text-[#676767]">
                Return date
              </label>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="from" className="text-xs text-[#676767]">
                Quota
              </label>
              <QuotaDropdownMenu />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="from" className="text-xs text-[#676767]">
                Classes
              </label>
              <ClassesDropdownMenu />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between">
            <span className="block text-xs text-[#676767] md:inline">
              Filters:
            </span>
            <ul className="flex flex-wrap items-center gap-3 text-gray-300">
              <li className="rounded-full bg-[#292C34] px-2 py-1 text-[.6rem]">
                Flexible with date
              </li>
              <li className="rounded-full bg-[#292C34] px-2 py-1 text-[.6rem]">
                Disabilities concession
              </li>
              <li className="rounded-full bg-[#292C34] px-2 py-1 text-[.6rem]">
                Connecting journey
              </li>
              <li className="rounded-full bg-[#292C34] px-2 py-1 text-[.6rem]">
                Connecting journey
              </li>
            </ul>
          </div>

          {/* Search trains */}
          <div className="flex items-center justify-between">
            <Button
              className="rounded-lg border bg-transparent text-xs"
              size={"sm"}
            >
              Try Ask Disha 2.0
            </Button>
            <Button className="rounded-lg bg-[#2475EE] text-xs duration-300 hover:bg-[#2475EE]/70">
              Search trains
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchTrain;
