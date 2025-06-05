import React from "react";
import { HStack, Text, Link, Icon } from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionHStack = motion(HStack);
const MotionLink = motion(Link);
const MotionIcon = motion(Icon);

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animasyon kontrolleri (her ikon için ayrı)
  const animEmail = useAnimation();
  const animPhone = useAnimation();
  const animLinkedIn = useAnimation();
  const animGitHub = useAnimation();
  const animInstagram = useAnimation();

  const controlsList = [animEmail, animPhone, animLinkedIn, animGitHub, animInstagram];

  const links = [
    {
      href: "mailto:berkayyilmz01@gmail.com",
      icon: MdEmail,
      text: "berkayyilmz01@gmail.com",
    },
    {
      href: "tel:+905382840107",
      icon: MdPhone,
      text: "+90 538 284 0107",
    },
    {
      href: "https://www.linkedin.com/in/berkay-yılmaz-088b8a271/",
      icon: FaLinkedin,
      text: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/Berkayilmz",
      icon: FaGithub,
      text: "GitHub",
      external: true,
    },
    {
      href: "https://instagram.com/berkayyilmzzz",
      icon: FaInstagram,
      text: "Instagram",
      external: true,
    },
  ];

  const iconShakeAnimation = {
    rotate: [0, 15, -15, 15, -15, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <MotionHStack
      ref={ref}
      gap={12}
      justifyContent="center"
      wrap="wrap"
      color="white"
      fontSize="md"
      maxW="900px"
      mx="auto"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {links.map((link, idx) => {
        const controls = controlsList[idx];

        const handleHoverStart = () => {
          controls.start(iconShakeAnimation);
        };

        const handleHoverEnd = () => {
          controls.stop();
          controls.set({ rotate: 0 });
        };

        return (
          <MotionLink
            key={idx}
            href={link.href}
            isExternal={link.external}
            display="flex"
            alignItems="center"
            whileHover={{ scale: 1.1 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            cursor="pointer"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <MotionIcon as={link.icon} color="cyan.400" boxSize={5} mr={2} animate={controls} />
            <Text fontSize="md">{link.text}</Text>
          </MotionLink>
        );
      })}
    </MotionHStack>
  );
};

export default ContactInfo;