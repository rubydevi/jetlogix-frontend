import React from 'react';

export default function Reserve() {
  return (
    <div className="position-absolute w-100   page top-0 start-0 d-flex justify-content-center align-items-center">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </form>
    </div>
  );
}
