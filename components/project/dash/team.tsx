import { Database } from "@/utils/supabase/types";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { PROJECT_ROLE_MAP } from "@/utils/project-role";
import { DashCard, DashCardTitle } from "./card";
import { Badge } from "@/components/shadcn/ui/badge";
import { buildGravatarUrl } from "@/utils/gravatar";

export type TeamCardProps = {
  members: {
    id: string;
    name: string;
    email?: string;
    roleName: string;
    color: string;
  }[];
};

function TeamCard({ members }: TeamCardProps) {
  return (
    <DashCard>
      <DashCardTitle>Team</DashCardTitle>
      <div className="space-y-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-row justify-between items-center p-2 border rounded-xl gap-2"
          >
            <div className="flex flex-row gap-2">
              <Avatar>
                {member.email && (
                  <AvatarImage src={buildGravatarUrl(member.email).href} />
                )}
                <AvatarFallback>
                  {member.name[0].toLocaleUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{member.name}</p>

                <p className="text-xs font-medium">{member.email}</p>
              </div>
            </div>
            <Badge
              variant="secondary"
              style={{ backgroundColor: member.color }}
            >
              {member.roleName}
            </Badge>
          </div>
        ))}
      </div>
    </DashCard>
  );
}

TeamCard.fromMemberProjectRoles = ({
  members,
}: {
  members: {
    user_id: string;
    role: Database["public"]["Enums"]["role_title"] | null;
    profile?: {
      display_name: string | null;
      org_name: string | null;
      email: string | null;
    };
  }[];
}) => {
  return (
    <TeamCard
      members={members.map(({ user_id, role, profile }) => {
        const displayName = profile?.display_name ?? user_id;
        const displayNameWithOrg =
          displayName + (profile?.org_name ? ` (${profile.org_name})` : "");
        const { displayName: roleName, color } = role
          ? PROJECT_ROLE_MAP[role]
          : {
              displayName: "Member",
              color: "gray",
            };
        return {
          id: user_id,
          name: displayNameWithOrg,
          email: profile?.email ?? undefined,
          roleName: roleName,
          color: color,
        };
      })}
    />
  );
};

export { TeamCard };
