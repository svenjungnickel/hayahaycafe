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
import { section } from '../styles/components/Section.module.scss';
import { gallery, gallery__image } from '../styles/pages/Gallery.module.scss';
import { getSrc } from 'gatsby-plugin-image';

export const GalleryPageTemplate = ({ title, subtitle, headerImage, content, contentComponent, images }) => {
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
                <Container className={gallery}>
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
                                        className={gallery__image}
                                        data-cy="galleryImage"
                                    >
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
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    publicURL
                }
                images {
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                width: 1200
                                height: 1200
                                transformOptions: { fit: CONTAIN }
                                formats: [PNG]
                                backgroundColor: "transparent"
                                pngOptions: { compressionSpeed: 10, quality: 50 }
                                breakpoints: [320, 420, 768]
                            )
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
