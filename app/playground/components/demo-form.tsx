"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ComboboxInput from "@/components/ui/combobox-input";
import { Input } from "@/components/ui/input";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "sails.js",
    label: "Sails.js",
  },
  {
    value: "express.js",
    label: "Express.js",
  },
  {
    value: "meteor",
    label: "Meteor",
  },
  {
    value: "django",
    label: "Django",
  },
  {
    value: "laravel",
    label: "Laravel",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "ember.js",
    label: "Ember.js",
  },
  {
    value: "sapper",
    label: "Sapper",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "hugo",
    label: "Hugo",
  },
  {
    value: "gridsome",
    label: "Gridsome",
  },
  {
    value: "polymer",
    label: "Polymer",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
];

const demoFormSchema = z.object({
  username: z.string().min(2, {
    message: "You must enter a valid username...",
  }),
  framework: z.string().min(2, {
    message: "You must select one of the options...",
  }),
});

export default function DemoForm() {
  const demoForm = useForm<z.infer<typeof demoFormSchema>>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      username: "",
      framework: "",
    },
  });

  function onSubmit(values: z.infer<typeof demoFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...demoForm}>
      <form onSubmit={demoForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={demoForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su nombre de usuario" {...field} />
              </FormControl>
              <FormDescription>Nombre de usuario asignado.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ComboboxInput
          form={demoForm}
          name="framework"
          items={frameworks}
          label="Tipo"
          buttonPlaceholder="Seleccione el tipo"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
