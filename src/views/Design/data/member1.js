
import { Member, Club, Item, Acquisition, Session } from 'data/objectCreator'
import { Ownership } from '../../../data/objectCreator'

const item1 = new Item({id: '1', attributes: {
  name: 'Risk Legacy',
  releaseDate: '2019',
  publisher: 'Hasbro',
  canonicalImage: 'https://cf.geekdo-images.com/LxKu8_oihOQftb2npGvWMw__original/img/RYE_1BgSltTvgk5ATE84jPjCDbM=/0x0/filters:format(jpeg)/pic1196938.jpg',
  description: 'An important game in the boardgame genre, this spin off of the classic Risk game introduces a campaign-like "legacy" aspect to the game.',
  designer: "Rob Daviau, Chris Dupuis",
  minPlayers: '1',
  maxPlayers: '5',
  price: '$70',
}})

const item2 = new Item({id: '2', attributes: {
  canonicalImage: "https://cf.geekdo-images.com/vBOp95hH-UhrDawnMyY-xQ__original/img/5wEUzXvvsusT9Lxk6LXOZmgVHYY=/0x0/filters:format(png)/pic3673652.png",
  description: "The year is 3042: Humanity is ready to explore the galaxy. The most interesting celestial bodies to explore, and eventually colonize, have been known for centuries, and the nations of Earth finally have the technological level to reach them, thus beginning an unarmed competition that in the end the whole of humanity will win.\n\nKepler-3042 is a resource management game in which you have to explore, colonize, exploit, and terraform the planets of the Milky Way using the available technologies. In each round, you must choose which action to perform and which bonus to activate, managing your supplies of matter, energy and antimatter. The peculiar strength of the game is the innovative resource management: Each player has a finite amount of matter, energy and antimatter that they can produce or spend during the game. In each round, they can decide to burn forever one or more resources to perform powerful actions, thereby allowing them to follow different strategies.\n\n",
  designer: "Simone Cerruti Sola",
  maxPlayers: "4",
  minPlayers: "1",
  name: "Kepler-3042",
  publisher: "Origames",
  releaseDate: "2016",
  price: ""
}})

const item3 = new Item({id: '3', attributes: {
  canonicalImage: "https://cf.geekdo-images.com/aoPM07XzoceB-RydLh08zA__original/img/bYLzrwZO9u-3h2wyU-PHc8aTOY4=/0x0/filters:format(jpeg)/pic428828.jpg",
  description: "In Small World, players vie for conquest and control of a world that is simply too small to accommodate them all.&amp;#10;&amp;#10;Designed by Philippe Keyaerts as a fantasy follow-up to his award-winning Vinci, Small World is inhabited by a zany cast of characters such as dwarves, wizards, amazons, giants, orcs, and even humans, who use their troops to occupy territory and conquer adjacent lands in order to push the other races off the face of the earth.&amp;#10;&amp;#10;Picking the right combination from the 14 different fantasy races and 20 unique special powers, players rush to expand their empires - often at the expense of weaker neighbors. Yet they must also know when to push their own over-extended civilization into decline and ride a new one to victory!&amp;#10;&amp;#10;On each turn, you either use the multiple tiles of your chosen race (type of creatures) to occupy adjacent (normally) territories - possibly defeating weaker enemy races along the way, or you give up on your race letting it go &amp;quot;into decline&amp;quot;. A race in decline is designated by flipping the tiles over to their black-and-white side.&amp;#10;&amp;#10;At the end of your turn, you score one point (coin) for each territory your races occupy. You may have one active race and one race in decline on the board at the same time. Your occupation total can vary depending on the special abilities of your race and the territories they occupy. After the final round, the player with the most coins wins.&amp;#10;&amp;#10;Clarifications: available in a pinned forum post.&amp;#10;&amp;#10;",
  designer: "Philippe Keyaerts",
  maxPlayers: "5",
  minPlayers: "2",
  name: "Small World",
  price: "$40",
  publisher: "Days of Wonder",
  releaseDate: "2009",
  price: "", 
}})

const ownership1 = new Ownership({item: item1})
ownership1.acquisitions.push(new Acquisition({attributes: {
  date: '2021-10-01',
  price: "$40",
}}))
ownership1.acquisitions.push(new Acquisition({attributes: { 
  date: '2020-03-20',
  price: "$50",
}}))
ownership1.attributes.favorite = true
ownership1.attributes.collection = true

const ownership2 = new Ownership({item: item2})
ownership2.attributes.collection = true

const ownership3 = new Ownership({item: item3})
ownership3.attributes.collection = true
ownership3.attributes.wishlist = true

const member = new Member({attributes: {name: 'Alice McGee'}})
const club = new Club({attributes: {name: 'Test Club #1'}})

club.sessions.push(new Session({item: item1, attributes: {participants: ['Alice', 'Bob', 'Charlie', 'Dan', 'Erin']}}))
club.sessions.push(new Session({item: item2, attributes: {participants: ['Alice McGee', 'Bob Longnamington', 'Charlie The Man Dude', 'Dan', 'Erin Erinovicherinly']}}))

member.clubs.push(club)
member.ownerships.push(ownership1, ownership2, ownership3)
club.members.push(member)

export default member
