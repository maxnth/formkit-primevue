import { computed } from 'vue'

export function useFormKitInput(context: any) {
  const isInvalid = computed(() => {
    return context?.state.validationVisible && !context?.state.valid
  })

  const styleClass = computed(() => {
    return (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class
  })

  function handleBlur(event: Event) {
    context?.handlers.blur(event)
  }

  function handleChange(_: any) {
    context?.node.input(context?._value)
  }

  function handleInput(_: any) {
    context?.node.input(context?._value)
  }

  function handleSelect(e: any) {
    context?.node.input(e)
  }

  return { isInvalid, styleClass, handleBlur, handleChange, handleInput, handleSelect }
}
