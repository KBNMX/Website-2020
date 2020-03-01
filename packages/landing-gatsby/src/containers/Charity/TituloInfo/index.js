import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

const TituloInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        tituloInfo {
          title
          slogan
        }
      }
    }
  `);

  const { title, slogan } = data.charityJson.tituloInfo;

  return (
    <SectionWrapper id="nuestrospanes">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
      </Container>
    </SectionWrapper>
  );
};

export default TituloInfo;
