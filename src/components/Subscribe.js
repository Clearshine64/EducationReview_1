function Subscribe() {
  return (
    <div className="subscribe">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h3>Subscribe our Newsletter & </h3>
          <h3>Get every updates.</h3>
        </div>
        <div className="col-md-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Write Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
              Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
