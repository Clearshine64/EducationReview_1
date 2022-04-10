import educations from "../images/educations.png";

function Educations() {
  return (
    <div className="row d-flex align-items-center pt-5">
      <div className="col-md-6">
        <img src={educations} className="App-educations-logo" alt="logo" />
      </div>
      <div className="col-md-6">
        <h3 className="edu">Education Starts Here</h3>
        <p>
          One of the most important choices in your life is choosing the right
          school for your child, the right university, college or online course.
          By using our platform, you’ll have access to thousands of choices
          suited for you. Don’t leave it to chance or relying on the few
          opinions of others.
        </p>
        
        <button className="btn btn-primary mt-3"><i class="fa fa-search" aria-hidden="true"></i> Search Reviews</button>
      </div>
    </div>
  );
}

export default Educations;
