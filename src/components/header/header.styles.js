import styled from "styled-components";
export const Wrapper = styled.div`
background: var(--darkGrey);
padding: 0 20px;`;
export const Content = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;

  nav ul {
    list-style: none;
    padding: 0;
    display: flex; /* Display list items horizontally */
  }

  nav li {
    margin-right: 20px; /* Adjust the spacing between menu items */
  }

  nav a {
    text-decoration: none;
    color: white;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    margin-right: 800px; /* Add spacing between the logo and the navigation items */
  }
`;

