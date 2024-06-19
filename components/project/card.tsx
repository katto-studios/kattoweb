import { ComponentProps } from "react";
import { Badge } from "../shadcn/ui/badge";
import { PROJECT_ROLE_MAP } from "@/utils/project-role";
import { Database } from "@/utils/supabase/types";
import Link from "next/link";

export type ProjectCardProps = ComponentProps<"div"> & {
  id: string;
  name?: string;
  roleInfo?: {
    color: string;
    displayName: string;
  };
  description?: string;
  isActive: boolean;
};

function ProjectCard({
  name,
  id,
  roleInfo,
  description,
  isActive,
}: ProjectCardProps) {
  return (
    <Link
      href={`/portal/project/${id}`}
      className="flex flex-col gap-2 border p-6 rounded-xl shadow-sm"
    >
      <h3 className="text-2xl">{name}</h3>
      <p className="text-lg text-slate-500">{description}</p>
      <div className="space-x-2">
        {roleInfo && (
          <Badge
            variant="secondary"
            style={{ backgroundColor: roleInfo.color }}
          >
            {roleInfo.displayName}
          </Badge>
        )}
        <Badge variant={isActive ? "secondary" : "outline"}>
          {isActive ? `Active` : `Inactive`}
        </Badge>
      </div>
    </Link>
  );
}

ProjectCard.fromProjectRole = ({
  project_id,
  project,
  role,
  is_active,
}: {
  project_id: string;
  project: {
    name: string;
    description: string;
  } | null;
  role: Database["public"]["Enums"]["role_title"] | null;
  is_active: boolean;
}) => {
  const roleInfo = role && PROJECT_ROLE_MAP[role];
  return (
    <ProjectCard
      key={project_id}
      id={project_id}
      name={project?.name}
      description={project?.description}
      roleInfo={roleInfo ?? undefined}
      isActive={is_active}
    />
  );
};

export { ProjectCard };
