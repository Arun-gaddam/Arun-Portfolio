import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:nth-child(odd) {
    padding-right: 50%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: 50%;
    
    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  transform: translateX(-50%);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 30px;
    transform: translateX(-50%);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #667eea;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #888888;
  margin-bottom: 1rem;
`;

const Achievement = styled(motion.li)`
  font-size: 0.9rem;
  color: #cccccc;
  margin-bottom: 0.5rem;
  text-align: left;
  
  &:before {
    content: '-';
    color: #667eea;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const Experience = () => {
  const experienceData = [
    {
      title: 'Full-Stack Software Engineer',
      company: 'Fifth Third Bank',
      date: 'Sep 2025 - Present | USA',
      icon: <FaBriefcase />,
      achievements: [
        'Designed and delivered full-stack application features to support business goals and user needs.',
        'Built and maintained backend services, APIs, and integrations with a focus on reliability and performance.',
        'Collaborated with cross-functional teams to implement scalable solutions across the software development lifecycle.',
        'Improved system quality through testing, debugging, documentation, and continuous enhancements.'
      ]
    },
    {
      title: 'Backend Software Engineer',
      company: 'DBS Bank',
      date: 'Jan 2022 - Jul 2023 | India',
      icon: <FaBriefcase />,
      achievements: [
        'Developed backend services and APIs to support secure and efficient business operations.',
        'Enhanced system performance, maintainability, and scalability through thoughtful design and implementation.',
        'Worked with databases, service integrations, and distributed components to support core platform functionality.',
        'Partnered with engineering teams to troubleshoot issues, deliver features, and support production readiness.'
      ]
    },
    {
      title: 'Graduate Assistant',
      company: 'St. Cloud State University',
      date: 'Jan 2024 - May 2025 | USA',
      icon: <FaBriefcase />,
      achievements: [
        'Guided students through programming and software engineering concepts with practical, hands-on support.',
        'Led lab and debugging assistance that improved understanding of core technical material.',
        'Encouraged structured problem solving, code quality, and good development habits through one-on-one feedback.',
        'Helped maintain a supportive academic environment through mentoring, communication, and steady instructional support.'
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <Timeline>
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineIcon>{exp.icon}</TimelineIcon>
              <TimelineContent>
                <JobTitle>{exp.title}</JobTitle>
                <Company>{exp.company}</Company>
                <Date>{exp.date}</Date>
                <AchievementList>
                  {exp.achievements.map((achievement, idx) => (
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
                </AchievementList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
