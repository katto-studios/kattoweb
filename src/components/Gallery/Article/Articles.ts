import IPage from '../../../types/Page';

const lorem =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam, sunt minima dolores soluta mollitia, eligendi optio fugit suscipit nisi eum quibusdam nam illo cupiditate velit earum eaque officia error.';

const articles: IPage[] = [
	{
		id: 'hello-world',
		header: 'Hello World',
		tags: ['Test', 'Test2'],
		date: Date.now(),
		content:
			'# Hello, *world*!\n ### December 2022\n![image not found](/peeps/ryan.png)\n\n' +
			lorem,
	},
	{
		id: 'hello-world',
		header: 'Hello World',
		tags: ['Test', 'Test2'],
		date: Date.now(),
		content:
			'# Hello, *world*!\n ### December 2022\n![image not found](/peeps/ryan.png)\n\n' +
			lorem,
	},
];

export default articles;
