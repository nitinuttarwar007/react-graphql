import React, { Component } from 'react';
//importing AppoloClient library from apollo-boot lib
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './Courses';
import './App.css';


// Refer the Medium blog https://medium.com/codingthesmartway-com-blog/getting-started-with-react-and-graphql-395311c1e8da
// creating New Instance of ApolloClient and stored in client
const client = new ApolloClient({
  //URI of the GraphQL
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React Js and Graph QL - Sample App</a>
      </nav>
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
