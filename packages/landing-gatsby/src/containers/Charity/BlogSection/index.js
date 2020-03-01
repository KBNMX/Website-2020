import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import BlogPost from 'common/src/components/BlogPost';
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from './blogSection.style';

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        posts {
          id
          thumbUrl {
            publicURL
          }
          title
          horarios
          telefono
          excerpt
          btnUrl
          btnText
        }
      }
    }
  `);

  const textoa = telefono => {
    return { __html: telefono };
  };

  return (
    <SectionWrapper id="sucursales">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="¿Dónde nos encontramos?" />
            <Text>
              Actualmente KëbabNation cuenta con dos sucursales abiertas al
              público. ¿Qué esperas? ¡Ven a probar nuestros Këbabs!.
              {/* <a href="#1" className="link">
                Nuestra sucursal
              </a> */}
            </Text>
          </TitleArea>
          <LinkArea>
            <a
              href="https://wa.me/15530845459"
              className="text__btn"
              target="_blank"
            >
              <span className="text">
                Escríbenos por WhatsApp: 55 3084 45459
              </span>
              <span className="arrow" />
            </a>
          </LinkArea>
        </SectionHeader>
        <PostArea>
          {data.charityJson.posts.map(item => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.thumbUrl.publicURL}
              title={item.title}
              excerpt={item.excerpt}
              horarios={item.horarios}
              telefono={item.telefono}
              link={
                <a
                  className="learn__more-btn"
                  href={item.btnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <span className="hyphen"></span> */}
                  <span className="btn_text">{item.btnText}</span>
                </a>
              }
            />
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;
