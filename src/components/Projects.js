import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.02);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 0.25rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 0.875rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.3rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.1rem;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
  color: #cccccc;
  margin-bottom: 0;
  margin-top: 0;
`;

const ProjectAchievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
`;

const Achievement = styled(motion.li)`
  font-size: 0.85rem;
  color: #aaaaaa;
  margin-bottom: 0.15rem;
  
  &:before {
    content: '-';
    color: #667eea;
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

const Projects = () => {
  const projectsData = [
    {
      title: 'Email Spam Classification System',
      tech: ['Python', 'Machine Learning', 'NLP'],
      achievements: [
        'Created a machine learning workflow for identifying spam emails through practical NLP techniques.',
        'Used feature engineering and model evaluation to improve prediction quality.',
        'Emphasized measurable results, clear experimentation, and reproducible analysis.'
      ],
      period: 'Apr 2024 - May 2024'
    },
    {
      title: 'Pantry Inventory Management System',
      tech: ['Next.js', 'Firebase', 'React', 'Vercel'],
      achievements: [
        'Created a pantry management application centered on simple inventory and search workflows.',
        'Implemented responsive screens and real-time data behavior for a smoother cross-device experience.',
        'Set up lightweight deployment and iteration workflows to keep delivery straightforward.'
      ],
      period: '2024'
    },
    {
      title: 'AI Customer Support Assistant',
      tech: ['Next.js', 'Tailwind CSS', 'React', 'Vercel'],
      achievements: [
        'Designed an AI-driven chat experience with modern interface patterns and streamlined interactions.',
        'Implemented supporting APIs to manage messages, session flow, and application behavior.',
        'Shipped a polished experience with deployment support for fast iteration.'
      ],
      period: '2024'
    },
    {
      title: 'Movie Information Management System',
      tech: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
      achievements: [
        'Developed a database-backed application for organizing and exploring movie information.',
        'Structured backend and data access layers to support search, filtering, and secure queries.',
        'Kept the implementation maintainable through clean organization and a straightforward user interface.'
      ],
      period: '2023'
    },
    {
      title: 'Role-Based Food Ordering Platform',
      tech: ['AngularJS', 'Spring Boot', 'Bootstrap', 'SQL'],
      achievements: [
        'Delivered a role-based food ordering platform with separate workflows for operational users.',
        'Integrated frontend and backend layers through service-driven application design.',
        'Strengthened responsiveness through better backend and database implementation decisions.'
      ],
      period: 'Sep 2023'
    },
    {
      title: 'Crime Report Management System',
      tech: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      achievements: [
        'Delivered a web-based reporting platform to simplify submission and tracking workflows.',
        'Adapted the interface for accessibility across device sizes and screen types.',
        'Implemented backend and database support for secure, structured record management.'
      ],
      period: 'Jun 2022'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Project Highlights</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectHeader>

              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>

              <ProjectDescription>
                <strong>{project.period}</strong>
              </ProjectDescription>

              <ProjectAchievements>
                {project.achievements.map((achievement, idx) => (
                  <Achievement
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {achievement}
                  </Achievement>
                ))}
              </ProjectAchievements>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
