import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Access Token and Refresh Token:

Access Token: A credential issued upon successful authentication, used to access protected resources and perform authorized actions.
Refresh Token: A long-lived credential used to obtain a new access token when the current one expires.
Storage on the client-side:

Access tokens can be stored securely in memory or encrypted local storage.
Refresh tokens should be stored securely, preferably in an HTTP-only cookie or a secure storage mechanism.
SQL and NoSQL databases:

SQL databases: Relational, structured data, predefined schemas, ACID compliance (MySQL, PostgreSQL, Oracle).
NoSQL databases: Unstructured/semi-structured data, flexible schema, horizontal scalability (MongoDB, Cassandra, Redis).
Express.js: Minimal and flexible web application framework for Node.js, simplifies server-side application development.

NestJS: Progressive Node.js framework built on Express.js, offers dependency injection, module-based architecture, and TypeScript support.

MongoDB aggregate: Powerful feature for advanced data processing in MongoDB, uses operators and stages in a pipeline for data transformation, filtering, grouping, and analysis. Enables complex queries and data transformations.</h1>
        </div>
    );
};

export default Blog;