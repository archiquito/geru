import React, { Fragment } from "react";
import PageHeader from "../template/pageHeader";
import Menu from "../template/menu";
import Container from "../template/Container";

import { TitleH3Laranja } from "../styles/styles";

const About = props => (
  <Fragment>
    <Menu />
    <PageHeader name="Sobre Nós" small="" />
    <Container colNum="col-md-12 text-center">
      <TitleH3Laranja>Nossa História</TitleH3Laranja>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        laoreet dapibus sagittis. Mauris mauris urna, molestie vel elit eget,
        ullamcorper lobortis ex. Aliquam congue, justo ac pulvinar ornare, augue
        arcu fringilla dui, ut rutrum nulla tellus et risus. Ut id risus
        facilisis, ultricies turpis vel, pellentesque nulla. Aliquam eget velit
        ligula. Aliquam felis justo, consequat eget ex non, ultrices faucibus
        risus. Aenean id maximus nisi. Curabitur ultricies hendrerit felis.
        Mauris lacinia enim velit, sit amet ornare lectus sagittis sed. Fusce
        ornare accumsan pulvinar. Praesent sit amet sem ut libero pellentesque
        consectetur. Vivamus pharetra lorem quis metus ultrices, sed luctus nisi
        ullamcorper.
      </p>
      <TitleH3Laranja>Missão e Visão</TitleH3Laranja>

      <p>- Aenean quis est vitae ex mollis porttitor.</p>
      <p>- Quisque venenatis orci et vestibulum interdum.</p>
      <p>- Suspendisse sed magna sed ligula posuere cursus.</p>

      <TitleH3Laranja>Imprensa</TitleH3Laranja>
      <p>Lorem ipsum dolor sit amet...</p>
    </Container>
  </Fragment>
);

About.displayName = "About";

export default About;
