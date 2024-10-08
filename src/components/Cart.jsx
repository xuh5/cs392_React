const Cart = ({ selected, courses }) => {

    const selectedCourses = selected.map(selectedKey => courses[selectedKey]);

    return (
      <div className="cart">
        {
          selectedCourses.length === 0
          ? (
            <div>
              <h2>Your course plan is empty.</h2>
              <p>Select courses by clicking on them in the list.</p>
            </div>
          ) : (
            selectedCourses.map(course => (
              <div key={course.number}>
                <h3>{course.title}</h3>
                <p>Course Number: {course.number}</p>
                <p>Meeting Time: {course.meets}</p>
              </div>
            ))
          )
        }
      </div>
    );
  };
  
export default Cart;
