import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-content">
        
        <img src="/assets/logo.jpg" alt="Your Logo" className="logo" />

        <div className="boxes">
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f4f6fc;
  overflow: hidden;

  .loader-content {
    text-align: center;
  }

  .logo {
    width: 120px;
    margin-bottom: 1.5rem;
    animation: pulse 1.8s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Your existing box animation styles go here 👇 */
  .boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: rotateX(60deg) rotateZ(45deg);
    margin: 0 auto;
  }

  .boxes .box {
    width: var(--size);
    height: var(--size);
    position: absolute;
    transform-style: preserve-3d;
  }

  .boxes .box:nth-child(1) {
    transform: translate(100%, 0);
    animation: box1 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(2) {
    transform: translate(0, 100%);
    animation: box2 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(3) {
    transform: translate(100%, 100%);
    animation: box3 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(4) {
    transform: translate(200%, 0);
    animation: box4 var(--duration) linear infinite;
  }

  .boxes .box > div {
    --background: #5c8df6;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
  }

  .boxes .box > div:nth-child(1) {
    top: 0;
    left: 0;
    --rotateY: 0deg;
    --rotateX: 0deg;
    --translateZ: calc(var(--size) / 2);
  }

  .boxes .box > div:nth-child(2) {
    right: 0;
    --background: #145af2;
    --rotateY: 90deg;
    --translateZ: calc(var(--size) / 2);
  }

  .boxes .box > div:nth-child(3) {
    --background: #447cf5;
    --rotateX: -90deg;
    --translateZ: calc(var(--size) / 2);
  }

  .boxes .box > div:nth-child(4) {
    top: 0;
    left: 0;
    --background: #dbe3f4;
    --translateZ: calc(var(--size) * 3 * -1);
  }

  @keyframes box1 {
    0%, 50% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(200%, 0);
    }
  }

  @keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }

  @keyframes box3 {
    0%, 50% {
      transform: translate(100%, 100%);
    }
    100% {
      transform: translate(0, 100%);
    }
  }

  @keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }
    50% {
      transform: translate(200%, 100%);
    }
    100% {
      transform: translate(100%, 100%);
    }
  }
`;

export default Loader;
