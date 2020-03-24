// @format

import styled from 'styled-components'

import { colors } from './colors'

export const Logo = styled.img`
  display: block;
  max-width: 200px;
  margin: 0 auto;
`
export const Avatar = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border: 0;
`

export const MainGridContainer = styled.main`
  max-width: 980px;
  margin: 0 auto;
  color: ${colors.grey};
`

export const H1 = styled.h1`
  font-size: 24px;
  letter-spacing: 1.2;
  text-align: center;
  color: ${colors.blue};
`

export const Paragraph = styled.p`
  font-size: 16px;
  letter-spacing: 0.2em;
  text-align: center;
  color: ${(props) => props.textColor || colors.blue};
`

// Cards Container
export const CardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1rem;
`

// Card Item
export const CardArticle = styled.article`
  // width: 75vw;
  // min-height: 200px;
  padding: 0.5rem;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`
export const Button = styled.button`
  background-color: ${(props) => props.btnColor || colors.yellow};
  color: ${(props) => props.textColor || colors.blue};
  border-radius: 20px;
  width: 100px;
  height: 50px;
  font-size: 14px;
`
