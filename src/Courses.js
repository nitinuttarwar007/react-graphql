import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CourseData from './CourseData';

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
        }
      }
    `}
  >
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.allCourses.map((currentCourse) => (
            <CourseData CourseData={currentCourse} />
        ));
    }}
  </Query>
);

export default Courses;
