import React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { articlesList } from '../articles';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types/article';

export default function Gallery() {
  const [filteredArticles, setFilteredArticles] =
    useState<Article[]>(articlesList);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    console.log(search);
    setFilteredArticles(
      articlesList.filter((article) =>
        article.title.toLowerCase().match(new RegExp(search.toLowerCase()))
      )
    );
  }, [search]);

  function onUpdateSearch(event: any) {
    setSearch(event.target.value.replace(/[^a-z0-9]/gi, ''));
  }

  return (
    <Container fluid="sm" style={{ marginTop: '70px' }}>
      <Row>
        <Col sm={5}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="search">🔍</InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search"
              onChange={onUpdateSearch}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {filteredArticles.map((article, index) => {
          return (
            <Col key={index} sm={12} md={6} lg={4}>
              <ArticleCard article={article} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
