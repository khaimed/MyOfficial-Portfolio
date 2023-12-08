import React, { useState } from 'react';
import Menu from "../../components/menu/Menu"
import Profile from "./profile/Profile"
import MenuButton from "../../components/menubutton/MenuButton";
import DarkMode from "../../components/darkmode/DarkMode";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Menu isOpen={isMenuOpen} />
      <DarkMode />
      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <Profile />
    </>
  )
};

export default Home;