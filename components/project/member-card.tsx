import { buildGravatarUrl } from "@/utils/gravatar";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { ComponentProps } from "react";
import { Badge } from "../shadcn/ui/badge";

export type MemberCardProps = {
  name: string;
  email?: string;
  roleName: string;
  color: string;
} & ComponentProps<"div">;

export default function MemberCard({
  name,
  email,
  roleName,
  color,
  ...props
}: MemberCardProps) {
  return (
    <div
      className="flex flex-row justify-between items-center p-2 border rounded-xl gap-2"
      {...props}
    >
      <div className="flex flex-row gap-2">
        <Avatar>
          {email && <AvatarImage src={buildGravatarUrl(email).href} />}
          <AvatarFallback>{name[0].toLocaleUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs font-medium">{email}</p>
        </div>
      </div>
      <Badge variant="secondary" style={{ backgroundColor: color }}>
        {roleName}
      </Badge>
    </div>
  );
}
