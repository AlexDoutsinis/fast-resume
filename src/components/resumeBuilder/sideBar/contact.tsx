import React from 'react'

import { useFormContext, ContactList } from '../../../contexts/form-context'
import AddInputBtn from './addInputBtn'
import { FormWrapperStyled } from '../../../styled/resumeBuilderStyles'
import { useHandleForm } from '../../../hooks/use-handleForm'
import RemoveInputBtn from './removeInputBtn'

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
        const isLastItem: boolean = index === contactList.length - 1

        return (
          <FormWrapperStyled key={contact.id} mb={isLastItem} mb05>
            <div>
              <input
                type="text"
                name="contactItem"
                value={contact.contactItem}
                onChange={e => handleInputChange(e, index)}
                placeholder={'Mobile, Email, e.g.'}
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
