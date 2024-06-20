import { redirect } from "next/navigation";
import { createAuthenticatedClient } from "../../utils/supabase/server";
import { ProjectCard } from "@/components/project/card";

export default async function PrivatePage() {
  const { userData, supabase } = await createAuthenticatedClient();

  const { data: myProjectRoles, error: roleError } = await supabase
    .from("project_role")
    .select(
      `
		project_id,
		project(
			name,
			description
		),
		role,
		is_active
	`
    )
    .eq("user_id", userData.user.id);

  if (roleError) {
    console.error(roleError);
  }

  const noProjects = !myProjectRoles || myProjectRoles.length <= 0;

  return (
    <div className="page-container space-y-8">
      <h1 className="text-5xl font-light">
        Welcome back, {userData.user.email}
      </h1>
      {noProjects ? (
        <div>
          <h1 className="text-slate-500 text-3xl">You have no projects. </h1>
          <p className="text-slate-600 text-lg font-medium">
            If your project is not reflected here, please contact
            ryan@katto.studio
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4">
          {myProjectRoles.map(ProjectCard.fromProjectRole)}
        </div>
      )}
    </div>
  );
}
