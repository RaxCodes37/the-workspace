ALTER TABLE "workspace_members" DROP CONSTRAINT "workspace_members_member_name_user_id_fk";
--> statement-breakpoint
ALTER TABLE "workspace_members" ADD COLUMN "member_id" text;--> statement-breakpoint
ALTER TABLE "workspace_members" ADD CONSTRAINT "workspace_members_member_id_user_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;