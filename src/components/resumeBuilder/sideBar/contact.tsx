import React from "react"

import { useFormContext, ContactList } from "../../contexts/form-context"
import AddInputBtn from "./addInputBtn"
import { FormWrapperStyled } from "../../../styled/resumeBuilderStyles"
import { useHandleForm } from "../../../hooks/use-handleForm"
import RemoveInputBtn from "./removeInputBtn"

const Contact = () => {
  const { contactList, setContactList } = useFormContext()
  const handlers = useHandleForm<ContactList>(contactList, setContactList)

  const {
    ref,
    handleInputChange,
    handleAddContact,
    handleRemoveInput,
  } = handlers

  return (
    <>
      {contactList.map((contact, index) => {
        const isLastItem = index === contactList.length - 1

        return (
          <FormWrapperStyled key={index} mb={isLastItem} mb05>
            <div>
              <input
                type="text"
                name="contactItem"
                value={contact.contactItem}
                onChange={e => handleInputChange(e, index)}
                placeholder={"Mobile, Email, e.g."}
                ref={ref}
              />
            </div>
            <RemoveInputBtn
              show={isLastItem && index > 0}
              handleClick={() => handleRemoveInput(index)}
            />
          </FormWrapperStyled>
        )
      })}

      <AddInputBtn handleAddInput={handleAddContact} />
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
