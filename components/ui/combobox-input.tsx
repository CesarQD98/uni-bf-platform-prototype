"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type ComboboxInputProps = {
  form: UseFormReturn<any, any, undefined>;
  name: string;
  label: string;
  items: {
    label: string;
    value: string;
  }[];
  buttonPlaceholder?: string;
  searchBoxPlaceholder?: string;
  notFoundMessage?: string;
};

export default function ComboboxInput({
  form,
  name,
  items,
  label,
  notFoundMessage = "Sin resultados.",
  buttonPlaceholder = "Elija una opción...",
  searchBoxPlaceholder = "Búsqueda rápida...",
}: ComboboxInputProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "justify-between flex w-full",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    items.find((item) => item.value === value)?.label
                  ) : (
                    <>{buttonPlaceholder}</>
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="[width:var(--radix-popover-trigger-width)] p-0"
              align="start"
            >
              <Command>
                <CommandInput
                  placeholder={searchBoxPlaceholder}
                  className="h-9"
                />
                <CommandEmpty>{notFoundMessage}</CommandEmpty>
                <CommandGroup>
                  <CommandList>
                    {items.map((item) => (
                      <CommandItem
                        key={item.label}
                        value={item.value}
                        onSelect={(currentValue: string) => {
                          form.setValue(name, item.value);
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {item.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === item.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
