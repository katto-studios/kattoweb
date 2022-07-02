import { Badge, Button, Card, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types/article';

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard(props: ArticleCardProps) {
  const navigate = useNavigate();

  const { id, title, summary, thumbnailUrl, tags } = props.article;

  return (
    <Card
      onClick={() => {
        navigate(`/article/${id}`);
      }}>
      <Card.Img variant="top" src={thumbnailUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{summary}</Card.Body>
        <Stack direction="horizontal" gap={1}>
          {tags.map((tag, i) => (
            <Badge bg="secondary" key={i}>
              {tag}
            </Badge>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
