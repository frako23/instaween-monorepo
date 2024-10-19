import { useUser } from "../../Context/UserContext";
import useRedirect from "../../hooks/useRedirect";

const Find = () => {
  const { user } = useUser();
  useRedirect('/home', !user);
  return <div className="text-white py-[80px]">FIND</div>;
};

export default Find;
