import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
`

export const ItemMenu = styled.a`
  line-height: 49px;
  height: 49px;
  padding: 0 19.8px;
  vertical-align: baseline;
  width: auto;
  color: #0d0d0d;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  background: rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 0;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  outline: none;
  position: relative;

  &:hover:before {
    background-color: red;
    opacity: 1;
  }

  &:after {
    position: absolute;
    right: 20px;
    top: -4px;
    left: 20px;
    display: block;
    width: calc(100% - 40px);
    height: 4px;
    opacity: 0;
    content: '';
  }

  cursor: pointer;

  &:before {
    position: absolute;
    right: 20px;
    top: -10px;
    left: 20px;
    display: block;
    width: calc(100% - 40px);
    height: 4px;
    opacity: 0;
    content: '';
    transition: opacity 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    background: purple;
    background: -moz-linear-gradient(left, purple 0%, #bfa4f7 100%);
    background: -webkit-linear-gradient(left, purple 0%, #bfa4f7 100%);
    background: linear-gradient(to right, purple 0%, #bfa4f7 100%);
  }
`

export const UlNav = styled.ul`
  transition: none;
  border-radius: 0;
  box-shadow: none;
  background: 0 0;
  border: 0;
  bottom: auto;
  box-sizing: border-box;
  clip: auto;
  color: #666;
  display: block;
  float: none;
  font-family: inherit;
  font-size: 14px;
  height: auto;
  left: auto;
  line-height: 1.7;
  list-style-type: none;
  margin: 0;
  min-height: auto;
  max-height: none;
  min-width: auto;
  max-width: none;
  opacity: 1;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  pointer-events: auto;
  right: auto;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  transform: none;
  top: auto;
  vertical-align: baseline;
  visibility: inherit;
  width: auto;
  word-wrap: break-word;
  white-space: normal;
  justify-content: center;
  align-items: center;
`

export const TopMenuDesktop = styled.section`
  height: 100%;
  flex-direction: row;
  height: 140px;
  max-width: 1200px;
  text-align: center;
  justify-content: center;
  margin: auto;
  align-items: center;
  position: relative;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
`
export const Location = styled.div`
  height: 100%;
  width: 19%;
  padding: 10px 20px 10px;
  align-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    color: #858585;
    font-size: 12px;
    text-transform: uppercase;
    padding-left: 3px;
    margin-bottom: 10px;
  }
`

export const TelephoneOnline = styled.div`
  height: 100%;
  width: 22%;
  padding: 10px 20px 10px;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    color: #858585;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 15px;
    width: 100%;
    text-align: left;
  }
`

export const LogoOficial = styled.div`
  height: 100%;
  width: 39%;
  align-content: center;
  align-items: center;
  padding: 20px 5px 10px;
`
export const SearchDiv = styled.div`
  height: 100%;
  width: 22%;
  align-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 5px 10px;
  display: flex;

  input {
    color: #888686;
    background-color: transparent;
    border: 1px solid #e1e1e1;
    border-radius: 2rem;
    padding: 0.67rem 1rem 0.57rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-size: 13.005px;
    transition: color 0.4s ease-in, border-color 0.4s ease-in;
    width: 210px;
    height: 45px;
  }
`

export const UserDiv = styled.div`
  height: 100%;
  width: 10%;
  padding: 20px 5px 10px;
  align-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CartDiv = styled.div`
  height: 100%;
  width: 4%;
  padding: 20px 4px 10px;
  align-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
