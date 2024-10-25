// import React from "react";
import profile from "../../assets/images/profile.png";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b-2max-w-7xl mx-auto ">
      <h1 className="text-4xl  font-bold">Knowledge Cafe </h1>
      <img src={profile} alt="" />
    </header>
  );
}
