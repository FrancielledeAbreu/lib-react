import styled from 'styled-components'

export const DivStyles = styled.div`
  margin-top: 30px;
  margin-left: 5px;
  padding: 5px;
  width: 461px;
  border: 1px solid #00d1b2;

  h2 {
    text-align: center;
    background-color: #00d1b2;
    color: #ffffff;
    padding: 5px;
  }

  .main {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .main input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .mark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: #00d1b2;
  }
  .main:hover input ~ .mark {
    opacity: 0.7;
    font-style: italic;
  }
  .main input:checked ~ .mark {
    background-color: #00d1b2;
  }
  .mark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .main input:checked ~ .mark:after {
    display: block;
  }
  .main .mark:after {
    left: 12px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
