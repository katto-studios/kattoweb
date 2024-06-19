import { Database } from "@/utils/supabase/types";
import { Avatar, AvatarFallback } from "../shadcn/ui/avatar";
import { PROJECT_ROLE_MAP } from "@/utils/project-role";

export type TeamCardProps = {
  members: {
    id: string;
    name: string;
    roleName: string;
    color: string;
  }[];
};

function TeamCard({ members }: TeamCardProps) {
  return (
    <div>
      <h2>Team</h2>
      {members.map((member) => (
        <Avatar key={member.id}>
          <AvatarFallback>
            {member.name
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

TeamCard.fromMemberProjectRoles = ({
  members,
}: {
  members: {
    user_id: string;
    role: Database["public"]["Enums"]["role_title"] | null;
  }[];
}) => {
  return (
    <TeamCard
      members={members.map(({ user_id, role }) => {
        const { displayName, color } = role
          ? PROJECT_ROLE_MAP[role]
          : {
              displayName: "Member",
              color: "gray",
            };
        return {
          id: user_id,
          name: user_id,
          roleName: displayName,
          color: color,
        };
      })}
    />
  );
};

export { TeamCard };
