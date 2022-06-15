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
			<h1>{currentArticle.header}</h1>
			<h4>{new Date(currentArticle.date).toDateString()}</h4>
			<h4 style={{marginTop: 10}}>
			{currentArticle.tags.map((tag) => (
				<div className='tag' style={{ display: 'inline' }}>
					{tag}
				</div>
			))}
			</h4>
			<br/><br/>
			<ReactMarkdown>{currentArticle.content}</ReactMarkdown>
		</div>
	);
}
