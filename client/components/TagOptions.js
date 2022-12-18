import React from 'react'
import preferenceTags from "../../backend/helper/preferenceTags";
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
 

const TagOptions = ({tags,setTags}) => {
  //State properties
  const [error, setError] = useState('');
  //preferenceTags
 const { summer, winter, casual, traditional, formal, sportsWear } =
 preferenceTags;

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
    <div>
      <div>
      <h2 className="mb-1">Tags</h2>
                <label htmlFor="tags" className="sr-only">
                  Tags
                </label>
                <h1 className="text-red-600 mb-1">{error}</h1>
                <Multiselect
                  isObject={false}
                  options={options}
                  onRemove={(e) => {
                    if (e.length == 1) {
                      setError('Please choose at least two or more tags!!!');
                      setTags(e);
                    } else {
                      setError('');
                      setTags(e);
                    }
                  }}
                  onSelect={(e) => {
                    if (e.length == 1) {
                      setError('Please choose at least two or more tags!!!');
                      setTags(e);
                    } else {
                      setError('');
                      setTags(e);
                    }
                  }}
                  selectedValues={tags}
                  avoidHighlightFirstOption
                  className="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 "
                  hidePlaceholder
                />
      </div>
    </div>
  )
}

export default TagOptions
