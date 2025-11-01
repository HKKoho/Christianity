
export enum PlanType {
  Individual = 'Individual',
  Organization = 'Organization',
}

export enum BillingInterval {
  OneTime = 'one-time',
  Monthly = 'monthly',
  Annually = 'annually',
  Trial = 'trial',
  Free = 'free',
}

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
