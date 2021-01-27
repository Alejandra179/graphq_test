import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FETCH_POSTS_QUERY =gql`
query{
    users{
      name
      _id
    },
    getAccesorios{
        marca
        color
    }
}
`
function Home(){
    const {loading, data,error} =useQuery(FETCH_POSTS_QUERY);
    if(data){
        console.log(data)
    }
    return(
        <div>Home Page</div>
    )
}



export default Home;