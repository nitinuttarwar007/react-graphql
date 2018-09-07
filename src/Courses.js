import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Skeleton, List, Avatar, Icon } from 'antd'

/*The Query component makes it extremely easy to embed the GraphQL query directly in the JSX code of the component.
Furthermore the Query component contains a callback method which is invoked once the GraphQL query is executed.
*/

const Courses = () => (
  <Query
    query={gql`
      {
        allCourses {
          id
          title
          author
          description
          topic
          url
          likes
          stars
          comments
        }
      }
    `}
  >
    {({ loading, error, data }) => {
        const listData = data.allCourses;
        const IconText = ({ type, text }) => (
          <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
          </span>
        );

        if(loading) return (
          <Skeleton loading={loading} active avatar />        
        )

        if(error) return (<p>Error :(</p>);
        
        return (
          <div>
            <List
              itemLayout="vertical"
              bordered="true"
              size="large"
              header={<div style={{ textAlign:'center', fontSize:'24px'}}>Available Courses</div>}
              dataSource={listData}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  actions={!loading && [<IconText type="star-o" text={item.stars} />, <IconText type="like-o" text={item.likes} />, <IconText type="message" text={item.comments} />]}
                  extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                  />
                  <h6 className="card-subtitle mb-2 text-muted">by {item.author}</h6>
                  <p className="card-text">{item.description}</p>
                  <a href={item.url} className="card-link">Go to CourseData ...</a>
                </List.Item>
              )}
            />
          </div>
        );
    }}
  </Query>
);

export default Courses;
