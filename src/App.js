import React from 'react';
//importing AppoloClient library from apollo-boot lib
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './Courses';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer} = Layout;

// creating New Instance of ApolloClient and stored in client
const client = new ApolloClient({
  //URI of the GraphQL
  uri: "https://r9314pqm8n.lp.gql.zone/graphql"
});

const App = () => (
  <div>
    <Layout style={{ background: '#fff' }}>
      <Header style={{background: '#7dbcea'}}>
        React Js and Graph QL - Sample App
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <ApolloProvider client={client}>
              <Courses />
          </ApolloProvider>
        </div>
      </Content>
      <Footer>
        React Redux app with Ant Design.
      </Footer>
    </Layout>
  </div>
);

export default App;
