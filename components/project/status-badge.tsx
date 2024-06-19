import { Database } from "@/utils/supabase/types";
import { Badge } from "../shadcn/ui/badge";

export type StatusBadgeProps = {
  status: Database["public"]["Enums"]["project_status"];
};

export default function StatusBadge(props: StatusBadgeProps) {
  return (
    <Badge
      className={
        props.status === "ACTIVE"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white"
      }
    >
      {props.status}
    </Badge>
  );
}
