import React from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";
import './Blog.css'

const Blog = () => {
  const ref = React.createRef();

  return (
    // <Container>
    //   <div>
    //     <Pdf targetRef={ref} filename="code-example.pdf">
    //       {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
    //     </Pdf>
    //     <div ref={ref}>
    //       <h2>Blog Title</h2>
    //       <p>This is some information about the blog page.</p>
    //     </div>
    //   </div>
    // </Container>

    <div>
      <div >
      <Container>
        <h1 className="helium-blogs">Helium Blogs</h1>
        <Pdf targetRef={ref} filename="code-example.pdf">
           {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
           </Pdf>
        <div ref={ref} className="blogs">
          <div>
            <h5>
              The differences between uncontrolled and controlled components
            </h5>
            <img
              style={{ width: "50%" }}
              src={
                "https://cdn.hashnode.com/res/hashnode/image/upload/v1678720125694/4b662a37-aab8-4880-a833-a05d051de623.png"
              }
              alt=""
            />
            <p>
              uncontrolled components are external to the application and are
              not under its direct control, while controlled components are
              created and managed by the application. Controlled components are
              designed to behave predictably and be easily customizable, making
              them easier to maintain than uncontrolled components.
            </p>
          </div>
          
          <div>
            <h5>How to validate React props using PropTypes</h5>
            <img
              style={{ width: "50%" }}
              src={
                "https://cdn.educba.com/academy/wp-content/uploads/2020/07/React-Props.jpg"
              }
              alt=""
            />
            <p>
              PropTypes is a library used in React to validate the props passed
              to a component. To use PropTypes, you need to install it using npm
              or yarn, import it into your component file, define propTypes by
              adding a propTypes object to your component class, and validate
              props by running PropTypes, which will automatically log a warning
              in the console if a prop does not match the expected type or
              value. By using PropTypes, you can ensure that your components are
              used correctly and catch errors early in development.
            </p>
          </div>
          
          <div>
            <h5>The difference between nodejs and express js</h5>
            <img
              style={{ width: "50%" }}
              src={
                "https://procoders.tech/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png"
              }
              alt=""
            />
            <p>
              Node.js is a JavaScript runtime built on the Chrome V8 engine,
              while Express.js is a web application framework built on top of
              Node.js. Node.js provides an environment for running JavaScript
              code on the server, while Express.js provides a set of tools and
              utilities for building web applications and APIs. Express.js
              simplifies web development with Node.js and provides a
              higher-level abstraction for building web applications and APIs,
              abstracting away many of the low-level details of working with
              Node.js.
            </p>
          </div>
          
          <div>
            <h5>
              What is a custom hook, and why will you create a custom hook?
            </h5>
            <div>
              <img
                style={{ width: "50%" }}
                src={
                  "https://i.ibb.co/gZdK0MM/14-06-21-how-to-create-your-own-react-custom-hooks-blog.jpg"
                }
                alt=""
              />
            </div>
            <p>
              custom hook in React is a JavaScript function that uses one or
              more of the built-in React hooks to encapsulate a piece of
              reusable logic. Custom hooks allow you to abstract away complex or
              repetitive logic from your components and reuse it across multiple
              components in your application.custom hook in React is a
              JavaScript function that uses one or more of the built-in React
              hooks to encapsulate a piece of reusable logic. Custom hooks allow
              you to abstract away complex or repetitive logic from your
              components and reuse it across multiple components in your
              application.
            </p>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default Blog;
