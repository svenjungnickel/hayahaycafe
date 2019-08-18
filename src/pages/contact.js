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

export default ({ data }) => (
    <Layout currentPage="contact">
        <SEO title="Page two" keywords={[]} />
        <Header title="Contact" description="Feel free to contact us" header={data.header.childImageSharp.fluid} />

        <section className={SectionStyles.section}>
            <Container>
                <Row>
                    <Col xs={12} sm={4} className={ContactStyles.contact}>
                        <h2 className="display-5">{data.site.siteMetadata.title}</h2>
                        <p>&nbsp;</p>
                        <p>
                            Bug-ong, Mambajao
                            <br />
                            Camiguin Island
                            <br />
                            9100
                            <br />
                            Philippines
                        </p>
                        <div className={ContactStyles.separator}>
                            <hr />
                        </div>
                        <a
                            href="https://what3words.com/doings.beeping.motel"
                            target="_blank"
                            rel="noreferrer"
                            className={ContactStyles.what3words}
                        >
                            <Img fixed={data.what3words.childImageSharp.fixed} alt="What3words address" />
                            <p className={ContactStyles.what3words__address}>///doings.beeping.motel</p>
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
    </Layout>
);

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        header: file(relativePath: { eq: "header/default.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        what3words: file(relativePath: { eq: "what3words-icon.png" }) {
            childImageSharp {
                fixed(width: 80, height: 80) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
