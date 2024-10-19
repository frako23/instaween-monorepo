import useRedirect from "../../hooks/useRedirect";
import { useUser } from "../../Context/UserContext";

const Profile = () => {
  const { user } = useUser();
  useRedirect('/home', !user);
  return <div className="text-white py-[80px]">Profile</div>;
};

export default Profile;
