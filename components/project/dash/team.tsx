import { Database } from "@/utils/supabase/types";
import { PROJECT_ROLE_MAP } from "@/utils/project-role";
import { DashCard, DashCardProps, DashCardTitle } from "./card";
import MemberCard from "../member-card";

export type TeamCardProps = {
  members: {
    id: string;
    name: string;
    email?: string;
    roleName: string;
    color: string;
  }[];
} & DashCardProps;

function TeamCard({ members, ...props }: TeamCardProps) {
  return (
    <DashCard {...props}>
      <DashCardTitle>Team</DashCardTitle>
      <div className="space-y-2">
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </DashCard>
  );
}

TeamCard.FromMemberProjectRoles = function FromMemberProjectRoles({
  members,
  ...props
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
} & Omit<TeamCardProps, "members">) {
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
      {...props}
    />
  );
};

export { TeamCard };
