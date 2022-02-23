import tw, { styled } from "twin.macro";

export const LogoContainer = styled.div``;

export const SecondaryNav = styled.div``;

export const PrimaryNav = styled.div`
  // ${tw`bg-colour2`}
  // div {
  //   ${tw`px-8 mx-auto border border-black`}
  // }
`;

export const NavContainer = (props) => {
  const { logoutText, logo } = props;

  return (
    <nav tw="bg-colour5">
      <div tw="max-w-5xl mx-auto border border-colour5">
        <LogoContainer>
          <h1 tw="text-colour5">{logo}</h1>
        </LogoContainer>

        <PrimaryNav />
        <SecondaryNav>{logoutText}</SecondaryNav>
      </div>
    </nav>
  );
};
