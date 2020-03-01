import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'gatsby-image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import Rating from 'common/src/components/Rating';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  RatingInfo,
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

import google from 'common/src/assets/image/charity/google-icon.png';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  const data = useStaticQuery(graphql`
    query {
      charityJson {
        bannerSlides {
          id
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#inicio" />
      <ContentWrapper>
        <TextArea>
          <Fade up>
            <RatingInfo>
              <Rating rating={4} />
              4.8 de 5 por <img src={google} alt="Google Reviews" />
            </RatingInfo>
          </Fade>
          {/* <HighlightedText className="highlighted_text">
            <strong>PROMO</strong> En Enero muchas sorpresas
            <Icon icon={chevronRight} />
          </HighlightedText> */}
          <Heading content="Incluyente, creativo, delicioso." />
          <Heading
            as="h4"
            content="Así es KëbabNation, el lugar donde puedes abrir tu mente y tu hambre a algo diferente."
          />
          <Text content="Inspirados en la comida árabe, hemos creado una cocina urbana diferente con toques de otros países." />
          {/* <Link className="learn__more-btn" to="#branch">
            <span className="hyphen" />
            <span className="btn_text">Explora KebabNation</span>
          </Link> */}
          <AnchorLink href="#inicio" offset="81" className="learn__more-btn">
            <span className="hyphen" />
            <span className="btn_text">Explora KebabNation</span>
          </AnchorLink>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {data.charityJson.bannerSlides.map(slide => (
                <GlideSlide key={slide.id}>
                  <Image
                    fluid={
                      (slide.thumb_url !== null) | undefined
                        ? slide.thumb_url.childImageSharp.fluid
                        : {}
                    }
                    alt={`KebabNation Restaurante de Comida Árabe ${slide.id}`}
                    className="slide_image"
                  />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
