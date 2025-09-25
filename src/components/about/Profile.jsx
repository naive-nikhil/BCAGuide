import profilePic from "../../assets/profile.webp";

const Profile = () => {
  return (
    <div
      className={`w-20 lg:w-full lg:max-w-100 lg:h-full overflow-hidden items-center justify-center rounded-md absolute lg:relative hidden lg:flex`}
    >
      <img src={profilePic} className="object-cover max-w-512 h-full" alt="Profile Pic of the Website Developer" />
    </div>
  );
};

export default Profile;
