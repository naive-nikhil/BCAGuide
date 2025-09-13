import Carousel from "../components/Carousel";
import Table from "../components/notifications/Table";

const Notifications = () => {
  return (
    <>
      <h1 className="text-xl text-gray-700">Notifications & Alerts</h1>
      <Carousel page={<Table />} />
    </>
  );
};

export default Notifications;
