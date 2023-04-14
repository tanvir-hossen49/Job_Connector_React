import React from "react";
import PageHeader from "./PageHeader";

const Blogs = () => {
  return (
    <div>
      <PageHeader text="Blog" />

      <div className="my-container grid gap-3">
        <div>
          <h4>1{") "}When should you use context API?</h4>
          <p>
            Context is primarily used when some data needs to be accessible by
            many components at different nesting levels. Apply it sparingly
            because it makes component reuse more difficult. If you only want to
            avoid passing some props through many levels, component composition
            is often a simpler solution than context.
          </p>
        </div>
        <div>
          <h4>2{") "}What is a custom hook?</h4>
          <p>
            A custom hook is a JavaScript function that uses one or more of the
            built-in hooks (such as useState, useEffect, useContext, etc.) to
            create reusable logic that can be shared across multiple components.
          </p>
        </div>
        <div>
          <h4>3{") "}What is useRef?</h4>
          <p>
            The useRef hook is a function that allows you to create a mutable
            reference to a DOM element or any other value that persists across
            renders. It returns a single mutable value that can be updated
            without causing the component to re-render.
          </p>
        </div>
        <div>
          <h4>4{") "}What is useMemo?</h4>
          <p>
            The useMemo hook is a function that allows you to memoize the result
            of a function so that it is only re-computed when one of its
            dependencies changes. This can be useful for optimizing the
            performance of a component that is expensive to render.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
