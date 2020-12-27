import * as React from "react";
import styled from "styled-components";

interface WrapperProps {
  width: string;
  height: string;
}

const StyledWrapper = styled.div`
  display: inline-block;
  padding-top: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  position: relative;
  width: ${(props: WrapperProps) => props.width};
  height: ${(props: WrapperProps) => props.height};
  margin-bottom: 0.8rem;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  font-size: 0.8rem;
`;

const StyledSelect = styled.select`
  display: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.3rem;
  border: 0.5px solid gray;
  &:focus + .my-label {
    color: blue;
  }
`;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name?: string;
  label?: string;
  width?: string;
  height?: string;
}

const Select: React.FunctionComponent<Props> = ({
  width = "10rem",
  height = "1.8rem",
  name = "Select",
  label,
  ...rest
}) => {
  return (
    <StyledWrapper width={width} height={height}>
      {label && (
        <StyledLabel className="my-label" htmlFor={name}>
          {label}
        </StyledLabel>
      )}
      <StyledSelect name={name} {...rest} />
    </StyledWrapper>
  );
};

export default Select;
