import { useRouter } from 'next/router';
import React from 'react';
import { Badge, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { articles } from '../../articles';

export default function Article() {
  const router = useRouter();
  const { articleId } = router.query;
  const article = articles[articleId as string];
  if (article === undefined)
    return <h1 style={{ marginTop: 90 }}>Article not found</h1>;
  const { body, tags, thumbnailUrl } = article;
  return (
    <Container style={{ marginTop: 90 }} fluid="sm">
      <Row>
        <Col sm={12} lg={6}>
          <Image src={thumbnailUrl} fluid rounded />
        </Col>
        <Col>
          <h2>{article.title}</h2>
          <Stack direction="horizontal" gap={1}>
            {tags.map((tag, i) => (
              <Badge bg="secondary" key={i}>
                {tag}
              </Badge>
            ))}
          </Stack>
          <ReactMarkdown className="mt-3">{article.body}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}
