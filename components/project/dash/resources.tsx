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

export type ResourcesCardProps = {
  resources: Record<string, string>;
} & DashCardProps;

export default function ResourcesCard({
  resources,
  ...props
}: ResourcesCardProps) {
  return (
    <DashCard {...props}>
      <DashCardTitle>Resources</DashCardTitle>

      <Table>
        <TableCaption>A list of resources for this project.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Key</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(resources).map(([name, url]) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell className="text-right font-mono">{url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashCard>
  );
}
