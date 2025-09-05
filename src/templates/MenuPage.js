import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import { getSrc } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Content, { HTMLContent } from '../components/Content';
import Separator from '../components/Separator';
import Image from '../components/Image';
import FsLightbox from 'fslightbox-react';
import { section } from '../styles/components/Section.module.scss';
import { menu, menu__image } from '../styles/pages/Menu.module.scss';

export const MenuPageTemplate = ({ title, subtitle, headerImage, content, contentComponent, images }) => {
    const PostContent = contentComponent || Content;

    const [lightBoxController, setLightBoxController] = useState({
        toggler: false,
        slideIndex: 0,
    });

    const imageSources = images.map((image) => {
        const imageSrc = getSrc(image.src);
        if (imageSrc) {
            return imageSrc;
        }

        return image.src;
    });

    const openLightBox = (index) => {
        if (window.matchMedia('(width < 992px)').matches === true) {
            return;
        }

        setLightBoxController({
            toggler: !lightBoxController.toggler,
            index: index,
        });
    };

    return (
        <>
            <Header headerImage={headerImage} title={title} subtitle={subtitle} />

            <section className={section}>
                <Container className={menu}>
                    <Row>
                        {!!content && (
                            <Col xs={12} data-cy="menuContent">
                                <PostContent content={content} />
                                <Separator />
                            </Col>
                        )}
                        {images && images.length > 0 && (
                            <>
                                {images.map((image, index) => (
                                    <Col md={6} lg={4} key={index} className={menu__image} data-cy="menuImage">
                                        <div onClick={() => openLightBox(index)}>
                                            <Image src={image.src} alt={image.alt} title={image.title} />
                                        </div>
                                    </Col>
                                ))}
                                <FsLightbox
                                    toggler={lightBoxController.toggler}
                                    sources={imageSources}
                                    sourceIndex={lightBoxController.index}
                                />
                            </>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
};

MenuPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const MenuPage = ({ data: { page } }) => (
    <Layout meta={page.frontmatter.meta} currentPage={page.frontmatter.slug}>
        <MenuPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

MenuPage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.object.isRequired,
    }).isRequired,
};

export default MenuPage;

export const pageQuery = graphql`
    query MenuPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                title
                subtitle
                headerImage {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    publicURL
                }
                images {
                    src {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, width: 1138, height: 1600)
                        }
                        publicURL
                    }
                    alt
                    title
                }
                meta {
                    title
                    description
                    keywords
                }
            }
        }
    }
`;
