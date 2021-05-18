import image from './assets/image.png';
import {
  TextBlock,
  ColumnsBlock,
  ImageBlock,
  TitleBlock,
} from './classes/blocks';
export const model = [
  new TitleBlock('Конструктор сайтов', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right,#ff0099,#493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ImageBlock(image, {
    styles: {
      background: 'linear-gradient(to left,#f2994a,#f2c94c)',
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Picture',
  }),
  new ColumnsBlock(
    [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae laudantium sed nostrum impedit sapiente facere eligendi ducimus nulla quis, debitis, earum expedita nihil, perferendis cum placeat ipsa necessitatibus at.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae laudantium sed nostrum impedit sapiente facere eligendi ducimus nulla quis, debitis, earum expedita nihil, perferendis cum placeat ipsa necessitatibus at.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae laudantium sed nostrum impedit sapiente facere eligendi ducimus nulla quis, debitis, earum expedita nihil, perferendis cum placeat ipsa necessitatibus at.',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom,#8e2de2,#4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  new TextBlock('here we go with some text', {
    styles: {
      background: 'linear-gradient(to left,#f2994a,#f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
];
