import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FETCH_POSTS_QUERY =gql`
query{
    users{
      name
      _id
    }
}
`
function Home(){
    const {loading, data,error} =useQuery(FETCH_POSTS_QUERY);
    if(loading) {
        console.log(loading)
    }
    if(error){
        console.log(error)
    }
    if(data){
        console.log(data)
    }
    return(
        <div>Home Page</div>
    )
}



export default Home;