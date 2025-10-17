import { redirect } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

const AccountPage = () => {
  redirect(PATH_NAME.PROFILE);
};

export default AccountPage;
