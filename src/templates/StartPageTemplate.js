import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import Content from '../components/content';
import IndexStyles from '../styles/pages/index.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

export const StartPageTemplate = ({
    title,
    subtitle,
    headerImage,
    content,
    contentComponent,
    location,
    openingHours,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <header className={IndexStyles.indexHeader} id="home">
                {!!headerImage && !!headerImage.childImageSharp ? (
                    <Img
                        fluid={headerImage.childImageSharp.fluid}
                        alt={title}
                        className={IndexStyles.indexHeader__image}
                    />
                ) : (
                    <img src={headerImage} alt={title} className={IndexStyles.indexHeader__image} />
                )}

                <div className={IndexStyles.indexHeader__content}>
                    <Container>
                        <div className={IndexStyles.indexHeader__contentInner}>
                            <h1 className="display-1">{title}</h1>
                            <p className="lead">{subtitle}</p>
                        </div>
                    </Container>
                </div>
            </header>

            <section className={SectionStyles.section} id="cafe">
                <Container>
                    <Row>
                        <Col xs={12} sm={9} lg={8}>
                            <PostContent content={content} />
                        </Col>
                        <Col xs={12} sm={1} lg={1}>
                            &nbsp;
                        </Col>
                        <Col xs={12} sm={2} lg={3}>
                            <h4>Location</h4>
                            <PostContent content={location} />
                            <p>&nbsp;</p>
                            <h4>Hours</h4>
                            <PostContent content={openingHours} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={SectionStyles.section} id="menu">
                <div className="container">
                    <h2 className="display-5 text-center">Menu</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <img src="https://picsum.photos/200/300" alt="lorem ipsum" />
                </div>
            </section>
        </>
    );
};

StartPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    location: PropTypes.node.isRequired,
    openingHours: PropTypes.node.isRequired,
};

export default StartPageTemplate;
