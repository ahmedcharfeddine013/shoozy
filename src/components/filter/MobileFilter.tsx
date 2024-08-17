import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { filterProps } from "@/Types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface MobileFilterProps {
  handleChange: (value: string) => void;
}

const MobileFilter = ({ handleChange }: MobileFilterProps) => {
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="sneakers">Sneakers</SelectItem>
        <SelectItem value="flats">Flats</SelectItem>
        <SelectItem value="sandals">Sandals</SelectItem>
        <SelectItem value="heels">Heels</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MobileFilter;
