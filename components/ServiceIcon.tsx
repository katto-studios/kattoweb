import { Image } from 'react-bootstrap';

type ServiceIconProps = {
  url: string;
};

export default function ServiceIcon(props: ServiceIconProps) {
  const { url } = props;
  return (
    <Image src={url} style={{ width: 50, height: 50, margin: '0 10px' }} />
  );
}
