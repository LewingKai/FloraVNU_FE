import { redirect } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

const AdminPage = () => {
  redirect(PATH_NAME.ADMINACCOUNTS);
};

export default AdminPage;
