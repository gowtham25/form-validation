import * as Styled from './styles';

export const Input = ({ isMandatory, errorMessage, title, ...props }) => {
    return (
        <Styled.FormRow>
            <Styled.Title>{title}{isMandatory ? `*` : ``}:</Styled.Title>
            <Styled.FieldCol>
                <Styled.Input {...props} />
                {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
            </Styled.FieldCol>
        </Styled.FormRow>
    )
}