import React, { Component } from 'react';
import { Mutation } from "@apollo/client/react/components";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from './Items'; 

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!){
    deleteItem(id: $id){
      id
    }
  }
`;
export default class DeleteItem extends Component {
  update = (cache, payload) =>{
    const data = cache.readQuery({query: ALL_ITEMS_QUERY});
    const newData = data.items.filter(item => item.id !== payload.data.deleteItem.id);
    cache.writeQuery({query: ALL_ITEMS_QUERY, data:{
      items: newData
    }});
  }
  render() {
    return (
      <Mutation 
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem,{ error }) => (
          <button onClick={() => {
            if(confirm('Are you sure you want to delete this item?')) {
              deleteItem();
            }
          }} >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}
