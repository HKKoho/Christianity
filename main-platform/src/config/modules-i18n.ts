import type { TFunction } from 'i18next';
import { modules } from './modules';
import type { ModuleConfig } from './modules';

export interface TranslatedModuleConfig extends Omit<ModuleConfig, 'displayName' | 'description' | 'features' | 'targetAudience'> {
  displayName: string;
  description: string;
  features: string[];
  targetAudience: string;
}

export function getTranslatedModules(t: TFunction): TranslatedModuleConfig[] {
  return modules.map((module) => {
    let translatedModule: TranslatedModuleConfig;

    switch (module.id) {
      case 'culture':
        translatedModule = {
          ...module,
          displayName: t('modules.culture_display_name'),
          description: t('modules.culture_description'),
          features: [
            t('modules.culture_feature_1'),
            t('modules.culture_feature_2'),
            t('modules.culture_feature_3'),
            t('modules.culture_feature_4'),
            t('modules.culture_feature_5'),
            t('modules.culture_feature_6'),
          ],
          targetAudience: t('modules.culture_target'),
        };
        break;
      case 'christianity':
        translatedModule = {
          ...module,
          displayName: t('modules.christianity_display_name'),
          description: t('modules.christianity_description'),
          features: [
            t('modules.christianity_feature_1'),
            t('modules.christianity_feature_2'),
            t('modules.christianity_feature_3'),
            t('modules.christianity_feature_4'),
            t('modules.christianity_feature_5'),
          ],
          targetAudience: t('modules.christianity_target'),
        };
        break;
      case 'bible-know':
        translatedModule = {
          ...module,
          displayName: t('modules.bible_display_name'),
          description: t('modules.bible_description'),
          features: [
            t('modules.bible_feature_1'),
            t('modules.bible_feature_2'),
            t('modules.bible_feature_3'),
            t('modules.bible_feature_4'),
            t('modules.bible_feature_5'),
          ],
          targetAudience: t('modules.bible_target'),
        };
        break;
      case 'church-admin':
        translatedModule = {
          ...module,
          displayName: t('modules.church_display_name'),
          description: t('modules.church_description'),
          features: [
            t('modules.church_feature_1'),
            t('modules.church_feature_2'),
            t('modules.church_feature_3'),
            t('modules.church_feature_4'),
            t('modules.church_feature_5'),
          ],
          targetAudience: t('modules.church_target'),
        };
        break;
      default:
        translatedModule = module as TranslatedModuleConfig;
    }

    return translatedModule;
  });
}
