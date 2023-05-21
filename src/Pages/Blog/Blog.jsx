import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto py-8">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">What is an access token and refresh token?</h2>
          <p className="text-gray-700">
            An access token is a credential used to access protected resources on behalf of a user. It is typically
            short-lived and used for authorization purposes. A refresh token is a long-lived token that can be used to
            obtain a new access token without requiring the user to reauthenticate. Access tokens are usually stored in
            the client-side memory or local storage, while refresh tokens should be securely stored on the server-side.
          </p>
        </div>

        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">Compare SQL and NoSQL databases</h2>
          <p className="text-gray-700">
            SQL (Structured Query Language) databases are relational databases that store data in tables with predefined
            schemas and support ACID (Atomicity, Consistency, Isolation, Durability) transactions. NoSQL (Not Only SQL)
            databases, on the other hand, are non-relational databases that provide flexible schema models and
            scalability. They are often used for handling large amounts of unstructured or semi-structured data. SQL
            databases are better suited for complex queries and transactions, while NoSQL databases excel in scalability
            and performance.
          </p>
        </div>

        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">What is Express.js?</h2>
          <p className="text-gray-700">
            Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach
            to building web servers and APIs. With Express.js, you can handle HTTP requests and responses, define routes,
            and perform middleware operations. It offers a wide range of features and extensions that make it easy to
            develop robust and scalable web applications.
          </p>
        </div>

        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">What is Nest.js?</h2>
          <p className="text-gray-700">
            Nest.js is a progressive TypeScript-based web application framework that is built on top of Express.js. It
            follows the architectural style of Angular and provides a structured and efficient development approach for
            building server-side applications. Nest.js leverages decorators, modules, and dependency injection to
            organize code and improve maintainability. It integrates well with TypeScript and offers excellent support
            for building scalable and enterprise-grade applications.
          </p>
        </div>

        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">What is MongoDB Aggregate?</h2>
          <p className="text-gray-700">
            MongoDB Aggregate is a powerful data processing pipeline feature provided by MongoDB. It allows you to
            perform advanced data manipulations, transformations, and aggregations on documents within a collection. The
            aggregate pipeline consists of multiple stages such as $match, $group, $sort, $project, and more, which can
            be combined to perform complex data queries and analytics. It provides a flexible and efficient way to
            process large datasets and extract valuable insights from MongoDB collections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
