ALTER TABLE "workspace_members" DROP CONSTRAINT "workspace_members_part_of_workspace_workspace_name_fk";
--> statement-breakpoint
ALTER TABLE "workspace_members" ADD COLUMN "part_of_name" varchar;--> statement-breakpoint
ALTER TABLE "workspace_members" ADD CONSTRAINT "workspace_members_part_of_name_workspace_workspace_name_fk" FOREIGN KEY ("part_of_name") REFERENCES "public"."workspace"("workspace_name") ON DELETE no action ON UPDATE no action;