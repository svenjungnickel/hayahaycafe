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
import MenuStyles from '../styles/pages/Menu.module.scss';

export const MenuPageTemplate = ({ title, subtitle, headerImage, content, contentComponent, images }) => {
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
                <Container className={MenuStyles.menu}>
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
                                    <Col
                                        md={12}
                                        lg={6}
                                        key={index}
                                        className={MenuStyles.menu__image}
                                        data-cy="menuImage"
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
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
                images {
                    src {
                        childImageSharp {
                            fluid(maxWidth: 1156, maxHeight: 1600) {
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
