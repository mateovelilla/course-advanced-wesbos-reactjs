import Items from '../components/Items';
// TODO: Learn about it https://nextjs.org/docs/routing/dynamic-routes

const Home = (props) => (
  <div>
    <Items page={props.page || 1}/>
  </div>
)
export default Home;