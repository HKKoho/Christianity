import { PlanType, BillingInterval } from '../types/subscription';
import type { SubscriptionPlan } from '../types/subscription';

export const INDIVIDUAL_PLANS: SubscriptionPlan[] = [
  {
    id: 'ind_free',
    name: 'Individual Free',
    type: PlanType.Individual,
    price: 0,
    priceText: 'Free',
    billingInterval: BillingInterval.Free,
    description: 'For individuals starting out with basic AI needs.',
    features: [
      'Basic AI Access',
      'Community Support',
      '1 Service Module',
      'Limited API Calls',
    ],
  },
  {
    id: 'ind_donation',
    name: 'Individual Supporter',
    type: PlanType.Individual,
    price: null,
    priceText: 'Donate',
    billingInterval: BillingInterval.OneTime,
    description: 'Support the platform and get a few extra perks.',
    features: [
      'Everything in Free',
      'Priority Community Support',
      '3 Service Modules',
      'Supporter Badge',
    ],
    isFeatured: true,
  },
];

export const ORGANIZATION_PLANS: SubscriptionPlan[] = [
  {
    id: 'org_trial',
    name: 'Organization Trial',
    type: PlanType.Organization,
    price: 0,
    priceText: 'Free for 3 months',
    billingInterval: BillingInterval.Trial,
    trialPeriodDays: 90,
    description: 'Explore all our premium features for your organization, free for 90 days.',
    features: [
      'Basic AI access',
      'Email Support',
      'Limited Prompt Design',
      'One Analytics Report',
      'General Christianity Content',
    ],
  },
  {
    id: 'org_paid',
    name: 'Organization Pro',
    type: PlanType.Organization,
    price: 499,
    priceText: 'HK$499 / month',
    billingInterval: BillingInterval.Monthly,
    description: 'The complete suite of tools for professional teams.',
    features: [
      'Advanced AI access',
      'Dedicated Support',
      'System Prompt Design',
      'Usage-Based Ai Options',
      'Monthly Analytics Report',
      'Designated Christianity Content',
    ],
    isFeatured: true,
  },
];
