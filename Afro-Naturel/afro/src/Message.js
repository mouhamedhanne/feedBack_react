import React from "react";

const nameUser = prompt("Veuillez renseigner votre prénom");

const Message = () => {
  const validName = /^[A-Za-z]+$/.test(nameUser);
  let validMessage = "";

  if (validName) {
    validMessage = (
      <h6>Bonjour, {nameUser} comment pourrions-nous vous aider?.</h6>
    );
  } else {
    validMessage = <h6>Bienvenue sur notre page AFRO NATUREL</h6>;
  }
  return <div style={{ textAlign: "center" }}>{validMessage}</div>;
};

export default Message;
