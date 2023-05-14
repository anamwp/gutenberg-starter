import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import edit from './edit';
import save from './save';
const { attributes } = metadata;
registerBlockType('anam-guternberg-starter-block/card', {
	apiVersion: 2,
	title: 'Card',
	icon: 'admin-post',
	category: 'anam-starter',
	attributes,
	edit,
	save,
});