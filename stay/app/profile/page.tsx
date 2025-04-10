/*import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/shared/profile-form";

export default async function ProfilePage() {
    const session = await getUserSession();

    console.log("Session:", session);

                if (!session) {
                    return redirect("/not-auth");
                }

    const userId = Number(session.id);
    if (isNaN(userId)) {
        console.error("Invalid user ID:", session.id);
        return redirect("/not-auth");
    }

    const user = await prisma.user.findFirst({
        where: {
            id: userId, 
        },
    });

                if (!user) {
                    return redirect("/not-auth");
                }

    return <ProfileForm data={user} />;
}*/

import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/lib/get-user-session";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/shared/profile-form";

export default async function ProfilePage() {
    const session = await getUserSession();

    console.log("Session:", session);

    /*if (!session) {
        return redirect("/not-auth");
    }*/

    const userId = Number(session.id);
    if (isNaN(userId)) {
        console.error("Invalid user ID:", session.id);
        return redirect("/not-auth");
    }

    const user = await prisma.user.findFirst({
        where: {
            id: userId, 
        },
    });

    if (!user) {
        return redirect("/not-auth");
    }

    console.log("Session after registration:", session);
    console.log("User ID from session:", userId);
    console.log("User fetched from DB:", user);

    return <ProfileForm data={user} />;
}