import SingleItem from '../components/SingleItem';

const Item = props => (
    <div>
        <SingleItem id={props.id}/>
    </div>
);
export async function getServerSideProps({ query }) {
  return {
    props: {
      ...query
    },
  }
}
export default Item;