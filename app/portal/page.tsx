import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import { ProjectCard } from "@/components/project/card";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: myProjectRoles, error: roleError } = await supabase
    .from("project_role")
    .select(
      `
		project_id,
		project(
			name
		),
		role,
		is_active
	`
    )
    .eq("user_id", data.user.id);

  if (roleError) {
    console.error(roleError);
  }

  const noProjects = !myProjectRoles || myProjectRoles.length <= 0;

  return (
    <div className="min-h-[70vh] container mx-auto p-8 space-y-8">
      <h1 className="text-5xl font-light">Welcome back, {data.user.email}</h1>
      {noProjects ? (
        <div>
          <h1 className="text-slate-500 text-3xl">You have no projects. </h1>
          <p className="text-slate-600 text-lg font-medium">
            If your project is not reflected here, please contact
            ryan@katto.studio
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3">
          {myProjectRoles.map(ProjectCard.fromProjectRole)}
        </div>
      )}
    </div>
  );
}
