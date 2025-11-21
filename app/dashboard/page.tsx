import DashboardClient from "@/components/Dashboard/Dashboardform";
import { getAuthUser } from "@/helpers/utils/getAuthUser";

export default async function DashboardPage() {
    const user = await getAuthUser();
    return <DashboardClient user={user} />;
}
