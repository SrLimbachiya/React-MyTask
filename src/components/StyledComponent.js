import styled from 'styled-components'

export const AppMain = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  font-family: Roboto;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const AppLeft = styled.div`
  width: 40%;
  height: 100%;
  background-color: #1a171d;
  color: #ffffff;
  text-align: center;
  padding: 80px;
  @media (max-width: 1000px) {
    padding: 30px;
    width: 100%;
  }
`

export const AppRight = styled.div`
  width: 60%;
  height: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 30px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 20px;
  }
`

export const AppHeading = styled.h1`
  color: #f3aa4e;
  margin-bottom: 50px;
`

export const TaskForm = styled.form``

export const InputText = styled.input`
  height: 45px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px;
`

export const InputLabel = styled.label`
  float: left;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`

export const SelectInput = styled.select`
  height: 45px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`
export const SubmitBtn = styled.button`
  height: 50px;
  width: 140px;
  border-radius: 8px;
  border: none;
  background-color: #f3aa4e;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`
export const ErrorMsg = styled.p`
  color: red;
  font-weight: 600;
  margin-top: -40px;
  margin-bottom: 18.5px;
`

export const TagListUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const NoTasksDiv = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TaskViewUl = styled.ul`
  list-style: none;
  padding: 0;
`

export const TaskLi = styled.li`
  background-color: #131213;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
  margin-bottom: 15px;
`

export const TaskCategory = styled.p`
  background-color: #f3aa4e;
  color: #131213;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 700;
  height: 40px;
  padding: 10px 30px;
`
export const TagBtn = styled.button`
  border: 1px solid #f3aa4e;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  height: 35px;
  padding: 5px 30px;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #ffffff;
  background-color: ${props => (props.active ? '#f3aa4e' : '#000000')};
`
