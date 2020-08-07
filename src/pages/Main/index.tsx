import React from 'react';
import { FaGithub, FaTwitter, FaTwitch } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import { About, Container } from './styles';

import logoSource from '../../assets/logo.png';

const Main: React.FC = () => (
  <Container>
    <About>
      <img src={logoSource} alt="" />
      <p>Student and Developer</p>
    </About>
    <div>
      <FaGithub
        size={50}
        color="white"
        onClick={() => window.open('https://github.com/leduard', '_blank')}
      />
      <FaTwitter
        size={50}
        color="white"
        onClick={() => window.open('https://twitter.com/leduaard', '_blank')}
      />
      <FaTwitch
        size={50}
        color="white"
        onClick={() => window.open('https://twitch.tv/eduaard', '_blank')}
      />
      <IoMdMail size={55} color="white" className="off" />
    </div>
  </Container>
);

export default Main;
