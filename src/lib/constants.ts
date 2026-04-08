export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4400';
export const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:5400';

export const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bahrain","Bangladesh",
  "Belgium","Brazil","Canada","Chile","China","Colombia","Czech Republic","Denmark","Egypt",
  "Ethiopia","Finland","France","Germany","Ghana","Greece","Hong Kong","Hungary","India",
  "Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kazakhstan","Kenya",
  "Kuwait","Lebanon","Libya","Malaysia","Mexico","Morocco","Nepal","Netherlands","New Zealand",
  "Nigeria","Norway","Oman","Pakistan","Peru","Philippines","Poland","Portugal","Qatar",
  "Romania","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain",
  "Sri Lanka","Sweden","Switzerland","Taiwan","Tanzania","Thailand","Turkey","UAE",
  "Uganda","Ukraine","United Kingdom","United States","Vietnam","Yemen","Zimbabwe",
];

export const MSG_PER_MIN = 3;
export const DEFAULT_ANNUAL_DISCOUNT = 10;
export const POPULAR_PLAN = 'Growth';

export interface Plan {
  _id: string;
  name: string;
  description: string;
  basePrice: number;
  includedNumbers: number;
  additionalNumberPrice: number;
  annualDiscount: number;
  trialDays: number;
  isActive: boolean;
  isDefault: boolean;
}
