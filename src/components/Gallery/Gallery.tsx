import { Link } from 'react-router-dom';
import articles from './Article/Articles';

export default function Gallery() {
	return (
		<div className='gallery'>
			<h1>Gallery</h1>
			{articles.map((article) => (
				<div className='article-listing'>
					<Link to={`/gallery/${article.id}`}>
						<b>{article.header}</b>
					</Link>{' '}
					<div className='tag' style={{ display: 'inline' }}>
						{new Date(article.date).toDateString()}{' '}
					</div>
					{article.tags.map((tag) => (
						<div className='tag' style={{ display: 'inline' }}>
							{tag}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
