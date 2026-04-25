export const kpiData = [
  {
    title: "TOTAL INSPECTIONS",
    value: 1452,
    change: "+12.4%",
  },
  {
    title: "PASSED",
    value: 1388,
  },
  {
    title: "FAILED",
    value: 64,
  },
  {
    title: "DEFECT RATE",
    value: "4.41%",
  },
  {
    title: "REWORK",
    value: 42,
  },
];
export const lineData = [
  { name: "L-01-A", percent: 98.2, status: "running" },
  { name: "L-01-B", percent: 97.5, status: "running" },
  { name: "L-02-A", percent: 0, status: "stopped" },
  { name: "L-02-B", percent: 99.1, status: "running" },
];
export const activities = [
  { time: "14:22", id: "SN-99824-A", status: "PASS" },
  { time: "14:21", id: "SN-99823-A", status: "PASS" },
  { time: "14:21", id: "SN-99822-F", status: "FAIL" },
];
export const defects = [
  { name: "Insufficient Solder", percent: 34 },
  { name: "Component Shift", percent: 28 },
  { name: "Solder Bridge", percent: 18 },
];