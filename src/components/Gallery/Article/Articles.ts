import IPage from '../../../types/Page';
import { lokiArticle } from './loki-article';
import { tonvoArticle } from './tonvo-article';

const lorem =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam, sunt minima dolores soluta mollitia, eligendi optio fugit suscipit nisi eum quibusdam nam illo cupiditate velit earum eaque officia error.';

const articles: IPage[] = [
	tonvoArticle,
	lokiArticle,
];

export default articles;
