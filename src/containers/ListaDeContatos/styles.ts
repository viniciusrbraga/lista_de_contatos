import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  margin-top: 16px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.cinzaClaro};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
