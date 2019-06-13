import React from "react";

import PatientDemographics from "../PatientDemographics";
import DosageWarning from "../DosageWarning";
import DrugMonitoringTabs from "../DrugMonitoringTabs";

function Dashboard() {
  return (
    <div>
      <PatientDemographics />
      <DosageWarning />
      <DrugMonitoringTabs />
    </div>
  );
}

export default Dashboard;
