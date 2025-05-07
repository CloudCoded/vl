import vLiteApi from "@/services/vLiteBaseUrl";
import { VLiteUser, Position } from "@/types";
import { getAllPositions } from "@/utils";

const signInUser = (data: { email: string; password: string }) => {
  return vLiteApi.post("/login", data);
};

const getPrivileges = (user: VLiteUser | null) => {
  const checkPermission = (privileges: Position[]): boolean => {
    return privileges.includes((user?.class as string)?.toLowerCase());
  };

  const allPositions: Position[] = getAllPositions().map((p) => p.id);

  return {
    viewDashboard: checkPermission([
      "customer_care",
      "sales_lead",
      "sales_rep",
      "marketing",
      "customer_success",
      "sales_admin",
    ]),
    viewActivityFeed: checkPermission([
      "cceo",
      "sales_lead",
      "sales_rep",
      "marketing",
      "customer_success",
    ]),
    activeHospitals: checkPermission(["customer_success"]),
    exodus: checkPermission(["sales_rep"]),
    exodusList: checkPermission(["sales_rep"]),
    singleExodus: checkPermission(["sales_rep"]),
    singleExodusOrder: checkPermission(["sales_rep"]),
    exodusActivities: checkPermission(["sales_rep"]),
    exodusComplains: checkPermission(["sales_rep"]),
    exodusContact: checkPermission(["sales_rep"]),
    exodusCall: checkPermission(["sales_rep"]),
    exodusSendDrip: checkPermission(["sales_rep"]),
    exodusSendADrip: checkPermission(["sales_rep"]),
    exodusLogAContact: checkPermission(["sales_rep"]),
    exodusSendNote: checkPermission(["sales_rep"]),
    reviewActiveSchedule: checkPermission(["sales_rep"]),
    allHospitals: checkPermission(["cceo", "sales_lead", "customer_success"]),
    nerveUsage: checkPermission(["cceo", "sales_rep", "sales_admin"]),
    purchasingOrder: checkPermission(["sales_rep", "sales_lead"]),
    myHospitals: checkPermission([
      "cceo",
      "sales_lead",
      "sales_rep",
      "sales_admin",
    ]),
    salesAppointments: checkPermission(["sales_rep"]),
    viewHospitals: checkPermission(["sales_lead", "sales_rep", "cceo"]),
    viewHospitalScore: checkPermission(["customer_success"]),
    viewRequests: checkPermission(["sales_rep"]),
    viewAppointments: checkPermission(["marketing", "sales_admin", "cceo"]),
    tools: checkPermission(["marketing"]),
    drip: checkPermission(["sales_lead"]),
    maintenance: checkPermission(["customer_success"]),
    assignActive: checkPermission(["sales_rep"]),
    viewDrip: checkPermission(["marketing"]),
    events: checkPermission(["marketing"]),
    story: checkPermission(["marketing"]),
    dazzle: checkPermission(["marketing"]),
    createHospital: checkPermission(allPositions),
    editProspect: checkPermission([
      "sales_admin",
      "customer_success",
      "fulfilment_officer",
      "cceo",
    ]),
    validateProspect: checkPermission([
      "sales_admin",
      "customer_success",
      "fulfilment_officer",
    ]),
    viewProspected: checkPermission([
      "sales_admin",
      "customer_success",
      "fulfilment_officer",
      "cceo",
    ]),
    viewProspectsPage: checkPermission([
      "sales_admin",
      "customer_success",
      "fulfilment_officer",
      "cceo",
    ]),
    nerveClaims: checkPermission([
      "sales_admin",
      "cceo",
      // "sales_rep",
      // "customer_success",
      // "fulfilment_officer",
    ]),
    viewUnprospected: checkPermission([
      "sales_admin",
      "customer_success",
      "fulfilment_officer",
      "cceo",
    ]),
    viewUnassigned: checkPermission(["sales_admin"]),
    pitch: checkPermission(["sales_rep", "sales_admin"]),
    onboard: checkPermission([
      "customer_success",
      "fulfilment_officer",
      "sales_admin",
    ]),
    setTargets: checkPermission(["cceo", "sales_admin"]),
    viewMessages: checkPermission(allPositions),
    viewOnboard: checkPermission(["sales_rep", "sales_admin"]),
    viewPipelines: checkPermission(allPositions),
    addComplaint: checkPermission(["customer_success"]),
    resolveComplaint: checkPermission(["customer_success"]),
    viewComplaints: checkPermission([
      "sales_rep",
      "fulfilment_officer",
      "customer_success",
      "cceo",
      "sales_lead",
    ]),
    viewSalesStats: checkPermission(["sales_lead"]),
    createAgent: checkPermission(["cceo", "sales_admin"]),
    deleteAgent: checkPermission(["cceo", "sales_admin"]),
    viewLeadArena: checkPermission(["gceo", "cceo", "sales_admin"]),
    viewAgents: checkPermission(["gceo", "cceo", "sales_admin"]),
    viewHibernated: checkPermission(allPositions),
    viewUnsuccessfulPitches: checkPermission(["gceo", "cceo", "sales_lead"]),
    viewByState: checkPermission(["cceo"]),
    viewRevenueMTD: checkPermission(["gceo", "cceo", "sales_lead"]),
    viewCityRevenue: checkPermission(["sales_lead"]),
    viewCountryRevenue: checkPermission(["cceo"]),
    viewAllCountriesRevenue: checkPermission(["gceo"]),
    viewTargetData: checkPermission(allPositions),
    addFacility: checkPermission(["gceo", "cceo"]),
    viewFacilities: checkPermission(["gceo", "cceo", "sales_admin"]),
    addProductType: checkPermission(["gceo", "cceo"]),
    viewProductTypes: checkPermission(["gceo", "cceo", "sales_admin"]),
    viewLeaderBoard: checkPermission([
      "gceo",
      "cceo",
      "sales_lead",
      "sales_admin",
    ]),
    viewAllScoresPage: checkPermission([
      "cceo",
      "sales_lead",
      "sales_rep",
      "customer_success",
      "sales_admin",
    ]),
    viewMyScoreOnly: checkPermission(["sales_rep", "sales_lead"]),
    KeyAccountCustomerAcquisition: checkPermission(["sales_rep", "sales_lead"]),
    viewLogistic: checkPermission(["sales_rep", "sales_admin", "cceo", "gceo"]),
  };
};

const AuthService = {
  signInUser,
  getPrivileges,
};

export default AuthService;
