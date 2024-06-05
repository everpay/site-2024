import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Wrap,
  Logo,
  Icon,
  Content,
  H1,
  Text,
} from "./AmlpolicyElements";

export const AmlPolicy = () => {
  return (
    <Container>
        <Wrap>
    <Icon to="/"><Logo><img src='https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png' width={48} height={48} alt='Everpay'/></Logo>
            </Icon>
        <Content>
          <H1>AML Policy</H1>
            <Text>
              We take security very seriously{" "}
              <Link to="/signin" style={{ color: "#01bf71" }}>
                Login here
              </Link>
            </Text>
        </Content>
        </Wrap>
    </Container>
  );
};

export default AmlPolicy;
