import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import ContactForm from '../components/contactForm';
import Content from '../components/content';
import SectionStyles from '../styles/components/section.module.scss';
import ContactStyles from '../styles/pages/contact.module.scss';

const ContactPageTemplate = ({
    title,
    subtitle,
    headerImage,
    content,
    contentComponent,
    what3WordsAddress,
    what3wordsIcon,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <Header title={title} subtitle={subtitle} headerImage={headerImage} />

            <section className={SectionStyles.section}>
                <Container>
                    <Row>
                        <Col xs={12} sm={4} className={ContactStyles.contact}>
                            <PostContent content={content} />
                            <div className={ContactStyles.separator}>
                                <hr />
                            </div>
                            <a
                                href={`https://what3words.com/${what3WordsAddress}`}
                                target="_blank"
                                rel="noreferrer"
                                className={ContactStyles.what3words}
                            >
                                {!!what3wordsIcon && !!what3wordsIcon.childImageSharp ? (
                                    <Img fixed={what3wordsIcon.childImageSharp.fixed} alt="What3words address" />
                                ) : (
                                    <img src={what3wordsIcon} alt="What3words address" />
                                )}
                                <p className={ContactStyles.what3words__address}>///{what3WordsAddress}</p>
                            </a>
                            <p>&nbsp;</p>
                        </Col>
                        <Col xs={12} sm={8}>
                            <h2 className="d-block d-sm-none">Contact us</h2>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

ContactPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    what3WordsAddress: PropTypes.string.isRequired,
    what3wordsIcon: PropTypes.string.isRequired,
};

export default ContactPageTemplate;
