import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Content, { HTMLContent } from '../components/Content';
import Separator from '../components/Separator';
import Image from '../components/Image';
import FsLightbox from 'fslightbox-react';
import SectionStyles from '../styles/components/Section.module.scss';
import GalleryStyles from '../styles/pages/Gallery.module.scss';

export const GalleryPageTemplate = ({ title, subtitle, headerImage, content, contentComponent, images }) => {
    const PostContent = contentComponent || Content;

    const [lightBoxController, setLightBoxController] = useState({
        toggler: false,
        slideIndex: 0,
    });

    const imageSources = images.map((image) => {
        if (!!image.src && !!image.src.childImageSharp) {
            if (image.src.childImageSharp.fluid) {
                return image.src.childImageSharp.fluid.src;
            }

            return image.src.childImageSharp.fixed.src;
        }

        return image.src;
    });

    const openLightBox = (index) => {
        setLightBoxController({
            toggler: !lightBoxController.toggler,
            index: index,
        });
    };

    return (
        <>
            <Header headerImage={headerImage} title={title} subtitle={subtitle} />

            <section className={SectionStyles.section}>
                <Container className={GalleryStyles.gallery}>
                    <Row>
                        {!!content && (
                            <Col xs={12}>
                                <PostContent content={content} />
                                <Separator />
                            </Col>
                        )}
                        {images && images.length > 0 && (
                            <>
                                {images.map((image, index) => (
                                    <Col
                                        xs={12}
                                        sm={12}
                                        md={6}
                                        lg={4}
                                        key={index}
                                        className={GalleryStyles.gallery__image}
                                        data-cy="galleryImage"
                                    >
                                        <a onClick={() => openLightBox(index)}>
                                            <Image src={image.src} alt={image.alt} title={image.title} />
                                        </a>
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

GalleryPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const GalleryPage = ({ data: { page } }) => (
    <Layout meta={page.frontmatter.meta} currentPage={page.frontmatter.slug}>
        <GalleryPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

GalleryPage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.object.isRequired,
    }).isRequired,
};

export default GalleryPage;

export const pageQuery = graphql`
    query GalleryPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                title
                subtitle
                headerImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
                images {
                    src {
                        childImageSharp {
                            fluid(
                                maxWidth: 1600
                                maxHeight: 1600
                                toFormat: PNG
                                fit: CONTAIN
                                background: "transparent"
                                pngCompressionSpeed: 10
                                pngQuality: 50
                                srcSetBreakpoints: [320, 420, 768, 1200]
                            ) {
                                ...GatsbyImageSharpFluid
                            }
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
