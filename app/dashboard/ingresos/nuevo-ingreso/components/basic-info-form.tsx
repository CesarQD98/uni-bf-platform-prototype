"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, CheckIcon, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";

const basicInfoFormSchema = z.object({
  year: z.string().max(4, {
    message: "Se requiere solo el año",
  }),
  number: z.number(),
  type: z.string(),
  entryDate: z.date(),
});

type Props = {
  typesList: {
    value: string;
    label: string;
  }[];
  lastEntryNumber: number;
};

export default function BasicInfoForm({ typesList, lastEntryNumber }: Props) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const basicInfoForm = useForm<z.output<typeof basicInfoFormSchema>>({
    resolver: zodResolver(basicInfoFormSchema),
    defaultValues: {
      year: new Date().toISOString().split("-")[0],
      number: lastEntryNumber,
      type: "",
      entryDate: new Date(),
    },
  });

  function onSubmit(data: z.infer<typeof basicInfoFormSchema>) {
    console.log({ data });
    basicInfoForm.reset();
  }

  return (
    <Form {...basicInfoForm}>
      <form
        className="space-y-4"
        onSubmit={basicInfoForm.handleSubmit(onSubmit)}
      >
        <FormField
          control={basicInfoForm.control}
          name="year"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Año</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  readOnly
                  disabled
                  aria-disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={basicInfoForm.control}
          name="number"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Número</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  readOnly
                  disabled
                  aria-disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={basicInfoForm.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tipo de ingreso</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? typesList.find((type) => type.value === field.value)
                            ?.label
                        : "Elija un tipo"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="[width:var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    {/* TODO */}
                    <CommandInput
                      placeholder="Búsqueda rápida..."
                      className="h-9"
                    />
                    {/* TODO */}
                    <CommandEmpty>Sin resultados.</CommandEmpty>
                    <CommandGroup>
                      <PopoverClose asChild>
                        <CommandList>
                          {/* TODO */}
                          {typesList.map((type) => (
                            <CommandItem
                              value={type.label}
                              key={type.value}
                              onSelect={() => {
                                basicInfoForm.setValue("type", type.value);
                              }}
                            >
                              {type.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  type.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandList>
                      </PopoverClose>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={basicInfoForm.control}
          name="entryDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha de ingreso</FormLabel>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full flex justify-between pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: es })
                      ) : (
                        <span>Elija una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <DatePicker
                    mode="single"
                    defaultMonth={field.value}
                    selected={field.value}
                    onSelect={(e) => {
                      field.onChange(e);
                      setIsCalendarOpen(false);
                    }}
                    fromYear={1990}
                    toYear={new Date().getFullYear()}
                    initialFocus
                    locale={es}
                    captionLayout="dropdown-buttons"
                    disabled={(date) => date > new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <Label htmlFor="file">Adjuntos</Label>
          <Input name="file" type="file" multiple required />
        </div>

        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
