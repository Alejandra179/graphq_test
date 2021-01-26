import React from 'react';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';


function Home(){
    const {loading, data} =useQuery(FETCH_POSTS_QUERY);

    if(data){
        console.log(data)
    }
    return(
        <div>Home Page</div>
    )
}

const FETCH_POSTS_QUERY =gql`
{
    users{
      name
      _id
    }
}
`

export default Home;