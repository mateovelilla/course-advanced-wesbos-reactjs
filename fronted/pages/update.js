import UpdateItem from '../components/UpdateItem';
const Sell = ({id}) => (
  <div>
    <UpdateItem id={id}/>
  </div>
)
export default Sell;
export async function getServerSideProps({ query }) {
    return {
      props: {
        ...query
      },
    }
  }