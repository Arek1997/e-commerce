import FeaturedItem from './Featured-item';

import { StyledList } from '../../../style/featured/styled-list';

const PRODUCT_LIST = [
	{
		id: 'p1',
		title: 'High-Back Bench',
		brand: 'by ikea',
		price: '$9.99',
		image:
			'https://dl.airtable.com/.attachmentThumbnails/d86e13eec1b200e2b21282b99a9382be/6d92321b',
		description:
			'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
	},
	{
		id: 'p2',
		title: 'Utopia Sofa',
		brand: 'by marcos',
		price: '$39.95',
		image:
			'https://dl.airtable.com/.attachmentThumbnails/ee08b908ae61c8241f56130eedefac0a/22e0d8df',
		description:
			'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
	},
	{
		id: 'p3',
		title: 'Entertainment Center',
		brand: 'by liddy',
		price: '$29.99',
		image:
			'https://dl.airtable.com/.attachmentThumbnails/37c101731d977a9ff9c98530185b77e0/078958cd',
		description:
			'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
	},
];

const FeaturedList = () => {
	return (
		<StyledList className='product-list'>
			{PRODUCT_LIST.map((item) => {
				return (
					<FeaturedItem
						key={item.id}
						image={item.image}
						title={item.title}
						price={item.price}
					/>
				);
			})}
		</StyledList>
	);
};

export default FeaturedList;
