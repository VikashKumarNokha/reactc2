import {useState} from "react";
export const AddStudent = () => {
  const [formData, setFormData] = useState({});  
  const handlechange = (e)=>{
        const {className, value} = e.target;
          setFormData(
              {
               ...formData,
               [className] : value, 
              }
               );
  }

    const handlesubmit = (e)=>{
          e.preventDefault();
          console.log( "data",formData)

          fetch("http://localhost:8080/students",{
      method:"POST",
      headers : {
       "content-type" : "application/json"
      },
      body: JSON.stringify(formData),
      });

    }
  return (
    <form className="addstudent" onSubmit={handlesubmit}>
        {formData.first_name}
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          onChange={handlechange}
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          onChange={handlechange}
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          onChange={handlechange}
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            onChange={handlechange}
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            onChange={handlechange}
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          onChange={handlechange}
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          onChange={handlechange}
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          onChange={handlechange}
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handlechange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
