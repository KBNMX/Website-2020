import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

import InfoSectionWrapper from './info.style';
import FaqWrapper from './faq.style';
import ImageOne from 'common/src/assets/image/charity/panes/dash-1.png';
import ImageTwo from 'common/src/assets/image/charity/panes/dash-2.png';

const InfoSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  textAreaRow,
  sectionWrapper,
  secTitleWrapper,
  secHeading,
  secText,
  buttonWrapper,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      charityJson {
        faqPanes {
          title
          description
          expend
        }
      }
    }
  `);

  return (
    <InfoSectionWrapper>
      <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea} className="image_area">
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image src={ImageOne} alt="Nuestros Panes" />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image src={ImageTwo} alt="Logo KebabNation" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <FaqWrapper>
              <Accordion>
                <>
                  {Data.charityJson.faqPanes.map((accordionItem, index) => (
                    <AccordionItem
                      className="accordion_item"
                      key={`accordion-${index}`}
                      expanded={accordionItem.expend}
                    >
                      <>
                        <AccordionTitle className="accordion_title">
                          <>
                            <Heading {...title} content={accordionItem.title} />
                            <IconWrapper>
                              <OpenIcon>
                                <Icon icon={minus} size={18} />
                              </OpenIcon>
                              <CloseIcon>
                                <Icon icon={plus} size={18} />
                              </CloseIcon>
                            </IconWrapper>
                          </>
                        </AccordionTitle>
                        <AccordionBody className="accordion_body">
                          <Text
                            {...description}
                            content={accordionItem.description}
                          />
                        </AccordionBody>
                      </>
                    </AccordionItem>
                  ))}
                </>
              </Accordion>
            </FaqWrapper>
          </Box>
        </Box>
      </Container>
    </InfoSectionWrapper>
  );
};

InfoSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  textAreaRow: PropTypes.object,
};

InfoSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%', '55%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    mr: ['-250px', '-250px', '-200px', '-250px', '-400px'],
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0,
  },
  description: {
    fontSize: ['15px', '15px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
  },
};

export default InfoSection;
