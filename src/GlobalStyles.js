import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: orange;
    --primary-color2: darkorange;
    --secondary-color: green;
    --background-blue: rgb(54, 70, 101);
    --background-blue2: rgb(54, 20, 101);
    --tertiary-color: khaki;
    --white-color: #fff;
}
  body {
 background-image: radial-gradient(transparent, var(--tertiary-color)) ;
 font-size: 62.5%;
  };
  *,*::after,*::before{
      padding:0;
      margin:0;
      box-sizing:border-box;
  }
`

export default GlobalStyle;