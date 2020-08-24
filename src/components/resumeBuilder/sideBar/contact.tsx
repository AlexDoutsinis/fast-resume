import React from "react"

import { useInputsContext, ContactList } from "../../contexts/Inputs-context"
import AddInputBtn from "./addInputBtn"
import { InputsWrapperStyled } from "../../../styled/resumeBuilderStyles"
import { useHandleForm } from "../../../hooks/use-handleForm"

const Contact = () => {
  const { contactList, setContactList } = useInputsContext()
  const handlers = useHandleForm<ContactList>(contactList, setContactList)

  const { ref, handleInputChange, handleAddBtn, handleRemoveBtn } = handlers

  return (
    <>
      {contactList.map((contact, index) => (
        <InputsWrapperStyled key={index}>
          <input
            type="text"
            name="item"
            value={contact.item}
            onChange={e => handleInputChange(e, index)}
            placeholder={"Mobile, Email, e.g."}
            ref={ref}
          />
          {index === contactList.length - 1 && index > 0 && (
            <button onClick={() => handleRemoveBtn(index)}>Rm</button>
          )}
        </InputsWrapperStyled>
      ))}

      <AddInputBtn handleAddBtn={handleAddBtn} />
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
