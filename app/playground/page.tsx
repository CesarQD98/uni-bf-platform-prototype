import { Separator } from "@/components/ui/separator";
import ComboboxInput from "@/components/ui/combobox-input";
import DemoForm from "./components/demo-form";

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

export default function PlaygroundPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Testing & learning shadcn UI components
      </h1>

      <Separator className="my-8" />

      <h2 className="text-2xl font-bold mb-4">Using ComboboxInput in a form</h2>
      <DemoForm />
    </main>
  );
}
