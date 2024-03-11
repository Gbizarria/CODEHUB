import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
:root {
    /* Primary Pallete */
      --color-primary:#FF577F;
      --color-primary-focus:#FF427F;
      --color-primary-negative: #59323F;
    
      /* buttons and texts */
      --color-grey4:#121214;
      --color-grey3:#212529;
      --color-grey2:#343B41;
      --color-grey1:#868E96;
      --color-grey0:#F8F9FA;
    
      /* Feedback Palette */
      --color-sucess:#3FE864;
      --color-negative:#E83F5B;
    
      /* general background */
      background-color: #121214;
     
    }


    *{
        margin:0;
        box-sizing:border-box;
        padding:0;
        
    
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings:
          "slnt" 0;

          max-width:100%;
    }

    


`