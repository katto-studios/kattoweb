import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import IPage from '../../../types/Page';
import articles from './Articles';

export default function Article() {
	const location = useLocation();

	const currentArticleName = location.pathname.split('/')[2];

	const currentArticle = articles.filter(
		(x) => currentArticleName == x.id
	)[0];

	if (currentArticle == undefined) {
		return (
			<div className='article'>
				{' '}
				<h2>Article Not Found</h2>
			</div>
		);
	}

	return (
		<div className='article'>
			<ReactMarkdown>{currentArticle.content}</ReactMarkdown>
		</div>
	);
}
