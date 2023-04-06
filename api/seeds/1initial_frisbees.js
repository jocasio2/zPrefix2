/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('frisbees').del()
  await knex('frisbees').insert([
    { brand: 'Discraft Ultrastar', type: 'Ultimate', color: 'White', description: 'Ultimate Frisbee disc; 175 g, competition level play.', img:'https://www.discraft.com/product/image/medium/us.white_max-br_1.jpg'},
    { brand: 'Innova Juggernaut', type: 'Golf', color: 'Red', description: 'Innova Golf disc; 180 g, for any weather.', img: 'https://discgolfdojo.com/wp-content/uploads/2023/03/Innova-Blank-halo-300x300.png.webp' },
    { brand: 'Discraft SkyStyler', type: 'Freestyle', color: 'Yellow', description: 'Golf disc; 180 g, for any weather. Good for all around play', img:'https://cdn11.bigcommerce.com/s-yt68tfv9/images/stencil/1000x1000/products/907/1262/skystyleryellow__41213.1658518893.jpg?c=2'},
    { brand: 'Wham-o High', type: 'Golf', color: 'White', description: 'This Wham-o Golf disc weighs 125g and is designed fairway play.', img:'https://cdn11.bigcommerce.com/s-yt68tfv9/images/stencil/1000x1000/products/867/14097/whamoWhiteRedTypeHighRigidity__07760.1657308149.jpg?c=2' },
    { brand: 'Discraft Ultrastar', type: 'Ultimate', color: 'Black', description: 'This Discraft disc weighs 175g and is designed for all-around play.', img:'https://www.discraft.com/product/image/medium/us.black_max-br_1.jpg' },
    { brand: 'Discraft Zone OS', type: 'Golf', color: 'Grey', description: 'This Discraft disc weighs 125g and is designed putt & approach', img:'https://discgolfdojo.com/wp-content/uploads/2021/06/Latatude64-blank-300x300.png.webp' },
    { brand: 'Innova Jay', type: 'Golf', color: 'Green', description: 'This Innova Golf disc weighs 175g and is a mid-range driver', img:'https://discgolfdojo.com/wp-content/uploads/2022/09/innova-jay-300x300.jpg.webp' },
    { brand: 'Wham-o Ultimate', type: 'Ultimate', color: 'Red', description: 'Wham-o Ultimate disc weighs 175g and is a competition level disc.', img:'https://cdn.shopify.com/s/files/1/0295/8593/2367/products/52000_FB2017_Ultimate_Red1795_Render1_540x.jpg?v=1669625077' },
    { brand: 'Wham-o HDX', type: 'Freestyle', color: 'Red', description: 'Wham-o freestyle disc weighs 125 and is good for all around play', img:'https://cdn11.bigcommerce.com/s-yt68tfv9/images/stencil/1000x1000/products/875/59642/DSC05361__77634.1656359873.JPG?c=2' },
  ]);
};
