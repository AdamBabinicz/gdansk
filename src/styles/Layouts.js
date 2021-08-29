import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 0 10rem;

  @media screen and (max-width: 1347px) {
    padding: 0 7rem;
  }

  @media screen and (max-width: 1186px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 990px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.section`
  padding: 8rem 0;

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;
