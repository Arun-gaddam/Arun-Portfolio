import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 2rem 3rem;
  margin-top: 80px;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #cccccc;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.8rem;
  color: #aaaaaa;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  font-size: 0.9rem;
  
  svg {
    color: #667eea;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Arun reddy
        </Name>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I design and deliver software across web, backend, and cloud systems with an emphasis on strong execution and business impact.
          <br /><br />
          My strength is translating complex requirements into clean, production-ready solutions that teams can ship, scale, and maintain with confidence.
          <br /><br />
          I bring ownership, adaptability, and momentum, making me a strong fit for teams that want engineers who can ramp up quickly and add value early.
        </Description>
        <ContactInfo
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ContactItem>
            <FaEnvelope />
            <span>arunkumargaddam15@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <span>(320)-291-5447</span>
          </ContactItem>
        </ContactInfo>
        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialLink href="mailto:arunkumargaddam15@gmail.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="tel:+13202915447" aria-label="Phone">
            <FaPhone />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
