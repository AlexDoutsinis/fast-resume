import React from "react"

import { useInputsContext } from "../../contexts/Inputs-context"
import AddInputBtn from "./addInputBtn"
import { deepCopy } from "../../../utils/deepCopy"
import { InputsWrapperStyled } from "../../../styled/resumeBuilderStyles"

const Contact = () => {
  const { contactList, setContactList } = useInputsContext()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) {
    const list = deepCopy(contactList)
    list[i].item = e.target.value

    setContactList(list)
  }

  function handleAddInput() {
    const list = deepCopy(contactList)
    list.push({ item: "" })

    setContactList(list)
  }

  function handleRemoveInput(index: number) {
    const list = deepCopy(contactList)
    list.splice(index, 1)

    setContactList(list)
  }

  return (
    <>
      {contactList.map((contact, index) => (
        <InputsWrapperStyled>
          <input
            key={index}
            type="text"
            value={contact.item}
            onChange={e => handleInputChange(e, index)}
            placeholder={"Mobile, Email, e.g."}
          />
          {index === contactList.length - 1 && index > 0 && (
            <button onClick={() => handleRemoveInput(index)}>Rm</button>
          )}
        </InputsWrapperStyled>
      ))}

      <AddInputBtn handleAddInput={handleAddInput} />
    </>
  )
}

export default Contact

//todo:

// na ftiaksw to add button
// na valw remove button
// na ftiaksw kai ta ypolipa tabs
// na ginete render to input state sto resume
// na ftiaksw to ui tou resumeBuilder responsive gia oles tis othones
// na ftiaksw to ui tou landing page responsive gia oles tis othones
// na valw k alla templates
// na ftiaksw to export pdf button
// na kanw optimize to performance
// na ftiaksw to SEO
