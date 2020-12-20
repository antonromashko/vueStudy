export const withSubmitButton = Btn => {
  return {
    functional: true,
    name: 'WithSubmitButton',
    props: {
      fieldOne: {
        required: true
      },
      fieldTwo: {
        required: true
      }
    },
    render(h, context) {
      return h(
        Btn,
        {
          ...context.data,
          nativeOn: {
            click: () => {
              console.log('[fieldOne]', context.props.fieldOne);
              console.log('[fieldTwo]', context.props.fieldTwo);
              localStorage.setItem('fieldOne', context.props.fieldOne);
              localStorage.setItem('fieldTwo', context.props.fieldTwo);
            }
          }
        },
        context.children
      )
    }
  }
}