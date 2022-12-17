import React from 'react'
import preferenceTags from "../../backend/helper/preferenceTags";
 //preferenceTags
 const { summer, winter, casual, traditional, formal, sportsWear } =
 preferenceTags;


const TagOptions = () => {
let options = [];
options = options.concat(
 summer,
 winter,
 casual,
 traditional,
 formal,
 sportsWear
)
  return (
    {options}
  )
}

export default TagOptions
