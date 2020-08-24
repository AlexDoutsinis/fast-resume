import { useFocus } from "./use-focus"
import { deepCopy } from "../utils/deepCopy"

export const useHandleForm = <T extends any[]>(
  list: T,
  setList: (value: T) => void
) => {
  const { ref, toggleFocus } = useFocus()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const newList = deepCopy(list)
    newList[index][e.target.name] = e.target.value

    setList(newList)
  }

  function handleAddBtn(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement
    const newList = deepCopy(list)
    newList.push({ [target.getAttribute("data-name")]: "" })
    toggleFocus()

    setList(newList)
  }

  function handleRemoveBtn(index: number) {
    const newList = deepCopy(list)
    newList.splice(index, 1)

    setList(newList)
  }

  return { ref, handleInputChange, handleAddBtn, handleRemoveBtn }
}
