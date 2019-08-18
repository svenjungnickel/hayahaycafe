import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SEO from '../components/seo';
import Layout from '../components/layout';
import IndexStyles from '../styles/pages/index.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

export default ({ data }) => (
    <Layout currentPage="/">
        <SEO title={data.site.siteMetadata.title} keywords={[]} />

        <header className={IndexStyles.indexHeader} id="home">
            <Img
                fluid={data.header.childImageSharp.fluid}
                alt="Hayahay Cafe"
                className={IndexStyles.indexHeader__image}
            />

            <div className={IndexStyles.indexHeader__content}>
                <Container>
                    <div className={IndexStyles.indexHeader__contentInner}>
                        <h1 className="display-1">{data.site.siteMetadata.title}</h1>
                        <p className="lead">{data.site.siteMetadata.description}</p>
                    </div>
                </Container>
            </div>
        </header>

        <section className={SectionStyles.section} id="cafe">
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-5">1st Smoothie Bowls in Camiguin</h2>
                        <p>&nbsp;</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={9} lg={8}>
                        <p>
                            Founded in the beautiful Island of Camiguin. est 2017. It was created to provide a decadent
                            sense of great tasting food for our bodies and mind. An Organic and eco-friendly Cafe.
                        </p>
                        <p>
                            Our hipster style cafe was built around the principle of creating an utterly welcoming
                            space, for individuals, families and groups.
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <Button href="/story">Read more about our story</Button>
                        </p>
                    </Col>
                    <Col xs={12} sm={1} lg={1}>
                        &nbsp;
                    </Col>
                    <Col xs={12} sm={2} lg={3}>
                        <p>
                            <strong>Location</strong>
                        </p>
                        <p>
                            Bug-ong, Mambajao
                            <br />
                            Camiguin Island
                            <br />
                            9100
                            <br />
                            Philippines
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <strong>Hours</strong>
                        </p>
                        <p>
                            Mo closed
                            <br />
                            Th-Su 8:00–19:30
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className={SectionStyles.section} id="menu">
            <div className="container">
                <h2 className="display-5 text-center">Menu</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img src="https://picsum.photos/200/300" alt="lorem ipsum" />
            </div>
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
        header: file(relativePath: { eq: "header/index.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
