import { PlanType, BillingInterval } from '../types/subscription';
import type { SubscriptionPlan } from '../types/subscription';
import type { TFunction } from 'i18next';

export const getIndividualPlans = (t: TFunction): SubscriptionPlan[] => [
  {
    id: 'ind_free',
    name: t('subscription.plans.ind_free.name'),
    type: PlanType.Individual,
    price: 0,
    priceText: t('subscription.free'),
    billingInterval: BillingInterval.Free,
    description: t('subscription.plans.ind_free.description'),
    features: [
      t('subscription.plans.ind_free.features.0'),
      t('subscription.plans.ind_free.features.1'),
      t('subscription.plans.ind_free.features.2'),
      t('subscription.plans.ind_free.features.3'),
    ],
  },
  {
    id: 'ind_donation',
    name: t('subscription.plans.ind_donation.name'),
    type: PlanType.Individual,
    price: null,
    priceText: t('subscription.donate_now'),
    billingInterval: BillingInterval.OneTime,
    description: t('subscription.plans.ind_donation.description'),
    features: [
      t('subscription.plans.ind_donation.features.0'),
      t('subscription.plans.ind_donation.features.1'),
      t('subscription.plans.ind_donation.features.2'),
      t('subscription.plans.ind_donation.features.3'),
    ],
    isFeatured: true,
  },
];

export const getOrganizationPlans = (t: TFunction): SubscriptionPlan[] => [
  {
    id: 'org_trial',
    name: t('subscription.plans.org_trial.name'),
    type: PlanType.Organization,
    price: 0,
    priceText: 'Free for 3 months',
    billingInterval: BillingInterval.Trial,
    trialPeriodDays: 90,
    description: t('subscription.plans.org_trial.description'),
    features: [
      t('subscription.plans.org_trial.features.0'),
      t('subscription.plans.org_trial.features.1'),
      t('subscription.plans.org_trial.features.2'),
      t('subscription.plans.org_trial.features.3'),
      t('subscription.plans.org_trial.features.4'),
    ],
  },
  {
    id: 'org_paid',
    name: t('subscription.plans.org_paid.name'),
    type: PlanType.Organization,
    price: 499,
    priceText: 'HK$499 / month',
    billingInterval: BillingInterval.Monthly,
    description: t('subscription.plans.org_paid.description'),
    features: [
      t('subscription.plans.org_paid.features.0'),
      t('subscription.plans.org_paid.features.1'),
      t('subscription.plans.org_paid.features.2'),
      t('subscription.plans.org_paid.features.3'),
      t('subscription.plans.org_paid.features.4'),
      t('subscription.plans.org_paid.features.5'),
    ],
    isFeatured: true,
  },
];
