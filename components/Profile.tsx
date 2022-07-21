import { Container, Image } from 'react-bootstrap';

type ProfileProps = {
  url: string;
  name: string;
  role: string;
  content: string;
  color: string;
};

export default function Profile(props: ProfileProps) {
  const { name, role, content, url, color } = props;
  return (
    <Container>
      <Image
        src={url}
        style={{ objectFit: 'contain', backgroundColor: color }}
        //width={300}
        fluid
        roundedCircle
        className="mb-3"
      />
      <h4>{name}</h4>
      <h6>{role}</h6>
      <p>{content}</p>
    </Container>
  );
}
