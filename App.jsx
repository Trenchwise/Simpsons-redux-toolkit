import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";
// import Loading from "./components/Loading";
// import Search from "./components/Search";
import "./App.css";
import { validate } from "./validation";
import { connect } from "react-redux";

const App = () => {
  const [simpsons, setSimpsons] = useState(); //The box that holds the data
  const [character, setCharacter] = useState("Enter character"); //To ask the API to filter characters
  const [input, setInput] = useState();
  const [errors, setErrors] = useState(null); // null = no errors

  // Retrieving the data
  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      // adding a unique ID to each character
      data.forEach((element, index) => {
        element.id = index + Math.random() + index;
      });
      setSimpsons(data);
    } catch (error) {
      console.log(error);
    }
  }, [character]);

  useEffect(() => {
    getData();
  }, [character]); // [] means run once
  // updated the data - so it runs again when character data changes

  const onDelete = (id) => {
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });

    const copy = [...simpsons]; // This makes a copy of the state
    copy.splice(indexOf, 1); // This spices at position one in the index
    setSimpsons(copy); // This tells React to update the copy
  };

  //Updates the state for the specific character to make it liked or disliked
  const onLikeToggle = (id) => {
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });

    const copy = [...simpsons];

    copy[indexOf].liked = !copy[indexOf].liked;

    setSimpsons(copy);
  };

  console.log(simpsons);

  // loading message, if there is no data return loading
  if (!simpsons) return <h1>Loading</h1>;

  // controlling inpout box
  if (value.includes("1")) {
    // QUESTION how can I make this an array, so no numbers can be included
    setCharacter("no numbers allowed");
    return;
  }

  setCharacter(e.target.value);
};

// validation

const res = await validate(input);

setErrors(res);

// What does this do? Gathering the data from the input box?
const onInput = async (e) => {
  setInput({ ...input, [e.target.id]: e.target.value });
  const { value } = e.target;

  return (
    <>
      <input
        type="text"
        value={character} // set the value to be the state
        onInput={onInput}
      ></input>
      <p>{errors && errors.character}</p>

      <p>{character}</p>

      <Simpsons
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
        simpsons={simpsons}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
