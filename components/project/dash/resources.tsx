"use client";

import { Button } from "@/components/shadcn/ui/button";
import { DashCard, DashCardProps, DashCardTitle } from "./card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { Copy, EllipsisVertical, Plus, Trash2 } from "lucide-react";
import Input from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export type ResourcesCardProps = {
  projectId: string;
  resources: Record<string, string>;
} & DashCardProps;

const resourceRowSchema = z.object({
  key: z.string(),
  value: z.string(),
});

type ResourceRow = z.infer<typeof resourceRowSchema>;

export default function ResourcesCard({
  projectId,
  resources,
  ...props
}: ResourcesCardProps) {
  const router = useRouter();
  const supabase = createClient();
  const resolver = zodResolver(
    z.object({
      key: z.string().min(3),
      value: z.string().min(3),
    })
  );

  const form = useForm<ResourceRow>({ resolver });

  const onSubmit = async ({ key, value }: { key: string; value?: string }) => {
    toast("Updating resources table... ⬆️");
    await supabase
      .from("project")
      .update({ resources: { ...resources, [key]: value } })
      .eq("project_id", projectId);
    form.reset({ key: "", value: "" });
    router.refresh();
    toast("Resources table updated 🚀");
  };

  return (
    <DashCard {...props}>
      <DashCardTitle>Resources</DashCardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Table>
            <TableCaption>A list of resources for this project.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Key</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="text-right w-[30px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(resources).map(([name, url]) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell className="text-right font-mono overflow-x-clip">
                    <Input className="w-full" value={url} />
                  </TableCell>
                  <TableCell className="text-right flex flex-row">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <EllipsisVertical />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={(e) => {
                            navigator.clipboard.writeText(url);
                            toast("Copied to clipboard! 📋");
                          }}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          <span>Copy</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={(e) => {
                            onSubmit({ key: name, value: undefined });
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <FormField
                    control={form.control}
                    name="key"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Key" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Value"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Button type="submit" size="icon">
                    <Plus />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </Form>
    </DashCard>
  );
}
