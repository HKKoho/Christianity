export const PlanType = {
  Individual: 'Individual',
  Organization: 'Organization',
} as const;

export type PlanType = typeof PlanType[keyof typeof PlanType];

export const BillingInterval = {
  OneTime: 'one-time',
  Monthly: 'monthly',
  Annually: 'annually',
  Trial: 'trial',
  Free: 'free',
} as const;

export type BillingInterval = typeof BillingInterval[keyof typeof BillingInterval];

export interface SubscriptionPlan {
  id: string;
  name: string;
  type: PlanType;
  price: number | null;
  priceText: string;
  billingInterval: BillingInterval;
  description: string;
  features: string[];
  isFeatured?: boolean;
  trialPeriodDays?: number;
}
