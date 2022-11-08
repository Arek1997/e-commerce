import { useParams } from 'react-router-dom';

import Container from '../components/UI/container/Container';
import { SectionHero } from '../style/products/styled-products';
import { StyledProductDetails } from '../style/product-details/styled-productDetails';

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

const ProductDetails = (props) => {
	const { productId } = useParams();
	const product = PRODUCT_LIST.find((item) => item.id === productId);
	console.log(product);

	return (
		<>
			<SectionHero>
				<Container padding='section'>
					<h2>Products / {product.title}</h2>
				</Container>
			</SectionHero>

			<StyledProductDetails className='section'>
				<Container padding='section'>
					<article className='product'>
						<div className='product__img'>
							<img src={product.image} alt={product.title} />
						</div>
						<div className='product__details'>
							<h3 className='product__name'>{product.title}</h3>
							<span className='product__brand'>{product.brand}</span>
							<span className='product__price'>{product.price}</span>
							<p className='product__description'>{product.description}</p>
							<button className='product__button button'>Add to cart</button>
						</div>
					</article>
				</Container>
			</StyledProductDetails>
		</>
	);
};

export default ProductDetails;
