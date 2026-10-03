import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from "../../public-api.ts";

type ThemeName = "light" | "dark" | "ocean";

interface CatalogSection {
  id: string;
  name: string;
  description: string;
  tags: string[];
  content: ReactNode;
}

const oceanTheme = {
  "--background": "198 50% 97%",
  "--foreground": "202 70% 14%",
  "--muted": "194 34% 90%",
  "--muted-foreground": "198 25% 38%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "202 70% 14%",
  "--border": "193 32% 80%",
  "--input": "193 32% 80%",
  "--card": "0 0% 100%",
  "--card-foreground": "202 70% 14%",
  "--primary": "190 80% 30%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "185 35% 88%",
  "--secondary-foreground": "198 70% 20%",
  "--accent": "174 42% 86%",
  "--accent-foreground": "180 70% 18%",
  "--destructive": "0 70% 48%",
  "--destructive-foreground": "0 0% 100%",
  "--ring": "190 80% 38%",
} as CSSProperties;

const CodeSample = ({ children }: { children: string }) => (
  <pre className="overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 text-xs leading-6 text-foreground">
    <code>{children}</code>
  </pre>
);

const Preview = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`flex min-h-32 flex-wrap items-center gap-3 rounded-xl border border-dashed border-border bg-background p-5 ${className}`}
  >
    {children}
  </div>
);

const ComponentSection = ({
  id,
  name,
  description,
  tags,
  children,
}: CatalogSection & { children: ReactNode }) => (
  <section
    id={id}
    className="scroll-mt-6 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm"
  >
    <div className="border-b border-border px-6 py-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
    <div className="space-y-6 p-6">{children}</div>
  </section>
);

export const ComponentPlayground = () => {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<ThemeName>("light");
  const [compact, setCompact] = useState(false);
  const [boldPressed, setBoldPressed] = useState(false);

  const sections: CatalogSection[] = [
    {
      id: "button",
      name: "Button",
      description:
        "Action control with six visual variants, four sizes, disabled state, and polymorphic composition.",
      tags: ["action", "variants", "asChild"],
      content: (
        <>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Variants</h3>
            <Preview>
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
            </Preview>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Sizes</h3>
            <Preview>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add item">
                +
              </Button>
            </Preview>
          </div>
          <CodeSample>{`<Button variant="outline" size="sm">Review</Button>
<Button asChild><a href="/docs">Open docs</a></Button>`}</CodeSample>
        </>
      ),
    },
    {
      id: "badge",
      name: "Badge",
      description:
        "Compact status and metadata labels across every available semantic treatment.",
      tags: ["status", "metadata", "variants"],
      content: (
        <>
          <Preview>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </Preview>
          <CodeSample>{`<Badge variant="secondary">In review</Badge>`}</CodeSample>
        </>
      ),
    },
    {
      id: "card",
      name: "Card",
      description:
        "Composable surface using header, title, description, content, and footer primitives.",
      tags: ["layout", "composition", "surface"],
      content: (
        <>
          <Preview className="items-stretch">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary">Team plan</Badge>
                  <span className="text-sm text-muted-foreground">$24/mo</span>
                </div>
                <CardTitle>Build with confidence</CardTitle>
                <CardDescription>
                  A complete card composition using every exported card
                  primitive.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-4 text-sm">
                  Includes reusable components, themes, and typed variants.
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1">Continue</Button>
                <Button variant="outline">Details</Button>
              </CardFooter>
            </Card>
          </Preview>
          <CodeSample>{`<Card>
  <CardHeader>
    <CardTitle>Project</CardTitle>
    <CardDescription>Project details</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter><Button>Save</Button></CardFooter>
</Card>`}</CodeSample>
        </>
      ),
    },
    {
      id: "form-controls",
      name: "Label, Input & Textarea",
      description:
        "Accessible form primitives shown in a realistic profile editing composition.",
      tags: ["form", "input", "composition"],
      content: (
        <>
          <Preview className="items-start">
            <form
              className="grid w-full max-w-xl gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-2">
                <Label htmlFor="playground-name">Display name</Label>
                <Input
                  id="playground-name"
                  defaultValue="Alex Morgan"
                  placeholder="Enter a name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="playground-email">Email</Label>
                <Input
                  id="playground-email"
                  type="email"
                  placeholder="alex@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="playground-notes">Notes</Label>
                <Textarea
                  id="playground-notes"
                  placeholder="Add context for your team..."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="playground-disabled">Disabled field</Label>
                <Input
                  id="playground-disabled"
                  value="Read only"
                  disabled
                  readOnly
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Save profile</Button>
                <Button type="reset" variant="outline">
                  Reset
                </Button>
              </div>
            </form>
          </Preview>
          <CodeSample>{`<Label htmlFor="message">Message</Label>
<Textarea id="message" placeholder="Write a message..." />
<Button type="submit">Send</Button>`}</CodeSample>
        </>
      ),
    },
    {
      id: "toggle",
      name: "Toggle",
      description:
        "Pressed-state control with two variants and three sizes. The first example is fully interactive.",
      tags: ["interactive", "state", "variants"],
      content: (
        <>
          <Preview>
            <Toggle
              pressed={boldPressed}
              onPressedChange={setBoldPressed}
              aria-label="Toggle bold"
            >
              <strong>B</strong>
              {boldPressed ? "Bold on" : "Bold off"}
            </Toggle>
            <Toggle variant="outline">Outline</Toggle>
            <Toggle size="sm">Small</Toggle>
            <Toggle size="lg">Large</Toggle>
            <Toggle disabled>Disabled</Toggle>
          </Preview>
          <CodeSample>{`const [pressed, setPressed] = useState(false);

<Toggle pressed={pressed} onPressedChange={setPressed}>
  Bold
</Toggle>`}</CodeSample>
        </>
      ),
    },
    {
      id: "toggle-group",
      name: "Toggle Group",
      description:
        "Single and multiple selection compositions with inherited variant and size settings.",
      tags: ["interactive", "selection", "composition"],
      content: (
        <>
          <Preview className="flex-col items-start">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Single selection
              </p>
              <ToggleGroup
                type="single"
                defaultValue="center"
                variant="outline"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Multiple selection
              </p>
              <ToggleGroup
                type="multiple"
                defaultValue={["bold"]}
                size="sm"
                aria-label="Text formatting"
              >
                <ToggleGroupItem value="bold">
                  <strong>B</strong>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <em>I</em>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <span className="underline">U</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Preview>
          <CodeSample>{`<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="list">List</ToggleGroupItem>
  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
</ToggleGroup>`}</CodeSample>
        </>
      ),
    },
    {
      id: "table",
      name: "Table",
      description:
        "Responsive data display using caption, header, body, footer, row, head, and cell primitives.",
      tags: ["data", "responsive", "composition"],
      content: (
        <>
          <Preview className="block">
            <Table>
              <TableCaption>Recent package downloads</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Package</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead className="text-right">Downloads</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Core UI</TableCell>
                  <TableCell>
                    <Badge>Stable</Badge>
                  </TableCell>
                  <TableCell>1.0.0</TableCell>
                  <TableCell className="text-right">12,480</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Theme tokens</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Preview</Badge>
                  </TableCell>
                  <TableCell>0.8.2</TableCell>
                  <TableCell className="text-right">8,310</TableCell>
                </TableRow>
                <TableRow data-state="selected">
                  <TableCell className="font-medium">Utilities</TableCell>
                  <TableCell>
                    <Badge variant="outline">Selected</Badge>
                  </TableCell>
                  <TableCell>1.2.1</TableCell>
                  <TableCell className="text-right">15,902</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total downloads</TableCell>
                  <TableCell className="text-right">36,692</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </Preview>
          <CodeSample>{`<Table>
  <TableHeader>
    <TableRow><TableHead>Name</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Example</TableCell></TableRow>
  </TableBody>
</Table>`}</CodeSample>
        </>
      ),
    },
    {
      id: "composition",
      name: "Composition Pattern",
      description:
        "A complete settings panel demonstrating how the public primitives work together.",
      tags: ["recipe", "form", "settings"],
      content: (
        <>
          <Preview className="items-stretch">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <CardTitle>Notification settings</CardTitle>
                    <CardDescription className="mt-1">
                      Choose how your team receives updates.
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Auto-saved</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="composition-email">Notification email</Label>
                  <Input
                    id="composition-email"
                    type="email"
                    defaultValue="team@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Digest frequency</Label>
                  <ToggleGroup
                    type="single"
                    defaultValue="weekly"
                    variant="outline"
                    className="justify-start"
                  >
                    <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
                    <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
                    <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="composition-summary">
                    Summary instructions
                  </Label>
                  <Textarea
                    id="composition-summary"
                    defaultValue="Highlight urgent changes and upcoming deadlines."
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="ghost">Cancel</Button>
                <Button>Save settings</Button>
              </CardFooter>
            </Card>
          </Preview>
          <CodeSample>{`<Card>
  <CardHeader><CardTitle>Settings</CardTitle></CardHeader>
  <CardContent>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </CardContent>
  <CardFooter><Button>Save</Button></CardFooter>
</Card>`}</CodeSample>
        </>
      ),
    },
  ];

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return sections;
    }

    return sections.filter((section) =>
      [section.name, section.description, ...section.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const themeStyle = theme === "ocean" ? oceanTheme : undefined;
  const themeClass = theme === "dark" ? "dark" : "";

  return (
    <div
      className={`${themeClass} min-h-screen bg-background text-foreground`}
      style={themeStyle}
    >
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">UI catalog</Badge>
              <span className="text-xs text-muted-foreground">
                {sections.length} groups
              </span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">
              Component Playground
            </h1>
          </div>

          <div className="flex flex-1 flex-col gap-3 sm:flex-row lg:max-w-3xl lg:justify-end">
            <div className="relative flex-1 lg:max-w-sm">
              <Label htmlFor="component-search" className="sr-only">
                Search components
              </Label>
              <Input
                id="component-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search components, tags, patterns..."
                className="pr-16"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {filteredSections.length}
              </kbd>
            </div>

            <div
              className="flex rounded-lg border border-border bg-muted p-1"
              aria-label="Preview theme"
            >
              {(["light", "dark", "ocean"] as ThemeName[]).map(
                (themeOption) => (
                  <button
                    key={themeOption}
                    type="button"
                    onClick={() => setTheme(themeOption)}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                      theme === themeOption
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={theme === themeOption}
                  >
                    {themeOption}
                  </button>
                ),
              )}
            </div>

            <Button
              variant="outline"
              onClick={() => setCompact((current) => !current)}
              aria-pressed={compact}
            >
              {compact ? "Comfortable" : "Compact"}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 py-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <nav
            className="sticky top-32 space-y-1"
            aria-label="Component catalog"
          >
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Components
            </p>
            {filteredSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {section.name}
              </a>
            ))}
            <div className="mt-6 rounded-lg border border-border bg-card p-3 text-xs leading-5 text-muted-foreground">
              Theme controls update every preview through the package CSS
              variables.
            </div>
          </nav>
        </aside>

        <main className={compact ? "space-y-3" : "space-y-8"}>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <p className="text-sm font-medium text-primary">
              Public API reference
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Explore every primitive in one place
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              Search by component or use case, switch themes to validate design
              tokens, and interact with stateful examples. Each group includes a
              copy-ready composition pattern.
            </p>
          </div>

          {filteredSections.map((section) => (
            <ComponentSection key={section.id} {...section}>
              {section.content}
            </ComponentSection>
          ))}

          {filteredSections.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border py-20 text-center">
              <p className="text-lg font-semibold">No components found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a component name such as button, table, form, or toggle.
              </p>
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => setQuery("")}
              >
                Clear search
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
