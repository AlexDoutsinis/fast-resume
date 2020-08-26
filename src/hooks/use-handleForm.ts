import { nanoid } from "nanoid"

import { useFocus } from "./use-focus"
import { deepCopy } from "../utils/deepCopy"

export const useHandleForm = <T extends any[]>(
  list: T,
  setList: (value: T) => void
) => {
  const { ref, toggleFocus } = useFocus()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) {
    const newList = deepCopy(list)
    newList[index][e.target.name] = e.target.value

    setList(newList)
  }

  function handleAddContact(e: React.MouseEvent<HTMLButtonElement>) {
    const newList = deepCopy(list)
    newList.push({ id: nanoid(), contactItem: "" })
    toggleFocus()

    setList(newList)
  }

  function handleAddExperience(e: React.MouseEvent<HTMLButtonElement>) {
    const newList = deepCopy(list)
    newList.push({ id: nanoid(), role: "", company: "", description: "" })
    toggleFocus()

    setList(newList)
  }

  function handleAddEducation(e: React.MouseEvent<HTMLButtonElement>) {
    const newList = deepCopy(list)
    newList.push({ id: nanoid(), university: "", specialize: "", website: "" })
    toggleFocus()

    setList(newList)
  }

  function handleRemoveInput(index: number) {
    const newList = deepCopy(list)
    newList.splice(index, 1)

    setList(newList)
  }

  return {
    ref,
    handleInputChange,
    handleAddContact,
    handleAddExperience,
    handleAddEducation,
    handleRemoveInput,
  }
}
