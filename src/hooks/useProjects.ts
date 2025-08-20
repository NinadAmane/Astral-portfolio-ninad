import React, { useState, useEffect } from 'react';
import { Globe, Code, Palette, Database, Cloud } from 'lucide-react';

const iconMap = {
  Globe,
  Code,
  Palette,
  Database,
  Cloud,
} as const;

const resolveIcon = (iconName: string) => {
  // Map non-standard names from data to closest Lucide icon
  const normalized = iconName === 'Clouds' ? 'Cloud' : iconName;
  const Icon = (iconMap as any)[normalized] || Globe;
  return React.createElement(Icon, { className: 'w-6 h-6' });
};

export const useProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();

        const projectsWithIcons = data.map((project: any) => ({
          ...project,
          icon: resolveIcon(project.icon),
        }));

        setProjects(projectsWithIcons);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading };
};
