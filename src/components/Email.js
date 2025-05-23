import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { StaticImage } from 'gatsby-plugin-image';

const Email = () => {
  return (
    <EmailContainer>
      <StaticImage
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        src='../assets/images/email2.jpg'
        alt='email image'
      />
      <EmailContent>
        <h1>Get Acess to Exlusive Offers</h1>
        <p>Sign up for our news below to get $100 off your first trip!</p>
        <form action='#'>
          <EmailFormWrap>
            <label htmlFor='email'>
              <input type='email' placeholder='Enter your email' id='email' />
            </label>
            <Button
              as='button'
              type='submit'
              round
              primary
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }

                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}>
              Sign Up
            </Button>
          </EmailFormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  );
};

export default Email;

const EmailContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

const EmailFormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`;
