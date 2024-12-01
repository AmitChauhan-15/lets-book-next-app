import ProfileForm from "@/app/_components/ProfileForm";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

async function Profile() {
  const session = await auth();
  let userDetails = await getUser(session._id || "");
  userDetails = { ...(userDetails || {}), ...(userDetails.address || {}) };

  return <ProfileForm userDetail={userDetails} />;
}

export default Profile;
