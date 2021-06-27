import React from "react";
import "./Home.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterModal from "../../components/RegisterModal";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <img src="./logo.png" alt="RainbowsApp" />
        <h2>
          Dating is a stage of romantic relationships in humans whereby two
          people meet socially with the aim of each assessing the other's
          suitability as a prospective partner in an intimate relationship. It
          is a form of courtship, consisting of social activities done by the
          couple, either alone or with others.
        </h2>
      </div>

      <div className="home__right">
        <LoginForm />
        <RegisterModal />
      </div>
    </div>
  );
}

export default Home;
