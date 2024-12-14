import React from "react";
import HelloMessage from '../components/HelloMesssage'

const Home = () => {
  const userName = "Zaryab Fazal Hussain" //my user name
const favoriteColor="black"//my fvrt color
const  favoriteDish="Tikka"//my fvrt dish
  return (
    <main>
      <HelloMessage name={userName}
      favoriteColor={favoriteColor}
      favoriteDish={favoriteDish}/>
    </main>
  );
};

export default Home;