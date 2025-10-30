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
    <div className="w-full max-w-5xl mx-auto px-4 mt-12">
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          display: 'grid'
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
              style={{
                backgroundColor: underConstruction ? '#999999' : colors.bg,
                color: colors.text,
                border: 'none',
                borderRadius: '12px',
                padding: '24px 20px',
                fontSize: '24px',
                fontWeight: '700',
                cursor: underConstruction ? 'not-allowed' : 'pointer',
                textAlign: 'center',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: underConstruction ? 0.7 : 1,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!underConstruction) {
                  e.currentTarget.style.backgroundColor = colors.hoverBg;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (!underConstruction) {
                  e.currentTarget.style.backgroundColor = colors.bg;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                }
              }}
            >
              <span style={{ fontSize: '40px' }}>{module.icon}</span>
              <span>{getButtonLabel(module.id)}</span>
              {underConstruction && (
                <span style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Under Construction
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
