import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Content from '../components/content';
import SectionStyles from '../styles/components/section.module.scss';

const DefaultPageTemplate = ({ title, subtitle, headerImage, content, contentComponent }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <Header title={title} subtitle={subtitle} headerImage={headerImage} />

            <section className={SectionStyles.section}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <PostContent content={content} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

DefaultPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

export default DefaultPageTemplate;
