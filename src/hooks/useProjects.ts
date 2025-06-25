
import { useState, useEffect } from 'react';
import { Globe, Code, Palette, Database } from 'lucide-react';

const iconMap = {
  Globe,
  Code,
  Palette,
  Database
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        
        // Map icon strings to actual icon components
        const projectsWithIcons = data.map((project: any) => ({
          ...project,
          icon: iconMap[project.icon as keyof typeof iconMap] ? 
            React.createElement(iconMap[project.icon as keyof typeof iconMap], { className: "w-6 h-6" }) :
            React.createElement(Globe, { className: "w-6 h-6" })
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
