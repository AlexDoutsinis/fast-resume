import React from "react"

import { useInputsContext } from "../../contexts/Inputs-context"
import AddInputBtn from "./addInputBtn"

const Contact = () => {
  const { contactList, setContactList } = useInputsContext()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) {
    const list = [...contactList]
    list[i].item = e.target.value

    setContactList(list)
  }

  return (
    <>
      {contactList.map((contact, index) => (
        <input
          key={index}
          type="text"
          value={contact.item}
          onChange={e => handleInputChange(e, index)}
          placeholder={"Mobile, Email, e.g."}
        />
      ))}
      <AddInputBtn />
    </>
  )
}

export default Contact
