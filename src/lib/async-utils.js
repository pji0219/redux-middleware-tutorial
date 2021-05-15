// 반복되는 코드를 함수로 한줄 자리 코드로 간결하게 불러와서 사용하기 위해 만듦
export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error: null
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null
  }),
  error: (error) => ({
    error,
    loading: false,
    data: null
  })
}