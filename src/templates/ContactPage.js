import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ContactForm from '../components/contactForm';
import SectionStyles from '../styles/components/section.module.scss';
import ContactStyles from '../styles/pages/contact.module.scss';

// Export Template for use in CMS preview
export const ContactPageTemplate = ({ title, subtitle, featuredImage, body, what3WordsAddress, what3wordsIcon }) => (
    <>
        <Header title={title} subtitle={subtitle} header={featuredImage} />

        <section className={SectionStyles.section}>
            <Container>
                <Row>
                    <Col xs={12} sm={4} className={ContactStyles.contact}>
                        <p dangerouslySetInnerHTML={{ __html: body }} />
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
                                <Img fluid={what3wordsIcon.childImageSharp.fixed} alt="What3words address" />
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

// Export Default ContactPage for front-end
const ContactPage = ({ data: { page, what3wordsIcon } }) => (
    <Layout currentPage="/contact">
        <SEO
            title={page.frontmatter.title}
            keywords={(page.frontmatter.meta && page.frontmatter.meta.keywords) || []}
        />
        {/*<SEO meta={page.frontmatter.meta || false} title={page.frontmatter.title || false} />*/}

        <ContactPageTemplate what3wordsIcon={what3wordsIcon} {...page.frontmatter} body={page.html} />
    </Layout>
);

export default ContactPage;

export const pageQuery = graphql`
    query ContactPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                subtitle
                what3WordsAddress
                featuredImage {
                    childImageSharp {
                        fluid(maxHeight: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
            }
        }
        what3wordsIcon: file(relativePath: { eq: "what3words-icon.png" }) {
            childImageSharp {
                fixed(width: 80, height: 80) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
