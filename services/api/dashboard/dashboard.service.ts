import vLiteApi from "@/services/vLiteBaseUrl";

const getDashboard = () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return vLiteApi.get(`/dashboard/`, options);
};

const DashboardServices = {
  getDashboard,
};

export default DashboardServices;
