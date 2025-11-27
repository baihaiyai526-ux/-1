export enum View {
  DASHBOARD = 'DASHBOARD',
  HEALTH_RECORDS = 'HEALTH_RECORDS',
  TCM_CONSTITUTION = 'TCM_CONSTITUTION',
  MEDICATION = 'MEDICATION',
  DOCTOR_CONSULT = 'DOCTOR_CONSULT',
  SETTINGS = 'SETTINGS'
}

export interface HealthRecord {
  id: string;
  date: string;
  systolic: number; // High BP
  diastolic: number; // Low BP
  bloodSugar: number;
  heartRate: number;
}

export enum MedType {
  TCM = 'TCM', // Traditional Chinese Medicine
  WESTERN = 'WESTERN'
}

export interface Medication {
  id: string;
  name: string;
  type: MedType;
  dosage: string;
  frequency: string; // e.g., "1 tablet, 3 times daily"
  nextTime: string;
  history: boolean[]; // last 7 days adherence
}

export enum ConstitutionType {
  BALANCED = '平和质',
  QI_DEFICIENCY = '气虚质',
  YANG_DEFICIENCY = '阳虚质',
  YIN_DEFICIENCY = '阴虚质',
  PHLEGM_DAMPNESS = '痰湿质',
  DAMP_HEAT = '湿热质',
  BLOOD_STASIS = '血瘀质',
  QI_STAGNATION = '气郁质',
  SPECIAL = '特禀质',
  UNKNOWN = '未检测'
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  hospital: string;
  isOnline: boolean;
  avatar: string;
}

export interface UserProfile {
  name: string;
  age: number;
  gender: string;
  constitution: ConstitutionType;
}
