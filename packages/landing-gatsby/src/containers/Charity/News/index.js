import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import SectionWrapper, {
  ContentWrapper,
  NewsWrapper,
  NewsItem,
} from './news.style';

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        newsData {
          id
          title
          excerpt
        }
      }
    }
  `);

  return (
    <SectionWrapper id="news">
      <ContentWrapper>
        <div className="row">
          <div className="col">
            <Fade delay={60}>2</Fade>
          </div>
          <div className="col">
            <Fade delay={90}>0</Fade>
          </div>
          <div className="col">
            <Fade delay={120}>2</Fade>
          </div>
          <div className="col">
            <Fade delay={150}>0</Fade>
          </div>
        </div>
        <NewsWrapper>
          {data.charityJson.newsData.map(item => (
            <NewsItem key={`news_key${item.id}`}>
              <Fade bottom delay={60 * item.id}>
                <Heading as="h3" content={item.title} />
                <Text content={item.excerpt} />
              </Fade>
            </NewsItem>
          ))}
        </NewsWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default News;
