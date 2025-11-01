interface Module {
  id: string;
  icon: string;
  displayName: string;
  description: string;
  features: string[];
  targetAudience: string;
  path: string;
  color: string;
}

interface ModuleButtonsProps {
  modules: Module[];
}

const colorMap: Record<string, { bg: string; hoverBg: string; text: string }> = {
  culture: {
    bg: '#ff6b35',
    hoverBg: '#ff5722',
    text: '#ffffff'
  },
  bibleKnow: {
    bg: '#9b59b6',
    hoverBg: '#8e44ad',
    text: '#ffffff'
  },
  christianity: {
    bg: '#4a90e2',
    hoverBg: '#357abd',
    text: '#ffffff'
  },
  churchAdmin: {
    bg: '#ff6b6b',
    hoverBg: '#ff5252',
    text: '#ffffff'
  }
};

export function ModuleButtons({ modules }: ModuleButtonsProps) {
  const getButtonLabel = (moduleId: string): string => {
    switch (moduleId) {
      case 'culture':
        return 'Culture';
      case 'bible-know':
        return 'Bible';
      case 'christianity':
        return 'Theology';
      case 'church-admin':
        return 'Church';
      default:
        return moduleId;
    }
  };

  const isUnderConstruction = (moduleId: string): boolean => {
    return moduleId === 'christianity';
  };

  const handleModuleClick = (moduleId: string, path: string) => {
    if (isUnderConstruction(moduleId)) {
      alert('This module is currently under construction. We are working hard to improve it and will have it ready in 2-3 days. Thank you for your patience!');
      return;
    }
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full flex justify-center px-4 mt-8">
      <div
        className="flex gap-4"
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {modules.map((module) => {
          const colors = colorMap[module.color] || colorMap.culture;
          const underConstruction = isUnderConstruction(module.id);

          return (
            <button
              key={module.id}
              onClick={() => handleModuleClick(module.id, module.path)}
              className="transform transition-all duration-300"
              title={`${getButtonLabel(module.id)}${underConstruction ? ' (Under Construction)' : ''}`}
              style={{
                backgroundColor: underConstruction ? '#999999' : colors.bg,
                color: colors.text,
                border: 'none',
                borderRadius: '50%',
                padding: '0',
                fontSize: '36px',
                cursor: underConstruction ? 'not-allowed' : 'pointer',
                textAlign: 'center',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: underConstruction ? 0.7 : 1,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!underConstruction) {
                  e.currentTarget.style.backgroundColor = colors.hoverBg;
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (!underConstruction) {
                  e.currentTarget.style.backgroundColor = colors.bg;
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                }
              }}
            >
              <span style={{ fontSize: '40px' }}>{module.icon}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
