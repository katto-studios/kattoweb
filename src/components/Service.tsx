import { Container } from 'react-bootstrap';

type ServiceProps = {
  header: string;
  content: string;
};

export default function Service(props: ServiceProps) {
  const { header, content } = props;
  return (
    <Container>
      <h3>{header}</h3>
      <p>{content}</p>
    </Container>
  );
}
