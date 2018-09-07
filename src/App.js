import React from 'react';
//importing AppoloClient library from apollo-boot lib
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './Courses';
import { Layout } from 'antd';
import './App.css';

const { Header, Content } = Layout;

// creating New Instance of ApolloClient and stored in client
const client = new ApolloClient({
  //URI of the GraphQL
  uri: "https://r9314pqm8n.lp.gql.zone/graphql"
});

const App = () => (
  <div>
    <Layout className="layoutStyle">
      <Header className="layoutHeader">
        React Js and Graph QL - Sample App
      </Header>
      <Content className="layoutContent">
        <div className="layputDiv">
          <ApolloProvider client={client}>
              <Courses />
          </ApolloProvider>
        </div>
      </Content>
    </Layout>
  </div>
);

export default App;
