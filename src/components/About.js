import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.02);
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  border: 3px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  display: block;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: auto;
  filter: contrast(1.1) brightness(1.05) saturate(1.1);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (max-width: 768px) {
    max-width: 250px;
    height: 300px;
  }
`;

const AboutText = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cccccc;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #667eea;
  font-weight: 600;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <ProfileImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProfileImage
              src={`${process.env.PUBLIC_URL || ''}/arun.JPG`}
              alt="Arun reddy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              loading="eager"
              decoding="async"
            />
          </ProfileImageContainer>
          <AboutText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I bring a strong computer science foundation and hands-on experience delivering software for real users, business workflows, and evolving product needs. My background spans application development, API design, databases, and cloud deployment, giving me the range to contribute across the stack without losing sight of outcomes.
            </p>
            <p>
              I am at my best in environments where requirements are moving, priorities are real, and engineering judgment matters. I enjoy breaking down ambiguous problems, making sound technical decisions, and moving work from idea to implementation with clarity and discipline.
            </p>
            <p>
              Alongside technical work, I value <Highlight>ownership, collaboration, and consistency</Highlight>. I contribute through thoughtful communication, solid documentation, and dependable follow-through that helps teams move faster with less friction.
            </p>
            <p>
              I am looking for opportunities where I can contribute meaningfully from the start, continue growing in a strong engineering environment, and help deliver products that create measurable value. My goal is to be the kind of engineer teams trust with important work.
            </p>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
