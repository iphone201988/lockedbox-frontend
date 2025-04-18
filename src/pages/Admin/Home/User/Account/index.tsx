import { useParams } from "react-router-dom";
import IfNoUserSelected from "../../../components/no-user-selected";
import UserAccountDetails from "../../../components/user-account-details";

const AdminAccount = () => {
  const { id } = useParams();

  return <>{id ? <UserAccountDetails /> : <IfNoUserSelected />}</>;
};

export default AdminAccount;
