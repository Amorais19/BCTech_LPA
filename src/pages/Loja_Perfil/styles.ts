import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;

  #quadro {
    display: flex;
    width: 100%;
    height: 40rem;
    align-items: center;
  }

  #img {
    position: absolute;
    width: 100%;
    height: 40rem;
    border-bottom: 1rem solid #5e8092;
    filter: blur(3px);
  }

  #grid {
    position: absolute;
    display: flex;
    justify-content: center;
    margin: 5rem;
  }

  #square {
    display: flex;
    flex-direction: column;
    margin: 5rem;
  }

  #align {
    display: flex;
    flex-direction: column;
    background-color: #26404b;
    height: 100%;
    padding: 1rem;
  }

  #title {
    font-family: "Raleway";
    font-size: x-large;
    text-transform: uppercase;
  }

  #text {
    font-family: "Raleway";
    padding: 1rem;
  }

  #name {
    font-family: 'Raleway';
    font-size: xx-large;
    text-transform: uppercase;
    color: #ffffff;
  }

  #subtitle {
    font-family: 'Raleway';
    font-size: medium;
  }

  #conteudo {
    margin: 20px;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffeb3b;
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

export const ChatAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatMessage = styled.div`
  color: #333;
  font-size: 16px;
  line-height: 1.2;
  margin-right: 10px;
`;

export const CloseButton = styled.button`
  background: #f44336;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
