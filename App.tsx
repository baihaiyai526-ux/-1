import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { HealthData } from './components/HealthData';
import { MedicationManager } from './components/MedicationManager';
import { TCMConstitution } from './components/TCMConstitution';
import { DoctorConsult } from './components/DoctorConsult';
import { Settings } from './components/Settings';
import { View } from './types';
import { MOCK_USER, MOCK_RECORDS, MOCK_MEDS, MOCK_DOCTORS } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);
  const [user] = useState(MOCK_USER);
  const [records] = useState(MOCK_RECORDS);
  const [medications] = useState(MOCK_MEDS);
  const [doctors] = useState(MOCK_DOCTORS);

  const renderContent = () => {
    switch (activeView) {
      case View.DASHBOARD:
        return (
          <Dashboard 
            user={user} 
            latestRecord={records[records.length - 1]} 
            records={records}
            medications={medications}
          />
        );
      case View.HEALTH_RECORDS:
        return <HealthData records={records} />;
      case View.MEDICATION:
        return <MedicationManager medications={medications} />;
      case View.TCM_CONSTITUTION:
        return <TCMConstitution user={user} />;
      case View.DOCTOR_CONSULT:
        return <DoctorConsult doctors={doctors} />;
      case View.SETTINGS:
        return <Settings user={user} />;
      default:
        return <Dashboard 
          user={user} 
          latestRecord={records[records.length - 1]} 
          records={records}
          medications={medications}
        />;
    }
  };

  return (
    <Layout 
      activeView={activeView} 
      onNavigate={setActiveView}
      userName={user.name}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
