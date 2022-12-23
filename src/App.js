import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Cards from "./Cards";
import "./Cards.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [form, setForm] = useState([
    {
      firstName: "",
      email: "",
      website: "",
      image: "",
      gender: "",
      java: false,
      html: false,
      css: false
    }
  ]);

  //pushing the object in a new array

  const [arr, setArr] = useState([])


  const setValues = (event) => {
    setArr(
      (oldVal) => {
        return [...oldVal, form]
      }
    )
    event.preventDefault();
    clearData()
  }

  console.log(arr)

  const studentElements = arr.map(arr1 => {
    return <Cards firstName={arr1.firstName} email={arr1.email} website={arr1.website}
      image={arr1.image} gender={arr1.gender} java={arr1.java} html={arr1.html} css={arr1.css} />
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setForm(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const clearData = () => {
    setForm({
      firstName: "",
      email: "",
      website: "",
      image: "",
      gender: "",
      java: false,
      html: false,
      css: false
    })
    let allRadioButtons = document.querySelectorAll('.radiobutton')
    allRadioButtons.forEach(value => value.checked = false)
  }


  return (
    <>
    <Header/>
    <div className="App">
      <div className="left">
        <form onReset={clearData} onSubmit={setValues}>
          <span className="identifier">Name</span>
          <br/>
          <input className="text-feild" type="text" placeholder="Enter Your Name" onChange={handleChange} name="firstName" value={form.firstName} />
          <br/>
          <span className="identifier">Email</span>
          <br/>
          <input className="text-feild" type="text" placeholder="Email" onChange={handleChange} name="email" value={form.email} />
          <br/>
          <span className="identifier">Website Address</span>
          <br/>
          <input className="text-feild" type="text" placeholder="Website" onChange={handleChange} name="website" value={form.website} />
          <br/>
          <span className="identifier">Image Link</span>
          <br/>
          <input className="text-feild" type="text" placeholder="Image link" onChange={handleChange} name="image" value={form.image} />
          <br/>
          <span className="identifier">Skills : </span>
          <br/>
          <input type="checkbox" checked={form.java} id="java" onChange={handleChange} name="java" />
          <label htmlFor="isFriendly">Java</label>
          <br />
          <input type="checkbox" checked={form.html} id="html" onChange={handleChange} name="html" />
          <label htmlFor="isFriendly">HTML</label>
          <br />
          <input type="checkbox" checked={form.css} id="css" onChange={handleChange} name="css" />
          <label htmlFor="isFriendly">CSS</label>
          <br />

          <fieldset>
            <legend>Gender</legend>

            <input
              className="radiobutton"
              type="radio"
              id="male"
              name="gender"
              onChange={handleChange}
              value="male"
            />
            <label htmlFor="male">Male</label>
            <br />

            <input
              className="radiobutton"
              type="radio"
              id="female"
              name="gender"
              onChange={handleChange}
              value="female"
            />
            <label htmlFor="female">Female</label>
            <br />

            <input
              className="radiobutton"
              type="radio"
              id="others"
              name="gender"
              onChange={handleChange}
              value="others"
            />
            <label htmlFor="others">Others</label>
            <br />

          </fieldset>
          <button className="submit">Enroll Student</button>
          <button type="Reset"
            className="clear">Clear</button>

        </form>
      </div>
      <div className="right">
        <p className="Heading">ENROLLED STUDENTS</p>
        {studentElements}
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default App;
