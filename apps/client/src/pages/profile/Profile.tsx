import useRedirect from "../../hooks/useRedirect";
import { useUser } from "../../Context/UserContext";
import { SpookyLoader } from "../../components/SpookyLoader";

const Profile = () => {
  const { user } = useUser();
  useRedirect('/home', !user);
  return (
    <>
      <SpookyLoader />
      <div className="text-white py-[80px]">Profile</div>;
    </>
  );
};

export default Profile;
