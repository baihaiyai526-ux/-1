import { ConstitutionType, Doctor, HealthRecord, Medication, MedType, UserProfile } from './types';

export const MOCK_USER: UserProfile = {
  name: "张养生",
  age: 65,
  gender: "男",
  constitution: ConstitutionType.YANG_DEFICIENCY
};

export const MOCK_RECORDS: HealthRecord[] = [
  { id: '1', date: '11-09', systolic: 135, diastolic: 85, bloodSugar: 6.1, heartRate: 72 },
  { id: '2', date: '11-10', systolic: 132, diastolic: 82, bloodSugar: 5.8, heartRate: 70 },
  { id: '3', date: '11-11', systolic: 128, diastolic: 80, bloodSugar: 5.6, heartRate: 71 },
  { id: '4', date: '11-12', systolic: 140, diastolic: 88, bloodSugar: 6.5, heartRate: 78 },
  { id: '5', date: '11-13', systolic: 130, diastolic: 82, bloodSugar: 5.9, heartRate: 73 },
  { id: '6', date: '11-14', systolic: 125, diastolic: 78, bloodSugar: 5.5, heartRate: 68 },
  { id: '7', date: '11-15', systolic: 129, diastolic: 81, bloodSugar: 5.7, heartRate: 72 },
];

export const MOCK_MEDS: Medication[] = [
  { 
    id: 'm1', 
    name: "阿司匹林肠溶片", 
    type: MedType.WESTERN, 
    dosage: "100mg", 
    frequency: "1次/天", 
    nextTime: "08:00", 
    history: [true, true, true, false, true, true, true] 
  },
  { 
    id: 'm2', 
    name: "六味地黄丸", 
    type: MedType.TCM, 
    dosage: "8丸", 
    frequency: "2次/天", 
    nextTime: "12:00", 
    history: [true, true, false, true, true, true, false] 
  },
  { 
    id: 'm3', 
    name: "二甲双胍片", 
    type: MedType.WESTERN, 
    dosage: "0.5g", 
    frequency: "2次/天", 
    nextTime: "18:00", 
    history: [true, true, true, true, true, true, true] 
  }
];

export const MOCK_DOCTORS: Doctor[] = [
  { id: 'd1', name: "王建国", title: "主任医师", specialty: "高血压, 糖尿病", hospital: "北京中医院", isOnline: true, avatar: "https://picsum.photos/100/100?random=1" },
  { id: 'd2', name: "李秀英", title: "副主任医师", specialty: "中医内科, 脾胃病", hospital: "仁爱医院", isOnline: false, avatar: "https://picsum.photos/100/100?random=2" },
  { id: 'd3', name: "张远", title: "主治医师", specialty: "心脑血管", hospital: "第一人民医院", isOnline: true, avatar: "https://picsum.photos/100/100?random=3" },
];

export const SEASONAL_ADVICE = {
  season: "冬季",
  term: "立冬",
  summary: "冬季阳气潜藏，养生应顺应自然界闭藏之规律，以敛阴护阳为根本。",
  food: "宜食温补之物，如羊肉、核桃、栗子、红枣。忌生冷寒凉。",
  activity: "早睡晚起，待日光而作。避免剧烈运动出汗过多损耗阳气。",
  tcm_focus: "重点养肾，防寒保暖。"
};
